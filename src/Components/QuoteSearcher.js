import React, { Component } from 'react';
import Quote from "./Quote";



class QuoteSearcher extends Component {
  state = {
    quotes: [
     
      {
        "_id": "5d91b45d9980192a317c8acc",
        "quoteText": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
        "quoteAuthor": "Bruce Lee"
      },
      {
        "_id": "5d91b45d9980192a317c8abe",
        "quoteText": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
        "quoteAuthor": "Abraham Lincoln"
      },
      {
        "_id": "5d91b45d9980192a317c8955",
        "quoteText": "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
        "quoteAuthor": "J. Willard Marriott"
      },
    ]
  };

  incrementScore = id => {
    console.log("Hi from here, id:", id);
    const newQuotes = this.state.quotes.map(quote => {
      if (id === quote.id) {
        return { ...quote, quoteAuthor: quote.score};
      }

      return quote;
    });

    this.setState({ quotes: newQuotes });
  };

  AddQuote = name => {
    console.log(name);
    const newQuote = {
      name: name,
      score: 0,
      id: Math.round(Math.random() * 1000000)
    };

    this.setState({ quotes: this.state.quotes.concat(newQuote) });
  } ;

  render() {
    return (
      <div>
        {/* <PlayerForm addPlayer={this.addPlayer} /> */}
        {this.state.quotes
          .sort((playerA, playerB) => playerB.score - playerA.score)
          .map(quote => {
            return (
              <Quote
                incrementScore={this.incrementScore}
                key={quote.id}
                id={quote.id}
                quoteText={quote.quoteText}
                quoteAuthor={quote.quoteAuthor}
              />
            );
          })}
      </div>
    );
  }
}

export default QuoteSearcher;