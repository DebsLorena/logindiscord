import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    "https://ifpznhlrtxbvmutimivg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmcHpuaGxydHhidm11dGltaXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDczNzEsImV4cCI6MTk4MTU4MzM3MX0.yD08OFoFNqQBq0MvUqyzDHdF_SsBLnWe98St-YCLHXo",
);

function Login() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                // value.data.user
                if (value.data?.user) {
                    console.log(value.data.user);
                    setUser(value.data.user);
                };
            });
        }
        getUserData();
    }, []);

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }
    return (
        <div className='App'>
            <header className='App-header'>
                { Object.keys(user).length !== 0 ?
                    <>
                        <h1>Login efetuado com sucesso :)</h1>
                        <button onClick={() => signOutUser()}>Sign Out</button>
                    </>
                    :
                    <>
                        <h3>User is not logged in</h3>
                        <button onClick={() => { navigate("/") }}>Go back home</button>
                    </>

            }
            </header>
        </div>
    )
}

export default Login