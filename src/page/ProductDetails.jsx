import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowBigLeft, ShoppingCart } from 'lucide-react';
import { addToCart } from '../features/cart/CartSlice';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.items.find((p) => p.id === parseInt(id)));

 

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link className="mb-8 inline-block py-2 px-3 bg-zinc-400 group" to="/">
          <div className="flex">
            <ArrowBigLeft className="group-hover:-translate-x-2 transition-all duration-125" />
            <p>Back to Product</p>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="shadow-md p-4 rounded w-[600px]">
          <img src={product.image} alt="" />
        </div>
        <div>
          <h2 className="text3xl font-bold mb-4">{product.title}</h2>
				  <p className="text-gray-600 mb-6">{product.description}</p>
				  <div className='mb-6'>
					  <span className='text-3xl font-bold'>$ { product.price}</span>
				  </div>
				  <div className='mb-6'>
					  <h3 className='font-semibold mb-2'>Category</h3>
					  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm'>{ product.category}</span>
				  </div>
				  <button className='w-full md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300' onClick={() => dispatch(addToCart(product))}>
					  <ShoppingCart /> Add to Card
				  </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
