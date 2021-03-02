const ReactMini = require("react");
const ReactDOM = require("react-dom");

// const element = React.createElement(
//   "h1",
//   { title: "test" },
//   "hello"
// );

// const container = document.getElementById("root");

// const node = document.createElement(element.type);
// node["title"] = element.props.title
// const text = document.createTextNode("")
// text["nodeValue"] = element.props.children;

// node.appendChild(text)
// container.appendChild(node)

/** @jsx ReactMini.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
const container = document.getElementById("root");
ReactDOM.render(element, container);