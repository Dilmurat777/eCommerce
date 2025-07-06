import { Ellipsis, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl fond-bold text-white">Subscribe Our NewsLatter</h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-4 rounded shadow-md w-full bg-white"
              />
              <span className="bg-red-500 px-0.5 py-0.5 absolute right-26 top-3 rounded text-white">
                <Ellipsis />
              </span>
              <button className="bg-gray-200 py-3 px-4 absolute right-3 top-1 rounded-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <Link to="/">
                <h4 className="text-whit font-bold text-2xl my-4">audiophile</h4>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta explicabo
                laboriosam sequi pariatur molestias atque tempora quo praesentium est!
              </p>
              <div className="flex items-center gap-8 mt-5">
                <Facebook size={40} className="text-black bg-white rounded-md p-2" />
                <Instagram size={40} className="text-black bg-white rounded-md p-2" />
                <Youtube size={40} className="text-black bg-white rounded-md p-2" />
                <Twitter size={40} className="text-black bg-white rounded-md p-2" />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold my-4">Pages</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold my-4">Category</h2>
              <ul>
                <li>
                  <Link to="/">Monitors</Link>
                </li>
                <li>
                  <Link to="/">CPUs</Link>
                </li>
                <li>
                  <Link to="/">Laptops</Link>
                </li>
                <li>
                  <Link to="/">PowerSupply</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Address</h2>
              <p>70 Washington Square South, New Your, Ny 10012, United States</p>
              <p>+12323 123123 1313</p>
              <p>+12323 123123 1234</p>
            </div>
          </div>
        </div>
      </div>
      
        <div className="container mx-auto text-center py-4">
          <p className="text-white">Copyright &copy; 2025 OnlineITuts</p>
        </div>
      
    </footer>
  );
}

export default Footer;
