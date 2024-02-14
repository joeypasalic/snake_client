const { connect } = require('./client');
const { setupInput } = require('./input');
const connection = connect();
console.log("Connecting ...");

setupInput(connection);

//had to add this code because i wasn't being kicked off properly. prevents softlocking
connection.on('close', () => {
  process.exit(1);
});
