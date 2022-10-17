import React from 'react'
import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom';

const supabase = createClient (
    "https://ifpznhlrtxbvmutimivg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmcHpuaGxydHhidm11dGltaXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDczNzEsImV4cCI6MTk4MTU4MzM3MX0.yD08OFoFNqQBq0MvUqyzDHdF_SsBLnWe98St-YCLHXo",
);


function Home () {

    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            //forward to login_Url
            navigate("/Login");
        } else {
            //forward to localhost:3000
            navigate("/");
        };
    });

    return (
        <div className='App'>
            <header className='App-header'>
            <Auth 
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
                providers={["discord"]}
            />
            </header>
        </div>
    )
}

export default Home