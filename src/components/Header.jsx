// import { useState } from "react"
import { Link } from 'react-router-dom';
import CartSummary from './CartSummary';
import UserInfo from './UserInfo';

function Header({ title }) {
  return (
    <header className="flex flex-col items-center bg-[#DDE3EA] pr-8 py-4 font-[playfair]">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-6">
        <img
          src="/images/logo.png"
          alt="WA&WA Logo"
          className="h-16 w-auto"
        />
        <Link to="/" className="text-black font-[playfair] text-4xl mt-8">
          {title}
        </Link>
        <div className="flex items-center space-x-4 mt-8">
          <CartSummary className="text-2xl cursor-pointer" />
          <UserInfo /> 
        </div>
      </div>
    </header>
  );
}

export default Header;