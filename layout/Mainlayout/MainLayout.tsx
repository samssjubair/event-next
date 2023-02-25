import Footer from '@/src/components/footer/Footer';
import Header from '@/src/components/header/Header';
import React from 'react';

const MainLayout: React.FC<{}> = ({children}) => {
    return (
        <>
            <Header/>
            {
                children
            }
            <Footer/>
        </>
    );
};

export default MainLayout;