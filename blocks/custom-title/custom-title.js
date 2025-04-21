/**
 * create keylines from heading elements
 * @param {Element} heading the heading element
 */
export function createKeyLine(heading) {
  if (heading.classList.contains('keyline')) return;
  heading.classList.add('keyline');
  if (!heading.querySelector('u')) {
    const u = document.createElement('u');
    u.innerHTML = heading.innerHTML;
    heading.replaceChildren(u);
  }
}
export default async function decorate(block) {
  block.querySelectorAll('h2, h3, h4, h5, h6').forEach(createKeyLine);
}
