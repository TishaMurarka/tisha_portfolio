const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The ML model developed by them significantly improved our prediction accuracy by 35%. Their expertise in machine learning and attention to detail is remarkable.",
      client: "Sarah Johnson",
      role: "Data Science Lead, TechCorp",
      avatar: "👩🏻‍💼"
    },
    {
      quote: "Outstanding work on our data pipeline! The optimization reduced our processing time by 40% and the documentation was excellent.", 
      client: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      avatar: "👨🏻‍💼"
    },
    {
      quote: "Their database architecture redesign helped us scale our operations smoothly. The performance improvements were beyond our expectations.",
      client: "David Rodriguez", 
      role: "Engineering Manager, ScaleUp Inc",
      avatar: "👨🏻‍💻"
    },
    {
      quote: "Exceptional data analytics work that helped us identify key business insights. The visualizations were clear and actionable.",
      client: "Emma Wilson",
      role: "Analytics Director, InsightCo", 
      avatar: "👩🏻‍💻"
    }
  ];

  return (
    <section className="py-16 px-8 bg-gray-50 relative bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Here's what my clients<br />
            are saying about my work
          </h2>
          <div className="inline-block bg-creative-yellow px-3 py-1 text-sm font-bold transform rotate-2 relative">
            NEW!
            <span className="absolute -bottom-1 -right-1">↓</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`hand-drawn-border bg-white p-6 space-y-4 transform ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } hover:rotate-0 transition-transform duration-300 relative z-10`}
              style={{
                zIndex: testimonials.length - index
              }}
            >
              <p className="text-lg font-medium italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.client}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
