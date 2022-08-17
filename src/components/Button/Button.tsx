import { Link } from 'react-router-dom';
import { IButton } from './Button.model';
import './Button.module.scss';

const Button = ({ children, href, to, className, ...passProps }: IButton) => {
    let Comp: string | any = 'div';
    if (href) {
        Comp = 'a';
    } else if (to) {
        Comp = Link;
    }
    return (
        <Comp className={`btn ${className}`} href={href} to={to} {...passProps}>
            {children}
        </Comp>
    );
};

export default Button;
