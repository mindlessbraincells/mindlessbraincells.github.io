import { render } from "react-dom"

export function renderToDOM(elementId, element) {
  return render(element, document.getElementById(elementId));
}
