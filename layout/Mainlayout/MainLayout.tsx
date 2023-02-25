import Footer from '@/src/components/footer/Footer';
import Header from '@/src/components/header/Header';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
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
