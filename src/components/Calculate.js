import React from "react";
import PropTypes from "prop-types";
const Calculate = (props) => {
  const { label, score = 0, total = Math.max(1, score) } = props;
  return (
    <React.Fragment>
      <div className="calculate">
        <h6>{label}</h6>
        <span>{Math.round((score / total) * 100)}%</span>
      </div>
    </React.Fragment>
  );
};

Calculate.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number,
  //   total: PropTypes.func,
};
export default Calculate;
