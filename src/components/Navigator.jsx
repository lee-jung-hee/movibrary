import { Link } from "react-router-dom";
import { NavigatorContainer, NavigatorLogo } from "./Navigator.styles";
import SearchInput from "./SearchInput";

function Navigator() {
  return (
    <Link to="/">
      <NavigatorContainer>
        <NavigatorLogo>⬤ <span className="logo-text">Movibrary</span></NavigatorLogo>
        <SearchInput />
      </NavigatorContainer>
    </Link>
  );
}

export default Navigator;
