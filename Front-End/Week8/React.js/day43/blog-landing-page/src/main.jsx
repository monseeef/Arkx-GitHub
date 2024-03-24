import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const posts = [
  {
    title: "Holla",
    description: "Welcome to the this Blog 1",
  },
  {
    title: "Secondary Post",
    description: "Welcome to the this Blog 2",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App posts={posts} links={links} />
  </React.StrictMode>
);
