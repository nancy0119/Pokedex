import './Main.css';
import NavBar from '../NavBar';
import CardTile from '../CardTile';
import Stack from 'react-bootstrap/Stack';
import Filter from '../Filter';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import SearchBar from '../SearchBar';

function Main() {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const pokeFun=async()=>{
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res.data.results);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        // console.log(pokeData);
    }
    const typePokeFun=async(typeUrl)=>{
      setLoading(true);
      const res = await axios.get(typeUrl);
      // console.log(res.data.results);
      getTypePokemon(res.data.pokemon);
      setLoading(false);
      // console.log(pokeData);
  }

    const getPokemon = async(res) => {
        res.map(async(item) => {
            // console.log(item.url);
            const result = await axios.get(item.url);
            // console.log(result.data);
            setPokeData(state => {
                state=[...state, result.data]
                state.sort((a, b) => a.id - b.id);
                return state;
            }
            );
        })
    }

    const getTypePokemon = async(res) => {
      console.log(res);
      setPokeData([])
      res.map(async(item) => {
        console.log(item.pokemon.url);
        const result = await axios.get(item.pokemon.url);
        console.log(result.data);
        const id = result.data.id;
        const img = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
        const imgResult = await fetch(img);
        if(imgResult.ok){
          setPokeData(state => {
            state=[...state, result.data]
            state.sort((a, b) => a.id - b.id);
            return state;
          }
          );
        }
    })
  }

    useEffect(() => {
        pokeFun();
    }, [url]);

  return (
    <div className="App">
    <Stack gap={3}>
      <NavBar />
      <Stack direction='horizontal' gap={3} className='pt-5 mt-4 mx-auto px-3'>
        <SearchBar className='p-2 ms-auto' style={{ marginLeft: 'auto' }}/>
        <Filter className='p-2 me-auto'  typePokeFun={typePokeFun} style={{ marginRight: 'auto' }} />
      </Stack>
      <Container >
        <Row className="center-container align-items-center">
            <CardTile pokemon={pokeData} loading={loading}/>
        </Row>
      </Container>
      <Stack  fixed="bottom" direction='horizontal' className='mx-auto mb-5' gap={3}>
        {
            prevUrl && <Button onClick={()=>{
            setPokeData([])
            setUrl(prevUrl)
        }} variant="danger" className='p-2' style={{width:"fit-content"}}>Previous</Button>
        }
        {
            nextUrl && <Button onClick={()=>{
            setPokeData([])
            setUrl(nextUrl)
        }}variant="danger" className='p-2' style={{width:"fit-content"}}>Next</Button>
        }
      </Stack>
    </Stack>
    </div>
  );
}

export default Main;
