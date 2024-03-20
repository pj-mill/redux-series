import { useSelector, useDispatch } from "react-redux";
import { orderIceCream, restockIceCream } from "./icecream-slice";
const IceCreamView = () => {
    const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h2>Number of Icecreams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(orderIceCream())}>Order Icecreams</button>
            <button onClick={() => dispatch(restockIceCream(10))}>Restock Icecreams</button>
        </div>
    );
};

export default IceCreamView;
