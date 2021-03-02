import { REACT_ELEMENT_TYPE } from "./ReactSymbols";

const RESERVED_PROPS = {
  key: true,
  ref: true,
};

export function createElement(type, config, children) {
  let key = null;
  let ref = null;
  const props = {};

  if (config) {
    // 处理key，ref
    if (config.key !== undefined) {
      key = "" + config.key;
    }
    if (config.ref !== undefined) {
      ref = config.ref;
    }

    // 处理其他参数
    for (const propName in config) {
      if (Object.hasOwnProperty.call(config, propName) && !RESERVED_PROPS[propName]) {
        props[propName] = config[propName];
      }
    }
  }
  
  // 处理子元素
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childrenArray = [];
    for (let i = 0; i < childrenLength; ++i) {
      childrenArray[i] = arguments[i + 2];
    }
    props.children = childrenArray;
  }

  // 处理默认参数
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (const propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props
  };
}