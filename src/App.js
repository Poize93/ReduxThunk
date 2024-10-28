import "./App.css";
import { userAction } from "./Redux/actions/userActions";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // const userList = useSelector((state) => state)?.userList;

  // console.log(userList, "userListuserList");
  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>My Redux thunk</h1>
    </div>
  );
}

export default App;
