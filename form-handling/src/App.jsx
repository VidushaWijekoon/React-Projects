import FormComponent from "./components/form/FormComponent";
import LoginComponent from "./components/login/LoginComponent";
import RegisterComponents from "./components/register/RegisterComponents";

const App = () => {
    return (
        <div>
            <h1>React JS Form Handling</h1>
            {/* <FormComponent /> */}
            <div style={{ display: "flex", gap: "20px" }}>
                <LoginComponent />
                <RegisterComponents />
            </div>
        </div>
    );
};

export default App;
