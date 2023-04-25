export const getProducts = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
    
    const response = await fetch('${baseUrl}/products');
    const products = await  response.json();
    return products;
}