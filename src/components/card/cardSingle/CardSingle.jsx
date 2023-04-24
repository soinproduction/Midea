import styles from "./cardSingle.module.scss";
import Container from "../../container/Container";
import LikeBtn from "../../buttons/LikeButtons";
import CopyLink from "../../buttons/CopyLink";
import ProductInput from "../../products/productInput/ProductInput";
import {useProduct} from "../../../hooks/useProduct";
import {useAddToCartClickHandler} from "../../../hooks/useAddToCart";
import DefaultButton from "../../buttons/DefaultButton";
import {useStore} from "../../../store/store";
import {useEffect, useState} from "react";
import {useAddToFavoriteClickHandler} from "../../../hooks/useAddToFavorite";
import {useParams} from "react-router-dom";

const {card_single, inner, image ,coll, legend, buttons, nav, title, row, price, article, article_title, article_text} = styles;

const cardSingleContent = {
    nameGty: 'Количество:',
    namePrice: 'Цена:',
    nameDescr: 'Описание',
    nameButtonAdd: 'Добавить корзину',
    nameButtonNow: 'Купить сейчас',
}

const {nameGty,namePrice,nameDescr,nameButtonAdd,nameButtonNow} = cardSingleContent
const CardSingle = () => {
    const {isProductLoading, product, productError} = useProduct();
    const {addProductToCart} = useAddToCartClickHandler();
    const {addToFavorite} = useAddToFavoriteClickHandler();

    const [qty, setQty] = useState(1);
    const [activeClass, setActiveClass] = useState(false)
    const {state} = useStore();
    const {products} = state.favorite;

    useEffect(() => {
        products.map((item) => item.id === product.id ?
            setActiveClass(true) : setActiveClass(false));
    },[products,product]);

    const minusClickHandler = () => setQty((prevQty) => prevQty - 1);
    const plusClickHandler = () => setQty((prevQty) => prevQty + 1);
    const isMinusButtonDisabled = qty === 1;

    const addProductToCartClickHandler = () => addProductToCart(product,qty);
    const addToFavoriteClickHandler = () => addToFavorite(product);



    return(
        <section className={card_single}>
            <Container>
                <div className={inner}>
                    <div className={image}>
                        <img src={product?.image} alt="image"/>
                    </div>
                    <div className={coll}>
                        <div className={row}>
                            <div className={nav}>
                                <LikeBtn onClick={addToFavoriteClickHandler} activeClass={activeClass}/>
                                <CopyLink/>
                            </div>
                            <h2 className={title}>
                                {product?.title}
                            </h2>
                        </div>

                        <div className={row}>
                            <span className={legend}>{nameGty}</span>
                            <ProductInput isMinusButtonDisabled={isMinusButtonDisabled} plusClickHandler={plusClickHandler} minusClickHandler={minusClickHandler} qty={qty}/>
                        </div>

                        <div className={row}>
                            <span className={legend}>{namePrice}</span>
                            <span className={price}> {product?.price} $</span>
                        </div>

                        <div className={buttons}>
                            <DefaultButton onClick={addProductToCartClickHandler} text={nameButtonAdd}/>
                            <DefaultButton text={nameButtonNow} modeClass='blue'/>
                        </div>
                    </div>
                    <div className={article}>
                        <h3 className={article_title}>{nameDescr}</h3>
                        <p className={article_text}>
                            {product?.description}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )

}

export default CardSingle