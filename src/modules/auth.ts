import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



export const comparePasswords =  (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword=async (password:string)=>{
    const saltRounds=10;
     const salt = await bcrypt.genSalt(saltRounds);
return bcrypt.hash(password,salt)
}
export const createJWT = (user) => {

console.log(process.env.JWT_SECRET)
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET)
    return token

}


export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401)
        res.send("Not authorized")
        return
    }

    const [_, token] = bearer.split(' ')

    if (!token) {
        res.status(401)
        res.send("Not valid token")
        return
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)

        req.user = user
        console.log("It comes here")
        next()
        return
    }
    catch (e) {
        res.status(401)
        console.log(e)
        res.send("Not valid token")
        return
    }
}