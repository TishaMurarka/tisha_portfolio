const PortfolioSection = () => {
  const projects = [
    {
      title: "Creative Design Layout",
      description: "Website design - Visual branding - Creative direction",
      image: "Creative colorful portfolio layout",
      bgColor: "bg-gradient-to-br from-orange-200 via-yellow-200 to-green-200"
    },
    {
      title: "Dark dashboard interface",
      description: "UI/UX design - Data visualization - Interactive elements",
      image: "Dark dashboard interface",
      bgColor: "bg-gray-900"
    },
    {
      title: "Portfolio builder",
      description: "Frontend development - Custom templates - User profiles",
      image: "Portfolio builder",
      bgColor: "bg-creative-yellow"
    },
    {
      title: "FDark dashboard interface",
      description: "System design - Data analytics - Performance optimization",
      image: "FDark dashboard interface",
      bgColor: "bg-gradient-to-br from-yellow-200 to-orange-200"
    }
  ];

  return (
    <section className="py-16 px-8 bg-[#fce3d9]">
      {/* Decorative star */}
      <div className="absolute right-16 top-8 text-creative-blue text-2xl animate-ping">✦</div>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-4xl font-bold">My <span className="underline decoration-4 underline-offset-4">Models</span></h2>
          <div className="w-16 h-16 bg-creative-blue hand-drawn-border flex items-center justify-center transform rotate-12 animate-float">
            <span className="text-xl animate-spin">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="hand-drawn-border bg-white p-6 space-y-4 hover:transform hover:scale-105 transition-all duration-300">
              {/* Project image placeholder */}
              <div className={`h-48 ${project.bgColor} rounded-lg flex items-center justify-center text-sm text-gray-600 relative overflow-hidden`}>
                {/* Simulate the actual portfolio images */}
                {index === 0 && (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                      alt="Creative Design Layout"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-sm">Creative Design Layout</span>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1"
                      alt="Dark dashboard interface"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-sm">Dark dashboard interface</span>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1550439062-609e1531270e"
                      alt="Creative Portfolio"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="text-white text-sm">Portfolio builder</span>
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1484788984921-03950022c9ef"
                      alt="Fashion Website"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="text-white text-sm">Advanced computing</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>

                <button className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">
                  ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
