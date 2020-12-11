import React, { useState } from 'react';
import { sendName } from './util/APICalls';

function Name() {
  const [name, setName] = useState('');

  const handleSend = async () => {
    console.log('api url : ' + process.env.REACT_APP_baseAPIURL);
    try {
      const response = await sendName(name);
      alert(JSON.stringify(response.data));
      setName('');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <input
        value={name || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
        }}
      ></input>
      <button onClick={handleSend}>send</button>
    </div>
  );
}

export default Name;
