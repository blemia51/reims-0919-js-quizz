import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import "./CardQuestion.css";
import ButtonQcm from "./ButtonQcm";
import ScoreQcm from "./ScoreQcm";
import Question from "./Question";
import QuestionNumber from "./QuestionNumber";

class CardQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayQuestions: [],
      count: 0,
      questionNumber: 1,
      loading: true,
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
        `https://opentdb.com/api.php?amount=1&Token=1234&category=${categoryId}&difficulty=easy&type=multiple`
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ arrayQuestions: data.results, loading: false });
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
    const { arrayQuestions, count, questionNumber, loading } = this.state;
    const { location } = this.props;
    const { state: { categoryName, categoryImage } } = location;
    return (
      <div className="cardContent" id="cardContentQcm">
        <div>
          <div className="questionNumber">
            <QuestionNumber questionNumber={questionNumber} />
          </div>
          <figure className="imageContainer">
            <img
              className="imageCategory"
              alt="category"
              src={categoryImage}
            ></img>
            {/* <figcaption>{categoryName}</figcaption> */}
          </figure>
        </div>
        <div className="bloc-qcm">
        <div className="categrie-name">{categoryName}</div>
        <hr className="ligneSection"></hr>
        <span className="counter">
          <ScoreQcm count={count} />
        </span>
        {arrayQuestions.map((q) => (
          <div key={q.question}>
            <span>
              <Question question={q.question} />
            </span>
        
            <p>Choose the correct answer</p>

            <div id="buttonQcmContainer">
              <div key={q.category}>
                <ButtonQcm
                  correct_answer={q.correct_answer}
                  incorrect_answer={q.incorrect_answers}
                  key={q.category}
                  incrementScore={this.incrementScore}
                  getQuestions={this.getQuestions}
                  incrementQuestionNumber={this.incrementQuestionNumber}
                  loading={loading}
                />
              </div>
            </div>
          </div>
          
        ))}
        </div>
      </div>
    );
  }
}

CardQuestion.propTypes = {
  location: PropTypes.object
}

export default CardQuestion;
