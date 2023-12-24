import React from 'react';
import Card from 'react-bootstrap/Card';
import ModalTile from '../ModalTile';
 

function CardTile({pokemon, loading, infoPokemon}) {
  // console.log(pokemon);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);

  const handleCardClick = (event, data) => {
    event.preventDefault();
    setSelectedData(data);
    setModalShow(true);
  };
  return (
    <>  
    {
      loading ? <h1>Loading...</h1> : pokemon.map((item) => {
      var name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
      
        return(
          <>
            <Card key = {item.id} className="shadow mb-5 bg-white rounded" style={{ width: '18rem', cursor: "pointer", margin: "2%"}} 
            onClick={(event) => handleCardClick(event, item)}>
              <Card.Img variant="top" src={"https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/" + item.id + ".svg"} style={{width:"250px", height:"250px"}} className='py-3'/>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Type: 
                  {
                    item.types.map(poke =>{
                      var type = poke.type.name;
                      var modType = type.charAt(0).toUpperCase() + type.slice(1);
                      return(" " + modType);
                    })
                  }
                </Card.Text>
                <Card.Text>
                  ID: {item.id}
                </Card.Text>
              </Card.Body>
            </Card>
            <ModalTile 
              show={modalShow}
              onHide={()=> setModalShow(false)}
              selectedData={selectedData}
              >
            </ModalTile>
          </>
        )
      })
    }
    </>
  );
}
export default CardTile;