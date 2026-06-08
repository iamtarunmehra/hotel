import Footer from "./common/Footer";
import Header from "./common/Header";
import About from "./home/About";
import Banner from "./home/Banner";
import FAQ from "./home/Faq";
import Testimonials from "./home/Testimonials";
import TopRating from "./home/TopRating";
import WhyChooseUs from "./home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <TopRating />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
