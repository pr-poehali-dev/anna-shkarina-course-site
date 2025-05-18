
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onContactClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onContactClick }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onContactClick={onContactClick} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
