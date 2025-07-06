import products from './../productContent';
import ProductCard from './ProductCard';

function ProductGrid() {
  return (
    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mb-24'>
      {products.map((product) => (
		  <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
