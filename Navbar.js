// import { NavLink } from "react-router-dom/dist";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Container, Button, Nav, Navbar as Navbarbs } from "react-bootstrap";
// export function Navbar() {
//   const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
//   return (   
//      <Navbarbs
//     sticky="top"
//     className="d-flex flex-column bd-highlight mb-50 mw-100  text-white"
//   style={{ margin: ".3rem", padding: "5px", height: "120px",backgroundColor:"aqua", }}
//   >
//     <Container>
//       <Nav className="me-auto">
//         {/* <Nav.Link to="/" as={NavLink}>
//           <h1 className="display-4" style={{textAlign:'right',padding:'',margin:""}}> Home </h1>
//         </Nav.Link> */}

//         <Nav.Link to="/Compose" as={NavLink}>
//           <h1 className="display-4"> Compose</h1>
//         </Nav.Link>

//       </Nav>
//       {isAuthenticated ? (
//         <>
//           <Nav>
//             <Nav.Link to="/" as={NavLink}>
//               <h1
//                 className="d-flex flex-column bd-highlight mb-50 mw-100 me-auto text-white gap{5}"
//                 style={{
//                   textAlign: "left",
//                   padding: "",
//                   margin: "",
//                   backgroundColor: "red",
//                   borderRadius: "12px",
//                 }}
//               >
//                 Home
//               </h1>
              
//             </Nav.Link>
//           </Nav>
//           <li>
//               <Button
//                 onClick={() =>
//                   logout({ logoutParams: { returnTo: window.location.origin } })
//                 }
//               >
//                 Log Out
//               </Button>
//             </li>
//           </>
//             ) : (

//           <>
//             <li>
//             <Button style={{width:'100px',borderRedious:'12px',position:'-moz-initial'}}   onClick={() => loginWithRedirect()}>Log In</Button>;
//               <Button style={{ 
//                   width: "100px",
//                    borderRedious: "12px",
//                   position: "revert",
//                   textAlign: "center",
//                 }}
//                 onClick={() => loginWithRedirect()}
//               > Log In
//               </Button>
//             </li>
//             </>

// )}
//         {isAuthenticated && <h5>{user.name}</h5>}
            
//   </Container>
// </Navbarbs>
// )
// };

