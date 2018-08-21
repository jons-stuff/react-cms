export default function CustomCell({ children: templateFunction, dataItem, field }) {
  return templateFunction
    ? templateFunction(dataItem)
    : dataItem[field];
}
