import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
<<<<<<< HEAD
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.css";
import {v4 as uuid} from 'uuid';
export default function List({list}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

=======
import { useEffect, useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.css";
import {v4 as uuid} from 'uuid';
import { useLocation } from 'react-router-dom';

export default function List({list}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
const  [moviescontent,setmoviecontent]=useState(list.content)
const location =useLocation();
useEffect(()=>{

},[])
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
<<<<<<< HEAD
    if (direction === "right" && slideNumber < 10 - clickLimit) {
=======
    if (direction === "right" && slideNumber < 5) {
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
<<<<<<< HEAD
          { list.content && list.content.map((movie,i)=>{
=======
          { moviescontent && moviescontent.map((movie,i)=>{
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
           
      return <ListItem key={uuid()} index={i}  movie={movie} />

})}
      
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}