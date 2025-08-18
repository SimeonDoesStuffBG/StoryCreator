export default function SignIn(){
    return <form>
       <label htmlFor="username">Username</label><input type="text" id="username"/>
       <label htmlFor="email">Email</label><input type="text" id="email"/>
        <label htmlFor="password">Password</label><input type="password" name="" id="password" />
        <label htmlFor="rePass">Repeat Password</label><input type="password" name="" id="rePass" />
        <input type="submit" value="Sign In" id="submit"/>
    </form>
}