import React from 'react';

interface PropsInterface {
    label: string,
    type: string,
    onHandleChange: Function,
    style: any,
    value: string
}

const BasicInput = (inputProps: PropsInterface) => {
    const {label, type, value, onHandleChange, style} = inputProps;
    return (
        <div style={style}>
            <label>{label}</label>
            <br />
            <input 
                type={type}
                value={value}
                onChange={(e: any) => onHandleChange(e)}
            />
        </div>
    )
};

export default BasicInput;
