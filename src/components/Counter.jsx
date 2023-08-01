import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseFive,
  increment,
  multiplyDecrement,
  multiplyIncrement,
} from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiplyDecrement(2))}>- 2</button>
      <button onClick={() => dispatch(multiplyIncrement(3))}>+ 3</button>
      <button onClick={() => dispatch(increaseFive())}>+ 5</button>
    </div>
  );
};

export default Counter;
