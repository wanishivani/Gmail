import React from "react";
import "./EmailSetting.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IconButton, Avatar } from "@material-ui/core";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import LaunchIcon from "@mui/icons-material/Launch";
import PrintIcon from "@mui/icons-material/Print";
import ReplyIcon from "@mui/icons-material/Reply";
import {useHistory} from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectedMail } from "../../features/userSlice";
export default function EmailInbox() {
const mail  = useSelector(selectedMail);
const history = useHistory();
console.log(mail);

  return (
    <div className="email_details">
      <div className="email_setting">
        <div className="email_setting_left">
          <IconButton>
            <ArrowBackIcon onClick={()=>history.push('/')}/>
          </IconButton>

          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>

          <IconButton>
            <RefreshIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='box_shadow'> 
        <div className="header">
          <div className="header_left">
            <h4>{mail.subject}</h4>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>
          <div className="header_right">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>
        </div>

        <div className="header_middle">
          <div className="header_middleleft">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{mail.subject}</h4>
              <p>{mail.name}</p>
          </div>
          <div className="header_middleright">
            <p>{mail.time}</p>
            <IconButton>
              <StarBorderIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="email_details">
          <p>{mail.message}</p>
        </div>
      </div>
    </div>

    </div>
  );
}
