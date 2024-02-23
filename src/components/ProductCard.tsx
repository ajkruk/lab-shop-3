import Product from '../models/Product'
import comingSoon from '../images/coming-soon.jpg'
import './ProductCard.css'

function ProductCard({ product }: {product: Product}) { //single arguement as an object w/ property called 'product' which is expected to be an object of type 'Product'
    return ( //inside li there are three child elements, h1, img and p
        <li className="product-card" key={product._id}>
            <h3>{product.name}</h3>
            <img src={product.photoUrl || comingSoon} />:
            <p>{product.price}</p>
        </li> //returns an element that can be used as a compnent in React to display a product card
    )

   
}

export default ProductCard