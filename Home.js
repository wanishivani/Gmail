import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
export default function Home() {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();

  return (

      <div>
        <header
          style={{
            border: "1px solid black",
            padding: "1rem",
            fontSize: "Bold",
            borderRadius:'12px',
            backgroundColor:'coral',
            fontColor:'black'
          }}
        >
     <NavLink to="/main" as={NavLink}
           style={{
            padding: "1rem",
            fontSize: "26px",
            color:'black',
            fontFamily:'Ariel'

          }} 
    
          >singup</NavLink>

      
        {isAuthenticated ? (
          <Button style={{
            padding: "1rem",
            margin:'1rem',
            fontSize: "30px",
            borderRadius:'6px',
            backgroundColor:'skyblue',
           hover:'yellow',
            textAlign:'center',
            fontFamily:'Ariel'

          }}
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </Button>
        ) : (
          <Button onClick={() => loginWithRedirect()} style={{
            padding: "1rem",
            margin:'1rem',
            fontSize: "30px",
            borderRadius:'6px',
            backgroundColor:'skyblue',
           hover:'yellow',
            textAlign:'center',
            fontFamily:'Ariel'}}>Log In</Button>
        )}
      
      </header>
      </div>

    // <Navbar>

    // <Nav>

    //           <Nav>
    //               <Nav.Link to="/" as={NavLink}>
    //                 <h1
    //                   className="d-flex flex-column bd-highlight mb-50 mw-100 me-auto text-white gap{5}"
    //                   style={{
    //                     textAlign: "left",
    //                     padding: "",
    //                     margin: "",
    //                     backgroundColor: "red",
    //                     borderRadius: "12px",
    //                   }}
    //                 >
    //                   Home
    //                 </h1>
    //               </Nav.Link>
    //             </Nav>

    //             <Nav>
    //               <Nav.Link to="/header" as={NavLink}>
    //                 <h1
    //                   className="d-flex flex-column bd-highlight mb-50 mw-100 me-auto text-white gap{5}"
    //                   style={{
    //                     textAlign: "left",
    //                     padding: "",
    //                     margin: "",
    //                     backgroundColor: "red",
    //                     borderRadius: "12px",
    //                   }}
    //                 >
    //                   Gmail
    //                 </h1>
    //               </Nav.Link>
    //             </Nav>

    //   </Nav>
    //   </Navbar>

    // )
  );
}

// }
