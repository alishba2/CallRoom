// Navbar.js

import "./login.css";

export default function Login() {


  return (
    <>
    <div classN="background">
    <div class="shape"></div>
    <div class="shape"></div>
</div>
<form>
    <h3>Login </h3>
    <label for="username">Username</label>
    <input type="text" placeholder="Email or Phone" id="username"></input>

    <label for="password">Password</label>
    <input type="password" placeholder="Password" id="password"></input>

    <button>Log In</button>
 
</form>

</>

  );
}