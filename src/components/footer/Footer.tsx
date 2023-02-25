import React from 'react';

const Footer:React.FC = () => {
    return (
        <footer className="bg-gray-900 pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">Stay Connected</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-400">
                Follow us on social media for updates and news.
              </h5>
              <div className="mt-6">
                <a href="#" className="bg-blue-500 mr-3 rounded-full p-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="bg-blue-700 mr-3 rounded-full p-3">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="bg-pink-500 mr-3 rounded-full p-3">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-white font-semibold py-1">
                Made with <i className="fa fa-heart"></i> by Samss Jubair
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end justify-center">
                <li>
                  <a href="#" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                    Samss Jubair
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3">
                   License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;