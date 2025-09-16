import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ban1 from "../Images/img1.jpg";
import ban2 from "../Images/img2.webp";
import ban3 from "../Images/img3.jpg";
import ban4 from "../Images/img4.jpg";
import ban5 from "../Images/img5.jpg";
import shoe1 from"../Images/banner1.webp";
import shoe2 from"../Images/banner2.webp";
const Home=()=>{
    return(
        <>
          <Carousel>
      <Carousel.Item>
        <img src={ban1} width="100%" height="600" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban2} width="100%" height="600" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban3} width="100%" height="600" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban4} width="100%" height="600" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban5} width="100%" height="600" />
        <Carousel.Caption>
          <h3>First slide label</h3>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1> Our Top Collections</h1>

    <div id='topshoes'>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe1}  height="300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Show
        </Card.Text>
        <Button variant="primary">Know More</Button>
      </Card.Body>
    </Card> 
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe2}  height="300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Show
        </Card.Text>
        <Button variant="primary">Know More</Button>
      </Card.Body>
    </Card> 
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe1}  height="300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Show
        </Card.Text>
        <Button variant="primary">Know More</Button>
      </Card.Body>
    </Card> 
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe1}  height="300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Show
        </Card.Text>
        <Button variant="primary">Know More</Button>
      </Card.Body>
    </Card> 
    </div>
        </>
    )
}

export default Home;