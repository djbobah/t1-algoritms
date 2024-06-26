function getAllSelectors(line) {
  //инициализируем объект set для сбора уникальных селекторов
  const selectors = new Set();

  //рекурсивная функция для обхода дерева
  function treeTraversal(node, child) {
    const selector = child ? `${child}>${node.tagName}` : node.tagName;
    selectors.add(selector);

    //если есть children входим в рекурсию
    if (node.children) {
      node.children.forEach((item) => treeTraversal(item, selector));
    }
  }

  //передаем в рекурсивную функцию распарсеные входные данные и пустое значение в качестве корня
  treeTraversal(JSON.parse(line), "");
  // собираем выходную строку
  return Array.from(selectors).join(",");
}

// Пример использования:
const domTree =
  '{"tagName":"ASIDE","children":[{"tagName":"DIV","children":[{"tagName":"SPAN"}]},{"tagName":"DIV"}]}';
console.log(getAllSelectors(domTree));
//"ASIDE,ASIDE>DIV,ASIDE>DIV>SPAN";
