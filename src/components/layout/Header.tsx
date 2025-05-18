
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="font-semibold text-xl">Анна Шкарина</div>
        <Button onClick={onContactClick} className="bg-primary text-white hover:bg-primary/90">
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;
