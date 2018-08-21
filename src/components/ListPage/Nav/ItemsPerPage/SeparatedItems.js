export default function SeparatedItems({ children, seperator }) {
  const appendSeperatorAndChild = (elementsSoFar, child) => (
    elementsSoFar
      ? [...elementsSoFar, seperator, child]
      : [child]
  );

  return children.reduce(appendSeperatorAndChild, null);
}
