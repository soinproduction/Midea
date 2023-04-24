import {useStore} from "../store/store";
import {Action} from "../store/action";
export const useRemoveFromCart = () => {
    const {dispatch} = useStore();

    function removeProductFromCart(productId)  {

        dispatch({type: Action.removeProductFromCart, payload:  productId});
    }

    return {removeProductFromCart};
}