import { Input, InputGroup, InputLeftElement, Box } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const navigate = useNavigate();

  return (
    <Box flex={1} maxW="500px">
      <form onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
              setSearchText(ref.current.value);
              navigate("/games");
          }
      }}>
          <InputGroup>
              <InputLeftElement children={<BsSearch/>}/>
            <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
          </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
