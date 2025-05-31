"use client"

import React, { useState } from "react";
import Link from "next/link";
import { GiCoffeePot, GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";


export const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <header className="flex justify-between items-center p-[32px] fixed top-0 left-0 right-0 bg-amber-200 z-20">
      <Link href="/">
        
          <GiCoffeePot size={44} />
        
      </Link>

      <div className="">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
           About us
        </Link>
        <Link href="/buy-coffee">
           Buy Coffee
        </Link>
      </div>

      {hamburgerClicked === true ? (
        <GrFormClose
          className=""
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        />
      ) : (
        <GiHamburgerMenu
          className=""
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        />
      )}

      <div
        className=""
        style={hamburgerClicked ? { display: "block" } : { display: "none" }}
      >
        <div className="">
          <Link href="/"
          
              onClick={() => {
                setHamburgerClicked(!hamburgerClicked);
              }}
            >
              Home
            
          </Link>
          <Link href="/about"
            
              onClick={() => {
                setHamburgerClicked(!hamburgerClicked);
              }}
            >
              About us
            
          </Link>
          <Link href="/buy-coffee"
            
              onClick={() => {
                setHamburgerClicked(!hamburgerClicked);
              }}
            >
              Buy Coffee
            
          </Link>
        </div>
      </div>
    </header>
  );
};
