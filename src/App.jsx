import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Performance from "./components/Performance";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<ProductViewer />
			<Showcase />
			<Performance />
			<Features />
			<Highlights />
			<Footer />
		</main>
	);
};

export default App;
