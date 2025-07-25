import { useNavigate } from "react-router-dom";
import { SearchInputText } from "./SearchInput.styles";

function SearchInput() {
  const navigator = useNavigate();

  return (
    <SearchInputText
      onChange={(e) =>
        navigator(`/search?movie=${e.target.value.toLowerCase()}`)
      }
      type="text"
      placeholder="Enter movie title"
    />
  );
}

export default SearchInput;
