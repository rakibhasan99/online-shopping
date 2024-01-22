import { getShoppingCart } from "../utilities/storage";

const productLoaderData = async() =>{
    const loaderData = await fetch('/public/products.json');
    const productsData = await loaderData.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = productsData.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;

}
export default productLoaderData;