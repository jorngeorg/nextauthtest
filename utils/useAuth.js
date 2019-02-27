const auth = require('basic-auth')
var compare = require('tsscmp')

export default (req, res) => {
  var credentials = auth(req)
  
  if (!credentials || !check(credentials.name, credentials.pass)) {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
  } else {
    return true
  }
  
  function check (name, pass) {
    var valid = true
  
    // Simple method to prevent short-circut and use timing-safe compare
    valid = compare(name, process.env.username) && valid
    valid = compare(pass, process.env.password) && valid
  
    return valid
  }
}
