import HeroS from "./HeroS";
import ScrollingWords from '../../components/ScrollingWords';
import AboutS from "./AboutS";
import ProductS from "./ProductS";

const Home = () => 
<div className="mt-4 lg:mt-2 md:mt-6 w-full flex flex-col gap-8 lg:gap-4">
    <HeroS />
    <ScrollingWords />
    <AboutS/>
    <ProductS/>

</div>;
export default Home;
