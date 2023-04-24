import {useStore} from "../store/store";
import {Action} from "../store/action";
export const useAddToFavoriteClickHandler = () => {
    const {dispatch} = useStore();

    function addToFavorite(product)  {
        dispatch({type: Action.updateFavorite, payload: product});
    }

    return {addToFavorite};
}