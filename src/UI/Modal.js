import { createPortal } from 'react-dom';
import classes from './Modal.module.css';


const Background = (props) => {
  return (
    <div className={classes.modal__background}>
      {props.children}
    </div>
  )
}


const ModalContent = (props)=>  {
  return (
    <div className={classes.modal}>
      <div className={classes.modal__header}>
        <h2 className={classes.modal__title}>{props.item.title}</h2>
        <button onClick={props.closeModal} className={classes.modal__button}>X</button>
      </div>
      <div className={classes.modal__content}>
        <div className={classes.modal__data}>
          <p >{props.item.content}</p>
          <a href={props.item.url} className={classes.modal__deepening}>See the article</a>
        </div>
        <img height={300} width={60} className={classes.modal__image} src={props.item.urlToImage} alt="Loading..."></img>
      </div>
    </div>
  )
}


const Modal = (props)=>{
    return createPortal(
        <>
          <Background></Background>
          <ModalContent item={props.item}  closeModal={props.closeModal}/>
        </>,
        document.getElementById("overlays")
    )
}


export default Modal;