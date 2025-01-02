import 'react'
import './TicTacToe.css';
import circle_icon from '../../assets/circle.png';
import cross_icon from '../../assets/cross.png';
import { useState,useRef } from 'react';

const TicTacToe = () => {
  const titleRef = useRef(null);
  const [data,setData] = useState(['','','','','','','','',''])

  const [lock,setLock] = useState(false)
  const [count,setCount] = useState(0)

  const boxClick = (e, number) => {
    if(lock){
      return 0;
    }
    if(data[number] ===''){
      const newData = [...data];
      if(count%2==0){
        newData[number] = 'X';
        e.target.innerHTML = `<img src=${cross_icon} alt='cross' />`
       
      }else{
        newData[number] = 'O';
        e.target.innerHTML = `<img src=${circle_icon} alt='circle' />`
      }
      setData(newData); 
      setCount(count + 1);
      checkWin(newData);
    }
  }



    const checkWin = (newData) => {
      // Same winning conditions ** this point should be known **
      const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (newData[a] && newData[a] === newData[b] && newData[b] === newData[c]) {
          won(newData[a]);
          return;
        }
        if(count === 8){
          won('draw');
        }
      }
    };

  const won = (winner)=>{
    setLock(true);
    if(winner === 'X'){
      titleRef.current.innerHTML = 'Player 1 won the Game';
    }else if(winner === 'O'){
      titleRef.current.innerHTML = 'Player 2 won the Game';
    }else{
      titleRef.current.innerHTML = 'Match Draw';
    }
   
  }

  const resetGame = () => {
    setData(['', '', '', '', '', '', '', '', '']);
    setCount(0);
    setLock(false);
    titleRef.current.innerHTML = 'Tic Tac Toe Game in React';
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.innerHTML = ''; 
    });
  };


  return (
    <div className ='container'>
      <h2 className='text' ref={titleRef}>Tic Tac Toe Game in React</h2>
      <div className='playerContainer'>
        <h2 className='player'>Player One - <span>X</span></h2>
        <h2  className='player'>Player Two - <span>O</span></h2>
      </div>
      <div className='boxContainer'>
        <div className='row'>
          <div className='box' onClick={(e)=>boxClick(e,0)}></div>
          <div className='box' onClick={(e)=>boxClick(e,1)}></div>
          <div className='box' onClick={(e)=>boxClick(e,2)}></div>
        </div>
        <div className='row'>
          <div className='box' onClick={(e)=>boxClick(e,3)}></div>
          <div className='box' onClick={(e)=>boxClick(e,4)}></div>
          <div className='box' onClick={(e)=>boxClick(e,5)}></div>
        </div>
        <div className='row'>
          <div className='box' onClick={(e)=>boxClick(e,6)}></div>
          <div className='box' onClick={(e)=>boxClick(e,7)}></div>
          <div className='box' onClick={(e)=>boxClick(e,8)}></div>
        </div>
      </div> 
      <div className='btnContainer'>
        <button className='btn' onClick={resetGame}>Reset</button>
      </div>
    </div>
  )
}

export default TicTacToe
