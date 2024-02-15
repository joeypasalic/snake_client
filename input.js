const readline = require('readline');
let moving = true;


let connection;

const setupInput = (conn) => {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  const handleUserInput = function (key) {

    if (key === '\u0003') {
      process.exit();
    }

    //w key
    if (key === 'w' && moving) {
      connection.write("Move: up");
    }

    //a key
    if (key === 'a' && moving) {
      connection.write("Move: left");
    }

    //s key
    if (key === 's' && moving) {
      connection.write("Move: down");
    }

    //d key
    if (key === 'd' && moving) {
      connection.write("Move: right");
    }

    if (key === ',') {

      moving = false;

      const rl = readline.createInterface({

        input: process.stdin,
        output: process.stdout

      });

      //implementation of custom messages, works but not well
      rl.question('Say: ', (input) => {
        connection.write(`Say: ${input}`);
        moving = true;


      });
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;

};

module.exports = { setupInput };
