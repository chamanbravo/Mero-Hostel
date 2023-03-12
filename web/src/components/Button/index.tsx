import { Link } from "react-router-dom";
import "./index.scss";

type ButtonProps = {
  link: string;
  cName: string;
  innerText: string;
};

function Button({ link, cName, innerText }: ButtonProps) {
  return (
    <Link to={link} className={cName}>
      {innerText}
    </Link>
  );
}

export default Button;
