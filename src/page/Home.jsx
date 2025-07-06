import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

function Home() {
  const categories = [
    'All',
    'Laptops',
    'Headphones',
    'Smartphones',
    'Audio',
    'Graphics Cards',
    'PlayStation 5 Digital Edition',
    'Computers',
  ];
  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4 mb-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in">
              {cat}
            </button>
          ))}
			  </div>
			  <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
