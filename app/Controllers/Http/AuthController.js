'use strict'

const User = use("App/Models/User")

class AuthController {
    async register({request}) {
        try{
            const data = request.only(['username', 'email', 'password', 'cidade']);
            const user = await User.create(data);
            return user;
        }
        catch(error){
            response.status(500).send("Erro ao cadastrar usuário")
        }
    }
    async authenticate({request, auth}){
        try{
            const {email, password} = request.all();
            const {token} = await auth.attempt(email, password);
            const user = await User.findBy({email})
            return {token, user}
        }catch(error){
            response.status(500).send("Login ou senha incorreta")
        }
    }
}

module.exports = AuthController
