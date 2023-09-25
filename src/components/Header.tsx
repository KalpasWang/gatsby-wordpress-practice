import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="container relative flex items-center justify-between flex-nowrap">
      <h1>GOGOBUY 網路商店</h1>
      <nav className="absolute hidden -translate-x-1/2 top-1/2 left-1/2 lg:block">
        <ul className="flex flex-nowrap">
          <li className="px-4">
            <a href="/">首頁</a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end flex-nowrap">
        <button>搜尋</button>
        <button>cart</button>
        <button>login/signup</button>
      </div>
    </header>
  );
}
