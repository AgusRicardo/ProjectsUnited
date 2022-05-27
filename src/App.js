import {Card, Button} from 'react-bootstrap'
import './styles/app.css'
import db from "./db/db.json";
function App() {
  return (
    <>
      <b>V.1.0.0</b>
    <div className='app__content-container'>
      {db.projects.map((value) => (
        <Card style={{ width: "15rem" }} key={value.id} className='app__content'>
          <Card.Img variant="top" src={value.img} />
          <Card.Body className='app__card-body'>
            <Card.Title>{value.name}</Card.Title>
            <Card.Text>{value.description}</Card.Text>
            <a href="../Ahorcado/index.html" className='app__btn'><Button variant="primary" className='app__btn'>Abrir</Button></a>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
}

export default App;
