const { welcome, goodbye, tell } = require("../utils/fortune-teller");

let question = "When will the PS5 be restocked?";

// const promise = tell(question);

function getFortune(question) {
  return tell(question)
    .then((fortune) => {
      return [`Your question was: ${question}`, `Your fortune is: ${fortune}`];
    })
    .catch((error) => {
      return `There was an error: ${error}`;
    });
}

getFortune("Will I ace my job interview?");

function fullSession(question) {
  return welcome().then((welcomeMsg) => {
    const result = [];
    result.push(welcomeMsg);

    tell(question)
      .then((fortune) => {
        result.push(
          `Your question was: ${question}`,
          `Your fortune is: ${fortune}`
        );
        return result;
      })
      .then(() => {
        goodbye().then((response) => {
          result.push(response);
          console.log(result);
          return result;
        });
      })
      .catch((error) => {
        result.push(`There was an error: ${error}`);

        goodbye().then((response) => {
          result.push(response);
          console.log(result);
          return result;
        });
      });
  });
}

fullSession();
