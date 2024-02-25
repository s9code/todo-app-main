import './todolist.css'
import { useState } from 'react'
import ImgWhite from '../../src/assets/bg-mobile-light.jpg'
import ImgBlack from '../../src/assets/bg-mobile-dark.jpg'

const Todolist = () => {

    const [isWhite, setIsWhite] = useState(true);

  function handleClick() {
    let bodyStyle = document.body.style;

    if (bodyStyle.backgroundColor === 'white') {
      bodyStyle.backgroundColor = 'black';
      setIsWhite(false);

    } else {
      bodyStyle.backgroundColor = 'white';
      setIsWhite(true);
    }
  }
  //const [index, setIndex] = useState(0);

  return (
    <section className='section'>
        <div className='container__img'>
            <img className='img-background' src={isWhite ? ImgWhite : ImgBlack} alt="" />
        </div>

        <div className='container__section'>
          <div className="text-icon__container">
            <h1 className="container-text">T O D O</h1>
            <button onClick={handleClick} className="container-icon"><img className='img-moon' src="../../src/assets/icon-moon.svg" alt="" /></button>
          </div>
          <div className="containter__new-todo container-form-style">
            <input className='new-todo__input' placeholder="Create a new todo..." type="text" />
          </div>
          <div className="containter__todo-boton">
            <button className='boton-item'>All</button>
            <button className='boton-item'>Active</button>
            <button className='boton-item'>Completed</button>
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