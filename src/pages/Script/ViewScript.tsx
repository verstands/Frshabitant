import React, { useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import hasAccess from "../../components/hasAcess";
import ScriptTable from "./ScriptTable";
import ReactQuill from "react-quill";

const ViewScript = () => {
  const [userInfo, setuserInfo] = useState({
    title: '',
    description: '',
    information: '',
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 
  const ondescription = (value) => {
    setuserInfo({ ...userInfo,
      description:value
    });
  } 
  const oninformation = (value) => {
    setuserInfo({ ...userInfo,
      information:value
    });
  } 
  return (
    <>
      <Otbar title="Espace script" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-2">
          <h1 className="text-[#b3b4b6]">Script / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
      </div>
      <div className="px-20">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          
            <Link
              to="/scripts"
              className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right"
            >
              <FaPlus /> Nouveau script
            </Link>
          
          <div className="py-4"></div>
          <br />
          <hr />
         <ScriptTable />
        </div>
      </div>
    </>
  );
};

export default ViewScript;
