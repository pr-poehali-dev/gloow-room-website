import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/79999999999?text=Привет! Хочу записаться на автозагар GLOOW Room",
      "_blank",
    );
  };

  return (
    <section className="min-h-screen gloow-gradient flex items-center justify-center px-4 py-12">
      <div className="container max-w-4xl text-center">
        <div className="animate-fade-in">
          <h1 className="font-montserrat text-4xl md:text-6xl text-gloow-dark mb-6 leading-tight font-extrabold">
            Автозагар на дому по СПб —{" "}
            <span className="text-transparent bg-clip-text gloow-gold-gradient">
              сияй уже сегодня!
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gloow-gray mb-8 max-w-2xl mx-auto">
            Премиум-сервис автозагара с выездом на дом. Профессиональное
            оборудование, безопасные составы, результат за 20 минут.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={handleWhatsAppClick}
              className="whatsapp-button text-lg px-8 py-4 w-full sm:w-auto"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Записаться в WhatsApp
            </Button>

            <Button
              variant="outline"
              onClick={() => window.open("https://t.me/gloowroom", "_blank")}
              className="telegram-button text-lg px-8 py-4 w-full sm:w-auto"
            >
              <Icon name="Send" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>

          <div className="gloow-card inline-block animate-float">
            <p className="text-gloow-dark font-semibold text-lg">
              💫 Приведи подругу и получи{" "}
              <span className="text-gloow-gold font-bold">-50%</span> на
              следующее посещение
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
