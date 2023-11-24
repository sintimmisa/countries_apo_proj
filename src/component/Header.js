import React from "react";
import { IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const changeTheme = () => {
    const header=document.querySelector(".header");
    const details=document.querySelector('.details');
    
  };


  const toggleTheme=()=>{
document.documentElement.classList.toggle("dark");
  }
 

  return (
    <div className="header bg-white shadow dark:bg-gray-800  dark:text-white ">
      <div className="navbar  h-16 flex flex-row justify-between items-center container p-8 mx-auto">
        <h1 className="text-2lg font-extrabold">Where in the world?</h1>
        <div className="flex flex-row gap-4 items-center">
          <button onClick={toggleTheme}>
            <IoMoonSharp />
          </button>
          <p>Dark</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
