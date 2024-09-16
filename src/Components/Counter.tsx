import { useSelector, UseSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state: any) => state.counterStore.count);
    return (
        <h1>{count}</h1>
    );
};
export default Counter;