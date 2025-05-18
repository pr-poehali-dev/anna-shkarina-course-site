
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#F9F5FF] to-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1F2C]">
            Онлайн-курс психологии <span className="text-[#9b87f5]">для гармоничной жизни</span>
          </h1>
          <p className="text-lg text-gray-700">
            Научитесь понимать себя, строить здоровые отношения и справляться со стрессом под руководством опытного психолога.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={onContactClick} size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Начать обучение
            </Button>
            <Button variant="outline" size="lg">
              Узнать программу
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573497019236-61f323342eb9?q=80&w=1974&auto=format&fit=crop" 
              alt="Психология с Анной Шкариной" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#9b87f5]/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
