import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-windowr-resize";

const ReceipeList = () => {
    // Get Current Path
    const location = useLocation();

    // const resultFromCustomUseFetchHook = useFetch(
    //     "https://dummyjson.com/recipes"
    // );
    // console.log(resultFromCustomUseFetchHook)

    const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
    const windowSize = useWindowResize();

    console.log(data);
    if (loading) return <h1>Data is fetching! Pleaae Wait</h1>;
    return (
        <div>
            <h1 style={{ color: windowSize.width < 768 ? "red" : "black" }}>
                Recipe list page
            </h1>
            <h3>
                Current window width is {windowSize.width} and current height is{" "}
                {windowSize.height}
            </h3>
            <ul>
                {data?.recipes.length > 0
                    ? data?.recipes.map((recipeItem, index) => (
                          <div className="" key={index}>
                              <img src={recipeItem?.image} />
                              <label>{recipeItem?.name}</label>
                          </div>
                      ))
                    : null}
            </ul>
        </div>
    );
};

export default ReceipeList;
