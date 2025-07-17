import React from 'react';
import ToggleTheme from './DarkSwitcher.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="backdrop-invert-100 backdrop-opacity-10 rounded px-4 lg:px-6 py-2.5">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="#" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap p-4">Cyberpunk Study</span>
      </a>
      <div className="flex items-center lg:order-2">
        <a href="https://thadturner.com" className="font-semibold p-4"> <FontAwesomeIcon icon={faUser} /> </a>
        <ToggleTheme />
      </div>
    </div>
  </div>
);

export default Header;