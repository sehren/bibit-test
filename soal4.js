function anagram(arr) {
  const pair = {};
  const result = [];
  if (arr.length === 0) return false;
  for (let z = 0; z < arr.length; z++) {
    const word = arr[z];
    const charLength = "length" + word.length;
    if (pair[charLength] === undefined) {
      pair[charLength] = {};
    }
    pair[charLength][word] = true;
  }
  let notMatch = [];
  for (const words in pair) {
    let char = {};
    let group = [];
    if (pair.hasOwnProperty(words)) {
      const chunk = pair[words];
      for (const text in chunk) {
        let c;
        let check = true;
        for (let x = 0; x < text.length; x++) {
          c = text[x];
          if (Object.keys(char).length < text.length) {
            char[c] = true;
          }
          if (char[c] === undefined) {
            check = false;
          }
        }
        if (check) {
          group.push(text);
        } else {
          notMatch.push(text);
        }
      }
      result.push(group);
    }
  }
  result.push(notMatch);
  return result;
}
