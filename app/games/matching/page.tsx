'use client';

import React, { useState } from "react";

const phoneme_one = "Long I";
const phoneme_two = "Short I";
const words_one = ['write','white','sight','side','right','ride','prize','nine','night','nice','mine','line'];
const words_two = ['with','wish','wind','win','will','which','trick','this','think','thing','sit','since'];
const words = words_one.concat(words_two)
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);

let words_one_done = [""];
let words_two_done = [""];

let word_picked_first = "";

function Card({word}: {word: string}) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("lightgreen");
  const [done, setDone] = useState(false);
  function handleClick() {
    if (text === "") {
      setText(word);
      setColor("lightblue");
    } else {
      setText("");
      setColor("lightgreen");
    }

  }
  
  return <button 
          style={{ backgroundColor: color, 
                   borderRadius: "5px",
                   margin: "5px",
                   width:"100px",
                   height:"80px",
                   padding:"0px",
                   lineHeight: "80px" }} 
          onClick={handleClick}>
            {text}
          </button>
}


const cardList = words.map((word) => (
  <Card key={word} word={word} />
))
cardList.splice(6, 0, <br></br>)
cardList.splice(13, 0, <br></br>)
cardList.splice(20, 0, <br></br>)

function Bucket({ words_done, phoneme }: { words_done: string[], phoneme: string }) {
  return (
  <div style={{ backgroundColor: "lightyellow", margin: "20px", padding: "10px", height: "75%", width: "200px"}}>
    <b><h2>{phoneme}</h2></b>
    <ul>
      {words_done.map((word) => (
        <li>{word}</li>
      ))}
    </ul>
  </div>
  )
}

const Page = () => (
  <div style={{ display: "flex" }}>
    <div>
      <h2 className="text-2xl font-bold">Matching Game</h2>
      
        {cardList}
      
    </div>
    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
      <Bucket words_done={words_one_done} phoneme={phoneme_one}/>
      <Bucket words_done={words_two_done} phoneme={phoneme_two}/>
    </div>
  </div>
);
export default Page;
