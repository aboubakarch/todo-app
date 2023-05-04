import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex h-[70px] bg-[#4CAF50] w-full items-center px-[10%] justify-between">
      <h6 className="m-0 text-white text-lg w-[15%]">Todo APP</h6>
      <div className="w-[85%]">
        <Link className="text-white font-semibold no-underline mr-5" to="/">
          Home
        </Link>
        <Link
          className="text-white font-semibold no-underline mr-5"
          to="/counter"
        >
          Counter
        </Link>
      </div>
    </div>
  );
};

export default Header;
