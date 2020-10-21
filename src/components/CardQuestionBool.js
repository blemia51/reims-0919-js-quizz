import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import "./CardQuestion.css";
import ScoreQcm from "./ScoreQcm";
import Question from "./Question";
import ButtonBool from "./ButtonBool";
import QuestionNumber from "./QuestionNumber";

const override = css`
  display: block;
  margin: 0 auto;
`;

class CardQuestionBool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayQuestions: [],
      count: 0,
      questionNumber: 1,
      step: 0,
      loading: true,
    };
    this.incrementScore = this.incrementScore.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.incrementQuestionNumber = this.incrementQuestionNumber.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
		const { location } = this.props;
    const { state: { categoryId } } = location;
    axios
      .get(
        `https://opentdb.com/api.php?amount=5&Token=3456&&category=${categoryId}&difficulty=easy&type=boolean`
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ arrayQuestions: data.results, loading: false });
      });
  }

  nextQuestion() {
    const { step, arrayQuestions } = this.state;
    if (step < arrayQuestions.length) {
      this.setState({
        step: step + 1
      },() =>  console.log(step));
    }
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
		const { arrayQuestions, count, questionNumber, loading, step } = this.state;
    const { location } = this.props;
    const { state: { categoryName } } = location;
    return (
      <div className="cardContent">
        <div className="questionNumber">
          <QuestionNumber questionNumber={questionNumber} />
        </div>
        {/* <figure className="imageContainer">
          <img
            className="imageCategory"
            alt="category"
            src={categoryImage}
          ></img>
        </figure> */}
        <div className="bloc-qcm">
          <div className="categrie-name">{categoryName}</div>

          <hr className="ligneSection"></hr>

          <span className="counter">
            <ScoreQcm count={count} />
          </span>

          {arrayQuestions.length > 0 ? arrayQuestions.slice(step, step+1).map((q) => (
            <div key={q.question}>
              <span>
                <Question question={q.question} />
              </span>

              <p>True or False ?</p>

              <div id="buttonQcmContainer">
                <div key={q.category}>
                  <ButtonBool
                    correct_answer={q.correct_answer}
                    incorrect_answer={q.incorrect_answers}
                    key={q.category}
                    incrementScore={this.incrementScore}
                    getQuestions={this.getQuestions}
                    incrementQuestionNumber={this.incrementQuestionNumber}
                    loading={loading}
                    nextStep={this.nextQuestion}
                    step={step}
                  />
                </div>
              </div>
            </div>
          )):<PulseLoader css={override}
          size={15}
          color={"#ffc800"}
          loading={this.state.loading}
          />
          }
        </div>
      </div>
    );
  }
}

CardQuestionBool.propTypes = {
  location: PropTypes.object
}

export default CardQuestionBool;
