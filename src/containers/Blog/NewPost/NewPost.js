import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './NewPost.css';
import FullPost from '../FullPost/FullPost';
class NewPost extends Component {
    constructor(props) {
        super(props);
    this.state = {
        textTitle: '',
        textKeyPhrases: '',
        submitted: false,
        dataStore: [
    {
        title: 'Title 2',
        keyPhrases: 'here',
    }
     ],
       
     keyStore: 
     [   {    
       keyPhrases: 'key'
    
     }  
   ],
 
   };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);

}
   
    handleChange(e) {
        this.setState({ 
            textTitle: e.target.value
        })
    }  
    handleKeyChange(e) {
        this.setState({ 
            textKeyPhrases: e.target.value
        })
    }          
//binding the data for that to pass in post
    postDataHandler = () => {
        const data = {
        title: this.state.textTitle,
        keyPhrases: this.state.textKeyPhrases,
        };
        let store = this.state.dataStore;
        store.push(data);
        console.log(this, 'look');
        axios.post('/key_phrases', data)
            .then(response => {
                console.log(response);
                this.props.history.push('/key_phrases');
                //replace does the same a redirecting...
                 this.setState({
                    dataStore:store,
                    submitted:true
                });
            });
    }

    render () {

            const dataList= this.state.dataStore;
            const keyList = this.state.keyStore;
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to ="/key_phrases" />;
        }
        return (
            <div className="NewPost">
                {redirect}

                <h1>Add a Message</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={ this.handleChange } />
                <label>keyPhrases pull input</label>
                <textarea rows="5" value={this.state.keyPhrases} onChange={ this.handleKeyChange } />
                <button onClick={this.postDataHandler}>Add this Message </button>
                <span> {console.log(dataList)}</span> 
<FullPost text={this.state.title}/>
            </div>
        );
    }
}

export default NewPost;