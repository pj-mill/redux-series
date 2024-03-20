const log = (store) => (next) => (action) => {
    console.log(next);
    next(action);
};

export default log;
