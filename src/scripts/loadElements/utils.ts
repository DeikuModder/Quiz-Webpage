type InnerInfo = number | HTMLElement | string

function elementCreator (component: HTMLElement, innerInfo: InnerInfo, parentComponent: HTMLElement) {
  component.innerHTML = innerInfo.toLocaleString()
  parentComponent.appendChild(component)
}

export default elementCreator
