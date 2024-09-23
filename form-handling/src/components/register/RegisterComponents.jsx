import { useState } from "react";
import CommonForm from "../common-form/CommonForm";
import { RegiterFormElemets } from "../../config/FormElements";

const initialRegisterFormData = {
    name: "",
    email: "",
    password: "",
};

const RegisterComponents = () => {
    const [registerFormData, setRegisterFormData] = useState(
        initialRegisterFormData
    );

    const onHandleSubmit = (event) => {
        event.preventDefault();
        setRegisterFormData(initialRegisterFormData);
    };

    return (
        <div>
            <h2>Regiter Form</h2>
            <CommonForm
                formData={registerFormData}
                setFormData={setRegisterFormData}
                formControls={RegiterFormElemets}
                buttonText={"Register"}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    );
};

export default RegisterComponents;
