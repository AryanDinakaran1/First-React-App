import "./App.css";
import User from "./User.js";
import NewUser from "./NewUser.js";
import { useState } from "react";
import { PropTypes } from "prop-types";

function App() {
  return (
    <div className="App">


      <NewUser></NewUser>

    </div>
  );
}


function ButtonState() {

  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);


  const updateTitle = () => {
    setTitle("We now have a title");
  }

  const updateCounter = () => {
    setCount(count+1);
  }

  return (
    <div>

      <BigHeading title={title} count={count}></BigHeading>

      <button onClick={updateTitle}>Update Title</button>
      <button onClick={updateCounter}>Update Counter</button>

    </div>
  );
}

function BigHeading(props) {
  return(
    <div>
      <h1>Title: {props.title}</h1>
      <h1>Count: {props.count}</h1>
    </div>
  );
}


export default App;




/*
function AddUser(props) {
  return (
    <div>
      <form>
        <input type="text" value={props.username} name="username" placeholder="Username" />
        <input type="text" value={props.firstName} name="firstName" placeholder="First Name" />
        <input type="text" value={props.lastName} name="lastName" placeholder="Last Name" />
        <input type="number" value={props.age} name="age" placeholder="Age" />
        <input type="submit" />
      </form>
    </div>
  );
}

AddUser.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
}

*/