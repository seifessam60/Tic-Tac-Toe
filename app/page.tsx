"use client"
import { useEffect, useState } from "react";
import Cell from "./components/cell";

const winningOptions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]

export default function Home() {
  const [cells,setCells]= useState(["","","","","","","","",""])
  const [go,setGo]= useState("circle")
  const [whoWins,setwhoWins]=useState('')
  useEffect(()=>{
    winningOptions.forEach((option)=>{
      const circleWins = option.every((cell)=>cells[cell]==="circle")
      const crossWins = option.every((cell)=>cells[cell]==="cross")
      if (circleWins) {
        setwhoWins("Circle Wins!")
      }else if (crossWins) {
        setwhoWins("Cross Wins!")
      }
    })
  },[cells])
  useEffect(()=>{
    if (cells.every((cell)=> cell!=="")) {
      setwhoWins("It's A Draw!")
    }
  },[cells,whoWins])
  return (
    <main className="container">
      <div className="gameBoard">
        {cells.map((cell,index)=>(
          <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} cell={cell} whoWins={whoWins}/>
        ))}
      </div>
      <div>{whoWins}</div>
      {!whoWins &&<div className="hide">{`Its Now ${go} Turn`}</div>}
    </main>
  );
}
