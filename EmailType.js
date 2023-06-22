import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InboxIcon from "@mui/icons-material/Inbox";
import React from "react";
import "./EmailType.css";
export default function EmailType() {
  return (
    <div className="emailtype">
      <div className="email_option email_option--active">
        <InboxIcon />
        <p style={{color:'red'}}>Primary</p>
      </div>

      <div className="email_option">
        <LocalOfferIcon />
        <p>Offer</p>
      </div>
      <div className="email_option">
        <PeopleAltIcon />
        <p>Social</p>
      </div>
    </div>
  );
}
