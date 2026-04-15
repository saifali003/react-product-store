import { useProduct } from "../Context/ProductContext";
export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useProduct();
  return (
    <div className="mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>

      {cart.length === 0 ? (
        <h3 className="text-gray-500">Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-3">
              <div className="flex items-center gap-4">
                <img src={item.image} className="w-16 h-16 object-contain" />
                <div>
                  <h3>{item.title.slice(0, 20)}</h3>
                  <p className="text-gray-600">₹ {item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer ml-10">
                Remove
              </button>
            </div>
          ))}
          <h2 className="mt-4 text-lg font-bold">Total: ₹ {totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}