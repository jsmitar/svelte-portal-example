function moveNode(node: HTMLElement, target?: HTMLElement | string) {
  if (typeof target === "string") {
    target = document.getElementById(target);
  }
  if (!target) target = document.body;

  target.appendChild(node);
}

function portal(node: HTMLElement, target?: HTMLElement | string) {
  moveNode(node, target);

  return {
    update(target?: HTMLElement | string) {
      moveNode(node, target);
    },
  };
}

export default portal;
