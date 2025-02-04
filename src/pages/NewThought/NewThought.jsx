import { Component } from 'react';
import './NewThought.css';
import HolePic from '../../components/HolePic/HolePic';
import hole from '../../images/hole.png'
// import history from "../../history";

export default class NewThoughtRecordForm extends Component {

    state = {
        entryName: "",
        emoji: "",
        situation: "",
        emotion: "",
        automaticThoughts: "",
        evidenceSupport: "",
        evidenceAgainst: "",
        balanceThought: "",
        feelNow: "",
    };

    handleChange = (e) => {
        this.setState({ 
        [e.target.name]: e.target.value 
        });
    };



    handleSubmit = async (evt) => {
        evt.preventDefault()
        let body = {
            entryName: this.state.entryName,
            emoji: this.state.emoji,
            situation: this.state.situation,
            emotion: this.state.emotion,
            automaticThoughts: this.state.automaticThoughts,
            evidenceSupport: this.state.evidenceSupport,
            evidenceAgainst: this.state.evidenceAgainst,
            balanceThought: this.state.balanceThought,
            feelNow: this.state.feelNow,
            user: this.props.user._id,
        }

        let jwt = localStorage.getItem('token')

        let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Authorization' : 'Bearer ' + jwt,
            },
            body: JSON.stringify(body)
        };
        await fetch ("/api/submitThoughtRecord", options)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    entryName: "",
                    emoji: "",
                    situation: "",
                    emotion: "",
                    automaticThoughts: "",
                    evidenceSupport: "",
                    evidenceAgainst: "",
                    balanceThought: "",
                    feelNow: "",
                })
            this.props.history.push("/mythoughts")    
            })
    }

    render () {
        return (
            <div class="thought-container">
                <h1 class="thought-header">New Thought Record</h1>
                    <div class="thought-content-th">
                    <div className="hole-container-th">
                    <div className="holeone-th">
                        <HolePic pic={hole} /> 
                    </div>
                    <div className="holetwo-th">
                        <HolePic pic={hole} /> 
                    </div>
                    <div className="holethree-th">
                        <HolePic pic={hole} /> 
                    </div>
                </div>
                    
                        <div className="lines-th"></div>

                    <form onSubmit={this.handleSubmit} class="thought-form">
                        
                        <div className="thought-entry">
                            <li class="thought-entry-title">Name this entry:</li>
                            <textarea required class="thought-entry-title-info" name="entryName" value={this.state.entryName} onChange={this.handleChange}/>
                        </div>

                        <ul className="list">

                        <li>What emoji resonantes with you right now?</li>
                        <br />
                        <li className="textbox">
                        <select required class="thought-info" name="emoji" value={this.state.emoji} onChange={this.handleChange}>

                        <option>🙂</option>
                        <option>🤪</option>
                        <option>😔</option>
                        <option>🤬</option>
                        <option>🙄</option>
                        <option>😧</option>
                        <option>🤭</option>
                        <option>🤯</option>
                        <option>😤</option>
                        <option>😢</option>
                        <option>😳</option>
                        <option>🙄</option>
                        <option>😬</option>
                        <option>💩</option>
                        <option>😍</option>
                        <option>😒</option>
                        <option>😭</option>
                        <option>🤣</option>
                        </select>
                        </li>

                        <br />
                        <br />

                        <li>What was the situation?</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="situation" value={this.state.situation} onChange={this.handleChange}/>
                        </li>

                        <br />

                        <li>Describe your emotions or feelings:</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="emotion" value={this.state.emotion} onChange={this.handleChange} />
                        </li>

                        <br />

                        <li>Automatic thoughts:</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="automaticThoughts" value={this.state.automaticThoughts} onChange={this.handleChange}/>
                        </li>

                        <br />

                        <li>Evidence supporting those thoughts:</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="evidenceSupport" value={this.state.evidenceSupport} onChange={this.handleChange} />
                        </li>

                        <br />

                        <li>Evidence against those thoughts:</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="evidenceAgainst" value={this.state.evidenceAgainst} onChange={this.handleChange} />
                        </li>

                        <br />

                        <li>New balanced thought:</li>
                        <li class="textbox">
                        <textarea class="thought-info" name="balanceThought" value={this.state.balanceThought} onChange={this.handleChange}/>
                        </li>

                        <br />

                        <li>How do you feel now?</li>
                        <li class="text">
                        <textarea class="thought-info" name="feelNow" value={this.state.feelNow} onChange={this.handleChange}/>
                        </li>

                        <br />

                        <div className="thought-save-button">
                        <button class="save-button">Save This Record</button>
                        </div>   
                        <br />
                        </ul>

                    </form>
                </div>
                <br />
                <br />
            </div>
    )
  }
}