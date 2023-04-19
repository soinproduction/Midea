import classNames from "classnames";
import styles from "./buttons.module.scss";
import {ReactComponent as HeartIcon} from "../../assets/images/icons/heart.svg";
import {ReactComponent as HeartActiveIcon} from "../../assets/images/icons/heartActive.svg";
import {useState} from "react";
import {useStore} from "../../store/store";


const LikeBtn = (props) => {

    const {dispatch} = useStore();


    const [flag, setFlag] = useState(false)
    const likeClickHandler = () => {
        setFlag(!flag);
        dispatch({type: 'updateFavorite', payload: props.product});
    }

    return (
        <button onClick={likeClickHandler}
                className={classNames(props?.style, styles.like, flag === true ? styles.active : null )}>
                {flag === true ? <HeartActiveIcon/> : <HeartIcon/> }
        </button>
    )
}

export default LikeBtn;