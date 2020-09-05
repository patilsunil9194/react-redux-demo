import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../redux/Book/bookAction";

function HookBookContainer() {
  const noOfBooks = useSelector((state) => state.noOfBooks);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h1>Hook Container</h1>
      <h2>Number of Books - {noOfBooks} </h2>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{width:"150px"}}
      />
      <button onClick={()=>dispatch(buyBook(quantity))}>Buy Book</button>
    </div>
  );
}

export default HookBookContainer;
