import React from 'react';
import {Buttonprops} from './Button.interface';

const Button = (props: Buttonprops) => {
    const {children, onClick} = props;

    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    };
    return <button onClick={handleClick}>{children}</button>;
};

export default Button;