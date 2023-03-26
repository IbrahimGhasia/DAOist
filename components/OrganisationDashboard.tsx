import { Polybase } from "@polybase/client";
import {
	IconBuilding,
	IconCoin,
	IconCurrencyEthereum,
	IconDatabase,
	IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAccount } from "wagmi";

const db = new Polybase({ defaultNamespace: "DAOist" });
const organisationCollection = db.collection("Organization");

const memberCollection = db.collection("Members");

const OrganisationDashboard = () => {
	const { address, isConnected } = useAccount();

	const [orgDetails, setOrgDetails] = useState({
		name: "",
		tokenName: "",
		tokenSymbol: "",
	});
	const [username, setUsername] = useState("");

	async function getOrganisationRecord() {
		if (!address) return null;
		try {
			const { data } = await organisationCollection.record(address).get();
			console.log(data);
			setOrgDetails(data);
		} catch (e) {
			console.log(e);
		}
	}

	async function getUsername() {
		if (!address) return null;
		try {
			const { data } = await memberCollection.record(address).get();
			console.log(data);
			setUsername(data.username);
		} catch (e) {
			console.log(e);
		}
	}
	useEffect(() => {
		getOrganisationRecord();
		getUsername();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [address]);

	console.log(orgDetails);

	return (
		<div>
			<h1 className="text-white text-6xl mt-10 ml-20">
				Organisation Dashboard
			</h1>
			<div className="p-20">
				<div className="p-10 border-2 rounded-2xl shadow-xl  bg-black border-white-400 duration-500  hover:shadow-pink-500">
					<h5 className="mb-2 text-5xl underline font-bold tracking-tight text-pink-500">
						<span className="flex justify-center gap-x-5">
							<IconBuilding
								size={52}
								style={{ marginBottom: "20px" }}
							/>
							{orgDetails.name}
						</span>
					</h5>

					<ul className="mb-3 text-2xl font-normal text-white">
						<li>
							<span className="flex gap-x-2">
								<IconUser
									size={32}
									style={{ marginBottom: "20px" }}
								/>
								Organisation Owner - {username}
							</span>
						</li>
						<li>
							<span className="flex gap-x-2">
								<IconCurrencyEthereum
									size={32}
									style={{ marginBottom: "20px" }}
								/>
								Token Name - {orgDetails.tokenName}
							</span>
						</li>
						<li>
							<span className="flex gap-x-2">
								<IconCoin
									size={32}
									style={{ marginBottom: "20px" }}
								/>
								Token Symbol - {orgDetails.tokenSymbol}
							</span>
						</li>
					</ul>

					<div className=" mt-8">
						<Link href="/home" legacyBehavior>
							<a className="relative px-20 py-3 font-bold text-white rounded-lg group">
								<span className="absolute rounded-lg inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
								<span className="absolute rounded-lg inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
								<span className="relative">Create Project</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrganisationDashboard;
