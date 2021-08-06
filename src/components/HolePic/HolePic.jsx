import './HolePic.css';

export default function HolePic(props) {
    return(
        <div >
            <img src={props.pic} className="holePic" />
        </div>
    )
}