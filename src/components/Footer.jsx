import FbIcon from "../assets/images/icon_facebook.svg";
import TwtIcon from "../assets/images/icon_twitter.svg";
import MailIcon from "../assets/images/icon_mail.svg";
import TwcIcon from "../assets/images/icon_twitch.svg";
import IgIcon from "../assets/images/icon_instagram.svg";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <p className="fw-light">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000 </p>
            <p className="fw-light">binarcarrental@gmail.com </p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-3 mx-auto">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-md-3 mx-auto">
            <p className="fw-light">Connect With Us</p>
            <p>
              <img className="mx-1" src={FbIcon} alt="" />
              <img className="mx-1" src={IgIcon} alt="" />
              <img className="mx-1" src={TwtIcon} alt="" />
              <img className="mx-1" src={MailIcon} alt="" />
              <img className="mx-1" src={TwcIcon} alt="" />
            </p>
          </div>
          <div className="col-md-3 mx-auto">
            <p>Copyright Binar 2022</p>
            <img src={Logo} alt="" width="100px" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
