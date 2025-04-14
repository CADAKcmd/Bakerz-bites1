export default function BakeryApproach() {
    return (
      <section className="w-full px-4 py-12 md:py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Bakery Approach</h2>
          <hr className="w-16 border-t-2 border-yellow-500 mx-auto mb-6" />
  
          <p className="italic text-gray-700 text-lg md:text-xl mb-6">
            This drastic appeal for baked goods promoted baking all throughout Europe and expanded into the eastern parts of Asia. <br />
            Bakers started baking breads and goods at home and selling them out on the streets.
          </p>
  
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
            Baked goods have been around for thousands of years. The art of baking was developed early during the Roman Empire. It was a highly famous art as Roman citizens loved baked goods and demanded for them frequently for important occasions such as feasts and weddings etc. Due to the fame and desire that the art of baking received, around 300 BC, baking was introduced as an occupation and respectable profession for Romans.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            <img src="src/public/assets/cookies.jpg" alt="Macarons" className="rounded shadow-md w-full h-64 object-cover" />
            <img src="src/public/assets/manbaking.jpg" alt="Baker kneading dough" className="rounded shadow-md w-full h-64 object-cover" />
            <img src="src/public/assets/sweetcake.jpg" alt="Decorated cakes" className="rounded shadow-md w-full h-64 object-cover" />
          </div>
        </div>
      </section>
    );
  }
  