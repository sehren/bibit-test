function findFirstStringInBracket(text) {
  const pattern = text.match(/\(([^)]+)\)/g);
  if (pattern?.length > 0) {
    return pattern[0];
  } else {
    return "";
  }
}

// i only know typescript and javascript, so i rewrite using javascript
