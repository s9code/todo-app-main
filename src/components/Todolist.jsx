import './todolist.css'
import Img from '../../src/assets/bg-mobile-light.jpg'

const Todolist = () => {
  return (
    <section>
        <div className='container__img'>
            <img className='img-background' src={Img} alt="" />
        </div>
        <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </section>
    
  )
}

export default Todolist