import { useState } from "react";

const faqData = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV stands for Internet Protocol Television. It is a system where television services are delivered using the Internet protocol suite over a packet-switched network such as a LAN or the Internet, instead of being delivered through traditional terrestrial, satellite signal, and cable television formats.",
  },
  {
    question: "How do I set up IPTV?",
    answer:
      "Setting up IPTV involves connecting your device to the internet, installing the necessary application or software, and entering your subscription information. The exact steps can vary depending on your device and the IPTV service provider.",
  },
  {
    question: "Can I use IPTV on multiple devices?",
    answer:
      "Yes, most IPTV services allow you to use your subscription on multiple devices, but not simultaneously. Check with your provider for specific details regarding your subscription.",
  },
  {
    question: "What kind of internet connection do I need?",
    answer:
      "A stable and fast internet connection is required for IPTV services. A minimum speed of 10 Mbps is recommended for HD content, and higher for 4K content.",
  },
  {
    question: "Is IPTV legal?",
    answer:
      "The legality of IPTV depends on the service provider. Using IPTV services from a legitimate provider, who pays for the content distribution rights, is legal. However, using pirated IPTV services is illegal.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container sm:min-h-[80vh]">
      <h1 className="text-4xl font-bold text-center my-10">
        Frequently Asked Questions
      </h1>
      <div className="faq-questions">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="faq-question text-2xl font-semibold text-black">
              {faq.question}
            </h2>
            <p className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        .faq-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
        }
        .faq-item {
          background: #f9f9f9;
          margin: 10px 0;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .faq-item:hover {
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .faq-question {
          margin: 0;
          transition: color 0.3s ease;
        }
        .faq-item.active .faq-question {
          color: #007bff;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-answer.show {
          max-height: 1000px; /* arbitrary large value */
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Faq;
