import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
       <footer className="bg-slate-800 text-white mt-8">
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* e-Shop Section */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Ecomzy</h2>
                    <p className="text-slate-400">
                      Your ultimate destination for all your shopping needs. Shop with us for an unmatched online shopping experience!
                    </p>
                  </div>
      
                  {/* Quick Links Section */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <nav className="flex flex-col space-y-2">
                      <NavLink
                        to="/"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/blog"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Shop
                      </NavLink>
                      <NavLink
                        to="/about"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to="/contact"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Contact Us
                      </NavLink>
                    </nav>
                  </div>
      
                  {/* Follow Us Section */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4 mb-6">
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <i className="fab fa-facebook text-xl"></i>
                      </a>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <i className="fab fa-instagram text-xl"></i>
                      </a>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="flex-grow px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:border-slate-500"
                      />
                      <button className="px-4 py-2 bg-[#ff6347] hover:bg-[#ff4527] transition-colors rounded-md">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Bottom Bar */}
              <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
                  <p>© 2024 e-Shop. All rights reserved.</p>
                  <div className="flex gap-4 mt-2 sm:mt-0">
                    <NavLink
                      to="/privacy"
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </NavLink>
                    <NavLink
                      to="/terms"
                      className="hover:text-white transition-colors"
                    >
                      Terms of Service
                    </NavLink>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer
