const Cards = (props) => {
    const {name, heading, para} = props;
    return (
        <div className="box-cards">
            <h1>{name}</h1>
            <h3>{heading}</h3>
            <p>{para}</p>
        </div>
    );
}

export default Cards;