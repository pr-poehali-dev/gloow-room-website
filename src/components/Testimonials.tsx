const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна К.",
      text: "Потрясающий результат! Загар ровный, естественный. Мастер приехала точно в срок, все прошло идеально.",
      rating: 5,
    },
    {
      name: "Мария С.",
      text: "Делала перед свадьбой - эффект превзошел все ожидания! Никаких пятен, цвет идеальный. Рекомендую!",
      rating: 5,
    },
    {
      name: "Екатерина Л.",
      text: "Удобно, что приезжают домой. Качество на высоте, держится долго. Буду заказывать еще!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gloow-dark text-center mb-12">
          Отзывы наших клиенток 💖
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="gloow-card">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gloow-gold text-lg">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gloow-gray mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gloow-rose rounded-full flex items-center justify-center mr-3">
                  <span className="text-gloow-dark font-semibold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <p className="font-semibold text-gloow-dark">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
