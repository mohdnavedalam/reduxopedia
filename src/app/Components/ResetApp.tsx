import { useDispatch } from "react-redux";
import { resetReduxopedia } from "../../redux/actions/action";
// import { resetAllCounters } from "../../redux/slice/CounterSlice";
// import { resetDestination } from "../../redux/slice/DestinationSlice";
const ResetApp = () => {
    const dispatch = useDispatch();
    const resetCounterAndDestination = () => {
        // dispatch(resetDestination());
        dispatch(resetReduxopedia());
        // dispatch(resetAllCounters());
    };
    return (
        <div className="text-center mt-5">
            <button className="btn btn-warning" onClick={resetCounterAndDestination}>Reset App</button>
        </div>
    );
};

export default ResetApp;