import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Какой цвет загара получится?",
      answer:
        "Мы подберем идеальный оттенок под ваш тон кожи - от легкого золотистого до глубокого бронзового. Результат всегда естественный и равномерный.",
    },
    {
      question: "Сколько держится автозагар?",
      answer:
        "Автозагар держится 7-10 дней при правильном уходе. Постепенно сходит равномерно, без пятен и резких переходов.",
    },
    {
      question: "Безопасно ли во время беременности?",
      answer:
        "Да, наши составы абсолютно безопасны для беременных и кормящих мам. Используем только сертифицированные гипоаллергенные средства.",
    },
    {
      question: "Как подготовиться к процедуре?",
      answer:
        "За 24 часа до процедуры сделайте пилинг, не используйте кремы и масла. В день процедуры наденьте темную свободную одежду.",
    },
    {
      question: "Сколько времени занимает процедура?",
      answer:
        "Вся процедура занимает 15-20 минут. Эффект виден сразу, полный результат проявляется через 4-6 часов.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-3xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gloow-dark text-center mb-12">
          Часто задаваемые вопросы
        </h2>

        <div className="gloow-card">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-montserrat font-semibold text-gloow-dark hover:text-gloow-bronze">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gloow-gray leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
