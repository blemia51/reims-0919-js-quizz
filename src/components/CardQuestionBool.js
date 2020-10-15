import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import "./CardQuestion.css";
import ScoreQcm from "./ScoreQcm";
import Question from "./Question";
import ButtonBool from "./ButtonBool";
import QuestionNumber from "./QuestionNumber";

class CardQuestionBool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayQuestions: [],
      count: 0,
      questionNumber: 1,
    };
    this.incrementScore = this.incrementScore.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.incrementQuestionNumber = this.incrementQuestionNumber.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
		const { location } = this.props;
    const { state: { categoryId } } = location;
    axios
      .get(
        `https://opentdb.com/api.php?amount=1&Token=3456&&category=${categoryId}&difficulty=easy&type=boolean`
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ arrayQuestions: data.results });
      });
  }

  incrementQuestionNumber() {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
    });
  }

  incrementScore() {
    this.setState({
      count: this.state.count + 10,
    });
  }

  render() {
		const { arrayQuestions, count, questionNumber } = this.state;
    const { location } = this.props;
    const { state: { categoryName, categoryImage } } = location;
    return (
      <div className="cardContent">
        <div className="questionNumber">
          <QuestionNumber questionNumber={questionNumber} />
        </div>
        <figure className="imageContainer">
          <img
            className="imageCategory"
            alt="category"
            src={categoryImage}
          ></img>
          <figcaption>{categoryName}</figcaption>
        </figure>

        <hr className="ligneSection"></hr>

        <ScoreQcm count={count} />

        {arrayQuestions.map((quest) => (
          <span key={quest.question}>
            <Question question={quest.question} />
          </span>
        ))}

        <p>True or False ?</p>

        <div id="buttonQcmContainer">
          {arrayQuestions.map((q) => {
            return (
              <div key={q.category}>
                <ButtonBool
                  correct_answer={q.correct_answer}
                  incorrect_answer={q.incorrect_answers}
                  key={q.category}
                  incrementScore={this.incrementScore}
                  getQuestions={this.getQuestions}
                  incrementQuestionNumber={this.incrementQuestionNumber}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

CardQuestionBool.propTypes = {
  location: PropTypes.object
}

export default CardQuestionBool;
