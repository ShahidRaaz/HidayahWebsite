import HeroS from "./HeroS";
import BuildingS from "./Wbuiding";
import OTA from "./OTA";
import Work from "./Works";
import AH from "./AboutH";
import WACard from "./WACard";
import FBA from "../../components/Fba"

const Home = () => 
<div className="overflow-y-hidden mt-[25px] md:mt-[50px] lg:mt-[50px] xl:mt-[75px] w-full flex flex-col gap-4 lg:gap-24 justify-center items-center">
    <HeroS />
    <AH/>
    <BuildingS/>
    <OTA/>
    <Work/>
    <WACard/>
    <FBA/>
    

</div>;
export default Home;
