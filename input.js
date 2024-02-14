let connection;

const setupInput = (conn) => {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  const handleUserInput = function(key) {

    if (key === '\u0003') {
      process.exit();
    }

    //w key
    if (key === 'w') {
      connection.write("Move: up");
    }

    //a key
    if (key === 'a') {
      connection.write("Move: left");
    }

    //s key
    if (key === 's') {
      connection.write("Move: down");
    }

    //d key
    if (key === 'd') {
      connection.write("Move: right");
    }

  };

  stdin.on("data", handleUserInput);
  return stdin;

};

module.exports = { setupInput };
