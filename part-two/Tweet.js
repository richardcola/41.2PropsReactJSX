/** Tweets: a single tweet.
 *
 * Props:
 * - name
 * - username
 * - data
 * - message
 */

function Tweet({ date, message, name, username }) {
  return (

/*
In HTML, both <div> and <span> are used as container elements, but they serve slightly different purposes and are typically used in different contexts. Here's when to use each:

1.  <div>:

Use <div> when you need a block-level container. Block-level elements, like <div>, typically start on a new line and take up the full width of their parent container. They are often used for grouping and structuring larger sections of content, such as divisions within a web page layout.
<div> is suitable for creating larger sections or containers with multiple child elements, and you can apply CSS styles and layout properties to it.
Common use cases include defining sections of a webpage, such as headers, footers, sidebars, content areas, and general layout structures.

2. `<span>`:

Use <span> when you need an inline-level container. Inline-level elements, like <span>, don't start on a new line and only take up as much width as necessary for their content. They are often used for applying styling or behavior to a specific part of text or content.
<span> is suitable for wrapping small portions of text or inline elements where you want to apply styles, JavaScript interactions, or other attributes.
Common use cases include highlighting, applying CSS styles, or associating JavaScript events to a specific part of text within a paragraph.

In summary, the choice between <div> and <span> depends on your specific needs. If you need a block-level container for structuring content, use <div. If you need an inline-level container to style or manipulate a specific part of text or content, use `<span>`.


*/
    <div className="tweet">
      <span>{name}</span>
      <span className="username">{username}</span>
      <span className="date">{date}</span>
      <p>{message}</p>
    </div>
  );
}
