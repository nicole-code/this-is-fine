import { Component } from 'react';
import React from 'react';

export default class Mindlessness extends React.Component {

    state = {
        joke: "",
        quote: "",
    }

    async fetchJoke() {
        try {
            console.log("i am inside the fetch")
            const response = await fetch("http://icanhazdadjoke.com", {
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
      }


        render(){
            return(
            <div className="mindless">
                
                <br />
                <br />
                <button onClick={()=>this.updateJoke()}>Click here for a new dad joke!</button>
                <button onClick={()=>this.updateYe()}>Rando-Yeez Quote</button>
                <br />
                <br/>
                
                <p>
                  {this.state.joke}
                  <br />
                  {this.state.quote}
                  </p>

            </div>
            )
        }
        

}