import CreateOrganisation from "@/components/CreateOrganisation";
import Organisation_Navbar from "@/components/Organisation_Navbar";

export default function Home() {
	return (
		<>
			<Organisation_Navbar />
			<CreateOrganisation />
		</>
	);
}
