import React from 'react';
 
import "./index.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pok from "../../assests/img/Vaporeon.png";
import Attribute from '../Attribute';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalTile(props) {
  // console.log(props.selectedData);
  return (
    <>
      {
        (!props.selectedData) ? "" :
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-header-dark variant-outline-light" >
        <Modal.Title  id="contained-modal-title-vcenter">
        {props.selectedData.name.charAt(0).toUpperCase() + props.selectedData.name.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <h4>Stats of {props.selectedData.name.charAt(0).toUpperCase() + props.selectedData.name.slice(1)} are as follows:</h4>
              {
                props.selectedData.stats.map(poke =>{
                  return(
                    <Attribute name={poke.stat.name} base={poke.base_stat} />
                  );
                })
              }
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4}>
              <img src = {"https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/" + props.selectedData.id + ".svg"} style={{width: "250px", height: "250px"}} alt='Pokemon'/>
          </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      }
    </>
  );
}
export default ModalTile