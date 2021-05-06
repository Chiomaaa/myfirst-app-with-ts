import './App.css';
import React from 'react';

import SmsProject from './components/smsProject';
import UrlProject from './components/urlProject';
import EmailProject from './components/emailProject';


const App: React.FC = () => {
  return (
    <div className="Container">
      <div className="Column1">
      <SmsProject />
    </div> 
    <div className="Column2">
    <UrlProject />
      </div> 
      <div className="Column3">
        <EmailProject/>
      </div>
    </div >
  );
}
export default App;
