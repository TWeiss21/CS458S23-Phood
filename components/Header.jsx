//navigation element
import Link from 'next/link'
import React from "react";

const Header = () => {
  return (
    <div>
    <div className="headerDiv">
    <Link href='/'><button className="btn">Dashboard</button></Link>
      </div>
    <div className="headerDiv SL">
      <Link href='/ShoppingList/list'><button className="btn">Shopping List</button></Link>
    </div>
    </div>
  );
};

export default Header
