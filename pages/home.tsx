import {
	IconBrandCashapp,
	IconBuildingSkyscraper,
	IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex h-screen bg-black items-center gap-x-10 justify-center">
				<Link href="/organisation_dashboard">
					<div className="max-w-lg p-10 border-2 rounded-2xl shadow-xl  bg-black border-white-400 duration-500  hover:translate-y-2 hover:shadow-pink-500 cursor-pointer">
						<h5 className="mb-2 text-4xl font-bold tracking-tight text-pink-500">
							<span>
								<IconBuildingSkyscraper
									size={42}
									style={{ marginBottom: "20px" }}
								/>
							</span>
							Create your Organisation
						</h5>

						<p className="mb-3 text-lg font-normal text-white">
							Connect with your doctors and manage your health
							with ease. Get started with d-Clinic today.
						</p>
					</div>
				</Link>

				<Link href="/patient_dashboard">
					<div className="max-w-lg p-10 border-2 rounded-2xl shadow-xl  bg-black border-white-400 duration-500  hover:translate-y-2 hover:shadow-purple-500 cursor-pointer">
						<h5 className="mb-2 text-4xl font-bold tracking-tight text-purple-500">
							<span>
								<IconBrandCashapp
									size={42}
									style={{ marginBottom: "20px" }}
								/>
							</span>
							Invest in Organisation
						</h5>

						<p className="mb-3 text-lg font-normal text-white">
							Connect with your doctors and manage your health
							with ease. Get started with d-Clinic today.
						</p>
					</div>
				</Link>
			</div>
		</>
	);
}
