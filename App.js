// import './App.
// import Login from "./Components/Form/Login";
// import { Navbar as Nav} from "react-bootstrap";
// import Navbar from "./Components/Navbar";

import {Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Compose from "./Components/Header/Compose";
import { useSelector } from "react-redux";
import { selectisMsgopen } from "./features/userSlice";
import Home from "./Components/Header/Home";
import Main from "./Components/Header/Main";
import Email from "./Components/Header/Email";
import EmailInbox from "./Components/Header/EmailInbox";
import Sidebar from "./Components/Header/Sidebar";
import Header from "./Components/Header/Header";
// import { Home } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";

import SendBox from "./Components/Header/SendBox";
import Inbox from "./Components/Header/Inbox";
// import Gmail from "./Components/Header/Gmail";
function App() {
  const isMsgopen = useSelector(selectisMsgopen);
  const {  isAuthenticated } = useAuth0();

  console.log(isMsgopen);
  return (
    <Router>
      <div className="App">
       
       
 <Header />
        <div className="app_bar" >
         {/* <Gmail />  */}
         {isAuthenticated &&
        <Sidebar />}
        {/* <Main /> */}

        <Switch>
          <Route exact path="/">
            <Email/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/home">
            <EmailInbox />
          </Route>
        </Switch>

        <Switch>
          <Route path="/main">
            <Main/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/sent">
            <SendBox/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/inbox">
            <Inbox/>
          </Route>
        </Switch>

        <Switch>
        <Route path="/login">
        <Home/>

          </Route>
        </Switch>




        </div>



        {isMsgopen && <Compose />}

      </div>
      </Router>
  );
}

export default App;
