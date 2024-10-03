import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destinationClicked } from "../../redux/slice/DestinationSlice";
import '../../CSS/style.css';

const DestinationList = () => {
    const destinationList = useSelector(
        (state: any) => state.destinationStore.destinations
    );
    const dispatch = useDispatch();
    //return destinationList.map((destination: any, index: number) => {
    return (
        <>
            <h4 className="text-center destinationList-margin p-4 border">Destination List</h4>
            {destinationList.map((destination: any, index: number) => (
                <div className="text-center text-white row" style={{ borderBottom: "1px solid #333" }} key={index}>
                    {/* <div>{index}</div> */}
                    <div className="col-8 col-md-3 offset-md-3 pt-2">{destination.name}</div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-success form-control m-1" onClick={() => dispatch(destinationClicked(destination))}>Details</button>
                    </div>
                </div>
            ))}
        </>
    )
};

export default DestinationList;

// try with mapping and onclick event wrapped in a function