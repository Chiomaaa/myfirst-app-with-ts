import React, { useState } from 'react';

const SmsProject: React.FC = () => {

    const QRCode = require('qrcode.react');

    const [num, setNum] = useState("");

    const ShowNum = (event: any) => {
        setNum(event.target.value);
    }

    const [message, setMessage] = useState('');

    const ShowMessage = (event: any) => {
        setMessage(event.target.value);
    }

// the constant variables in the lines above are used to declare values that will be used later during the program.*/
    return (
        <div>
            <div className="field">
                <div className="label">SMS</div>
                <div className="control">
                    <input className="input" type="text" placeholder="Number" onInput={ShowNum} />
                </div>
            </div>
{/*this block of codes above indicates that the type of message to be sent is an SMS message.*/}
          <div className="field">
                <div className="label">Message</div>
                <div className="control">
                    <textarea className="TextArea" placeholder="TypeMessage" onInput={ShowMessage}></textarea>
                </div>
            </div>
{/*this block of codes above indicates the area where the SMS is to be inputed.*/}
            <button>
                Generate
            </button>


            <div>
                <QRCode value={`SMS:${num}:${message}`} size={256} />
            </div>
        </div >
    )
}

export default SmsProject;
