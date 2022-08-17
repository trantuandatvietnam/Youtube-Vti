import Header from '../components/Header';

const WatchLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default WatchLayout;
