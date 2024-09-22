import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import ContextButtonComponent from "./components/context-concept/ContextButtonComponent";
import ContextTextComponent from "./components/context-concept/ContextTextComponent";
import FunctionalComponent from "./components/functional-component";
import ProductList from "./components/products/ProductList";
import UseReducerExample from "./components/UseReducerExample";
import Users from "./components/users/Users";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
    return (
        <div className="">
            <h1>React JS Basics and Concepts in 2024</h1>
            {/* <ClassBasedComponent /> */}

            {/*  <FunctionalComponent /> */}
            {/* <ProductList
                listOfProducts={dummyProductData}
                name="Vidusha"
                city="Kandy"
            /> */}
            {/* <Users /> */}
            {/* <ContextButtonComponent />
            <ContextTextComponent /> */}
            <UseReducerExample />
        </div>
    );
}

export default App;
