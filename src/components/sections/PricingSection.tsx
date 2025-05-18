
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

interface PricingSectionProps {
  onContactClick: () => void;
}

const features = [
  "5 модулей обучения",
  "20+ практических упражнений",
  "Персональные консультации",
  "Доступ к закрытому сообществу",
  "Материалы курса навсегда"
];

const PricingSection: React.FC<PricingSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Стоимость участия</h2>
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-[#9b87f5]">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Полный курс</h3>
              <div className="text-4xl font-bold text-[#9b87f5] my-4">15 000 ₽</div>
              <ul className="space-y-3 text-left mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Icon name="Check" className="text-[#9b87f5]" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={onContactClick} 
                className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white" 
                size="lg"
              >
                Записаться на курс
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
