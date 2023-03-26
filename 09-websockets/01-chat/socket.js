const socketIO = require('socket.io');

const Session = require('./models/Session');
const Message = require('./models/Message');

function socket(server) {
  const io = socketIO(server);

  io.use((socket, next) => {
    console.log(socket.handshake.header);
  })

  io.use(async function (socket, next) {
    next();
  });

  io.on('connection', function (socket) {
    socket.on('message', async (msg) => { });
  });

  return io;
}

module.exports = socket;

// db.users.insert({
//   '_id': ObjectId("641bd5917b9d93d5a82b65b8"),
//   'email': 'bedbum77@gmail.com',
//   'displayName': 'andrey b',
//   'verificationToken': undefined,
//   'salt': 'ac88b8a055c5bc97cbbd4f5fa19546b691a52218d3f9202123eef1934fe18d867737dffa65604be59cdc3f4cf5296d5b8c1f3baa8a7458708c41243cd378bea6546bfebfe14f7df4860feaf5549b027ab71d3938edafbb35303a07f111c35b7f67a4c391406f57bfc95ea09b32bee144dc9c973ca5eba5c30ae81ac56187607b',
//   'passwordHash': 'd34a42c89ae3c4df9421999f9dd5e49412e9b1af91fe1f613a4eadfff262553aef77b6bd033caa6c35138efab08feaa3fe8c92f1f59caf3b940b94ba49f2ffe97fdeeacaad43ceacb82de60ab51f8633bd6d8433e2ef3a722e40e4a9aa841c2fc2ad615a19f6356b0f8388fb40d59e3eeebc768a4db298e795a52a1832c1ca9a',
//   'createdAt': ISODate("2023-03-23T04:29:05.181Z"),
//   'updatedAt': ISODate("2023-03-23T04:29:05.181Z"),
//   '__v': 0
// })