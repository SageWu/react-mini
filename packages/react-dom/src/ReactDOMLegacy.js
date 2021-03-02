export function render(element, container) {
  let dom = null;

  if (typeof element !== "object") {
    dom = document.createTextNode(element);
  } else {
    dom = document.createElement(element.type);
    const { children, ...restProps } = element.props;

    for(let propName in restProps) {
      dom[propName] = restProps[propName];
    }

    if (Array.isArray(children)) {
      children.forEach((child) => {
        render(child, dom);
      });
    } else if (children) {
      render(children, dom);
    }
  }

  container.appendChild(dom);
}