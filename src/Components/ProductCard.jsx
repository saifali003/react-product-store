import { useProduct } from "../Context/ProductContext"
export default function ProductCard({product}){
    const {addToCart} = useProduct();
    return( 
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain"
            />
            <h2 className="mt-3 font-semibold">{product.title.slice(0, 20)}</h2>
            <p className="text-gray-500 text-sm">{product.description.slice(0, 50)}...</p>
            <p className="font-bold mt-2">{product.price}</p>
            <button
            onClick={()=>addToCart(product)}
            className="mt-3 w-full bg-blue-600 text-white py-1 rounded-xl hover:bg-blue-700"
            >Add To Cart</button>
        </div>
    )
}