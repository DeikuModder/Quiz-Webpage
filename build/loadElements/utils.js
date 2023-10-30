function elementCreator (component, innerInfo, parentComponent) {
  component.innerHTML = innerInfo.toLocaleString()
  parentComponent.appendChild(component)
}
export default elementCreator
