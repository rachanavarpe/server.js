//Create server using Node JS

//1. Import http library/module.
const http = require('http'); //function

//2. Create Server.
const server = http.createServer((req, res) =>{
    console.log(req.url);
    res.write("Welcome to my application");
    if(req.url == "/product"){
        //response ends
        res.end("This is product page");
    }
    else if(req.url == "/user"){
        res.end("This is user page");
    }
    //modifying the response
    //here comes the request
    res.end("Welcome");            //method
});

//3. Specify a port to listen to client's request
server.listen(3100, ()=> {
    console.log("Server is listening on port 3100.");
});

//console.log("Server is listening on port 3100");