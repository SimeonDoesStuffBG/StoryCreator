export default function Login(){
    return <form>
        <label htmlFor="username">Username</label><input type="text" id="username"/>
        <label htmlFor="password">Password</label><input type="password" name="" id="password" />
        <input type="submit" value="Log In" id="submit" />
    </form>
}