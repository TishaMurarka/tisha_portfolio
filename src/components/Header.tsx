import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Portfolio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "About //", id: "service-section" },
    { label: "Portfolio //", id: "portfolio-section" },
    { label: "Hire Me //", id: "cta-section" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative w-full py-4 sm:py-6 px-4 sm:px-8 bg-[#fce3d9]">
      {/* Decorative elements */}
      <div className="absolute top-1 right-20 text-creative-pink text-4xl animate-float hidden sm:block">✦</div>
      <div className="absolute top-8 left-4 text-creative-pink text-2xl hidden sm:block">✦</div>
      
      <div className="max-w-6xl mx-auto">
        <nav className="hand-drawn-border bg-white p-3 sm:p-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✦</span>
              </div>
              <span className="text-xl font-bold">Tisha</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setActiveTab(item.label);
                    scrollToSection(item.id);
                  }}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === item.label
                      ? "bg-creative-yellow text-black"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Hamburger Menu Button - Mobile Only */}
            <button 
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="sm:hidden mt-4 space-y-2 border-t pt-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setActiveTab(item.label);
                    setIsMenuOpen(false);
                    scrollToSection(item.id);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === item.label
                      ? "bg-creative-yellow text-black"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
