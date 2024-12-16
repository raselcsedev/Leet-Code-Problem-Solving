function fullJustify(words, maxWidth) {
  const result = [];
  let currentLine = [];
  let currentLineLength = 0;

  for (const word of words) {
      
      if (currentLineLength + currentLine.length + word.length > maxWidth) {
          
          const spacesToDistribute = maxWidth - currentLineLength;
          for (let i = 0; i < spacesToDistribute; i++) {
              currentLine[i % (currentLine.length - 1 || 1)] += ' ';
          }
          result.push(currentLine.join(''));
          currentLine = [];
          currentLineLength = 0;
      }

      
      currentLine.push(word);
      currentLineLength += word.length;
  }

  
  result.push(currentLine.join(' ') + ' '.repeat(maxWidth - currentLineLength - (currentLine.length - 1)));

  return result;
}

// Example usage
const words1 = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth1 = 16;
console.log(fullJustify(words1, maxWidth1));

const words2 = ["What","must","be","acknowledgment","shall","be"];
const maxWidth2 = 16;
console.log(fullJustify(words2, maxWidth2));

const words3 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
const maxWidth3 = 20;
console.log(fullJustify(words3, maxWidth3));
