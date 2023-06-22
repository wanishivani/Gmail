import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Email.css";

import {firebase} from "../firebase";
import { db } from "../firebase";
import { useDispatch } from "react-redux"
import { closeMsg } from "../../features/userSlice";
 function Compose() {
  const [value, setValue] = useState("");
  const [sub, setSub] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();



  



  const formsubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      return alert("Value is required");
    }
    if (sub === "") {
      return alert("Sub is required");
    }
    if (msg === "") {
      return alert("Msg is required");
    }
      db.collection("emails").add({
      value,
      sub,
      msg,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    setValue("");
    setSub("");
    setMsg("");

    alert("message sent!!");
    dispatch(closeMsg());
  };
  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>
        </div>

        <div className="compose_header_right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeMsg())} />
        </div>
      </div>
      <form onSubmit={formsubmit}>
        <div className="compose_do">
          <div className="compose_form">
            <input
              type="email"
              placeholder="Recipents"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subjects"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
            />
            <textarea rows="20" onChange={(e) => setMsg(e.target.value)}>
              {msg}
            </textarea>
          </div>
        </div>

        <div className="compose_footer">
          <div className="compose_footer_left">
            <button type="Submit">
              Send <KeyboardArrowDownIcon />
            </button>
          </div>

          <div className="compose_footer_right">
            <FormatColorFillIcon />
            {/* <ExpandMoreIcon/> */}

            <AttachFileIcon />
            <AddPhotoAlternateIcon />
            <NoteAddIcon />
            <DeleteIcon />
            <MoreVertIcon />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Compose;