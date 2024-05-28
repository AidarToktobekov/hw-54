import { useState } from "react";
import BoardLog from "../returnBoard/BoardLog";



function PlayingField() {

    const [board, setBoard] = useState([{hasItem: false, clicked: false}])

    const squares=()=>{
        const randomNum = Math.floor(Math.random() * 36);

        for (let i = 0; i < 36; i++) {
            const square = {hasItem: false, clicked: false};
            board.push(square);
        }
        board.splice(0, 1)
        board[randomNum].hasItem = true;
        console.log(randomNum);
        
        console.log(board[randomNum]);
        
    }
    squares();


    return (
      <>
        <div className="board">
            {board.map((square)=>{
                
                return(
                    <BoardLog hasItem={square.hasItem} clicked={square.clicked}></BoardLog>
                )
            })}
        </div>
      </>
    )
  }
  
  export default PlayingField
  