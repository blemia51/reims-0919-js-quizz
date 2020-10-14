import React from "react"
import './Question.css'

function Question(props) {
    return(
        <div className='question'>
            <p>{props.question.replace(/&quot;|&#039;/g,"'").replace(/amp;/g,'').replace(/&eacute;/g,'é')}</p>
        </div>
    )
}

export default Question
