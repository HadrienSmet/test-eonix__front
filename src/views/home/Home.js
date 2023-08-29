import React from "react";

function Home(props) {
    return (
        <div>
            <p>{props.counter}</p>
            <button onClick={props.onIncrement}>Increment</button>
            <button onClick={props.onDecrement}>Decrement</button>
        </div>
    );
}

export default Home;
