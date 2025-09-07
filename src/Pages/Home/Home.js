import HeroS from "./HeroS";
import ScrollingWords from './ScrollingWords';
import AboutS from "./AboutS";
import BuildingS from "./Wbuiding";
import OTA from "./OTA";
import Work from "./Works";

const Home = () => 
<div className="overflow-y-hidden mt-4 lg:mt-2 md:mt-6 w-full flex flex-col gap-4 lg:gap-24">
    <HeroS />
    <ScrollingWords />
    <AboutS/>
    <BuildingS/>
    <OTA/>
    <Work/>

</div>;
export default Home;
