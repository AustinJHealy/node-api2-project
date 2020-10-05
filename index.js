const server = require("./server");


// watch for connections on port 5000
server.listen(4000, () =>
  console.log("Server running on http://localhost:4000")
);
