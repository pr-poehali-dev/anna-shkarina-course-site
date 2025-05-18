
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

interface CourseModule {
  title: string;
  content: string;
}

const courseModules: CourseModule[] = [
  {
    title: "Модуль 1: Самопознание и личностный рост",
    content: "Погружение в мир психологии. Изучение основных концепций личности, методов самоанализа и техник развития самосознания. Практические упражнения для глубокого понимания своих мотивов и ценностей."
  },
  {
    title: "Модуль 2: Эмоциональный интеллект",
    content: "Работа с эмоциями и чувствами. Распознавание, понимание и управление эмоциями. Техники эмоциональной регуляции и развитие эмпатии. Трансформация негативных эмоциональных паттернов."
  },
  {
    title: "Модуль 3: Эффективная коммуникация",
    content: "Построение здоровых отношений через коммуникацию. Ненасильственное общение, активное слушание, конструктивная обратная связь. Разрешение конфликтов и установление границ."
  },
  {
    title: "Модуль 4: Стрессоустойчивость",
    content: "Методы управления стрессом и тревогой. Техники релаксации, медитации и осознанности. Профилактика эмоционального выгорания и восстановление ресурсного состояния."
  },
  {
    title: "Модуль 5: Интеграция и практика",
    content: "Применение полученных знаний в повседневной жизни. Создание персонального плана психологического благополучия. Долгосрочные стратегии поддержания психического здоровья."
  }
];

const ModulesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Программа курса</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {courseModules.map((module, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{module.title}</AccordionTrigger>
                <AccordionContent>
                  <p className="py-2">{module.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
