import {useEffect, useState} from "react";
import {path} from "../helpers/path";
import {useParams} from "react-router-dom";

export const useProduct = () => {
    const {id} = useParams();

    const [isProductLoading, setIsProductLoading] = useState(true);
    const [productError, setProductError] = useState(false)
    const [product, setProduct] = useState(null);

    useEffect( () => {
        const abortController = new AbortController();
        const {signal} = abortController;
        const getProduct = async () => {
            const response = await fetch(`${path.getSingleProduct}${id}`, {signal});
            setProduct(await response.json());
        }
        setProductError(false);

        try {
            getProduct();
            setIsProductLoading(false);
        } catch {
            if(!signal.aborted) {
                setIsProductLoading(false);
                setProductError(true);
            }
        }

        return () => {abortController.abort()}

    }, [id])

    return {isProductLoading, product, productError}
}
