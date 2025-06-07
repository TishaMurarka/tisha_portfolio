const Footer = () => {
  return (
    <footer className="border-t-4 border-black py-6 sm:py-8 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm">✦</span>
          </div>
          <span className="text-xl font-bold">Tisha</span>
        </div>
        
        {/* Year */}
        <div className="text-lg font-medium order-3 sm:order-2">Portfolio 2025</div>
        
        {/* Social icons */}
        <div className="flex items-center space-x-4 order-2 sm:order-3">
          <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center text-sm hover:bg-black hover:text-white transition-colors cursor-pointer">
            🌐
          </div>
          <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center text-sm hover:bg-black hover:text-white transition-colors cursor-pointer">
            📷
          </div>
          <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center text-sm hover:bg-black hover:text-white transition-colors cursor-pointer">
            ✕
          </div>
        </div>
      </div>
      
      {/* Bottom tools section */}
      <div className="border-t-4 border-black mt-6 sm:mt-8 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-base sm:text-lg font-medium">
          <span>TensorFlow</span>
          <span>PyTorch</span>
          <span>Scikit-learn</span>
          <span>Hugging Face</span>
          <span>LangChain</span>
          <span>OpenAI</span>
          <span>MLflow</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
