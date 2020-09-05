import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBook } from "../redux/Book/bookAction";

function BookContainer(props) {
  const [Number, setNumber] = useState(1);
  return (
    <div>
      <h1>Book Components</h1>
      <h2>Number of Books - {props.noOfBooks}</h2>
      <input
        type="number"
        value={Number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ width: "150px" }}
      />
      <button onClick={() => props.buyBook(Number)}>Buy {Number} Book</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    noOfBooks: state.noOfBooks,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buyBook: function (num) {
      dispatch(buyBook(num));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BookContainer);
