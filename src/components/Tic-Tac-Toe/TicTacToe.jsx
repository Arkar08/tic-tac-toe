import 'react'
import './TicTacToe.css';
import circle_icon from '../../assets/circle.png';
import cross_icon from '../../assets/cross.png';
import { useState } from 'react';

const TicTacToe = () => {

  const data = ['','','','','','','','',''];

  const [lock,setLock] = useState(false)
  const [count,setCount] = useState(0)

  const boxClick = (e, number) => {
    if(lock){
      return 0;
    }
    if(count%2 === 0){
      e.target.innerHTML = `<img src=${cross_icon} alt='cross' />`
      data[number]= 'X';
      setCount(count+1)
    }else{
      e.target.innerHTML = `<img src=${circle_icon} alt='circle' />`
      data[number]= 'O';
      setCount(count+1)
    }
  }


  const checkWin = ()=>{
    if(data[0]=== data[1] && data[1]===data[2] && data[0]!==''){
      setLock(true)
    }else if(data[3]=== dat)
  }


  return (
    <div className="container">
      <h2 className='text'>Tic Tac Toe Game in React</h2>
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
        <button className='btn'>Reset</button>
      </div>
    </div>
  )
}

export default TicTacToe
