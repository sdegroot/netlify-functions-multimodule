const lib = require("functions-lib");

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" + lib.add(1, 2) }),
  };
};
