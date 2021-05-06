import React, { useState } from 'react';

const UrlProject: React.FC = () => {
    
    const QRCode = require('qrcode.react');
    const [url, setUrl] = useState('');

    const ShowURL = (event: any) => {
        setUrl(event.target.value);
    }
// the constant variables in the block of codes above are used to declare values that will be used later during the program.*/
    return (
     <div>
        <div className="field">
            <label className="label">URL</label>
            <div className="control">
                <input className="input is link" type="text" placeholder="Enter url" onInput={ShowURL} />
            </div>
        </div>
        {/* the block of codes above creates an area where the url will be inputed*/}
        <div>
                <QRCode value={url} size={256} fgColor="black" />
          </div>
         </div>
   )
}


export default UrlProject;