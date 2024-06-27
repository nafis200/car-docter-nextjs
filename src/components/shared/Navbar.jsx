
"use client"
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline, IoSearchSharp  } from "react-icons/io5";



const Navbar = () => {
    const navItems = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Services",
          path: "/services",
        },
        {
          title: "MyBookings",
          path: "/my-bookings",
        },
        {
          title: "Blog",
          path: "/blog",
        },
        {
          title: "Contacts",
          path: "/contacts",
        },
      ];
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
   
  <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" height={60} width={100} />
 </Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
  </div>
  <div className="navbar-end">
  <div className="flex space-x-3 items-center">
          <IoCartOutline className="text-xl"/>
          <IoSearchSharp className="text-xl"/>
          <a className="btn btn-outline btn-primary px-8">Appointment</a>
          </div>
  </div>
</div>
    );
};



export default Navbar;