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
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTocart } from '../cartSlice';
const Home=()=>{
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData=async()=>{
    let api=`${import.meta.env.VITE_API_URL}/Product`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }
  useEffect(()=>{
  loadData();
  }, [])

  const ans= mydata.map((key)=>{
   return(
    <>
        <Card style={{ width: '18rem', margin:"10px" }}>
      <Card.Img variant="top" src={key.images}  height="200" />
      <Card.Body>
        <Card.Title>{key.brand}</Card.Title>
        <Card.Text>
           {key.name}
           <br />
           <span style={{color:"red"}}>Category : {key.category}</span> 
           <br />
           <span style={{color:"navy" , fontWeight:"bold"}}>Price : {key.price}</span> 
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addTocart({id:key.id, name:key.name, brand:key.brand, category:key.category, price:key.price, images:key.images, qnty:1}))}}>Add To Cart</Button>
      </Card.Body>
    </Card>

    </>
   )
})
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
    <div id='topwacthes' style={{width:"90%", margin:"auto"}}>
        {ans}
    </div>
        </>
    )
}
export default Home;