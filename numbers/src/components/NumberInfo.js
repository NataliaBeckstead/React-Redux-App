import React from "react";
import { connect } from "react-redux";

const NumberInfo = props => {
    return (
        <>
          {props.error ? (
            <div className="error">{props.error}</div>
          ) : (
            <div>{props.number}</div>
          )}
        </>
      );
    };
    
const mapStateToProps = state => {
    return {
        number: state.number,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {}
)(NumberInfo);
    