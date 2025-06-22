import HeroS from "./HeroS";
import ScrollingWords from '../../components/ScrollingWords';
import AboutS from "./AboutS";

const Home = () => 
<div className="mt-16 lg:mt-6 w-full flex flex-col gap-8 lg:gap-4">
    <HeroS />
    <ScrollingWords />
    <AboutS/>

</div>;
export default Home;
