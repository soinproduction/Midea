import BottomBanner from "../components/banners/bottomBanner/BottomBanner";
import {useStore} from "../store/store";
import GlobalLayout from "../components/globalLayout/GlobalLayout";
import styles from "../components/products/products.module.scss";
import Card from "../components/card/Card";
import {getProductQty} from "../components/basket/basketStub/getProductQty";

const Favorite = () => {
    const {state} = useStore();

    const {products} = state.favorite

    return(
        <main>
            <GlobalLayout title="Избранное">
                {getProductQty(products) < 1 ? <span>Ничего не избранно</span> :
                <ul className={styles.products_list}>
                    {products?.map((product, index) => <Card key={index} product={product}/>)}
                </ul>}
            </GlobalLayout>
            <BottomBanner/>
        </main>
    );
}

export default Favorite;