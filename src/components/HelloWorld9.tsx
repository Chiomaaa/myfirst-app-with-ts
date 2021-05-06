import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld9: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [url, setUrl] = useState('');
    
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState(''); 

    const ShowURL = (event: any) => {
        setUrl(event.target.value);
    }

    const ShowSubject = (event: any) => {
        setSubject(event.target.value);
    }

    const ShowEmail = (event: any) => {
        setEmail(event.target.value);
    }

    const ShowBody = (event: any) => {
        setBody(event.target.value);
    }

    return (
     <div>
        <div className="field">
            <label className="label">URL</label>
            <div className="control">
                <input className="input is link" type="text" placeholder="Link input" onInput={ShowURL} />
            </div>
        </div>     
{/*
                <QRCode value={JSON.stringify({
                    name: "Employee Name",
                    age: 27,
                    department: "Police",
                    id: "aisuoiqu3234738jdhf100223"
                })} size={256}/>
                */}

{/*
                The size={256} prop passed above is to specify the size of the qrcode displayed which defaults to 128
                */}

{/*
                    <QRCode value="This is just an ordinary string example" />
                */}


{/* 2. You can also pass SMS as value */ }
{/* <QRCode value="SMS:+2348175930381:This is a SMS stored in a QR Code!" size={256}/> */ }
{/* You can also use SMSTO instead of SMS. Both will normally work */ }


{/* 3. You can also pass email address WITH or WITHOUT email subject, email body, cc, bcc, as value */ }




    <div className="control">
        <input className="input is-link" type="text" placeholder="Link input" onInput = {ShowURL}/>
    </div>
    



            <div>
                <QRCode value={url} size={256} fgColor="black" />
          </div>
          <div>
                <QRCode value={"https://www.pau.edu.ng"} size={256} fgColor="darkblue"/>
          </div>
      </div>
   )
}


export default HelloWorld9;
 