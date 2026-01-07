import React, { useState } from "react";

import Card from "./Card";

const Input = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [role, setrole] = useState("");
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState("");

  const [allUser, setallUser] = useState([]);

  function Submithandler(e) {
    e.preventDefault();

    setallUser([...allUser, { firstname, lastname, role, desc }]);

    setfirstname("");
    setlastname("");
    setrole("");
    setdesc("");
  }

   const deleteHandler = (idx) => {
    const copyUsers = [...allUser]

    copyUsers.splice(idx, 1)

    setallUser(copyUsers)
  }


  return (
    <div className="w-full  h-full  p-4 bg-red-200 ">
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          Submithandler(e);
        }}
      >
        <input
          className=" px-3 py-3 text-2xl border-1"
          type="text"
          placeholder="Enter your First-Name "
          value={firstname}
          onChange={(e) => {
            setfirstname(e.target.value);
          }}
        />
        <input
          className=" px-3 py-3 text-2xl border-1"
          type="text"
          placeholder="Enter your Last-Name "
          value={lastname}
          onChange={(e) => {
            setlastname(e.target.value);
          }}
        />
        <input
          className="px-3 py-3 text-2xl border-1"
          type="text"
          placeholder="Enter your Role "
          value={role}
          onChange={(e) => {
            setrole(e.target.value);
          }}
        />
        <input
          className=" px-3 py-3 text-2xl border-1"
          type="text"
          placeholder="Enter your Description "
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <input
          className=" px-3 py-3 text-2xl border-1"
          type="text"
          placeholder="Click to Select Profile Picture "
          value={image}
          onChange={(e) => {
            setimage(e.target.value);
          }}
        />

        <button className=" active:scale-[0.95] w-full text-3xl bg-green-800 mt-5 px-5 py-3 ">
          Submit
        </button>
       
      </form>
       {allUser.map((e, idx) => {
          return <Card idx={idx} e={e}  deleteHandler={deleteHandler}/>;
        })}
    </div>
  );
};

export default Input;
