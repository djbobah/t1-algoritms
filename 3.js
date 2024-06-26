function buildSelectors(domTree) {
  const selectors = new Set();

  function traverse(node, path) {
    const selector = path ? `${path}>${node.tagName}` : node.tagName;
    selectors.add(selector);

    if (node.children) {
      node.children.forEach((child) => traverse(child, selector));
    }
  }

  traverse(JSON.parse(domTree), "");

  return Array.from(selectors).sort().join(",");
}

// Пример использования:
const domTree =
  '{"tagName":"ASIDE","children":[{"tagName":"DIV","children":[{"tagName":"SPAN"}]},{"tagName":"DIV"}]}';
console.log(buildSelectors(domTree));
