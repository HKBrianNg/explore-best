import { Container } from "@mui/material"
import Navbar from "../navbar/Navbar"
import Category from "../category/Category"
import SubCategory from "../subcategory/SubCategory"
import Banner from "../banner/Banner"
import Promotions from "../promotions/Promotions"
import Videos from "../videos/Videos"


function Home() {
    return (
        <>
            <Navbar />
            <Category />
            <SubCategory />
            <Banner />
            <Promotions />
            <Videos />
        </>
    )
}

export default Home