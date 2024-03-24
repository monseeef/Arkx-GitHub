import { useState } from "react";

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const headerStyle = {
    backgroundColor: props.backgroundColor || "chocolate"
  };

  return (
    <header style={headerStyle}>
      <h3>Blog App</h3>
      <nav>
        <ul>
          {props.links.map((link) => (
            <li key={link.path}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Login" : "Logout"}
      </button>
    </header>
  );
}
export default Header;
