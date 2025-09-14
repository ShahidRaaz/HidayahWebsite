import HeroS from "./Home/HeroS";
import BuildingS from "./Home/Wbuiding";
import OTA from "./Home/OTA";
import Work from "./Home/Works";
import AH from "./Home/AboutH";
import WACard from "./Home/WACard";
import Footer from "./Home/Footer"; 
// import FBA from "../../components/Fba"

const Home = () => 
<div className="overflow-y-hidden mt-[0px] md:mt-[50px] lg:mt-[50px] xl:mt-[75px] w-full flex flex-col gap-4 lg:gap-24 justify-center items-center">
    <HeroS />
    <AH/>
    <BuildingS/>
    <OTA/>
    <Work/>
    <WACard/>
    <Footer/>
    {/* <FBA/> */}
    

</div>;
export default Home;
