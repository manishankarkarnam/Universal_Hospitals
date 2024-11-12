import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MessageSquare, Send, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages(prev => [...prev, { text: inputText, isBot: false }]);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thank you for your message. One of our healthcare representatives will respond shortly.",
          isBot: true
        }]);
      }, 1000);
      setInputText("");
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-900 transition-all z-50"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-xl z-50">
          <div className="bg-blue-800 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Aisha Hospitals Help</h3>
                <p className="text-sm text-blue-100">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-800 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-blue-800"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Chatbot.propTypes = {
  isOpen: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    isBot: PropTypes.bool.isRequired
  })),
  inputText: PropTypes.string,
  handleSend: PropTypes.func
};

export default Chatbot;






// import React, { useState } from 'react';
// import { MessageSquare, Send, X } from 'lucide-react';

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I help you today?", isBot: true }
//   ]);
//   const [inputText, setInputText] = useState("");

//   const handleSend = () => {
//     if (inputText.trim()) {
//       // Add user message
//       setMessages(prev => [...prev, { text: inputText, isBot: false }]);
      
//       // Simulate bot response
//       setTimeout(() => {
//         setMessages(prev => [...prev, {
//           text: "Thank you for your message. One of our healthcare representatives will respond shortly.",
//           isBot: true
//         }]);
//       }, 1000);
      
//       setInputText("");
//     }
//   };

//   return (
//     <>
//       {/* Chat Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-900 transition-all z-50"
//         >
//           <MessageSquare className="w-6 h-6" />
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-xl z-50">
//           {/* Header */}
//           <div className="bg-blue-800 text-white p-4 rounded-t-2xl flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <MessageSquare className="w-6 h-6" />
//               <div>
//                 <h3 className="font-semibold">Aisha Hospitals Help</h3>
//                 <p className="text-sm text-blue-100">Online</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-white hover:text-gray-200"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="h-96 overflow-y-auto p-4 space-y-4">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
//               >
//                 <div
//                   className={`max-w-[80%] p-3 rounded-2xl ${
//                     message.isBot
//                       ? 'bg-gray-100 text-gray-800'
//                       : 'bg-blue-800 text-white'
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//                 placeholder="Type your message..."
//                 className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-blue-800"
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//               />
//               <button
//                 onClick={handleSend}
//                 className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;