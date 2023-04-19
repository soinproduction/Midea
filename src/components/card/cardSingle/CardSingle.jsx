import styles from "./cardSingle.module.scss";
import Container from "../../container/Container";
import LikeBtn from "../../buttons/likeButtons";
import CopyLink from "../../buttons/CopyLink";
import ProductInput from "../../products/productInput/ProductInput";
import {useProduct} from "../../../hooks/useProduct";

const {card_single,inner, image ,coll,legend, buttons ,nav, title, row,price} = styles;

const cardSingleContent = {
    nameGty: 'Количество:',
    namePrice: 'Цена:',
    nameDescr: 'Описание',
    nameButton: 'Добавить корзину',
}

const {nameGty,namePrice,nameDescr,nameButton} = cardSingleContent
const CardSingle = () => {
    const {isProductLoading, product, productError} = useProduct();

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
                                <LikeBtn/>
                                <CopyLink/>
                            </div>

                            <h2 className={title}>
                                {product?.title}
                            </h2>
                        </div>

                        <div className={row}>
                            <span className={legend}>{nameGty}</span>
                            <ProductInput/>
                        </div>

                        <div className={row}>
                            <span className={legend}>{namePrice}</span>
                            <span className={price}> {product?.price} $</span>
                        </div>

                        <div className={buttons}>

                        </div>


                    </div>

                </div>
            </Container>
        </section>
    )

}

export default CardSingle