// const CTASection = () => {
//   return (
//     <section className="py-16 px-8 relative">
//       {/* Decorative elements */}
//       <div className="absolute top-8 right-16 text-creative-pink text-3xl animate-float">✦</div>
      
//       <div className="max-w-4xl mx-auto text-center">
//         <div className="hand-drawn-border bg-white p-12 space-y-8 relative">
//           {/* Browser mockup */}
//           <div className="hand-drawn-border bg-gray-100 p-6 max-w-md mx-auto relative transform -rotate-2">
//             <div className="text-sm text-gray-600 mb-4">
//               We start designing your project
//             </div>
//             <div className="text-sm text-gray-600 mb-6">
//               Want to see how to transform your brand into a unique style, sent us a message
//             </div>
            
//             <button className="hand-drawn-border bg-creative-blue px-6 py-3 text-sm font-medium hover:bg-opacity-80 transition-colors relative">
//               See Portfolio
//               <span className="absolute bottom-2 right-2 text-lg">↗</span>
//             </button>
//           </div>
          
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold">
//               start designing your project
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               to see how to transform your brand into a unique style, sent us a message
//             </p>
            
//             <button className="hand-drawn-border bg-creative-blue px-8 py-4 text-lg font-medium hover:bg-opacity-80 transition-colors relative">
//               Send us message
//               <span className="absolute bottom-2 right-2 text-xl">↗</span>
//             </button>
//           </div>
          
//           {/* Decorative star */}
//           <div className="absolute top-4 right-4 text-creative-red text-2xl">✦</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;

//******************************************************************************* */

// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { toast } from "sonner";

// const CTASection = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_ktben5k",   // Replace
//         "template_09scraa",  // Replace
//         formRef.current!,
//         "s3umeXI3xhy2p7Bmc"    // Replace
//       )
//       .then(
//         () => {
//           toast.success("Message sent successfully!");
//           setLoading(false);
//           formRef.current?.reset();
//         },
//         () => {
//           toast.error("Something went wrong. Please try again.");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <section className="py-16 px-8 relative">
//       <div className="absolute top-8 right-16 text-creative-pink text-3xl animate-float">✦</div>

//       <div className="max-w-4xl mx-auto text-center">
//         <div className="hand-drawn-border bg-white p-12 space-y-8 relative">

//           {/* Form */}
//           <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
//             <input
//               name="name"
//               placeholder="Your Name"
//               className="block w-full p-3 border border-black rounded-md"
//               required
//             />
//             <input
//               name="email"
//               type="email"
//               placeholder="Your Email"
//               className="block w-full p-3 border border-black rounded-md"
//               required
//             />
//             <textarea
//               name="message"
//               rows={4}
//               placeholder="Your Message"
//               className="block w-full p-3 border border-black rounded-md"
//               required
//             />
//             <button
//               type="submit"
//               className="hand-drawn-border bg-creative-blue px-8 py-4 text-lg font-medium hover:bg-opacity-80 transition-colors relative disabled:opacity-50"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Send us message"}
//               <span className="absolute bottom-2 right-2 text-xl">↗</span>
//             </button>
//           </form>

//           {/* Decorative star */}
//           <div className="absolute top-4 right-4 text-creative-red text-2xl">✦</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;

//----------------------------------------------------------------------------------------

// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { toast } from "sonner";

// const CTASection = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [loading, setLoading] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_ktben5k",   // Replace
//         "template_09scraa",  // Replace
//         formRef.current!,
//         "s3umeXI3xhy2p7Bmc"    // Replace
//       )
//       .then(
//         () => {
//           toast.success("Message sent successfully!", { duration: 5000 });
//           setLoading(false);
//           formRef.current?.reset();
//           setShowForm(false); // hide form
//         },
//         () => {
//           toast.error("Something went wrong. Please try again.", { duration: 5000 });
//           setLoading(false);
//           setShowForm(false); // hide form on failure too
//         }
//       );
//   };

