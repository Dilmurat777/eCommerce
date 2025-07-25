import { Minus, Plus, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../features/cart/CartSlice';

function CardPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2>Your Cart is Empty</h2>
          <p className="text-gray-600 mb-4">Add to Some Products to Your Cart to see them here</p>
          <Link to="/" className="inline-block bg-zing-200 px-6 py-2 rounded-lg hover:bg-zinc-300">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl fond-bold mb-8">Shopping cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 py-4 border-b border-zinc-300">
              <Link to={`product${item.id}`} className="flex items-center gap-8">
                <img src={item.image} alt={item.title} className="h-24 w-24 rounded object-cover" />
              </Link>
              <div className="flex-1">
                <Link to={`product${item.id}`}>
                  <h3 className="font-semibold hover:text-blue-600">{item.title}</h3>
                </Link>
                <p className="text-gray-600">$ {item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="p-1 rounded-full hover:bg-zinc-300 transition-all duration-150 cursor-pointer"
							  onClick={() => {
								  dispatch(updateQuantity({ id: item.id, quantity: Math.max(0, item.quantity - 1) }));
								  if (item.quantity === 1) {
									  dispatch(removeFromCart(item.id))
								  }
					}
                    }>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="p-1 rounded-full hover:bg-zinc-300 transition-all duration-150 cursor-pointer"
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: item.id, quantity: item.quantity + 1 }),
                      )
                    }>
                    <Plus size={16} />
                  </button>
                  <div className="ml-4 text-red-500 hover:text-red-700 cursor-pointer" onClick={() => dispatch(removeFromCart(item.id))}>
                    <Trash2 size={16} />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-bold">{item.price * item.quantity.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1 shadow-md p-4 rounded-md">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 fond-bold">
                <div className="flex justify-between">
                  <span>
                    <b>Total</b>
                  </span>
                  <span>
                    <b>{total.toFixed(2)}</b>
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full bg-zinc-300 hover:bg-zinc-400 rounded-md px-3 py-3">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
