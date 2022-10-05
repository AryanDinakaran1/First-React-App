import "./App.css";
import User from "./User.js";

function App() {
  return (
    <div className="App">
      <h1>Users</h1>

      <AddUser></AddUser>

      <User></User>
    </div>
  );
}

function AddUser() {
  return (
    <div>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="number" name="age" placeholder="Age" />
      <input type="submit" />
    </div>
  );
}

export default App;
