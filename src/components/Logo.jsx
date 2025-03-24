import logo from "../assets/images/logo.png";

export const Logo = ({ className = "h-10", ...props }) => {
  return <img src={logo} alt="Logo" className={className} {...props} />;
};
