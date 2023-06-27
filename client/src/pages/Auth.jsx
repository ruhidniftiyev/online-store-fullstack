import React from 'react';

const Auth = () => {
  return (
    <div className="bg-slate-300 w-screen h-screen flex flex-col align-middle justify-center">
      <div className="flex justify-center">
        <p>Registration Form</p>
      </div>
      <div className="flex justify-center">
        <form className="flex flex-col justify-center">
          <label>E-mail</label>
          <input type="text" placeholder="E-mail" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
};

export default Auth;
