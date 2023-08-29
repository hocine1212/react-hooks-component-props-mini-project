function addEmojiList(minutes) {
  let emojis = "";
  let emoji = minutes < 30 ? "☕️" : "🍱";
  let interval = minutes < 30 ? 5 : 10;
  for (let i = interval; i <= minutes; i += interval) {
    emojis += emoji;
  }
  return emojis;
}
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emojis = addEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
