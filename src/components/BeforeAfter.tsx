const BeforeAfter = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gloow-dark mb-12">
          Результат говорит сам за себя ✨
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="gloow-card">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📷</div>
                <p className="font-semibold">ДО</p>
                <p className="text-sm">Фото "до" процедуры</p>
              </div>
            </div>
          </div>

          <div className="gloow-card">
            <div className="aspect-[3/4] bg-gradient-to-br from-gloow-gold/20 to-gloow-bronze/20 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-center text-gloow-dark">
                <div className="text-4xl mb-2">✨</div>
                <p className="font-semibold">ПОСЛЕ</p>
                <p className="text-sm">Естественное сияние</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gloow-gray text-lg max-w-2xl mx-auto">
          Ровный, естественный загар без пятен и разводов. Результат виден сразу
          и держится до 10 дней.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
