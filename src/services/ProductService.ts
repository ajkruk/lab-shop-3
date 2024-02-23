import axios from 'axios'
import Product from '../models/Product';


export function ProductService(): Promise<Product[]> {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    return axios
    .get<Product[]>(apiUrl)
    .then(response => response.data);
}

