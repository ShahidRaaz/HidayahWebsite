import HeroS from "./HeroS";
import ScrollingWords from './ScrollingWords';
import BuildingS from "./Wbuiding";
import OTA from "./OTA";
import Work from "./Works";
import PS from "./PS";

const Home = () => 
<div className="overflow-y-hidden mt-[25px] md:mt-[50px] lg:mt-[100px] w-full flex flex-col gap-4 lg:gap-24">
    <HeroS />
    <ScrollingWords />
    <PS/>
    <BuildingS/>
    <OTA/>
    <Work/>
    

</div>;
export default Home;
