import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import house from '../assets/house.svg';

const Menu = () => {

  const menu = [
    {
      id: 1,
      url: '/',
      img: house,
      alt: "image d'une maison"
    },
    {
      id: 2,
      url: '/templates',
      img: house,
      alt: "image d'une maison"
    },
    {
      id: 3,
      url: '/tarifs',
      img: house,
      alt: "image d'une maison"
    },
    {
      id: 4,
      url: '/contact',
      img: house,
      alt: "image d'une maison"
    }
  ]

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="hamburger-menu-container">
      <button
        className={`hamburger-menu-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-menu-icon"></span>
      </button>    
      <div className={isOpen ? "hamburger-menu-content" : "hamburger-menu-content-close"}>
          <ul className='ul-nav'>
              {menu.map((el, index) => {
              return  <li key = {index} className="hamburger-nav-link"> 
                        <Link href={el.url}> 
                          <Image src={el.img} alt={el.alt} />
                        </Link>               
                      </li>
              })}           
          </ul>
        </div>     
      <style jsx>
        {`
          .hamburger-menu-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1;
          }

          .hamburger-menu-button {
            position: relative;
            bottom: 6px;
            display: inline-block;
            width: 40px;
            height: 40px;
            cursor: pointer;
            border: none;
            background-color: transparent;
          }

          .hamburger-menu-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 4px;
            background-color: #3291ff;
            transition: 0.1s ease-in-out
          }

          .hamburger-menu-icon::before,
          .hamburger-menu-icon::after {
            content: "";
            position: absolute;
            left: 0;
            width: 30px;
            height: 4px;
            background-color: #3291ff;
            transition: 0.3s ease-in-out;
          }

          .hamburger-menu-icon::before {
            top: -10px;
          }

          .hamburger-menu-icon::after {
            top: 10px;
          }

          .hamburger-menu-button.open .hamburger-menu-icon {
            background-color: transparent;
          }

          .hamburger-menu-button.open .hamburger-menu-icon::before {
            top: 50%;
            transform: rotate(45deg);
          }

          .hamburger-menu-button.open .hamburger-menu-icon::after {
            top: 50%;
            transform: rotate(-45deg);
          }

          .hamburger-menu-button {
           opacity: 0.7;
           transition: 0.3s ease-in-out;
          }

          .hamburger-menu-button:hover {
            opacity: 1;
          }

          .hamburger-menu-content {
            display: block;
            position: fixed;
            top: 45%;
            right: 0;
            width: 50px;
            background-color: #3291ff;
            border-radius: 8px 0 0 8px;
            box-sizing: border-box;
            opacity: 0.8;
            z-index: 5;
            transition: 0.2s ease-in-out 
          }

          .hamburger-menu-content-close {
            display: block;
            position: fixed;
            top: 45%;
            right: 0;
            width: 0px;
            opacity: 0.6;
            box-sizing: border-box;
            z-index: 5;
            transition: 0.2s ease-in-out 
          }

          .ul-nav {
            padding: 0;
            margin: 0;
          }

          .hamburger-nav-link {
            opacity: 0.5;
            height: 50px;
            list-style: none;
            border-bottom: 1px solid rgb(255, 255, 255, 0.4);
            text-align: center;
            padding: 4px;
          }

         .hamburger-nav-link:hover {
          opacity: 1;
         }

          @media screen and (min-width: 550px) {
            .hamburger-menu-container {
             display: none;
            }
          }
        `}
      </style>      
    </div>
    </>
  );
}

export default Menu;