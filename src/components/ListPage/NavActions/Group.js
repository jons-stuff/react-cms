function addSpacesBetween(elements) {
  return elements.reduce((prev, item) => [...prev, ' ', item], []);
}

export default function Group({ children }) {
  return addSpacesBetween(children);
}
