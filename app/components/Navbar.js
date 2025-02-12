"use client";
import Link from "next/link";
import Image from "next/image";
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  InformationCircleIcon, 
  PhoneIcon, 
  MagnifyingGlassIcon 
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* ✅ Logo Section - Stays on the Left */}
        <Link href="/" className="relative group">
          <Image 
            src="/logo.png"  
            alt="Retail Shop Logo" 
            width={500} 
            height={60} 
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* ✅ Nav Links & Search Bar - Shifted to the Right */}
        <div className="flex items-center space-x-8 ml-auto">
          {/* Navigation Links */}
          <div className="flex space-x-14">
            <NavItem href="/" text="Home" Icon={HomeIcon} />
            <NavItem href="/products" text="Products" Icon={ShoppingBagIcon} />
            <NavItem href="/about" text="About" Icon={InformationCircleIcon} />
            <NavItem href="/contact" text="Contact" Icon={PhoneIcon} />
          </div>

          {/* ✅ Modern Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-72 px-4 py-2 pl-10 text-white bg-gray-800 border border-gray-600 rounded-full focus:ring-2 focus:ring-white outline-none transition-all duration-300"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

      </div>
    </nav>
  );
}

/* ✅ Reusable Nav Item Component with Icon */
function NavItem({ href, text, Icon }) {
  return (
    <Link href={href} className="flex flex-col items-center space-y-1 group">
      <Icon className="w-6 h-6 text-white transition duration-300 group-hover:text-white" />
      <span className="text-white text-lg transition duration-300 group-hover:text-white">
        {text}
      </span>
      <span className="w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
