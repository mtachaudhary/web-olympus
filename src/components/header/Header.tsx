import './Header.style.scss';
import { ReactComponent as Logo } from '../../images/wo-logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='logoOuter'>
          <a href="/">
            <Logo />
          </a>
        </div>
        <nav className='navigation'>
          <ul>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">PORTFOLIO</a></li>
            <li><a href="#">ABOUT US</a></li>
          </ul>
        </nav>
        <a href="#" target="_blank" className='btnLink'>Contact Us</a>
      </div>
    </div>
  );
}

export default Header;