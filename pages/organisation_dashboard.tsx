import OrganisationDashboard from "@/components/OrganisationDashboard";
import Organisation_Navbar from "@/components/Organisation_Navbar";

export default function Home() {
	return (
		<>
			<Organisation_Navbar />
			<OrganisationDashboard />
		</>
	);
}
