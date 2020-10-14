import React from "react"
import axios from "axios"
import './CardQuestion.css'
import ScoreQcm from './ScoreQcm'
import Question from './Question'
import ButtonBool from './ButtonBool'
import QuestionNumber from './QuestionNumber'


class CardQuestionBool extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrayQuestions: [],
            count: 0,
            questionNumber: 1,
    }
        this.incrementScore = this.incrementScore.bind(this)  
        this.getQuestions = this.getQuestions.bind(this)
        this.incrementQuestionNumber = this.incrementQuestionNumber.bind(this)
        
    }

    componentDidMount() {
	    this.getQuestions();
	    } 

    getQuestions() {
        axios
            .get(`https://opentdb.com/api.php?amount=1&Token=3456&&category=${this.props.location.state.categoryId}&difficulty=easy&type=boolean`)
            .then(response => response.data)
            .then(data => {this.setState({arrayQuestions: data.results});});	
    }

    incrementQuestionNumber() {
        this.setState({
            questionNumber: this.state.questionNumber + 1
        })
    }  

    incrementScore() {
        this.setState({
            count: this.state.count + 10
        })
    }  
   
    render() {
    return (
        
    <div className='cardContent' >
        <div className='questionNumber'><QuestionNumber questionNumber={this.state.questionNumber}/></div>
        <figure className='imageContainer'>
            <img className='imageCategory' alt='category'  
            src={this.props.location.state.categoryImage}></img>
            <figcaption>{this.props.location.state.categoryName}</figcaption>
        </figure>

        <hr className='ligneSection'></hr>

        <ScoreQcm count={this.state.count}/>

        {this.state.arrayQuestions.map(quest => <span key={quest.question}  ><Question question = {quest.question}/></span>)}

        <p>True or False ?</p>

        <div id='buttonQcmContainer'>
            {this.state.arrayQuestions.map(q => 
            {return <div key={q.category}><ButtonBool correct_answer = {q.correct_answer} incorrect_answer = {q.incorrect_answers} 
            key={q.category} incrementScore = {this.incrementScore} getQuestions={this.getQuestions} incrementQuestionNumber={this.incrementQuestionNumber}/>
        </div>}
            )}
        </div>

    </div>
    )
}}

export default CardQuestionBool
