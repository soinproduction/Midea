import {useState} from "react";
import Container from "../container/Container";
import MoreBtn from "../buttons/MoreBtn";
import Card from "../card/Card";
import styles from "./products.module.scss";
import {useProducts} from "../../hooks/useProducts";
import {sliceArray} from "../../helpers/sliceArray";
import {useStore} from "../../store/store";

const countNumber = 5;

function Products() {
    const [count, setCount] = useState(10);
    const {isProductsLoading, productsError} = useProducts();

    const {state} = useStore();
    const {products} = state;

    const maxProductQty = products?.length;

    const showMoreClickHandler = () => setCount((prevCount) => prevCount + countNumber);
    const slicedProducts = sliceArray(count, products);

    return (
        <section className={styles.products_section}>
            <Container>
                {isProductsLoading ? <div className="overlay">Loading...</div> :
                <div className={styles.products_inner}>
                    <ul className={styles.products_list}>
                        {slicedProducts?.map((product) => <Card key={product.id} product={product}/>)}
                    </ul>
                    {count < maxProductQty ? <MoreBtn onClick={showMoreClickHandler} count={countNumber}/> : null}
                </div>
                }
            </Container>
        </section>
    );
}

export default Products