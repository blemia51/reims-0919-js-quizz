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
          <Switch>
            <Route exact path="/" component={ListCategory} />
            <Route
              path="/choiceQuestion"
              render={(props) => (
                <>
                  <Nav />
                  <ChoixQfmVF {...props} />
                </>
              )}
            />
            <Route
              path="/question"
              render={(props) => (
                <>
                  <Nav />
                  <CardQuestion {...props} />
                </>
              )}
            />
            <Route
              path="/questionbool"
              render={(props) => (
                <>
                  <Nav />
                  <CardQuestionBool {...props} />
                </>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
