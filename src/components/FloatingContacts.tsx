import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FloatingContacts = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/79999999999?text=Привет! Хочу записаться на автозагар GLOOW Room",
      "_blank",
    );
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/gloowroom", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
      </Button>

      <Button
        onClick={handleTelegramClick}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      >
        <Icon name="Send" size={24} className="text-white" />
      </Button>
    </div>
  );
};

export default FloatingContacts;
