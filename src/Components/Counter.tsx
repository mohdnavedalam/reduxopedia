import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from '../redux/slice/CounterSlice';

const Counter = () => {
    const count = useSelector((state: any) => state.counterStore.count);
    const dispatch = useDispatch();
    return (
        <div className="mt-2 pt-3 pl-2 text-center">
            <div className="h4 pb-2">Counter: {count}</div>
            <div className="row justify-content-center">
                <div className="p-4 col-12 col-md-6 ">
                    <div className="border p-4 ">
                        <button className="btn btn-primary" onClick={() => dispatch(increment())}>Add</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Counter;