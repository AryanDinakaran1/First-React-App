import "./App.css";
import User from "./User.js";
import NewUser from "./NewUser.js";
import { PropTypes } from "prop-types";

function App() {
  return (
    <div className="App">
      <h1>Users</h1>

      <AddUser></AddUser>
      <User firstName="Aryan" lastName="Dinakaran" username="Aryandinakaran1" age={16}></User>
      <User></User>
      <NewUser name="Aryan"></NewUser>
      <NewUser></NewUser>

    </div>
  );
}

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

export default App;
