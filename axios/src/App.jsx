import React, { useState } from "react";
import axios, { all } from "axios";
import Card from "./components/Card";

const App = () => {
  const [alluser, setalluser] = useState([]);
  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setalluser(response.data);

  }
  return (
    <div className="w-full h-screen bg-gray-900 ">
      <button
        onClick={getData}
        className="px-3 py-4 bg-red-600 rounded-3xl active:scale-[.95]"
      >
        Click to get Data
      </button>
     {
      alluser.map((e,idx)=>{
        return <Card  key={idx} e={e}/>
      })
     }
    </div>
  );
};

export default App;
