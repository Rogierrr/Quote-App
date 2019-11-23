import React, { Component } from 'react';


class QuoteSearcher extends Component {
  
  state = {
    quotes: null
  };

  componentDidMount(){
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree") 
    .then(res => res.json())
    .then(json => {
      this.setState({quotes: json})
      console.log("json", json);
    }); 
  }

  
  render() {
    console.log("fetch render");
    
    if (this.state.quotes === null){
      return "loading..."
    } 
      return(
        <div>
          {this.state.quotes.map((quote) => {
            return(
            <div>
            <h1>{quote.quoteAuthor}</h1>
            <h2>{quote.quoteText}</h2>
            </div>
            )
          })} 


        </div>
      )
    }
    
        
}

export default QuoteSearcher;