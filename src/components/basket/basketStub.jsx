import styles from './basketStub.module.scss'
import {useStore} from "../../store/store";

const BasketStub = () => {

    const {state, dispatch} = useStore();

    const products = state.cart.products

    return(
        <div>
            {products.map((product)=> {
                return(
                  <div key={product.id}>
                      <img src={product.image} alt=""/>
                  </div>
                );
            })}


        </div>
    );
}

export default BasketStub;