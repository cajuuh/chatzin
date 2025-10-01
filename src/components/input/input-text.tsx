import React from 'react';
import './input-text.css'

interface InputBoxProps {
    text: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onClick: () => void;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const InputBox = (props: InputBoxProps) => {

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onClick();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={'input-box-container'}>
                <input className={'input-box'} value={props.text} onChange={props.onChange} placeholder="Type a message..." />
                <button type={'submit'} className={'input-button'} onClick={props.onClick}>Send</button>
            </form>
        </div>
    );
}

export default InputBox;