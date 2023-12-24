import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import ModalTile from '../ModalTile';
import { fetchPokemon } from '../services/getSearchPokemon';

function SearchBar(props) {
  const [search, setSearch] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleSearchClick = async (event, data) => {
    event.preventDefault();
    const response = await fetchPokemon(data);
    setSearch("");
    const results = await response.json();
    setSelectedData(results);
    setModalShow(true);
  };

  return (
    <>
    <Form>
      <Stack direction="horizontal" gap={2}>
        <div>
            <Form.Control
                required
                type="text"
                placeholder="Search for Pokemon"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
        <div>
            <Button variant="danger" onClick={(event) => handleSearchClick(event, search)} type="submit">Search</Button>
        </div>
      </Stack>
    </Form>
    <ModalTile 
              show={modalShow}
              onHide={()=> setModalShow(false)}
              selectedData={selectedData}
              >
    </ModalTile>
    </>
  );
}

export default SearchBar;