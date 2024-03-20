// const store = require("./app/store");
// const cakeActions = require("./features/cake/cake-slice").cakeActions;
// const icecreamActions = require("./features/icecream/icecream-slice").icecreamActions;

import store from "./app/store.js";
import { order, restock } from "./features/cake/cake-slice.js";
import { orderIceCream, restockIceCream } from "./features/icecream/icecream-slice.js";
import { fetchUsers } from "./features/user/user-slice.js";

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated state: ", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(order());
// store.dispatch(order());
// store.dispatch(order());
// store.dispatch(restock(10));

// store.dispatch(orderIceCream());
// store.dispatch(orderIceCream());
// store.dispatch(orderIceCream());
// store.dispatch(restockIceCream(20));

//unsubscribe();
