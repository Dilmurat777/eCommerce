import { Link } from "react-router-dom"


function ProductCard({ product }) {
	
  return (
	  <Link to={`/product/${product.id}`}>
		  <div className="shadow-lg rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-150">
			  <img className="w-full h-64 object-cover rounded-md" src={product.image} />
			  <div className="bg-gray-50 p-4">
				  <h2 className="text-lg font-semibold my-4">{product.title.substring(0,25)+"..."}</h2>
				  <p className="text-sm text-zinc-500 border-b-2 pb-4">{product.description.substring(0, 50)+'...'}</p>
				  <div className="flex justify-between items-center mt-4">
					  <p className="text-xl font-semibold">${ product.price}</p>
					  <p>View Details</p>
				  </div>
			  </div>
		</div>
	</Link>
  )
}

export default ProductCard
