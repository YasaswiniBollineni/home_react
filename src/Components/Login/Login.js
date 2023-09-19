function Login(){
        let isLogin=true
        return(
            <>
            {
            isLogin ? <About/> : <Home/>
    }

                </>
        );
}
export default Login;


export function Home(){
    return(
        <>
        <h1>You are logged out</h1></>
    );
}

export function About(){
    return(
        <>
        <h1>welcome to login</h1></>
    );
}




