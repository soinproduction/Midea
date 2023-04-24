import styles from "./card.module.scss";
import {NavLink} from "react-router-dom";
import {ReactComponent as BagIcon} from "../../assets/images/icons/bag-happy.svg";
import {path} from "../../helpers/path";
import LikeBtn from "../buttons/LikeButtons";
import {useAddToCartClickHandler} from "../../hooks/useAddToCart";
import {useStore} from "../../store/store";
import {useEffect, useState} from "react";
import {useAddToFavoriteClickHandler} from "../../hooks/useAddToFavorite";

const Card = ({product}) => {


    const {title, id, image, price} = product;
    const {state} = useStore();
    const {products} = state.favorite;
    const [activeClass, setActiveClass] = useState(false)
    const {addProductToCart} = useAddToCartClickHandler();
    const {addToFavorite} = useAddToFavoriteClickHandler();
    const addProductToCartClickHandler = () => addProductToCart(product);

    useEffect(() => {
        products.map((item) => item.id === product.id ? setActiveClass(true) : null);
    },[products,product]);

    const addToFavoriteClickHandler = () => addToFavorite(product);

    return(
        <li id={id} className={styles.card}>
            <LikeBtn onClick={addToFavoriteClickHandler} activeClass={activeClass} style={styles.like}/>
            <NavLink to={`${path.products}/${id}`} className={styles.image}>
                <img src={image} alt="image"/>
            </NavLink>
            <div className={styles.body}>
                <span className={styles.title}>{title}</span>
                <div className={styles.wrapper}>
                    <span className={styles.price}>
                        {price} $
                    </span>
                    <button className={styles.add} onClick={addProductToCartClickHandler}>
                        <BagIcon/>
                    </button>
                </div>
            </div>
        </li>
    );
}
export default Card;
