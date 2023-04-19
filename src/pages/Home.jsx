import TopBaner from "../components/banners/topBanner/TopBanner";
import BottomBanner from "../components/banners/bottomBanner/BottomBanner";
import Products from "../components/products/Products";


const Home = () => {
    return (
        <>
            <main>
                <TopBaner/>
                <Products/>
                <BottomBanner/>
            </main>
        </>
    );
}

export default Home;