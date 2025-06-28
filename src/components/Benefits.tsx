import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Home",
      title: "Удобный выезд",
      description:
        "Приезжаем к вам домой в удобное время. Никаких очередей и поездок.",
    },
    {
      icon: "Sparkles",
      title: "Профессиональное оборудование",
      description:
        "Используем только сертифицированные составы и современное оборудование.",
    },
    {
      icon: "Shield",
      title: "Без запаха и разводов",
      description:
        "Гипоаллергенные составы без неприятного запаха. Ровное покрытие.",
    },
    {
      icon: "Clock",
      title: "Результат за 20 минут",
      description:
        "Быстрая процедура с мгновенным эффектом. Экономим ваше время.",
    },
  ];

  return (
    <section className="py-16 px-4 gloow-gradient">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gloow-dark text-center mb-12">
          Почему выбирают GLOOW Room?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="gloow-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gloow-gold/20 rounded-full flex items-center justify-center group-hover:bg-gloow-gold/30 transition-colors">
                <Icon
                  name={benefit.icon as any}
                  size={28}
                  className="text-gloow-bronze"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-gloow-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-gloow-gray text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
