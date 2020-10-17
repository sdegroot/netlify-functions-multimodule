const lib = require("functions-lib");

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Bye World!" + lib.add(2, 2) }),
  };
};
