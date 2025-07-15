import React from 'react';
import ToggleTheme from './DarkSwitcher.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cyberpunk Study</span>
        </a>
        <div className="flex items-center lg:order-2">
          <a href="https://thadturner.com" className="font-semibold dark:text-white p-2">  <FontAwesomeIcon icon={faUser} /> </a>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;