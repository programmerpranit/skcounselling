"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = (): JSX.Element => {
  const [pathname, setPathname] = useState("/");
  const [toggle, setToggle] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <>
      <nav className="flex flex-col justify-evenly md:flex-row">
        <div className="logo flex h-32 items-center justify-between p-5  max-md:border-b">
          <Image
            className="object-contain"
            src={"/images/logo.png"}
            alt=""
            width={200}
            height={100}
          />
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="h-10 w-10 bg-red-400 md:hidden"
          ></div>
        </div>
        <div
          className={`links  ${toggle ? "max-md:-mr-80" : ""} right-0 top-32 flex flex-col items-center gap-10 bg-white 
        p-5 transition-all max-md:absolute max-md:ml-auto max-md:h-[85vh]  max-md:w-2/3 max-md:border-l md:flex-row`}
        >
          <Link href="/about">
            <p
              className={`font-medium ${
                pathname === "/services" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              About
            </p>
          </Link>
          <Link href="/services">
            <p
              className={`font-medium ${
                pathname === "/services" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Services
            </p>
          </Link>
          <Link href="/blogs">
            <p
              className={`font-medium ${
                pathname === "/blogs" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Blogs
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={`font-medium ${
                pathname === "/contact" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Contact
            </p>
          </Link>
          <Link href="/contact">
            <button>Get A Quote</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
