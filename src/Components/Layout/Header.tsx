import logo from '../../Images/logoApun.png';
import '../../CSS/style.css';
const Header = () => {
  return (
    <div>
      <div className="banner-style py-3">
        <img src={logo} alt='logoimage' className="logo-style px-3" />
        <h1 className="heading1">Reduxopedia</h1>        
      </div>
    </div>
  );
};

export default Header;
