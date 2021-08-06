import { Component } from 'react';
import React from 'react';
import './About.css';
import AboutPicture from '../../components/AboutPic/AboutPic';
import aboutPic from '../../images/thisIsFineLogo.png';

export default class About extends React.Component {
    render(){
        return(
        <div className="aboutMain">
            
            <div className="logo">
            <AboutPicture pic={aboutPic} />
            </div>

            <div className="about-text">
            <h1>..do you ever feel like you're engulfed in a steaming dumpster 
                fire wide-eyed with an oversized grin on your face wondering 
                just how you got here?</h1>
                <br/>
                <br/>
            <h1>Same.</h1>
                <br/>
            <h2>anx-i-e-ty</h2>
            <h2>-noun-</h2>    
            <h2>Your home. Your life. Your state of mind. And the reason you are unable to function as a human being.</h2>
                <br/>
            <h3>This Is Fine is a tiny corner for you to unload the psychological weight of your existence. 
                Based on the thought record model used by cognitive behavioural therapists, scribble down the 
                moments that had you knee deep in the throngs of your anxious thoughts. Save them because your 
                therapist told you to. Delete them if you don't want to be reminded of your mind's trickery. </h3>  
                <br/>  
            <h3>Mindfulness? Psh, none of that here!</h3>
                <br/>
            <h3>After you’ve completed your thought record, visit our Mindlessness section to switch your mind off and turn the laughs on. </h3>    
            </div>

        </div>
           

        )
    
    };
}