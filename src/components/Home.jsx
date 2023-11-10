import FaqSection from "./page/Home/FaqSection";
import MainSection from "./page/Home/MainSection";
import OurService from "./page/Home/OurService";
import RentSection from "./page/Home/RentSection";
import Testi from "./page/Home/Testi";
import WhyUs from "./page/Home/WhyUs";

const Home = () => {
  return (
    <>
      <MainSection />
      <OurService />
      <WhyUs />
      <Testi />
      <RentSection />
      <FaqSection />
    </>
  );
};

export default Home;
