import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Building custom ML models and AI solutions for complex business problems",
      color: "bg-creative-yellow"
    },
    {
      icon: "⚡",
      title: "Deep learning", 
      description: "Designing and implementing robust data pipelines for efficient data processing",
      color: "bg-creative-purple"
    },
    {
      icon: "🗄️",
      title: "Database Architecture",
      description: "Creating scalable database solutions with optimization and best practices", 
      color: "bg-creative-red"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Advanced data analysis and visualization for actionable insights",
      color: "bg-creative-blue"
    }
    ];

  return (
    <section id="service-section" className="py-16 px-8 bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute right-8 top-1/4 text-creative-pink text-2xl">✦</div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Stats */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Services I'm providing as a freelancer<span className="text-2xl">☺</span><br />
                that derive 99% result
              </h2>
              
              {/* Decorative star element */}
              <div className="w-16 h-16 bg-creative-blue hand-drawn-border flex items-center justify-center transform rotate-12 mb-6">
                <span className="text-xl">✦</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="hand-drawn-border bg-white p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">19+</div>
                    <div className="text-base sm:text-lg">Projects and counting</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">95%</div>
                    <div className="text-base sm:text-lg">Client Satisfaction</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">1+</div>
                    <div className="text-base sm:text-lg">Years Experience</div>
                  </div>
                </div>
              </div>
                          
              <div className="hand-drawn-border bg-white p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <div className="text-base sm:text-lg mb-2 sm:mb-0">I worked with peoples from</div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
                    <span className="font-bold text-creative-purple">USA</span>
                    <span className="font-bold text-creative-blue">India</span>
                    <span className="font-bold text-creative-red">Canada</span>
                    <span className="font-bold text-creative-yellow">Australia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Services grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="hand-drawn-border bg-white p-6 space-y-4">
                <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center text-xl`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <a href={
                  service.title === "Machine Learning" ? " https://www.geeksforgeeks.org/machine-learning/" :
                  service.title === "ETL Pipeline Development" ? "https://www.geeksforgeeks.org/introduction-deep-learning/" :
                  service.title === "Database Architecture" ? "https://www.geeksforgeeks.org/structure-of-database-management-system/" :
                  "https://www.geeksforgeeks.org/data-analysis-tutorial/"
                } className="text-sm font-medium underline hover:underline">
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
