callback is a function passed as an argument to another function, which is then executed (or "called back") 
inside the outer function to complete a specific task

function getRegex(callback) {
  setTimeout(() => {
    const Regex = "🥔";
    console.log("Regex IN", Regex);
    callback(Regex);
  }, 5000);
}

function makeC(Regex, callback) {
  setTimeout(() => {
    const C = Regex + "🍩";
    console.log("C start",C);
    callback(C);
  }, 3000);
}

function makeCpp(C, callback) {
  setTimeout(() => {
    const Cpp = C + "🥪";
    console.log("Cpp is start", Cpp);
    callback(Cpp);
  }, 5000);
}

getRegex((Regex) => {
  makeC(Regex, (C) => {
    makeCpp(C, (Cpp) => {
      console.log("Cpp is END");
    });
  });
});
