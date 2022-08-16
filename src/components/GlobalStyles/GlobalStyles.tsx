import { GlobalStylesInterface } from './Global.model';
import './GlobalStyles.scss';

const GlobalStyles = ({ children }: GlobalStylesInterface) => {
    return <div>{children}</div>;
};

export default GlobalStyles;
