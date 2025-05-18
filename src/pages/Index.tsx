
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="font-semibold text-xl">Анна Шкарина</div>
          <Button onClick={scrollToContact} className="bg-primary text-white hover:bg-primary/90">
            Записаться на курс
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
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
                <Button onClick={scrollToContact} size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
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

        {/* Course Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Чему вы научитесь на курсе</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
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
              ].map((benefit, index) => (
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

        {/* About Author */}
        <section className="py-16 bg-[#F9F5FF]/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-white shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                    alt="Анна Шкарина" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-3xl font-bold">Об авторе курса</h2>
                <p className="text-lg text-gray-700">
                  Меня зовут Анна Шкарина, я практикующий психолог с 10-летним опытом работы. 
                  Специализируюсь на когнитивно-поведенческой терапии и помогаю людям преодолевать 
                  эмоциональные трудности, развивать осознанность и строить гармоничные отношения.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { number: "10+", label: "лет опыта" },
                    { number: "500+", label: "клиентов" },
                    { number: "15+", label: "авторских методик" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-[#9b87f5]">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Программа курса</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
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
                ].map((module, index) => (
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

        {/* Testimonials */}
        <section className="py-16 bg-[#F9F5FF]/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Отзывы участников</h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {[
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
                ].map((testimonial, index) => (
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

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Стоимость участия</h2>
            <div className="max-w-md mx-auto">
              <Card className="border-2 border-[#9b87f5]">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">Полный курс</h3>
                  <div className="text-4xl font-bold text-[#9b87f5] my-4">15 000 ₽</div>
                  <ul className="space-y-3 text-left mb-8">
                    {[
                      "5 модулей обучения",
                      "20+ практических упражнений",
                      "Персональные консультации",
                      "Доступ к закрытому сообществу",
                      "Материалы курса навсегда"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Icon name="Check" className="text-[#9b87f5]" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact} 
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

        {/* Contact Form */}
        <section id="contact" className="py-16 bg-[#F9F5FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Оставить заявку</h2>
            <div className="max-w-lg mx-auto">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">Ваше имя</label>
                      <Input id="name" placeholder="Имя" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">Email</label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block font-medium">Телефон</label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-medium">Сообщение (опционально)</label>
                      <Textarea id="message" placeholder="Ваш вопрос или комментарий" />
                    </div>
                    <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
