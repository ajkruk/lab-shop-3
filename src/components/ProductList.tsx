import Product from '../models/Product'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios'
import './ProductList.css'


function ProductList() {
////useState returns an array with 2 elements that can be assigned using array destructuring.
const [products, setProducts] = useState<Product[]>([]);  //1 first is always variable holding value. 2 second is a function for updating the value
                                                        
                                                       
useEffect(() => { // allows us to run code just once when the component first loads. 2 parameters. 
                    //1 callback func for your code & an array of dependencies-if emply indicates to only run the funtion once
    axios.get<Product[]>('http://localhost:3000/products') //getting product data from localhost:3000 set in shop2
        .then((response) => {
                setProducts(response.data)
            })
        },[])

        return (
            
            <ul className="product-list"> 
                {products.map((product) => ( //Javascript expression using the map method to iterate over each eement in products array
                    <ProductCard product={product} /> // new array of ProductCard components, each ProductCard component is passed a product prop which is set to current product being iterated over in the map method.
                ))}
            </ul>
    )
}

export default ProductList