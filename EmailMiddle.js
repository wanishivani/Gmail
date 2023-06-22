import React from "react";
import "./Email.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Button } from "react-bootstrap";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { inboxMsg } from "../../features/userSlice";
export default function EmailMiddle({
  name,
  subject,
  time,
  message,
  DeleteHandler,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const setMsg = () => {
    dispatch(inboxMsg({name,subject,time,message}));
    history.push ("/home");
  };

  return (
    <div className="email" >
      <div className="email_left" onClick ={setMsg}>
        <StarBorderIcon />
        <CheckBoxOutlineBlankIcon />
        <LabelImportantIcon />
        <h4>{name}</h4>
      </div>

      <div className="email_Mid">
        <div className="email_msg">
          <p>
            <b>{subject}</b>
            {message}
          </p>
        </div>
      </div>

      <div className="email_right">
        <p>{time}</p>
      </div>
      <Button className="btn" onClick={DeleteHandler}>
        {<DeleteOutlineIcon />}
      </Button>
    </div>
  );
}
// onClick={()=>deleteHandler(doc.id)}
