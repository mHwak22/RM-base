'use client'
import React, {useState} from "react";
import { Input } from "@nextui-org/react";

const Login = () => {
    const [value, setValue] = React.useState("example.org");

    const validateEmail = (value) => value.match(/^[A-z0-9._%+-]+@[A-z0-9]+.[A-z]{2,4}$/i);
    
    const isInvalid = React.useMemo(()=> {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);
    return (
        <div>
            <h1>Hello there!!!.  Let's Login and Continue...</h1>
            <form>
                <Input 
                value={value}
                type="email"
                label="Email"
                variant="bordered"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "success"}
                errorMessage= {isInvalid && "Please Enter a Valid email"}
                onValueChange={setValue}
                className="max-w-sx"/>
            </form>
        </div>
    );
}

export default Login;