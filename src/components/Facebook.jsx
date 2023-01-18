import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'

function Facebook() {
 
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const initialValues = [{
        userid:'',
        email:'',
        name:'',
        picture:''
        
    }]
    const [value,setValues] = useState(initialValues)
    
    const responseFacebook = (response)=>{
       setValues(response);
       setIsLoggedIn(true)
       
    }


    let fbContent;

    if(isLoggedIn){
    fbContent = (
     <div style={{
        width:"400px",
        margin:"auto",
        background: "#f4f4f4",
        padding: "20px"
     }}>
    
    <img src= {value.picture.data.url} alt={value.name}/>
    <h2>welcome {value.name}</h2>
    <h3>Email: {value.email}</h3>

     </div>
    );
    }
    else{
   fbContent = (<FacebookLogin
    appId="1210585959867984"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />);
    }
  
  return (
    <div>{fbContent}</div>
  )
}

export default Facebook