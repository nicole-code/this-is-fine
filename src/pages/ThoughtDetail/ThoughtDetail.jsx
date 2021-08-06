import { Component } from 'react';
import React from 'react';
import './ThoughtDetail.css';

export default class ThoughtDetail extends Component {
  state = {
    oneThought: {},
  } 

//   getOne = async (incoming_thought_id) => {
//     let fetchThoughtDataResponse = await fetch('/api/thoughts/:id')
//     if (!fetchThoughtDataResponse.ok) throw new Error("Couldn't fetch your thought!")
//     let oneThoughtData = await fetchThoughtDataResponse.json() // <------- convert fetch response into a js object
//     console.log("get thought", oneThoughtData)
//     this.setState({oneThought: oneThoughtData});
//   };

  async componentDidMount() {
    console.log("LOOK HERE", this.props.match.params.id)
    let id = this.props.match.params.id
    console.log(id)
    try {
        let fetchThoughtDataResponse = await fetch(`/api/thoughts/detail/${id}`)
        if (!fetchThoughtDataResponse.ok) throw new Error("Couldn't fetch your thought!")
        let oneThoughtData = await fetchThoughtDataResponse.json() // <------- convert fetch response into a js object
        console.log("get thought", oneThoughtData)
        this.setState({oneThought: oneThoughtData});    
    } catch (err) {
      console.error('ERROR:', err) // <-- log if error
    }
  };

  handleDelete = async () => {
    try {
        let id = this.props.match.params.id
        console.log("LOOK HERE FOR DELETE STUFF", this.props.match.params.id)
        let jwt = localStorage.getItem('token')
        console.log(jwt)
        let fetchResponse = await fetch((`/api/thoughts/detail/${id}`), {
            method: "DELETE",
            headers: {"Content-Type": "application/json" ,'Authorization': 'Bearer ' + jwt}, 
        })  
        console.log(fetchResponse, "HEY DIS FETCH RESPONSE!!")
        let deleteData =  await fetchResponse.json() 
        console.log("GET DELETE", deleteData)
        if (!fetchResponse.ok) throw new Error("Couldn't do the delete thing!")
        this.props.history.push('/mythoughts');
        
    } catch (err) {
        console.error('ERROR:', err) 
    }
  }


  render() {
    return (
      <div className="thought-detail-container">
        <h1 className="thought-detail-header">Thought Detail</h1>
          <div className="thought-detail-content">
             &nbsp;
              <br />
              <br />
          <div className="thought-detail-contents">
            <div class="lines"></div>
              <li className="thought-detail-entry-info">{this.state.oneThought.entryName}</li>
              <ul className="list">

              <br />
              <br />

              <li>What emoji resonantes with you right now?</li>
              <li className="thought-info">{this.state.oneThought.emoji}</li>

              <br />
              <br />

              <li>What was the situation?</li>
              <li className="thought-info">{this.state.oneThought.situation}</li>

              <br />
              <br />

              <li>Describe your emotions or feelings:</li>
              <li className="thought-info">{this.state.oneThought.emotion}</li>

              <br />
              <br />

              <li>Automatic thoughts:</li>
              <li className="thought-info">{this.state.oneThought.automaticThoughts}</li>

              <br />
              <br />

              <li>Evidence supporting those thoughts:</li>
              <li className="thought-info">{this.state.oneThought.evidenceSupport}</li>

              <br />
              <br />

              <li>Evidence against those thoughts:</li>
              <li className="thought-info">{this.state.oneThought.evidenceAgainst}</li>

              <br />
              <br />

              <li>New balanced thought:</li>
              <li className="thought-info">{this.state.oneThought.balanceThought}</li>

              <br />
              <br />

              <li>How do you feel now?</li>
              <li className="thought-info">{this.state.oneThought.feelNow}</li>

              </ul>
              <div className="thought-detail-delete-button">
                <button className="delete-button" onClick={this.handleDelete}>Delete this thought record</button>
              </div>
            </div>
          </div>

            <br />
        </div>
    )
  }
}