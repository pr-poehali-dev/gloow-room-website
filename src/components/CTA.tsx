import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/79999999999?text=Привет! Хочу записаться на автозагар GLOOW Room и получить скидку!",
      "_blank",
    );
  };

  return (
    <section className="py-20 px-4 gloow-gradient">
      <div className="container max-w-3xl mx-auto text-center">
        <div className="gloow-card">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gloow-dark mb-6">
            Готова сиять? ✨
          </h2>

          <p className="text-lg text-gloow-gray mb-8 max-w-xl mx-auto">
            Оставь заявку сейчас — подберём удобную дату и подарим скидку на
            первое посещение!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={handleWhatsAppClick}
              className="whatsapp-button text-lg px-8 py-4"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Записаться в WhatsApp
            </Button>

            <Button
              variant="outline"
              onClick={() => window.open("https://t.me/gloowroom", "_blank")}
              className="telegram-button text-lg px-8 py-4"
            >
              <Icon name="Send" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>

          <div className="bg-gloow-gold/10 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-gloow-dark mb-3">
              🎉 Специальное предложение
            </h3>
            <p className="text-gloow-gray">
              Автозагар всего за{" "}
              <span className="font-bold text-gloow-bronze">2900₽</span> с
              выездом на дом!
              <br />
              Каждое 3-е посещение — скидка 50%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
