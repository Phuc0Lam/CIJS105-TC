

const Card = (props) => {

    return (
        <div className="card">
            <div className="name">Tôi tên: {props.name} </div>
            <div className="learningClass">Học lớp: {props.learningClass}</div>
            <div className="slogan">{props.slogan}</div>

        </div>
    )
}

export default Card;