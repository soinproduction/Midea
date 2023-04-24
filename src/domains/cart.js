function getIndexOfProduct(cart, productId) {
    return  cart.products.map(product => {
        return product.id;
    }).indexOf(productId);
}

export const addProduct = (cart, product, qty) => {
    // получаем индекс продукта в массиве продуктов
    const indexOfProduct = getIndexOfProduct(cart, product.id)
    // проверяем, есть ли продукт в массиве продуктов
    const isProductFound = indexOfProduct > -1;

    if (isProductFound) {
        // создаем копию продукта, чтобы не мутировать стейт
        const updatedProduct = structuredClone(cart.products[indexOfProduct]);

        // создаем копию массива продуктов, чтобы не мутировать стейт
        const updatedProducts = [...cart.products];

        // обновляем количество продукта
        updatedProduct.qty += qty;

        // обновляем продукт в массиве продуктов
        updatedProducts[indexOfProduct] = updatedProduct;


        // возвращаем обновленную корзину
        return {products: [...updatedProducts]};

    } else {
        // возвращаем обновленную корзину
        return {products: [...cart.products, {...product, qty}]};
    }
}

export const removeProducts = (cart, productIds) => {

    console.log(productIds)

    const updatedProducts = cart.products.filter((product)=> {
        // return productIds.map((id) => {return product.id !== id})
        return !productIds.includes(product.id)
        // return product.id !== productId;
    })

    console.log(updatedProducts)

    return {products: updatedProducts}
}

export const calcTotalPrice = (cart) => {
    return  cart.products.reduce((total,product) => {
        return total += product.qty * product.price
    }, 0)
}