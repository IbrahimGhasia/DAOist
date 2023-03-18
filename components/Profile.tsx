import { useState } from "react";

import { Polybase } from "@polybase/client";
import { useAccount } from "wagmi";
import { createCollection } from "@/lib/polybase";

const Profile = () => {
	const { address } = useAccount();
	const [username, setUsername] = useState("");

	const db = new Polybase({ defaultNamespace: "DAOist" });
	const collectionReference = db.collection("Members");

	async function createRecord() {
		if (!address) return null;
		const recordData = await collectionReference.create([
			address,
			username,
		]);
		console.log("hello");
		console.log(recordData);
	}

	return (
		<>
			<div>
				<h1 className="text-white text-6xl mt-10 ml-20">
					Create Profile
				</h1>

				<div className="justify-center pt-40 px-40">
					<p className="text-gray-400 font-semibold text-lg pr-72">
						Enter a username for your profile. Note: Username must
						be unique.
					</p>
					<label
						htmlFor="large-input"
						className="block mb-2 text-2xl font-medium text-white"
					>
						Enter your Username
					</label>
					<input
						type="text"
						id="large-input"
						className="block w-full p-4 text-white border-2 border-pink-500 rounded-lg bg-black sm:text-md focus:ring-pink-800 focus:border-pink-800"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>

				{username.length > 0 ? (
					<>
						<button className="ml-40" onClick={createRecord}>
							<div className="relative mt-10 inline-flex items-center px-12 py-3 overflow-hidden text-2xl font-medium text-pink-500 border-2 border-pink-500 rounded-full hover:text-white group hover:bg-gray-50 cursor-pointer">
								<span className="absolute left-0 block w-full h-0 transition-all bg-pink-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
								<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</span>
								<span className="relative">Submit</span>
							</div>
						</button>
					</>
				) : null}
			</div>
		</>
	);
};
export default Profile;
