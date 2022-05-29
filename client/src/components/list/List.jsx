import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
<<<<<<< HEAD
<<<<<<< HEAD
import "./list.scss";
import {v4 as uuid} from 'uuid';
export default function List({list}) {
=======
import "./list.css";
=======
import "./list.scss";
>>>>>>> parent of 828b62f (Update List.jsx)

export default function List() {
>>>>>>> cf12716e5e79233b17ea6eadd56fbcb076767400
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
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
          { list.content && list.content.map((movie,i)=>(
          <ListItem key={uuid()} index={i}  movie={movie} />

          ))}
      
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}