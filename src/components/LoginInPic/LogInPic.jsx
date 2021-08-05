import './LogInPic.css';

export default function ProfileCard(props) {
    return(
        <div className="logo-container">
            <img src={props.pic} className="comic" />
        </div>
    )
}