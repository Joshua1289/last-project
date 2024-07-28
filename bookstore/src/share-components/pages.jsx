import React from "react"
import {Link } from 'react-router-dom'
import home_bg from '../images/home-bg.jpg'
import the_world_bg from "../images/the_world.jpg";
import the_happy_lemon_bg from "../images/the_happy_lemon.jpg";
import be_well_bee_bg from "../images/be_well_bee.jpg";
import red_queen_bg from "../images/red_queen.jpg";
import nightshade_bg from "../images/nightshade.jpg";
import darknet_bg from "../images/darknet.jpg";
import about_img_bg from "../images/about-img.jpg";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Pages = () => {
    return (
     <div>
        <div className='relative h-[450px] bg-cover bg-center' style={{ backgroundImage: `url(${home_bg})` }}>
            <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50'>
            <div className='text-white text-4xl font-bold mb-4'>
                HAND PICKED BOOK
            </div>
            <div className='text-white text-4xl font-bold mb-4'>
                TO YOUR DOOR
            </div>
            <p className='text-white text-lg mb-8 px-4 text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nulla, reiciendis eius voluptatum fuga ratione ea laboriosam error saepe.
            </p>
            <div>
                <button type='submit' className='bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Discover More
                </button>
            </div>
            </div>
        </div>
        <div className="container mx-auto p-4">
            <div className="font-semibold text-center">
            <h4>LATEST PRODUCTS</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col3 gap-8 mt-6 mb-5 items-center ml-32">
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md ">
        <div
            className="bg-cover bg-no-repeat w-40 h-64 rounded "
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
            <p className="pb-3 text-center">THE WORLD OF ART</p>
        </div>
        <div className="pr-32 pb-5">
            <input
            type="number"
            placeholder="1"
            className="border border-gray-300  rounded  text-center"
            />
        </div>
        <div className="">
            <button
            type="submit"
            className="bg-violet-700 text-white h-30 w-48 rounded  font-bold"
            >
            ADD TO CART
            </button>
        </div>
        </div>
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
        <div
            className="bg-cover bg-no-repeat w-40 h-64 rounded"
            style={{ backgroundImage: `url(${the_happy_lemon_bg})` }}
        >
            <div className="">
            <button
                type="submit"
                className="bg-orange-700 text-white h-10 w-16 rounded font-bold"
            >
                $20/-
            </button>
            </div>
        </div>
        <div className="mt-4">
            <p className="pb-3 text-center">HAPPY LEMON</p>
        </div>
        <div className="pr-32 pb-5">
            <input
            type="number"
            placeholder="1"
            className="border border-gray-300  rounded  text-center"
            />
        </div>
        <div className="">
            <button
            type="submit"
            className="bg-violet-700 text-white h-30 w-48 rounded  font-bold"
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
            <button
                type="submit"
                className="bg-orange-700 text-white h-10 w-16 rounded font-bold"
            >
                $12/-
            </button>
            </div>
        </div>
        <div className="mt-4">
            <p className="pb-3 text-center">BE WELL BEE</p>
        </div>
        <div className="pr-32 pb-5">
            <input
            type="number"
            placeholder="1"
            className="border border-gray-300  rounded  text-center"
            />
        </div>
        <div className="">
            <button
            type="submit"
            className="bg-violet-700 text-white h-30 w-48 rounded  font-bold"
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
            <button
                type="submit"
                className="bg-orange-700 text-white h-10 w-16 rounded font-bold"
            >
                $12/-
            </button>
            </div>
        </div>
        <div className="mt-4">
            <p className="pb-3 text-center">RED QUEEN</p>
        </div>
        <div className="pr-32 pb-5">
            <input
            type="number"
            placeholder="1"
            className="border border-gray-300  rounded  text-center"
            />
        </div>
        <div className="">
            <button
            type="submit"
            className="bg-violet-700 text-white h-30 w-48 rounded  font-bold"
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
            <button
                type="submit"
                className="bg-orange-700 text-white h-10 w-16 rounded font-bold"
            >
                $12/-
            </button>
            </div>
        </div>
        <div className="mt-4">
            <p className="pb-3 text-center">NIGHTSHADE</p>
        </div>
        <div className="pr-32 pb-5">
            <input
            type="number"
            placeholder="1"
            className="border border-gray-300  rounded  text-center"
            />
        </div>
        <div className="">
            <button
            type="submit"
            className="bg-violet-700 text-white h-30 w-48 rounded  font-bold"
            >
            ADD TO CART
            </button>
        </div>
        </div>
            <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
        <div
            className="bg-cover bg-no-repeat w-40 h-64 rounded"
            style={{ backgroundImage: `url(${darknet_bg})` }}
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
            <p className="pb-3 text-center">DARKNET</p>
        </div>
        <div className="pr-32 pb-5">
            <input
            type="number"
            placeholder="1"
            className="border border-gray-300  rounded  text-center"
            />
        </div>
        <div className="">
            <button
            type="submit"
            className="bg-violet-700 text-white h-30 w-48 rounded  font-bold"
            >
            ADD TO CART
            </button>
        </div>
        </div>
       
        </div>
        </div>
        <div className="flex items-center justify-center mr-auto">
          <button className="bg-orange-400 w-28 h-10 rounded text-white font-extrabold"> 
            Load More
          </button>
        </div>  
        <div className="flex flex-row items-center mb-14">
            <div className="h-64 w-full bg-contain bg-center bg-no-repeat -ml-80 " style={{ backgroundImage: `url(${about_img_bg})`}}>
            </div>
            <div className="flex flex-col h-44 w-[36%] gap-2 bg-gray-200 -ml-[33.1%] pl-8  mr-10 justify-center">
                <h2 className="text-4xl font-bold" >ABOUT US </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque officiis cum dolor, magni nihil quis a veniam adipisci deleniti cupiditate ea pariatur facilis magnam fugiat. Quis dolor minima error.</p>
                <button className="bg-violet-500 text-white rounded-md hover:bg-violet-600 h-11 w-32"><Link to="/about">Read More</Link></button>
            </div>
        </div>
        <div>
          <div className="bg-black h-52 w-auto">
           <div className="text-white flex flex-col justify-center items-center gap-2 font-semibold">
             <h3 className="mt-7">HAVE ANY QUESTION ?</h3>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ut pariatur veniam tempora sit soluta saepe, alias totam suscipit,</p>
             <button className="bg-violet-800 h-10 w-24 font-bold hover:bg-sky-700 rounded">Contact us</button>
           </div>             
          </div>
        </div>
        <div className="container mx-auto p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <h5 className="mb-2">
            <Link to="/home" className="text-gray-700 hover:text-blue-500">Home</Link>
          </h5>
          <h5 className="mb-2">
            <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          </h5>
          <h5 className="mb-2">
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </h5>
          <h5 className="mb-2">
            <Link to="/shop" className="text-gray-700 hover:text-blue-500">Shop</Link>
          </h5>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Extra Links</h4>
          <h5 className="mb-2">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Login</Link>
          </h5>
          <h5 className="mb-2">
            <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
          </h5>
          <h5 className="mb-2">
            <Link to="/cart" className="text-gray-700 hover:text-blue-500">Cart</Link>
          </h5>
          <h5 className="mb-2">
            <Link to="/orders" className="text-gray-700 hover:text-blue-500">Orders</Link>
          </h5>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <h5 className="flex items-center mb-2">
            <IoMdCall className="mr-2" /> +123-43-7854
          </h5>
          <h5 className="flex items-center mb-2">
            <IoMdCall className="mr-2" /> +123-43-7854
          </h5>
          <h5 className="flex items-center mb-2">
            <MdEmail className="mr-2" /> apehjos@gmail.com
          </h5>
          <h5 className="flex items-center mb-2">
            <FaLocationDot className="mr-2" /> Mumbai, India - 20012
          </h5>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <h5 className="flex items-center mb-2">
            <FaFacebookF className="mr-2" /> Facebook
          </h5>
          <h5 className="flex items-center mb-2">
            <FaTwitter className="mr-2" /> Twitter
          </h5>
          <h5 className="flex items-center mb-2">
            <FaSquareInstagram className="mr-2" /> Instagram
          </h5>
          <h5 className="flex items-center mb-2">
            <FaLinkedin className="mr-2" /> LinkedIn
          </h5>
        </div>
      </div>
     </div>
     <div className="text-center mt-8">
      <div className="flex items-center justify-center space-x-2 text-gray-600">
        <FaRegCopyright className="text-xl" />
        <h4 className="text-lg font-medium">Copyright @ 2002 by Web  </h4>
      </div>
    </div>
    </div>

    )
};

export default Pages;