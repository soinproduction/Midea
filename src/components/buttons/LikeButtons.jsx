import classNames from "classnames";
import styles from "./buttons.module.scss";
import {ReactComponent as HeartIcon} from "../../assets/images/icons/heart.svg";
import {ReactComponent as HeartActiveIcon} from "../../assets/images/icons/heartActive.svg";
const LikeBtn = ({onClick,style, activeClass = false}) => {
    return (
        <button onClick={onClick} className={classNames(style, styles.like, activeClass ? styles.active : null )}>
                {activeClass ? <HeartActiveIcon/> : <HeartIcon/> }
        </button>
    )
}
export default LikeBtn;