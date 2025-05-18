
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-semibold">Анна Шкарина</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              <Icon name="Telegram" size={20} />
            </a>
          </div>
          <div className="text-sm text-gray-400">© 2025 Все права защищены</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
