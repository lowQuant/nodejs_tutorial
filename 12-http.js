const http = require('http')

// in that callback function req stands for request (what the client wants to be done)
// and res stands for response
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})
    
server.listen(5000)
