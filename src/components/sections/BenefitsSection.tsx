
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "Brain",
    title: "Глубокое понимание себя",
    description: "Научитесь распознавать свои эмоции, потребности и мотивы поведения."
  },
  {
    icon: "Heart",
    title: "Здоровые отношения",
    description: "Освойте техники эффективной коммуникации и установления границ."
  },
  {
    icon: "Sparkles",
    title: "Управление стрессом",
    description: "Получите практические инструменты для преодоления тревоги и восстановления ресурсов."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Чему вы научитесь на курсе</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-[#F9F5FF] rounded-full flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} size={24} className="text-[#9b87f5]" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
