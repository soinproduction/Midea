import styles from './ProductInput.module.scss'
import {ReactComponent as MinusIcon} from "../../../assets/images/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../../../assets/images/icons/plus.svg"
import {useState} from "react";

const inputData = {
    type: 'number',
    name: 'qty'
}

const {product_input, btn, input} = styles;
const {type, name} = inputData;

const ProductInput = () => {

    const [qty, setQty] = useState(1);
    const minusClickHandler = () => {
        setQty((prevQty) => prevQty - 1);
    }
    const plusClickHandler = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const isMinusButtonDisabled = qty === 1;

    return (
        <>
            <div className={product_input}>
                <button type="button" disabled={isMinusButtonDisabled} className={btn} onClick={minusClickHandler}>
                    <MinusIcon/>
                </button>
                <input className={input} type={type} name={name} readOnly value={qty}/>
                <button type="button" className={btn} onClick={plusClickHandler}>
                    <PlusIcon/>
                </button>
            </div>
        </>
    );
}

export default ProductInput;