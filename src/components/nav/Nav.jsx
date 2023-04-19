import {NavLink} from "react-router-dom";
import {path} from "../../helpers/path";

import styles from "./nav.module.scss"

import {ReactComponent as BagIcon} from "../../assets/images/icons/bag.svg";
import {ReactComponent as HeartIcon} from "../../assets/images/icons/heart.svg";

import {useStore} from "../../store/store";


const Nav = () => {

    const {state} = useStore();

    const countCart = state.cart.products.length;
    const countFavorite = state.favorite.products.length;


    const navObj = [
        {
            link: path.basket,
            text: 'Корзина',
            icon: <BagIcon/>,
            count: countCart
        },
        {
            link: path.favorite,
            text: 'Избранное',
            icon: <HeartIcon/>,
            count: countFavorite
        },
    ]


    return (
        <nav className={styles.nav}>
            {navObj.map((nav) => (
                    <NavLink key={nav.link} to={nav.link} className={styles.link}>
                        {nav.count ?
                            <span className={styles.count}>
                                {nav.count}
                            </span> : null}
                        {nav.icon}
                        {nav.text}
                    </NavLink>
                )
            )}
        </nav>
    );
}

export default Nav;
