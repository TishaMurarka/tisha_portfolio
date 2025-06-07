import useTypewriter from '../hooks/useTypewriter';

const HeroSection = () => {
  const phrases = [
    "✨ AI Engineer & Data Scientist",
    "🤖 Building Smart Solutions",
    "📊 Turning Data into Insights",
    "🧠 Machine Learning Expert",
    "💡 AI Innovation Architect"
  ];

  const animatedText = useTypewriter(phrases, 50, 2000);

  return (
    <section className="relative py-16 px-8 bg-[#fce3d9]">
      {/* Decorative elements */}
      {/* <div className="absolute top-8 left-16 text-creative-pink text-2xl animate-float animate-spin">✦</div> */}
      <div className="absolute bottom-16 right-16 text-creative-red text-3xl">✦</div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Decorative pink square */}
            <div className="w-20 h-20 bg-creative-pink hand-drawn-border flex items-center justify-center">
              <span className="text-2xl">✦</span>
              <div className="absolute top-8 left-20 text-creative-pink text-2xl animate-float">✦</div>
            </div>
            
            <div className="space-y-4">
              <div className="absolute top-18 left-10 text-creative-pink text-2xl animate-float">✦</div>
              <h1 className="text-5xl font-bold leading-tight">
                <div className="min-h-[180px] flex items-center"> {/* Updated height and added flex */}
                  <span className="transition-all duration-200 text-wrap-balance">{animatedText}</span>
                </div>
              </h1>
              
              <button className="hand-drawn-border bg-creative-blue px-8 py-3 text-lg font-medium hover:bg-opacity-80 transition-colors relative">
                Resume
                <span className="absolute bottom-2 right-2 text-xl">↗</span>
              </button>
            </div>
            <div className="absolute top-8 left-16 text-creative-pink text-2xl animate-float">✦</div>
          </div>
          
          {/* Right side - Browser mockup */}
          <div className="relative">
            <div className="hand-drawn-border bg-white p-6 transform rotate-0 hover:focus transition-transform duration-300">
              {/* Browser chrome */}
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b-2 border-black">
              {/* <div className="flex items-end space-x-2 mb-4 pb-3 border-b-2 border-black"> */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Browser content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">👋🏻 Tisha</span>
                  <span className="text-blue-500 text-xs">AI/ML Engineer</span>
                </div>
                
                {/* Introduction Card */}
                <div className="bg-white p-6 hand-drawn-border">
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed">
                      Passionate AI/ML engineer with expertise in:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-creative-blue">🔹</span>
                        <span>Machine Learning & Deep Learning Models</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-creative-purple">🔹</span>
                        <span>ETL Pipeline Development & Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-creative-red">🔹</span>
                        <span>Database Architecture & Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-creative-yellow">🔹</span>
                        <span>Data Analytics & Visualization</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      Successfully delivered 19+ projects with 95% client satisfaction rate
                    </p>
                  </div>
                </div>
                
                {/* Yellow lightbulb */}
                <div className="relative w-12 h-12 mx-auto">
                  <div className="absolute inset-0 bg-creative-yellow rounded-full animate-pulse-glow "></div>
                  <div className="relative w-12 h-12 bg-creative-yellow rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                </div>
                
                {/* Smiley face */}
                {/* <div className="text-center text-6xl">☺</div> */}
              </div>
              
              {/* Decorative star */}
              <div className="absolute top-4 right-4 text-creative-red text-2xl animate-float">✦</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
