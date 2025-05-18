
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Этот курс перевернул мое представление о себе и помог построить более здоровые отношения. Информация подается доступно, а практические упражнения действительно работают!",
    author: "Мария К.",
    role: "Менеджер проектов"
  },
  {
    text: "Благодаря курсу Анны я научился управлять своими эмоциями и эффективно справляться со стрессом. Особенно ценны были индивидуальные консультации и поддержка сообщества.",
    author: "Сергей Л.",
    role: "IT-специалист"
  },
  {
    text: "Глубокий и трансформирующий опыт. Анна создает безопасное пространство для исследования себя, а материалы курса остаются полезными даже спустя месяцы после его окончания.",
    author: "Екатерина Д.",
    role: "Предприниматель"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F9F5FF]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Отзывы участников</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-md">
                  <CardContent className="p-8">
                    <div className="mb-4 text-[#9b87f5]">
                      <Icon name="Quote" size={36} />
                    </div>
                    <p className="text-lg mb-6">{testimonial.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#E0D0FC] flex items-center justify-center text-lg font-bold text-[#9b87f5]">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static translate-y-0" />
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
