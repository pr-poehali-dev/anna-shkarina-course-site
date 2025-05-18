
import React from 'react';

interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: "10+", label: "лет опыта" },
  { number: "500+", label: "клиентов" },
  { number: "15+", label: "авторских методик" }
];

const AboutSection: React.FC = () => {
  return (
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
              {stats.map((stat, index) => (
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
  );
};

export default AboutSection;
