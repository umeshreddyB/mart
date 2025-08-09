import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function Login (){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [userDetails, setUserDetails] = useState({});
const [result, setResult] = useState('');
const navigate = useNavigate();

    


const submit = () => {
                const getuserDetails = async () =>{
                    try{
                        const options= {
                            method:"post",
                            headers :{
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "username": username,
                                "password": password
            }),}


                    const reponse = await fetch("http://localhost:3005/login", options);
                    const data= await reponse.json()
                    console.log(data);
                    
                    if(data.jwt_token === undefined){
                        setResult('Invalid username or password');
                        return;
                    }
                    Cookies.set("jwt-token", data.jwt_token)
                    return navigate('/home', {replace: true}) 
                }
                catch (er){
                    console.error("Error fetching user details:", er);
                    setResult('Invalid username or password');
                }
                }
                getuserDetails();

                

}


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center gap-6 ">
                    <div>
                        <img alt='logo' className='h-15' src="https://img.icons8.com/fluent-systems-regular/512w/40C057/shopping-cart.png" />
                    </div>
                    <div>
                    <label >Username</label><br/>
                    <input type="text" placeholder="enter your username" value={username} onChange={(e)=> setUsername(e.target.value)} className="border rounded w-100 p-2"/>
                    </div>
                    <div>
                    <label>Password</label><br/>
                    <input type="password" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)} className="border rounded w-100 p-2"/>
                    </div>
                    <p className="text-red-500">{result}</p>
                    <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded" value={password} onClick={submit}>Login</button>

                </div>
        </div>
    )

}

export default Login;