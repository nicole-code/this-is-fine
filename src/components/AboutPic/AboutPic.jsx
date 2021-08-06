import './AboutPic.css';

export default function AboutPicture(props) {
    return(
        <div >
            <img src={props.pic} className="aboutPic" />
        </div>
    )
}