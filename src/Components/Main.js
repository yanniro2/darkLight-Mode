import React from "react";

function Main(props) {
  return (
    <div className={props.dark ? "main" : "main-dark"}>
      <h1>Fun Facts about React</h1>
      <div>
        <ul>
          <li> was first relesed in 2013</li>
          <li> Was originally created by Jordan Walke</li>
          <li> Has well over 100K stars on GitHub</li>
          <li> Is maintained by Facebook</li>
          <li> Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
