// https://wordsapiv1.p.mashape.com/words/?partOfSpeech=noun
// https://wordsapiv1.p.mashape.com/words/?partOfSpeech=adjective

import React from "react";
import Generate from "./Generate";
import Workshop from "./Workshop";

import "../styles/base/base.scss";
import "../styles/components/app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modifierWords: [],
      baseWords: [],
      favourites: [],
      workshop: false,
      clicked: false,
      optionsState: ""
    };
    this.receiveType = this.receiveType.bind(this);
    this.addFavourites = this.addFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
    this.displayWorkshop = this.displayWorkshop.bind(this);
    this.isClicked = this.isClicked.bind(this);
    this.clearFetch = this.clearFetch.bind(this);
  }

  // want to add this into the fetch content.results[0].definition

  fetchWords(partofspeech, wordtype) {
    let tempArr = [];
    for (let i = 0; i < 3; i++) {
      fetch("/api/words", {
        method: "post",
        body: JSON.stringify({ partofspeech }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(content => {
          tempArr = tempArr.concat([content]);
          if (wordtype === "modifier" && partofspeech !== "default") {
            this.setState({ modifierWords: tempArr });
          } else if (wordtype === "base" && partofspeech !== "default") {
            this.setState({ baseWords: tempArr });
          }
        })
        .catch(console.error);
    }
  }

  receiveType(partofspeech, type) {
    this.setState({
      optionsState: partofspeech
    });

    this.fetchWords(partofspeech, type);
  }

  addFavourites(corpseitem) {
    const favourites = this.state.favourites.concat(corpseitem);
    this.setState({
      favourites: favourites
    });
    window.localStorage.setItem("favourites", favourites);
  }

  removeFromFavourites(corpseitem) {
    const filteredFavourites = this.state.favourites.filter(
      currentFavourite => {
        return currentFavourite !== corpseitem;
      }
    );
    this.setState({
      favourites: filteredFavourites
    });
  }

  displayWorkshop() {
    this.setState({
      workshop: !this.state.workshop
    });
  }

  isClicked() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  clearFetch() {
    this.setState({
      modifierWords: [],
      baseWords: [],
      optionsState: ""
    });
  }

  render() {
    return (
      <div className="app container">
        <header className="masthead">
          <h1 className="masthead__title">Vibrant Corpse</h1>
          <div className="masthead__description">
            <p>
              Vibrant corpse (<em>cadavre exquis</em> in French) is a game
              invented by the Surrealists aimed at stimulating creative
              response. The method involves the assemblage of generated words or
              images, according to an agreed rule.
            </p>
            <p>
              This game seeks to mimic the original by randomly generating word
              lists then combining the results to create intriguing combinations
              that may be chosen for 'workshopping' – 5 minutes of free-flow
              writing.
            </p>
          </div>
        </header>

        <main className="main">
          <Generate
            receiveType={this.receiveType}
            displayWorkshop={this.displayWorkshop}
            isClicked={this.isClicked}
            clearFetch={this.clearFetch}
            modifiers={this.state.modifierWords}
            basewords={this.state.baseWords}
            addFavourites={this.addFavourites}
            removeFromFavourites={this.removeFromFavourites}
            favourites={this.state.favourites}
            workshop={this.state.workshop}
            clicked={this.state.clicked}
            optionsState={this.state.optionsState}
          />
          {this.state.workshop && (
            <Workshop
              favourites={this.state.favourites}
              workshop={this.state.workshop}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
