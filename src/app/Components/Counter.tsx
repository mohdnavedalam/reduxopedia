import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementMultiplier, decrementMultiplier, resetMultiplier } from '../../redux/slice/CounterSlice';
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state: any) => state.counterStore.count);
    const dispatch = useDispatch();
    const [multiplier, setMultiplier] = useState();
    return (
        <div className="mt-2 pt-3 pl-2 text-center">
            <div className="h4 pb-2">Counter: {count}</div>
            <div className="row justify-content-center">
                <div className="p-4 col-12 col-md-6 ">
                    <div className="border p-4 ">
                        <h5 className="text-info pb-3">Basic Counter</h5>
                        <button className="btn btn-primary" onClick={() => dispatch(increment())}>Add</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Remove</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-secondary" onClick={() => dispatch(reset())}>Reset</button>
                    </div>
                </div>
                <div className="p-4 col-12 col-md-6 ">
                    <div className="border p-4">
                        <h5 className="text-info pb-3">Basic Counter</h5>
                        <input type="test" placeholder="multiplier ..." className="form-control-sm" value={multiplier} onChange={(e: any) => setMultiplier(e.target.value)} />
                        &nbsp;&nbsp;
                        <button className="btn btn-primary" onClick={() => dispatch(incrementMultiplier(multiplier))}>Add</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-danger" onClick={() => dispatch(decrementMultiplier(multiplier))}>Remove</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-secondary" onClick={() => dispatch(resetMultiplier(multiplier))}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Counter;