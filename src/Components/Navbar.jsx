import { Link } from "react-router-dom";
import { useProduct } from "../Context/ProductContext"
export default function Navbar(){
    const {text,setText} = useProduct();
    return(
        <div className="bg-gray-800 flex items-center justify-between text-white p-4 fixed top-0 left-0 w-full z-50">
             <h1 className="text-2xl font-bold">Product Store 🛍️</h1>
            <div className="flex justify-between gap-10 items-center">
                <input
                type="text"
                placeholder="Enter The Products..."
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className="w-100 bg-white text-black px-2 py-1 rounded-full"
                />
                <div className="flex gap-6">
                <Link className="text-xl font-bold hover:underline cursor-pointer" to="/">Home</Link>
                <Link className="text-xl font-bold hover:underline cursor-pointer" to="/cart">Cart</Link>
                </div>
            </div>
        </div>
    )
}