function reverseWords(s) {
  const words = s.trim().split(/\s+/);
  return words.reverse().join(" ");
}
const s = "a good   example";
