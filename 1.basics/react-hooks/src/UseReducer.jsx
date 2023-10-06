import { useReducer } from "react";

// const reducer = (state, action) => {
//   if (action.type === "setImage") {
//     return {
//       ...state,
//       image: action.data,
//     };
//   } else if (action.type === "setName") {
//     return {
//       ...state,
//       name: action.data,
//     };
//   } else if (action.type === "setCity") {
//     return {
//       ...state,
//       city: action.data,
//     };
//   } else if (action.type === "setPosition") {
//     return {
//       ...state,
//       position: action.data,
//     };
//   } else if (action.type === "setArray") {
//     return {
//       ...state,
//       dataArray: [...state.dataArray, action.data],
//     };
//   } else {
//     return state;
//   }
// };

const reducerActionType = {
  setImage: "setImage",
  setName: "setName",
  setCity: "setCity",
  setPosition: "setPosition",
  setArray: "setArray",
};

const reducer = (state, { type, data }) => {
  switch (type) {
    case reducerActionType.setImage:
      return {
        ...state,
        image: data,
      };
    case reducerActionType.setName:
      return {
        ...state,
        name: data,
      };
    case reducerActionType.setCity:
      return {
        ...state,
        city: data,
      };
    case reducerActionType.setPosition:
      return {
        ...state,
        position: data,
      };
    case reducerActionType.setArray:
      return {
        ...state,
        dataArray: [...state.dataArray, data],
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, setState] = useReducer(reducer, {
    name: "",
    image: "",
    city: "",
    position: "",
    dataArray: [],
  });

  console.log(state);

  return (
    <div className="">
      <input
        type="text"
        value={state.image}
        onChange={(e) =>
          setState({
            type: "setImage",
            data: e.target.value,
          })
        }
        placeholder="Enter Image Url"
      />
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          setState({
            type: "setName",
            data: e.target.value,
          })
        }
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={state.city}
        onChange={(e) =>
          setState({
            type: "setCity",
            data: e.target.value,
          })
        }
        placeholder="Enter City"
      />
      <input
        type="text"
        value={state.position}
        onChange={(e) =>
          setState({
            type: "setPosition",
            data: e.target.value,
          })
        }
        placeholder="Enter Position"
      />
      <button
        onClick={() =>
          setState({
            type: "setArray",
            data: {
              image: state.image,
              name: state.name,
              city: state.city,
              position: state.position,
            },
          })
        }
      >
        Set Data
      </button>
      <div></div>
    </div>
  );
};

export default App;
