import Link from "next/link";

const Hero = () => {
	return (
		<div className="flex h-screen items-center justify-center border-2 border-pink-500">
			<div className="px-56">
				<h1 className="text-6xl text-pink-500">
					<span className="text-purple-500 text-8xl font-bold">
						DAOist
					</span>{" "}
					Decentralized Autonomous Organisation
				</h1>
				<p className="text-white text-2xl mt-4 text-justify">
					DAOist is here to revolutionize the way you run your
					business! Using our decentralized autonomous organization
					platform, you can make sure that all decisions of your
					organization are taken with the consent of all its
					stakeholders. DAOist is here to revolutionize the way you
					invest in other organisations. With our decentralised,
					autonomous platform, you can easily invest in any
					organization of your choice with total transparency and
					fairness. Our decentralized voting system will ensure that
					everyone&apos;s voice is heard and all investors are able to
					understand how their money is being managed. Invest in a
					secure and transparent way with DAOist!
				</p>
				<div className="flex justify-center mt-8">
					<Link href="/home" legacyBehavior>
						<a className="relative px-20 py-3 font-bold text-white rounded-lg group">
							<span className="absolute rounded-lg inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
							<span className="absolute rounded-lg inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
							<span className="relative">Get Started</span>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Hero;
