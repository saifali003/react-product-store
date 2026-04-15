import { useProduct } from "../Context/ProductContext"
import ProductCard from "./ProductCard";
export default function ProductList(){
    const {products,text} = useProduct();
    const filteredProducts = products.filter((item) =>
    item.title?.toLowerCase().includes((text || "").toLowerCase())
  );
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                filteredProducts.map((item)=>(
                    <ProductCard
                    key={item.id}
                    product={item}
                    />
                ))}
        </div>
    )
}