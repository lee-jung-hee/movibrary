import { Link } from "react-router-dom";
import { NavigatorContainer, NavigatorLogo } from "./Navigator.styles";

function Navigator() {
  return (
    <Link to="/">
      <NavigatorContainer>
        <NavigatorLogo>⬤ Movibrary</NavigatorLogo>
      </NavigatorContainer>
    </Link>
  );
}

export default Navigator;
