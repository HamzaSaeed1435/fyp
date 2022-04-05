const mysql=require('mysql')

var db = {
    host:'us-cdbr-east-05.cleardb.net',
    user :'bc39792813b337',
    password:'5f185273',
    database:'heroku_e862a1fb6c8706e'
};

// mysql://bc39792813b337:5f185273@us-cdbr-east-05.cleardb.net/heroku_e862a1fb6c8706e?reconnect=true
// const  db = mysql.createConnection({
//     host:'localhost',
//     user :'root',
//     password:'',
//     database:'uiit'
// })
var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();


module.exports=db