//   return (
//     <section className="py-16 px-8 relative">
//       <div className="absolute top-8 right-16 text-creative-pink text-3xl animate-float">✦</div>

//       <div className="max-w-4xl mx-auto text-center">
//         <div className="hand-drawn-border bg-white p-12 space-y-8 relative">
          
//           {!showForm ? (
//             <button
//               onClick={() => setShowForm(true)}
//               className="hand-drawn-border bg-creative-blue px-8 py-4 text-lg font-medium hover:bg-opacity-80 transition-colors relative"
//             >
//               Send us message
//               <span className="absolute bottom-2 right-2 text-xl">↗</span>
//             </button>
//           ) : (
//             <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
//               <input
//                 name="name"
//                 placeholder="Your Name"
//                 className="block w-full p-3 border border-black rounded-md"
//                 required
//               />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 className="block w-full p-3 border border-black rounded-md"
//                 required
//               />
//               <textarea
//                 name="message"
//                 rows={4}
//                 placeholder="Your Message"
//                 className="block w-full p-3 border border-black rounded-md"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="hand-drawn-border bg-creative-blue px-8 py-4 text-lg font-medium hover:bg-opacity-80 transition-colors relative disabled:opacity-50"
//                 disabled={loading}
//               >
//                 {loading ? "Sending..." : "Send"}
//                 <span className="absolute bottom-2 right-2 text-xl">↗</span>
//               </button>
//             </form>
//           )}

//           <div className="absolute top-4 right-4 text-creative-red text-2xl">✦</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;

//==================================================================================================


import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const CTASection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ktben5k",   // Replace
        "template_09scraa",  // Replace
        formRef.current!,
        "s3umeXI3xhy2p7Bmc"    // Replace
      )
      .then(
        () => {
          toast.success("Message sent successfully!", { duration: 5000 });
          formRef.current?.reset();
          setShowForm(false);
          setLoading(false);
        },
        () => {
          toast.error("Something went wrong. Please try again.", { duration: 5000 });
          setShowForm(false);
          setLoading(false);
        }
      );
  };

  return (
    <section id="cta-section" className="py-16 px-8 relative bg-[#fce3d9]">
      {/* Decorative elements */}
      <div className="absolute top-8 right-16 text-creative-pink text-3xl animate-float">✦</div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="hand-drawn-border bg-white p-12 space-y-8 relative">
          
          {/* Browser mockup */}
          <div className="hand-drawn-border bg-gray-100 p-6 max-w-md mx-auto relative transform -rotate-2">
            <div className="text-sm text-gray-600 mb-4">
              We start designing your project
            </div>
            <div className="text-sm text-gray-600 mb-6">
              Want to see how to transform your brand into a unique style, sent us a message
            </div>

            <button className="hand-drawn-border bg-creative-blue px-6 py-3 text-sm font-medium hover:bg-opacity-80 transition-colors relative">
              See Portfolio
              <span className="absolute bottom-2 right-2 text-lg">↗</span>
            </button>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              start designing your project
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              to see how to transform your brand into a unique style, sent us a message
            </p>

            {!showForm ? (
              <button
                className="hand-drawn-border bg-creative-blue px-8 py-4 text-lg font-medium hover:bg-opacity-80 transition-colors relative"
                onClick={() => setShowForm(true)}
              >
                Send us message
                <span className="absolute bottom-2 right-2 text-xl">↗</span>
              </button>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 max-w-xl mx-auto">
                <input
                  name="name"
                  placeholder="Your Name"
                  className="block w-full p-3 border border-black rounded-md"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="block w-full p-3 border border-black rounded-md"
                  required
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="block w-full p-3 border border-black rounded-md"
                  required
                />
                <button
                  type="submit"
                  className="hand-drawn-border bg-creative-blue px-8 py-4 text-lg font-medium hover:bg-opacity-80 transition-colors relative disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                  <span className="absolute bottom-2 right-2 text-xl">↗</span>
                </button>
              </form>
            )}
          </div>

          {/* Decorative star */}
          <div className="absolute top-4 right-4 text-creative-red text-2xl">✦</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
