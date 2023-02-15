import "./App.css";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import AppRoutes from "./Routes/Routes";

function App() {
  // const [user , setUser] = useState({})
  //   const handleCallbackResponse=(response)=>{
  //     console.log(response.credential);
  //     var userObect = jwt_decode(response.credential)
  //     localStorage.setItem('token', response.credential)
  //     console.log(localStorage.setItem)
  //     setUser(userObect);
  //     document.getElementById("SignInDiv").hidden = true
      
  // };
  //   useEffect(() => {
  //     /*global google*/
  //     google.accounts.id.initialize({
  //       client_id:"698008245935-qc56vp89dajkk3oeuqpb9n68uch3fu7q.apps.googleusercontent.com",
  //       callback:handleCallbackResponse,
  //     });
  //     google.accounts.id.renderButton(
  //       document.getElementById("SignInDiv"),
  //       {theme:"outline" ,size:"large" }
  //     );
  //   },[]);
  //   const handleSignout = (e) => {
  //     setUser({});
  //     document.getElementById("SignInDiv").hidden = false;
  //     localStorage.clear()
  //   }

  return (
    <div className="App">

    <AppRoutes/>
    {/* {
          Object.keys(user).length !== 0 && <button onClick={(e)=>{
          handleSignout(e);
        }}>Sign Out</button>
        }
        
        {user && <div>
          <img src={user.picture}/>
          <h3>{user.name}</h3>
        </div>

        } */}
    </div>
  );
}

export default App;
