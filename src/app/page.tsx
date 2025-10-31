import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";
import PopularPackages from "@/components/PopularPackages";
import Deals from "@/components/Deals";
import InternationalTrip from "@/components/InternationalTrip";
import Testimonials from "@/components/Testimonials";
import TrustedPartners from "@/components/TrustedPartners";
import HolidayTheme from "@/components/HolidayTheme";

export default function Home() {
	return (
		<main>
			<Header />
			<Navbar />
			<HeroSection />
			<SearchBox />
			<PopularPackages />
			<Deals />
			<InternationalTrip />
			<HolidayTheme />
			<Testimonials />
			{/* <TrustedPartners /> */}
			<Footer />
		</main>
	);
}

