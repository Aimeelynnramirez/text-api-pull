import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        title:["Title 1", 
        "Title 2", "Title 3"],
        keyPhrases: [ 'What time is the clock ticking?',
        'Happy Birthday, May all your wishes come true.',
        'This is a great day to date the time.']
    }


    addData () {
/*         if ( this.props.match.params.id ) {
            if ( !this.state.loadKeyPhrases || (this.state.loadKeyPhrases && this.state.loadKeyPhrases.id !== +this.props.match.params.id) ) { */
                axios.get(  '/key_phrases'  )
                    .then( response => {
                         console.log(response);
                        this.setState( { keyPhrases: response.data } );
                    } );
            }
    
    

    deletePostHandler = () => {
        axios.delete( '/key_phrases')
            .then(response => {
                alert('Deleting!',);
                console.log(response);
            });
    }

    render () {
        return (

   /*      let keyPhrases = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            keyPhrases = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadKeyPhrases) { */
        /*   keyPhrases = ( */
                <div className="FullPost">
                <div className="cards">
                <h1> {this.state.title[0]}</h1>
                    <p>{this.state.keyPhrases[0]}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                        </div>
                    </div>
                    <div className="cards">
                        <h1>{this.state.title[1]}</h1>
                    <p>{this.state.keyPhrases[1]}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                        </div>
                    </div>
                    <div className="cards">
                    <h1>{this.state.title[2]}</h1>
                    <p>{this.state.keyPhrases[2]}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                        </div>
                    </div>
                </div>
            );
    }
}
 
export default FullPost;