import React, { useState } from 'react';
import axios from 'axios';

type HelloResponse = {
  hello: string;
};

function Name() {
  const [name, setName] = useState('');

  const handleSend = async () => {
    const response = await axios.get<HelloResponse>(`hello/${name}`);
    alert(JSON.stringify(response.data));
    setName('');
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
