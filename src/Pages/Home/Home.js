import HeroS from "./HeroS";
import BuildingS from "./Wbuiding";
import OTA from "./OTA";
import Work from "./Works";
import AH from "./AboutH";

const Home = () => 
<div className="overflow-y-hidden mt-[25px] md:mt-[50px] lg:mt-[50px] xl:mt-[75px] w-full flex flex-col gap-4 lg:gap-24">
    <HeroS />
    <AH/>
    <BuildingS/>
    <OTA/>
    <Work/>
    

</div>;
export default Home;
