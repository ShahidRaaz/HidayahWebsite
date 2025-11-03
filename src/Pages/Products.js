import React from "react";
import PHeroS from "./Products/PHeroS";
import About from "./Products/PAbout";
import Features from "./Products/PFeatures";
import { Showcase } from "./Products/Showcase";
import { CTA } from "./Products/CTAB";



const Products = () => <div className=" text-xl">
<PHeroS />
<About />
<Features />
<Showcase />
<CTA />
</div>;
export default Products;
