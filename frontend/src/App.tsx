import React from 'react';
import Name from './Name';
import User from './User';

function App() {
  return (
    <div>
      <Name />
      <hr />
      <h2>사용자 등록 및 조회</h2>
      <User />
    </div>
  );
}

export default App;
