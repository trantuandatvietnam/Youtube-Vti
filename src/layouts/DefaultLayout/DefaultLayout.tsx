import { ReactNode } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <div className="flex items-start">
                <SideBar />
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;
