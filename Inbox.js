
import React, { useEffect, useState } from "react";
import "./Email.css";
import EmailSetting from "./EmailSetting";
import EmailType from "./EmailType";
import EmailMiddle from "./EmailMiddle";
import { db } from "../firebase";
import { Card } from "react-bootstrap";
export default function Inbox(){

  const [email, setEmail] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmail(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const DeleteHandler = (index) => {
    var newEmail = email;
    newEmail.splice(index, 1);
    setEmail([...newEmail]);
  };

  return (
    <Card>
      <EmailSetting />
      <EmailType />

      {email.map(({ id, data, index }) => {
        return (
          <EmailMiddle
            key={id}
            name={data.value}
            subject={data.sub}
            message={data.msg}
            DeleteHandler={DeleteHandler}
            index={index}
            time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
          />
        );
      })}
    </Card>
  );
}








