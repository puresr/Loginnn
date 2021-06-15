import React, {useState} from 'react';
import './App.css';
import LoginForm from './component/LoginForm';


function App() {
  const adminUser={
    email: "admin@admin.com",
    password: "P@$$W0RD"
  }

  const[user, setUesr] =useState({name:"", email:"" });
  const[error, setError] = useState("");

  const Login = details=>{
    console.log('details');

    if (details.email == adminUser.email && details.password == adminUser.password)  //  (ต้องใส่เมลตรง)
    {
      console.log("Logged in");
      setUesr({
        name: details.name,
        email: details.email
      });
    }else {
      console.log("Details do not match!!!");
      setError("Details do not match!!!")
    }
    

  }

  const Logout = () => {
    setUesr({ email: ""});
  }

  

  return (
    <div className = 'App'>
      {(user.email != '') ? (
        <div className='welcom'>
          <h2>ยินดีต้อนรับ , <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;