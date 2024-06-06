import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputElem = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElem.current.value } });
    inputElem.current.value = "";
  };
  const handleSubstract = () => {
    dispatch({ type: "SUBSTRACT", payload: { num: inputElem.current.value } });
    inputElem.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({ type: "TOGGLE_PRIVACY" });
  };


  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Value..."
          style={{ width: "150px" }}
          ref={inputElem}
        />

        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg px-4"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>

      <button
        type="button"
        className="btn btn-secondary btn-lg px-4 mt-4"
        onClick={handlePrivacy}
      >
        Toggle Privacy
      </button>
    </>
  );
};

export default Controls;
