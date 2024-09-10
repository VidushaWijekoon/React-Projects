import { useState } from "react"
import Unit from "./Components/Unit"

const App = () => {

    const [inputData, setInputData] = useState({
        imageUrl: "",
        name: "",
        city: "",
        position: ""
    })
    console.log(inputData)
    const [myData, setData] = useState([])

    return (
        <div className="container">
            <div className="row mt-5">

                <div className="col-md-6">
                    <div className="card bg-info">
                        <div className="card-body">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={inputData.imageUrl}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setInputData(preInputValue => ({
                                            ...preInputValue,
                                            imageUrl: e.target.value
                                        }))
                                    }}
                                    placeholder="Please Import Image"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={inputData.name}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setInputData(preInputValue => ({
                                            ...preInputValue,
                                            name: e.target.value
                                        }))
                                    }}
                                    placeholder="Please Import Name"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={inputData.city}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setInputData(preInputValue => ({
                                            ...preInputValue,
                                            city: e.target.value
                                        }))
                                    }}
                                    placeholder="Please Insert City"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={inputData.position}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setInputData(preInputValue => ({
                                            ...preInputValue,
                                            position: e.target.value
                                        }))
                                    }}
                                    placeholder="Please Insert Position"
                                />
                            </div>
                            <button className="btn btn-sm btn-primary" onClick={() => {
                                setData((pre) => [
                                    ...pre, {
                                        image: inputData.imageUrl,
                                        name: inputData.name,
                                        city: inputData.city,
                                        position: inputData.position
                                    }
                                ])

                                alert(setInputData)

                                setInputData((pre) => {
                                    if (pre.imageUrl.length > 0) {
                                        return {
                                            ...pre,
                                            imageUrl: ""
                                        }
                                    } else {
                                        return pre;
                                    }
                                })

                                setInputData((preData) => (preData.name.length > 0 ? ({
                                    ...preData, name: ""
                                }) : preData))

                                setInputData((preData) => (preData.city.length > 0 ? ({
                                    ...preData, city: ""
                                }) : preData))

                                setInputData((preData) => (preData.position.length > 0 ? ({
                                    ...preData, position: ""
                                }) : preData))


                            }}>Submit</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            {myData?.map(({ image, name, city, position }, index) =>
                                <Unit key={index} image={inputData.image} name={inputData.name} city={inputData.city} position={inputData.position} />
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default App