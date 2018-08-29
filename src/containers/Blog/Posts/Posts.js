import React, { Component } from 'react';
import axios from '../../../axios';
import { Route, Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';
class Posts extends Component {
    state = {
        keyPhrases: []
    }

    componentDidMount () {
        console.log(this.props.history.length, this);
        axios.get( '/key_phrases')
            .then( response => {
                const keyPhrases = response.data.slice(0, 4);
                const updateKeyPhrases = keyPhrases.map(keyPhrases => {
                    return {
                        ...keyPhrases,
                        author: 'Aimee'
                    }
                });
                this.setState({keyPhrases: updateKeyPhrases});
                console.log( response );
            } )
            .catch(error => {
                console.log(error); 
                 this.setState({error: true});
            });
    }

     postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/key_phrases'+ id});
        console.log(this, 'shoot');
        this.setState({selectedKeyPhrasesId: id});
    } 
    
    render () {
        let keyPhrases = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            keyPhrases = this.state.keyPhrases.map(keyPhrases => {
                return (
                <Link to={'/key_phrases' + keyPhrases.id} key={keyPhrases.id}>
                <Post 
                    title={keyPhrases.title} 
                    clicked={() => this.postSelectedHandler (keyPhrases.id)} />
                                  

            </Link>);
            });
        }

        return (
            <div>
            <section className="Posts">
        You have {this.props.history.length} words to be searched then pulled.
           <br/>    {this.state.keyPhrases}
            </section>
            <Route path={ this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;