import { useState } from "react";
import { LoginFormElements } from "../../config/FormElements";
import CommonForm from "../common-form/CommonForm";

const initialFormData = {
    email: "",
    password: "",
};

const LoginComponent = () => {
    const [loginFormData, setLoginFormData] = useState(initialFormData);

    const onHandleSubmit = (event) => {
        event.preventDefault();
        setLoginFormData(initialFormData);
    };

    return (
        <div>
            <h1>Login Page / Component</h1>
            <CommonForm
                formData={loginFormData}
                setFormData={setLoginFormData}
                formControls={LoginFormElements}
                buttonText={"Login"}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    );
};

export default LoginComponent;
