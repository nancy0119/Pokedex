import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Filter(props) {
  const handleFilterclick = async(event, data) => {
    console.log(data);
    props.typePokeFun(`https://pokeapi.co/api/v2/type/${data}`);
  }
  return (
    <DropdownButton id="dropdown-basic-button" title="Types" variant="danger">
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "normal")}>Normal</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "fighting")}>Fighting</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "flying")}>Flying</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "poison")}>Poison</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "ground")}>Ground</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "rock")}>Rock</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "bug")}>Bug</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "ghost")}>Ghost</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "steel")}>Steel</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "fire")}>Fire</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "water")}>Water</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "grass")}>Grass</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "electric")}>Electric</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "psychic")}>Psychic</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "ice")}>Ice</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "dragon")}>Dragon</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "dark")}>Dark</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "fairy")}>Fairy</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "unknown")}>Unknown</Dropdown.Item>
      <Dropdown.Item onClick={(event) => handleFilterclick(event, "shadow")}>Shadow</Dropdown.Item>

    </DropdownButton>
  );
}

export default Filter;