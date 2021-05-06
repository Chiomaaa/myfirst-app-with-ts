import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const EmailProject: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.



    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
// the constant variables in the lines above and below are used to declare values that will be used later during the program.*/
    //const [showCode, setShowCode] = useState(true);



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
                        <label className="label">Subject</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Input Subject" onInput={ShowSubject} />
                        </div>
                    </div>
{/* these lines of codes creates an area where the subject of the email will be inputed*/}
                <div className="field">
                        <label className="label">Mail To</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Input email" onInput={ShowEmail} />
                        </div>
                    </div>  
{/* these lines of codes creates an area where the  email address will be inputed*/}
                
                    <div className="field">
                        <label className="label">Body</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Input Message" onInput={ShowBody}></textarea>
                        </div>
                    </div>
 {/* these lines of codes creates an area where the  content of the email will be inputed*/}               
                <div>
                    <div>
                        <QRCode value={`subject=${subject}emailto:${email}?&body=${body}.`} size={256} />
                        {/* the above line of code does the job of generating the qr code which will be scanned so as to display what has been inputed.*/}
                    </div>
                </div>
        </div>


        



    )
}

export default EmailProject;