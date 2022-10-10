import React from 'react';

function SignUp() {
    return(
        <div>

            <h1>Sign Up</h1>

            <form action="http://127.0.0.1:8000/signup" method="post">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" />
            </form>

        </div>
    );
}

export default SignUp;