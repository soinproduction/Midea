import styles from "./card.module.scss";
import {NavLink} from "react-router-dom";
import {ReactComponent as BagIcon} from "../../assets/images/icons/bag-happy.svg";
import {path} from "../../helpers/path";
import LikeBtn from "../buttons/likeButtons";
import {useStore} from "../../store/store";

const Card = ({product}) => {
    const {title, id, image, price} = product;
    const {dispatch} = useStore();
    const addToCartClickHandler = () => {
        dispatch({type: 'updateCart', payload: product});
    }

    return(
        <li className={styles.card}>
            <LikeBtn product={product} style={styles.like}/>
            <NavLink to={`${path.products}/${id}`} className={styles.image}>
                <img src={image} alt="image"/>
            </NavLink>
            <div className={styles.body}>
                <span className={styles.title}>{title}</span>
                <div className={styles.wrapper}>
                    <span className={styles.price}>
                        {price} $
                    </span>
                    <button className={styles.add} onClick={addToCartClickHandler}>
                        <BagIcon/>
                    </button>
                </div>
            </div>
        </li>
    );
}
export default Card;
