const app = require("./app");
const db = require('./db')

const port = 3001;

app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})