import Gallery from "../components/Gallery"
import HorseDetails from "../components/HorseDetails"
import LandingPage from "../components/LandingPage"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials";
import '../assets/styles/Home-style.css';
import Pricing from "../components/Pricing";
import FAQs from "../components/FAQs";
import BookingProcess from "../components/BookingProcess";
import Footer from "../components/Footer";


function Home() {

    return (
        <>
            <Navbar />
            <LandingPage />
            <HorseDetails />
            <Gallery />
            <Pricing />
            <BookingProcess />
            <Testimonials />
            <FAQs />
            <Footer />
        </>
    )
}

export default Home
