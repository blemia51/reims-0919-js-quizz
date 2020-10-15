import PropTypes from "prop-types";
import React from "react";

const ScoreQcm = ({ count }) => {
  return (
    <div>
      <p>
        Score:<span style={{ color: "#ff8300" }}> {count}</span>
      </p>
    </div>
  );
};

ScoreQcm.propTypes = {
  count: PropTypes.number
}

export default ScoreQcm;
