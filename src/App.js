import React, {Component} from "react";

import Person from "./Person/Person";
import {appState} from "./2-Var";

export default class App extends Component {
  constructor(props) {
    console.log("App constructor...");
    super(props);
    this.state = appState;
  }

  personToggleHandler = () => {
    let personLogic = this.state.showPersons;
    this.setState({showPersons: !personLogic});
  };

  changeById = (event, id) => {
    const person = [...this.state.persons];

    let personIndex = person.findIndex((p) => {
      return p.id === id;
    });

    person[personIndex].name = event.target.value;
    this.setState({
      persons: person,
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("App getDerivedStateFromProps...");
    return state;
  }

  componentDidMount() {
    console.log("App componentDidMount...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`App shouldComponentUpdate ${nextProps}-${nextState}`);
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log(`App getSnapshotBeforeUpdate ${nextProps}-${nextState}`);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`App componentDidUpdate`);
  }

  render() {
    console.log("App render...");
    let Persons_List = null;

    if (this.state.showPersons) {
      Persons_List = this.state.persons.map(({name, id}, index) => {
        return (
          <Person
            change={(event) => this.changeById(event, id)}
            key={index}
            name={name}
          />
        );
      });
    } else {
      Persons_List = null;
    }

    return (
      <div>
        <button onClick={this.personToggleHandler}>click</button>
        {Persons_List}
      </div>
    );
  }
}
