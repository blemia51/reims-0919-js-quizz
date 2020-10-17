import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListCategory from "./components/ListCategory";
import ChoixQfmVF from "./components/ChoixQfmVF";
import CardQuestion from "./components/CardQuestion";
import Nav from "./components/Nav";
import CardQuestionBool from "./components/CardQuestionBool";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={ListCategory} />
            <Route
              path="/choiceQuestion"
              render={(props) => (
                <ChoixQfmVF {...props} /> 
              )}
            />
            <Route
              path="/question"
              render={(props) => (
                <CardQuestion {...props} />
              )}
            />
            <Route
              path="/questionbool"
              render={(props) => (
                <CardQuestionBool {...props} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
