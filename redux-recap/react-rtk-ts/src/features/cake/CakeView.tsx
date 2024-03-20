//import { useSelector, useDispatch } from "react-redux";
import { order, restock } from "./cake-slice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CakeView = () => {
    const [value, setValue] = useState(1);
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
    const dispatch = useAppDispatch();

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(order())}>Order Cakes</button>
            <input type="number" onChange={(e) => setValue(parseInt(e.target.value))} value={value} />
            <button onClick={() => dispatch(restock(value))}>Restock Cakes</button>
        </div>
    );
};

export default CakeView;
