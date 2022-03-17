import classes from './Card.module.css';

const Card = (props)=>{

    return (
        <div className={classes.card} onClick={props.showDetails.bind(null, props.id)}>
            <h3 className={classes.source}>{props.item.source.name}</h3>
            <h1 className={classes.card__title}>{props.item.title}</h1>
            <div className={classes.card__content}>
                <p className={classes.card__description}>{props.item.description}</p>
                <h3 className={classes.author}>{props.item.author}</h3>
            </div>
        </div>
    )
}

export default Card;