
import BasketStub from "../components/basket/basketStub/basketStub";
import BottomBanner from "../components/banners/bottomBanner/BottomBanner";
import {useStore} from "../store/store";
import GlobalLayout from "../components/globalLayout/GlobalLayout";
import {getProductQty} from "../components/basket/basketStub/getProductQty";

const Basket = () => {
    const {state} = useStore();

    return(
        <main>
            <GlobalLayout title="Корзина">
                {getProductQty(state.cart.products) < 1 ? <span>Корзина пуста</span> : <BasketStub/>}
            </GlobalLayout>
            <BottomBanner/>
        </main>

    );
}

export default  Basket;
