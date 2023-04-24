import styles from './basketStub.module.scss'
import {useStore} from "../../../store/store";
import {useRemoveFromCart} from "../../../hooks/useRemoveFromCart";
import ProductInput from "../../products/productInput/ProductInput";
import {calcTotalPrice} from "../../../domains/cart";
import {useEffect, useState} from "react";
import {useAddToCartClickHandler} from "../../../hooks/useAddToCart";

const BasketStub = () => {
    const {removeProductFromCart} = useRemoveFromCart();
    const {addProductToCart} = useAddToCartClickHandler();
    const {state} = useStore();

    const {products} = state.cart;
    const totalPrice = calcTotalPrice(state.cart);


    const [checkedProducts, setCheckedProducts] = useState([]);
    const isGeneralChecked = checkedProducts.length === products.length;

    const [isGeneralCheckboxActive, setGeneralCheckboxActive] = useState(isGeneralChecked);

    useEffect(() => {
        checkedProducts.length === products.length ?
            setGeneralCheckboxActive(true) :
            setGeneralCheckboxActive(false);

    },[checkedProducts]);
    const minusClickHandler = (product) => () => {
        product.qty === 1 ?
        removeProductFromCart([product.id]) :
        addProductToCart(product,-1);
    }
    const plusClickHandler = (product) => () => addProductToCart(product);
    const removeProductClickHandler = (id) => () => removeProductFromCart([id]);
    const removeAllProductsClickHandler = () => removeProductFromCart(checkedProducts);

    const checkProductChangeHandler = (id) => () => {
        const idChecked = checkedProducts.includes(id);

        if (idChecked) {
            const updatedCheckedIds = checkedProducts.filter((checkedId) => checkedId !== id);
            setCheckedProducts(updatedCheckedIds);

            if (updatedCheckedIds.length === 0) setGeneralCheckboxActive(false);
        } else {
            setCheckedProducts((prevState) => [...prevState , id])
        }
    }

    const generalCheckboxClickHandler = () => {
        !isGeneralCheckboxActive ?
            setCheckedProducts(products.map((product) => product.id)) :
            setCheckedProducts([]);

        setGeneralCheckboxActive((prevState) => !prevState);
    }


    return(
        <div>
            <div>
                <input onChange={generalCheckboxClickHandler} checked={isGeneralCheckboxActive} type="checkbox"/>
                <button onClick={removeAllProductsClickHandler}> удалить все </button>
            </div>


            {products.map((product, index)=> {
                const test = products.filter((item) => item.id === product.id);

                const isChecked = checkedProducts.includes(product.id);

                return(
                  <div key={index} style={{display: 'inline-block', marginRight: '10px'}}>

                      <input onChange={checkProductChangeHandler(product.id)} checked={isChecked}  type="checkbox"/>
                      <img style={{maxWidth: '80px'}} src={product.image} alt=""/>

                      <ProductInput minusClickHandler={minusClickHandler(product)} plusClickHandler={plusClickHandler(product)} qty={product.qty}/>

                      <button onClick={removeProductClickHandler(product.id)}>
                          удалить товар
                      </button>

                  </div>
                );
            })}


            <span>{totalPrice}</span>

        </div>
    );
}

export default BasketStub;