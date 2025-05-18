
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  return (
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
  );
};

export default ContactSection;
