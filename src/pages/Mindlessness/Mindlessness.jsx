import { Component } from 'react';
import React from 'react';
import './Mindlessness.css';
export default class Mindlessness extends React.Component {
    state = {
        joke: "",
        quote: "",
    }
    async fetchJoke() {
        try {
            console.log("i am inside the fetch")
            const response = await fetch("https://icanhazdadjoke.com", {
                headers: {
                  Accept: "application/json",
                },
              });
              console.log("i have done headers")
              const data = await response.json();
              console.log("here the joke", data)
              return data
        } catch (err) {
          console.error('ERROR:', err) // <-- log if error
        }
      };
     async fetchYe() {
        try {
            console.log("inside affirmation fetch")
            const response = await fetch("https://api.kanye.rest/", {
                headers: {
                    Accept: "application/json",
                },
            });
            console.log("i made it past headers")
            const yeData = await response.json();
            console.log("yo do i have affirm data?", yeData)
            return yeData
        } catch (err) {
            console.error('ERROR:', err) // <-- log if error
        }
     };
    updateYe = async (incoming_ye) => {
        let affirmData = await this.fetchYe()
        this.setState({
            quote: affirmData.quote
        })
    }
    updateJoke = async (incoming_joke) => {
          let data = await this.fetchJoke()
          console.log("look over here for fetching joke", data)
          this.setState ({
              joke:  data.joke
          });
      };
        render(){
            return(
            <div className="mindless">
                <div className="mindless-container">
                <h1 className="mindless-header">"Pay No Mind"</h1>
                
                <h3 className="mindless-info">
                Welcome to the Mindlessness page.
                <br />
                Here you can generate random quotes to take your 
                <br />
                mind off of those anxious thoughts!</h3>
                </div>
                <div class="mindless-content">
                <button class="joke-button" onClick={()=>this.updateJoke()}>Click here for a new dad joke!</button>
                <br />
                <br />
                    <div className="joke-container">
                        <div className="joke-content">
                            <p>{this.state.joke}</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <button className="ye-button" onClick={()=>this.updateYe()}>Rando-Yeez Quote</button>
                <br />
                <br />
                    <div className="ye-container">
                        <div className="ye-content">
                            <p>{this.state.quote}</p>
                    </div>
                </div>
                </div>
                <br />
            <br/>
        </div>
            )
        }
}