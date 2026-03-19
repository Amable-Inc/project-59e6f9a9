export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1600&h=900&fit=crop"
          alt="Tomahawk Steak"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            The Perfect Tomahawk Steak
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Master the art of cooking the most impressive cut of beef
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What is a Tomahawk Steak?</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              The tomahawk steak is a thick-cut ribeye that includes at least 5 inches of rib bone, 
              resembling a single-handed axe. This spectacular cut typically weighs 2-3 pounds and 
              provides an unforgettable dining experience with its incredible marbling and rich flavor.
            </p>
          </div>
        </section>

        {/* Ingredients */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What You'll Need</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Main Ingredients</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>1 tomahawk steak (2-3 lbs, 2 inches thick)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>Coarse sea salt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>Freshly ground black pepper</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>High-smoke point oil (avocado or grapeseed)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Optional Extras</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>4 tbsp unsalted butter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>4 garlic cloves, smashed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>Fresh rosemary and thyme</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cooking Instructions */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Step-by-Step Instructions</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bring to Room Temperature</h3>
                <p className="text-gray-700">
                  Remove the steak from the refrigerator 60-90 minutes before cooking. This ensures 
                  even cooking throughout. Pat completely dry with paper towels.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Season Generously</h3>
                <p className="text-gray-700">
                  Season liberally with coarse salt and freshly ground black pepper on all sides. 
                  Don't be shy—this is a thick cut that needs bold seasoning.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Preheat Your Grill or Oven</h3>
                <p className="text-gray-700">
                  For grilling: Heat to 450-500°F using two-zone method (direct and indirect heat).
                  For oven: Preheat to 400°F with a cast-iron skillet inside.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sear to Perfection</h3>
                <p className="text-gray-700">
                  Sear over direct heat for 3-4 minutes per side until a deep, golden-brown crust forms. 
                  For oven method, sear in the hot cast-iron skillet with oil for 3-4 minutes per side.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Finish with Indirect Heat</h3>
                <p className="text-gray-700">
                  Move to indirect heat zone (or transfer to oven at 400°F). Add butter, garlic, and herbs. 
                  Baste frequently and cook until internal temp reaches 125°F for medium-rare (10-15 minutes).
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Rest and Serve</h3>
                <p className="text-gray-700">
                  Remove from heat and tent with foil. Let rest for 10-15 minutes to allow juices to 
                  redistribute. Slice against the grain and serve immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Temperature Guide */}
        <section className="mb-16 bg-gray-900 text-white rounded-2xl shadow-lg p-8">
          <h2 className="text-4xl font-bold mb-6">Temperature Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-amber-400">Rare</h3>
              <p className="text-3xl font-bold mb-1">120-125°F</p>
              <p className="text-gray-400">Cool red center</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-amber-400">Medium-Rare</h3>
              <p className="text-3xl font-bold mb-1">130-135°F</p>
              <p className="text-gray-400">Warm red center (recommended)</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-amber-400">Medium</h3>
              <p className="text-3xl font-bold mb-1">135-145°F</p>
              <p className="text-gray-400">Warm pink center</p>
            </div>
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            * Remember: temperature will rise 5-10°F during resting
          </p>
        </section>

        {/* Pro Tips */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pro Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Use a Meat Thermometer</h3>
              <p className="text-gray-700">
                Don't guess! A quality instant-read thermometer is essential for perfect doneness.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dry Surface is Key</h3>
              <p className="text-gray-700">
                Pat the steak completely dry before seasoning. Moisture prevents proper browning.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Don't Skip the Rest</h3>
              <p className="text-gray-700">
                Resting allows juices to redistribute. Cutting too early results in dry meat.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reverse Sear Option</h3>
              <p className="text-gray-700">
                For ultimate control, cook low first (275°F), then sear at high heat at the end.
              </p>
            </div>
          </div>
        </section>

        {/* Final Image */}
        <section className="mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1558030006-450675393462?w=1600&h=900&fit=crop"
              alt="Cooked Tomahawk Steak"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <p className="text-center mt-6 text-gray-600 italic text-lg">
            The perfect tomahawk steak: crusty exterior, juicy interior, unforgettable flavor
          </p>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg">
            Happy cooking! Remember, practice makes perfect. 🥩
          </p>
        </div>
      </footer>
    </div>
  );
}
