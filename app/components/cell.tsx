import { Dispatch, SetStateAction } from "react";

type cellProps={
    cells:string[]
    setCells:Dispatch<SetStateAction<string[]>>
    id:number
    go:string
    setGo:Dispatch<SetStateAction<string[]>>
    cell:string
    whoWins:string
}

export default function Cell({go,setGo,id,cells,setCells,cell,whoWins}:cellProps) {
    function handleCellChange(cellToChange:string){
        const copyCells = [...cells]
        copyCells[id]=cellToChange
        setCells(copyCells)
    }
    const handleClick=(e)=>{
        if (whoWins) {
            return
        }
        const notTaken= !cells[id]
        if (notTaken) {
            if (go==="circle") {
                handleCellChange("circle")
                setGo("cross")
            }else if (go==="cross") {
                handleCellChange("cross")
                setGo("circle")
            }
        }
    }
return (
    <div className="square" onClick={handleClick}>
        <div className={cell}>{cell?(cell==="circle"? "o":"x"):""}</div>
    </div>
)
}