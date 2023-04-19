import Container from "../components/container/Container";
import BasketStub from "../components/basket/basketStub";
import BottomBanner from "../components/banners/bottomBanner/BottomBanner";
import {useStore} from "../store/store";

const Basket = () => {


    return(

        <main>
            <BasketStub/>
            <BottomBanner/>
        </main>

    );
}

export default  Basket;
