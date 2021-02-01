import React, { useState } from 'react';
import { getUser, postUser } from './util/APICalls';

type UserPayload = {
  email: string;
  username: string;
};

function User() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [queryEmail, setQueryEmail] = useState('');
  const [result, setResult] = useState('');

  const handleInquiry = async () => {
    try {
      const response = await getUser(queryEmail);
      if (response.data) {
        setResult(
          `${response.data.email ? response.data.email : ''} - ${
            response.data.username ? response.data.username : ''
          }`
        );
      }
    } catch (error) {
      console.log(error);
      setResult('');
    }
  };

  const handleRegistration = async () => {
    const user: UserPayload = {
      email,
      username,
    };

    try {
      await postUser(user);
      alert('등록 성공');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <label>email</label>
        <input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
          }}
        ></input>
      </div>
      <div>
        <label>username</label>
        <input
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.currentTarget.value);
          }}
        ></input>
        <button onClick={handleRegistration}>등록</button>
      </div>
      <hr />
      <div>
        <label>email</label>
        <input
          value={queryEmail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQueryEmail(e.currentTarget.value);
          }}
        ></input>
        <button onClick={handleInquiry}>조회</button>
        <div>
          <label>조회결과 : {result}</label>
        </div>
      </div>
    </div>
  );
}

export default User;
