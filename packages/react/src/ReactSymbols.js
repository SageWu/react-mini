export let REACT_ELEMENT_TYPE = 0xeac7;

if (typeof Symbol === "function" && Symbol.for) {
  REACT_ELEMENT_TYPE = Symbol.for("react.element");
}