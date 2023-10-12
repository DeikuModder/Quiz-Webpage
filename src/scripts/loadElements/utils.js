export function elementCreator (component, innerInfo = undefined, parentComponent) {
  component.innerHTML = innerInfo
  parentComponent.appendChild(component)
}
