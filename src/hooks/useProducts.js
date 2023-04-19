import {useEffect, useState} from "react";
import {path} from "../helpers/path";

import {useStore} from "../store/store";

export const useProducts = () => {
    const [isProductsLoading, setIsProductsLoading] = useState(true);
    const [productsError, setProductsError] = useState(false)
    // const [products, setProducts] = useState([]);

    const {state,dispatch} = useStore();

    useEffect( () => {
        const abortController = new AbortController();
        const {signal} = abortController;
        const getAllProducts = async () => {
            const response = await fetch(path.getProducts, {signal});
            // setProducts(await response.json());

            dispatch({type: 'setProducts', payload: await response.json()})
        };
        setProductsError(false);

        try {
            getAllProducts();
            setIsProductsLoading(false);
        } catch {
            if(!signal.aborted) {
                setIsProductsLoading(false);
                setProductsError(true);
            }
        }

        return () => {abortController.abort()}

    }, [dispatch])

    return {isProductsLoading, productsError}
}
