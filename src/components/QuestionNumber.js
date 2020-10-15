import PropTypes from "prop-types";
import React from "react";

const QuestioNumber = ({ questionNumber }) => {
  return (
    <div>
      <p>
        Question:<span style={{ color: "#ff8300" }}> {questionNumber}</span>
      </p>
    </div>
  );
};

QuestioNumber.propTypes = {
  questionNumber: PropTypes.number
}

export default QuestioNumber;
