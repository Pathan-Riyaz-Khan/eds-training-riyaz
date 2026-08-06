/**
 * builds a text element from a table cell, if it has content
 * @param {Element} cell The cell to read the text from
 * @param {string} className The class name for the new element
 * @returns {Element|null} The new element, or null if the cell is empty
 */
function buildLine(cell, className) {
  const text = cell ? cell.textContent.trim() : "";
  if (!text) return null;

  const line = document.createElement("p");
  line.className = className;
  line.textContent = text;
  return line;
}

/**
 * loads and decorates the block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  block.textContent = "";

  rows.forEach((row) => {
    const [greetingCell, messageCell] = [...row.children];
    const item = document.createElement("div");
    item.className = "greet-item";

    const greeting = buildLine(greetingCell, "greet-greeting");
    const message = buildLine(messageCell, "greet-message");
    if (greeting) item.append(greeting);
    if (message) item.append(message);

    if (item.children.length) block.append(item);
  });

  block.classList.add("greet-decorated");
}
