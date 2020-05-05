function makeUnique(collection) {
  let output = [];
  for (let i = 0; i < collection.length; i++) {
    // if this finds a match, this will not be null => truthy || if null => falsey 
    let exists = false;
    for (let j = 0; j < output.length; j++) {
      if (collection[i] == output[j]) {
        exists = true;
      }
    }
    if (!exists) {
      output.push(collection[i])
    }
  }
  return output;
}