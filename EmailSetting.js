import React from "react";
import "./EmailSetting.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@material-ui/core";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function EmailSetting() {
  return (
    <div className="email_setting">
      <div className="email_setting_left">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
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
    </div>
  );
}
