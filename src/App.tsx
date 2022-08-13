import React from 'react';
import './App.css';
import BasicInput from './component/Basic-input';
import LiveQrCode from './component/Live-qr-code';
import QRCode from "qrcode";

function App() {
  
  const [qrText, setQrText] = React.useState("");
  const [qrCode, setQrCode] = React.useState("");

  const generateQrCode = () => {
    QRCode.toDataURL(qrText, {
      width: 900,
      margin: 3
    }, (err: any, url: string) => {
      if (err) {
        return console.error(err);
      }

      setQrCode(url);
    })
  };

  const handleQrCode = (e: any) => {
    setQrText(e.target.value);
    generateQrCode();
  }

  const inputProps = {
    label:"Qr code Text",
    type:"text",
    onHandleChange: handleQrCode,
    style: {marginTop: 20},
    value: qrText
  }

  return (
    <div className='App'>
      <LiveQrCode value={qrText} />
      <BasicInput {...inputProps} />
      <br />
      <a href={qrCode} download={`${qrText}.png`}>download</a>
    </div>
  )
}

export default App;
