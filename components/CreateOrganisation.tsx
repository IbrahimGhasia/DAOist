import { useState } from "react";

import { Polybase } from "@polybase/client";
import { useAccount } from "wagmi";

const CreateOrganisation = () => {
	const { address } = useAccount();

	const [count, setCount] = useState(1);
	const [orgName, setOrgName] = useState("");
	const [tokenName, setTokenName] = useState("");
	const [tokenSymbol, setTokenSymbol] = useState("");

	const db = new Polybase({ defaultNamespace: "DAOist" });
	const collectionReference = db.collection("Organization");

	async function createRecord() {
		if (!address) return null;
		const recordData = await collectionReference.create([
			address,
			orgName,
			tokenName,
			tokenSymbol,
		]);
		console.log(recordData);
	}

	return (
		<>
			<div className="justify-center pt-40 px-40">
				<div className="">
					{count === 1 ? (
						<div>
							<p className="text-gray-400 font-semibold text-lg pr-72">
								What would you like to name your Organisation?
								Remember you cannot change it later.
							</p>
							<label
								htmlFor="large-input"
								className="block mb-2 text-2xl font-medium text-white"
							>
								Name of Organisation
							</label>
							<input
								type="text"
								id="large-input"
								className="block w-full p-4 text-white border-2 border-pink-500 rounded-lg bg-black sm:text-md focus:ring-pink-800 focus:border-pink-800"
								onChange={(e) => setOrgName(e.target.value)}
							/>
						</div>
					) : null}

					{count === 2 ? (
						<div>
							<p className="text-red-600 font-bold text-2xl pr-72 mb-5">
								Note: You can either create your own Token or
								use ApeCoin as your token. For using ApeCoin
								Token fill ApeCoin and APE as token name and
								symbol.
							</p>
							<div>
								<p className="text-gray-400 font-semibold text-lg pr-72">
									Create a new Token for your Organization (or
									use ApeCoin)
								</p>
								<label
									htmlFor="large-input"
									className="block mb-2 text-2xl font-medium text-white"
								>
									Name of Token (eg. My Awesome Token,
									ApeCoin)
								</label>
								<input
									type="text"
									id="large-input"
									className="block w-full p-4 text-white border-2 border-pink-500 rounded-lg bg-black sm:text-md focus:ring-pink-800 focus:border-pink-800"
									onChange={(e) =>
										setTokenName(e.target.value)
									}
								/>
							</div>
							<div className="mt-5">
								<p className="text-gray-400 font-semibold text-lg pr-72">
									Give the Symbol for your Token
								</p>
								<label
									htmlFor="large-input"
									className="block mb-2 text-2xl font-medium text-white"
								>
									Token Symbol (eg. MAT, APE)
								</label>
								<input
									type="text"
									id="large-input"
									className="block w-full p-4 text-white border-2 border-pink-500 rounded-lg bg-black sm:text-md focus:ring-pink-800 focus:border-pink-800"
									onChange={(e) =>
										setTokenSymbol(e.target.value)
									}
								/>
							</div>
						</div>
					) : null}

					{count === 3 ? (
						<div>
							<h1 className="text-8xl mb-5 text-white">
								Review your answers.
							</h1>
							<ul className="text-4xl text-pink-500">
								<li>
									Name of Organisation:{" "}
									<span className="text-purple-500 font-semibold ">
										{orgName}
									</span>
								</li>
								<li>
									Name of Token:{" "}
									<span className="text-purple-500 font-semibold">
										{tokenName}
									</span>
								</li>
								<li>
									Symbol of Token:{" "}
									<span className="text-purple-500 font-semibold">
										{tokenSymbol}
									</span>
								</li>
							</ul>
							<div className="flex justify-between">
								<button onClick={createRecord}>
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
										<span className="relative">
											Create Organisation
										</span>
									</div>
								</button>

								<button onClick={() => setCount(count - 1)}>
									<div className="relative mt-10 inline-flex items-center px-12 py-3 overflow-hidden text-2xl font-medium text-purple-500 border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50 cursor-pointer">
										<span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
										<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="bi bi-arrow-return-left w-5 h-5"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
												/>
											</svg>
										</span>
										<span className="relative">Back</span>
									</div>
								</button>
							</div>
						</div>
					) : null}

					{count < 3 ? (
						<div className="flex justify-between">
							<button onClick={() => setCount(count + 1)}>
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
									<span className="relative">Continue</span>
								</div>
							</button>

							{count > 1 ? (
								<button onClick={() => setCount(count - 1)}>
									<div className="relative mt-10 inline-flex items-center px-12 py-3 overflow-hidden text-2xl font-medium text-purple-500 border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50 cursor-pointer">
										<span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
										<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="bi bi-arrow-return-left w-5 h-5"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
												/>
											</svg>
										</span>
										<span className="relative">Back</span>
									</div>
								</button>
							) : null}
						</div>
					) : null}
				</div>
			</div>
		</>
	);
};

export default CreateOrganisation;
