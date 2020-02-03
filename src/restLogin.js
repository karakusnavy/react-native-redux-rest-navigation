async function Login(username,password){
    var users = require('../src/users.json')
    var state = false    
    users.forEach(element => {        
        if(username == element.username && password == element.password)
        state = true  
    });
    return state
}
export default Login
