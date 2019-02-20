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
      started: false,
      optionsState: {
        modifierOptions: "",
        baseOptions: ""
      }
    };
    this.receiveType = this.receiveType.bind(this);
    this.receiveModifierOption = this.receiveModifierOption.bind(this);
    this.receiveBaseOption = this.receiveBaseOption.bind(this);
    this.addFavourites = this.addFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
    this.startWorkshop = this.startWorkshop.bind(this);
    this.displayWorkshop = this.displayWorkshop.bind(this);
    this.clearFetch = this.clearFetch.bind(this);
  }

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
    this.fetchWords(partofspeech, type);
  }
  receiveModifierOption(modifieroption) {
    let optionsState = Object.assign({}, this.state.optionsState);
    optionsState.modifierOptions = modifieroption;
    this.setState({ optionsState });
  }
  receiveBaseOption(baseoption) {
    let optionsState = Object.assign({}, this.state.optionsState);
    optionsState.baseOptions = baseoption;
    this.setState({ optionsState });
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

  startWorkshop() {
    this.setState({
      started: !this.state.started
    });
  }

  displayWorkshop() {
    this.setState({
      workshop: !this.state.workshop
    });
  }

  clearFetch() {
    this.setState({
      modifierWords: [],
      baseWords: [],
      optionsState: {
        modifierOptions: "",
        baseOptions: ""
      }
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
            modifiers={this.state.modifierWords}
            basewords={this.state.baseWords}
            receiveModifierOption={this.receiveModifierOption}
            receiveBaseOption={this.receiveBaseOption}
            modifierOptions={this.state.optionsState.modifierOptions}
            baseOptions={this.state.optionsState.baseOptions}
            clearFetch={this.clearFetch}
            startWorkshop={this.startWorkshop}
            started={this.state.started}
            displayWorkshop={this.displayWorkshop}
            workshop={this.state.workshop}
            addFavourites={this.addFavourites}
            removeFromFavourites={this.removeFromFavourites}
            favourites={this.state.favourites}
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
