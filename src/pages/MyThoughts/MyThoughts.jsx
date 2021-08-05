import { Component } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import './MyThoughts.css';

export default class MyThoughts extends Component {
  state = {
    thoughts: [],
  }  
  getThoughts = async () => {
    let jwt = localStorage.getItem('token')
    let fetchThoughtDataResponse = await fetch('/api/thoughts/' + this.props.user._id, {headers: {'Authorization': 'Bearer ' + jwt}})
    if (!fetchThoughtDataResponse.ok) throw new Error("Couldn't fetch thoughts!")
    let thoughtsData = await fetchThoughtDataResponse.json() // <------- convert fetch response into a js object
    console.log("get thoughts", thoughtsData)
    this.setState({thoughts: thoughtsData});
  };
  //getOne = asyync (incoming_thought_id) => 
  //thoughts/the id
  async componentDidMount() {
    try {
     await this.getThoughts();
    } catch (err) {
      console.error('ERROR:', err) // <-- log if error
    }
  };
  render() {
    return (
     <div className="my-thought">
        <h1>All of my thoughts</h1>
          <div className="my-thoughts">
              {this.state.thoughts.map(t => 
              <div class="my-thought-container">
              <div class="my-thought-content">
              <Link class="my-thought-link" to={`/thoughts/${t._id}`} activeClassName="current">{t.entryName} <br/> {t.emoji}</Link>
         </div>
      </div>
      )}
  </div>
</div>
    
    )
  }
}
