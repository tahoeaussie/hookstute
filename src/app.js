import React, { useState } from "react";
import ReactDOM from "react-dom";
import List from './containers/List';


const Yo = "hi supppppp "

const bro = 'How you doing'

const name = 'Peter'

const addition = name == 'Peter' ? "Peter" : 'No name'


const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <p>{Yo + addition}</p>
      <p>{name + ' ' + bro}?</p>
    </div>
  );
};

export default Example;

ReactDOM.render(<List />, document.getElementById("app"));