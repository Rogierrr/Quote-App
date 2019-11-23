import React, { Component } from 'react';

class Quote extends Component {
    state= {
        numLikes: 0
      };
      handleClick = () => {
        this.props.incrementScore(this.props.id);
      };
    
      increment = () => {
        this.setState({
          numLikes: this.state.numLikes + 1
        });
      };
    
      decrement = () => {
        this.setState({
          numLikes: this.state.numLikes - 1
        });
      };
    
      render() {
        return (
          <div>
            <p>Text: {this.props.quoteText}</p>
            <p>Author: {this.props.quoteAuthor}</p>
            <p><b>{ this.state.numLikes }</b> likes!</p>
            <button onClick={this.increment}>Like</button>
            <button onClick={this.decrement}>Dislike</button>
          </div>
        );
      }
    }
    
export default Quote;