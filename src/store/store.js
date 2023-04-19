import {createContext, useContext, useReducer} from "react";
import {reducer} from "./reducer";
const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

const initialState = {
    cart: {
        products: []
    },
    favorite: {
        products: []
    },
    products: [],
    orders: [],
    user: {
        id: '1',
        email: 'qwerty',
        name: 'name'
    }
}
const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <StoreContext.Provider value={ {state,dispatch} }>{children}</StoreContext.Provider>;
}

export default Provider;