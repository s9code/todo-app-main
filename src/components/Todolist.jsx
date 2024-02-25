import './todolist.css'
import { useState } from 'react'
import ImgWhite from '../../src/assets/bg-mobile-light.jpg'
import ImgBlack from '../../src/assets/bg-mobile-dark.jpg'
import Moon from '../../src/assets/icon-moon.svg'
import Sun from '../../src/assets/icon-sun.svg'

const Todolist = () => {

  const [isWhite, setIsWhite] = useState(true);

  function handleClick() {
    let bodyStyle = document.body.style;

    if (bodyStyle.backgroundColor === 'white') {
      bodyStyle.backgroundColor = 'hsl(235, 21%, 11%)';
      setIsWhite(false);

    } else {
      bodyStyle.backgroundColor = 'white';
      setIsWhite(true);
    }
  }

  return (
    <section className='section'>
        <div className='container__img'>
            <img className='img-background' src={isWhite ? ImgWhite : ImgBlack} alt="" />
        </div>

        <div className='container__section'>
          <div className="text-icon__container">
            <h1 className="container-text">T O D O</h1>
            <button onClick={handleClick} className="container-icon"><img className='img-moon' src={isWhite ? Moon : Sun} alt="" /></button>
          </div>
          <div className="containter__new-todo container-form-style">
            <input id={!isWhite ? "change" : ""} className='new-todo__input' placeholder="Create a new todo..." type="text" />
          </div>
          <div id={!isWhite ? "change" : ""} className='containter__clear-todo'>
            <button id={!isWhite ? "change" : ""} className='boton__clear-item'>Item?</button>
            <button id={!isWhite ? "change" : ""} className='boton__clear-item'>Clear Complete</button>
          </div>
          <div id={!isWhite ? "change" : ""} className='containter__todo-boton'>
            <button id={!isWhite ? "change" : ""} className='boton-item'>All</button>
            <button id={!isWhite ? "change" : ""} className='boton-item'>Active</button>
            <button id={!isWhite ? "change" : ""} className='boton-item'>Completed</button>
          </div>
          <div className="container__drag-drop">
            <p className='drag-drop'>Drag and drop to reader list</p>
          </div>
          <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
          </div>
        </div>
    </section>
    
  )
}

export default Todolist