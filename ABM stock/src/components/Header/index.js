import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  function handleClick() {
    const dark = document.querySelector('.dark-switch');
    document.querySelector('html').classList.toggle('dark');
    dark.classList.toggle('end');
  }

  return (
    <Nav>
      <div className="w-52 sm:w-60 flex justify-center items-center text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold">
        <h1>ABM Stock</h1>
      </div>
      <div className="dark:text-white mr-4 sm:mr-7 flex justify-between pt-3 w-14 relative">
        <FaSun />
        <FaMoon />
        <button
          type="button"
          className=" dark-mode sweet-transition h-full"
          onClick={() => handleClick()}
        >
          <div className="dark-switch end h-[12px] w-[12px] rounded-[50%] dark:bg-slate-50 bg-slate-700 sweet-transition">
            Text None
          </div>
        </button>
      </div>
    </Nav>
  );
}
