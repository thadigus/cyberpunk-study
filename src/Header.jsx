import ToggleTheme from './DarkSwitcher.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <div className="backdrop-invert-100 backdrop-opacity-10 rounded px-4 lg:px-6 py-2.5 text-lg lg:text-2xl">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="#" className="flex items-center">
        <span className="self-center font-semibold whitespace-nowrap p-4">Cyberpunk Study</span>
      </a>
      <div className="flex items-center lg:order-2">
        <a href="https://thadturner.com" className="font-semibold p-4 lg:px-6"> <FontAwesomeIcon icon={faUser} /> </a>
        <a href="https://github.com/thadigus/cyberpunk-study" className="font-semibold p-4 lg:px-6"> <FontAwesomeIcon icon={faGithub} /> </a>
        <ToggleTheme />
      </div>
    </div>
  </div>
);

export default Header;