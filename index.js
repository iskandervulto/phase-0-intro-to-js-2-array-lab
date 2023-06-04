// Write your solution here!
const cats= [
    "Milo",
    "Otis",
    "Garfield"
]

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
    cats.push(`${name}`)
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`)
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat(name) {
    cats.pop (`${name}`)
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveFirstCat(name) {
    cats.shift(`${name}`)
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function appendCat(name) {
   return [...cats, `${name}`]
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function prependCat(name) {
    return [`${name}`, ...cats]
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeLastCat() {
   return cats.slice(0, cats.length - 1)
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeFirstCat() {
   return cats.slice (1, cats.length)
  }