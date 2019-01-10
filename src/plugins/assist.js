// 向上寻找最近的指定组件
function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$option.name;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$option.name;
  }
  return parent;
}

export { findComponentUpward };

// 向上寻找所有指定组件
function findComponentsUpward(context, componentName) {
  const parents = [];
  const parent = context.$parent;
  if (parent) {
    if (parent.$option.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  }
  return [];
}

export { findComponentsUpward };

// 向下寻找最近的指定组件
function findComponentDownward(context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (let i = 0; i < Object.keys(childrens).length; i += 1) {
      const name = childrens[i].$option.name;
      if (name === componentName) {
        children = childrens[i];
        break;
      } else {
        children = findComponentDownward(childrens[i], componentName);
        if (children) break;
      }
    }
  }

  return children;
}

export { findComponentDownward };
