
export const getProductQty = (productsArray) => {
    return productsArray.reduce((qty,product) => {return qty += product.qty},0);
}