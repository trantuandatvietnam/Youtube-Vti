import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { IButton } from './Button.model';

const Button = ({ children, href, to, ...passProps }: IButton) => {
    let Comp: any = 'div';
    if (href) {
        Comp = 'a';
    } else if (to) {
        Comp = Link;
    }
    return (
        <Comp href={href} to={to} {...passProps}>
            {children}
        </Comp>
    );
};

export default forwardRef(Button);
