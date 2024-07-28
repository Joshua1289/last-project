import React from 'react';

import {Link} from "react-router-dom";
import image1 from "../images/image1.jpg";
import the_world_bg from "../images/the_world.jpg";
import the_happy_lemon_bg from "../images/the_happy_lemon.jpg";
import darknet_bg from "../images/darknet.jpg";
import be_well_bee_bg from "../images/be_well_bee.jpg";
import red_queen_bg from "../images/red_queen.jpg";
import nightshade_bg from "../images/nightshade.jpg";
import holy_ghosts_bg from "../images/holy_ghosts.jpg";
import economic_bg from "../images/economic.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";







const Shoppages =() => {
    return (
        <div>
            <div className='min-h-screen flex flex-col items-center justify-center font-extrabold'>
          <div className="relative w-full h-[450px] bg-cover bg-center" 
           style={{ backgroundImage: `url(${image1})` }} >
            <div className="flex flex-col justify-center items-center text-center mt-40">
              <h2 className="font-black text-5xl">OUR SHOP</h2>
              <div className='flex flex-row '>
                <h4 className="font-semibold text-2xl text-violet-700"><Link to="/homepage">home/ </Link></h4>
                <h4 className='font-semibold text-2xl '>
                  <Link to="/shop">shop</Link>
                </h4>
              </div>
            </div>
      </div>
      </div>
      
     
      <div className="container mx-auto p-4">
          <div className="font-bold text-2xl text-center">
            <h4>LATEST PRODUCTS</h4>
          </div>
          <div className="grid grid-cols-3 w-[60%] gap-10 mt-6 mb-5 items-center m-[auto]">
            <div>
              <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
                <div
                  className="bg-cover bg-no-repeat w-40 h-64 rounded"
                  style={{ backgroundImage: `url(${the_world_bg})` }}
                >
                  <div className="">
                    <button
                      type="submit"
                      className="bg-orange-700 text-white h-10 w-16 rounded font-bold"
                    >
                      $50/-
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-center">THE WORLD OF ART</p>
                </div>
                <div className="pr-32">
                  <input
                    type="number"
                    placeholder="1"
                    className="border border-gray-300  rounded  text-center mt-5"
                  />
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="bg-violet-700 text-white h-30 w-48 rounded  font-bold mt-5"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
                <div
                  className="bg-cover bg-no-repeat w-40 h-64 rounded"
                  style={{ backgroundImage: `url(${the_happy_lemon_bg})` }}
                >
                  <div className="">
                    <button
                      type="submit"
                      className="bg-orange-700 text-white h-auto  w-16 rounded font-bold"
                    >
                      $20/-
                    </button>
                  </div>
                </div>
                <div className="mt-4 ">
                  <p className="text-center">Happy Lemons</p>
                </div>
                <div className="pr-32 ">
                  <input
                    type="number"
                    placeholder="1"
                    className="border border-gray-300  rounded  text-center mt-5"
                  />
                </div>
                <div className=" mb-4">
                  <button
                    type="submit"
                    className="bg-violet-700 text-white h-30 w-48 rounded  font-bold mt-5"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
              <div
                className="bg-cover bg-no-repeat w-40 h-64 rounded"
                style={{ backgroundImage: `url(${darknet_bg})` }}
              >
                <div className="">
                  <span
                    className="bg-orange-700 text-white h-18w-28 rounded font-bold"
                    type="submit"
                  >
                    $50/-
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-center">Darkent</p>
              </div>
              <div className="pr-32">
                <input
                  type="number"
                  placeholder="1"
                  className="border border-gray-300  rounded  text-center mt-5"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-violet-700 text-white h-30 w-48 rounded  font-bold mt-5"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
              <div
                className="bg-cover bg-no-repeat w-40 h-64 rounded"
                style={{ backgroundImage: `url(${be_well_bee_bg})` }}
              >
                <div className="">
                  <span
                    className="bg-orange-700 text-white h-18w-28 rounded font-bold"
                    type="submit"
                  >
                    $12/-
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-center">be well bee</p>
              </div>
              <div className="pr-32">
                <input
                  type="number"
                  placeholder="1"
                  className="border border-gray-300  rounded  text-center mt-5"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-violet-700 text-white h-30 w-48 rounded  font-bold mt-5"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
              <div
                className="bg-cover bg-no-repeat w-40 h-64 rounded"
                style={{ backgroundImage: `url(${red_queen_bg})` }}
              >
                <div className="">
                  <span
                    className="bg-orange-700 text-white h-18w-28 rounded font-bold"
                    type="submit"
                  >
                    $12/-
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-center">red queen</p>
              </div>
              <div className="pr-32">
                <input
                  type="number"
                  placeholder="1"
                  className="border border-gray-300  rounded  text-center mt-4"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-violet-700 text-white h-30 w-48 rounded  font-bold mt-7"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
              <div
                className="bg-cover bg-no-repeat w-40 h-64 rounded"
                style={{ backgroundImage: `url(${nightshade_bg})` }}
              >
                <div className="">
                  <span
                    className="bg-orange-700 text-white h-18w-28 rounded font-bold"
                    type="submit"
                  >
                    $12/-
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-center">nightshade</p>
              </div>
              <div className="pr-32">
                <input
                  type="number"
                  placeholder="1"
                  className="border border-gray-300  rounded  text-center mt-3"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-violet-700 text-white h-30 w-48 rounded  font-bold mt-7"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
       
        
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
              <div
                className="bg-cover bg-no-repeat w-40 h-64 rounded"
                style={{ backgroundImage: `url(${holy_ghosts_bg})` }}
              >
                <div className="">
                  <span
                    className="bg-orange-700 text-white h-18w-28 rounded font-bold"
                    type="submit"
                  >
                    $12/-
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-center">holy ghosts</p>
              </div>
              <div className="pr-32">
                <input
                  type="number"
                  placeholder="1"
                  className="border border-gray-300  rounded  text-center mt-3"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-violet-700 text-white h-30 w-48 rounded  font-bold mt-7"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
         
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
              <div
                className="bg-cover bg-no-repeat w-40 h-64 rounded"
                style={{ backgroundImage: `url(${economic_bg})` }}
              >
                <div className="">
                  <span
                    className="bg-orange-700 text-white h-18w-28 rounded font-bold"
                    type="submit"
                  >
                    $12/-
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-center">economic</p>
              </div>
              <div className="pr-32">
                <input
                  type="number"
                  placeholder="1"
                  className="border border-gray-300  rounded  text-center mt-3"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-violet-700 text-white h-30 w-48 rounded  font-bold mt-7"
                >
                  ADD TO CART
                </button>
              </div>
              </div> 
              </div>
              </div>
              
              <div className="container mx-auto p-6 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-24 cursor-pointer">
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <h5 className="mb-2">
              <Link to="/homepage" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/shop" className="text-gray-700 hover:text-blue-500">
                Shop
              </Link>
            </h5>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Extra Links</h4>
            <h5 className="mb-2">
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Login
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link
                to="/register"
                className="text-gray-700 hover:text-blue-500"
              >
                Register
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/cart" className="text-gray-700 hover:text-blue-500">
                Cart
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/orders" className="text-gray-700 hover:text-blue-500">
                Orders
              </Link>
            </h5>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <h5 className="flex items-center mb-2">
              <IoMdCall className="mr-2 bg-violet-600 text-white p-1 rounded-full" />
              +123-43-7854
            </h5>
            <h5 className="flex items-center mb-2">
              <IoMdCall className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              +123-43-7854
            </h5>
            <h5 className="flex items-center mb-2">
              <MdEmail className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              apehjos@gmail.com
            </h5>
            <h5 className="flex items-center mb-2">
              <FaLocationDot className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              Mumbai, India - 20012
            </h5>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <h5 className="flex items-center mb-2">
              <FaFacebookF className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              Facebook
            </h5>
            <h5 className="flex items-center mb-2">
              <FaTwitter className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              Twitter
            </h5>
            <h5 className="flex items-center mb-2">
              <FaSquareInstagram className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              Instagram
            </h5>
            <h5 className="flex items-center mb-2">
              <FaLinkedin className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              LinkedIn
            </h5>
          </div>
        </div>
      </div>
      <hr className='h-[2px] bg-black' />
      <div className="text-center mt-8">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <FaRegCopyright className="text-xl bg-violet-500 rounded-full" />
          <h4 className="text-lg font-medium">
            Copyright @ 2002 by Apeh Joshua
          </h4>    
        </div>
      </div>
            </div>
        
        
      
        
    )
}

export default Shoppages;