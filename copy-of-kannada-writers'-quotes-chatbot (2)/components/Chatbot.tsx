import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Language, Writer } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import Message from './Message';
import { SendIcon } from './Icons';
import WriterDetails from './WriterDetails';

interface ChatbotProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ language, setLanguage }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedWriter, setSelectedWriter] = useState<Writer | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    const introMessageText = language === 'en'
      ? "Happy Kannada Rajyotsava! ❤💛\n\nI'm here to share inspiring quotes from legendary Kannada writers. All quotes are provided in Kannada with an English translation.\n\nHow can I help you today?"
      : "ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವದ ಶುಭಾಶಯಗಳು! ❤💛\n\nಪೌರಾಣಿಕ ಕನ್ನಡ ಬರಹಗಾರರ ಸ್ಪೂರ್ತಿದಾಯಕ ಉಲ್ಲೇಖಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ನಾನಿದ್ದೇನೆ. ಎಲ್ಲಾ ಉಲ್ಲೇಖಗಳನ್ನು ಕನ್ನಡದಲ್ಲಿ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಅನುವಾದದೊಂದಿಗೆ ನೀಡಲಾಗಿದೆ.\n\nಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?";
      
    setMessages([
      { id: 'intro', text: introMessageText, sender: 'bot', isIntro: true }
    ]);
  }, [language]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
    };
    
    setMessages((prev) => [...prev, userMessage, { id: 'loading', text: '', sender: 'bot', isLoading: true }]);
    setInputValue('');
    setIsLoading(true);

    const botResponseText = await sendMessageToGemini(text.trim());
    
    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: botResponseText,
      sender: 'bot',
    };

    setMessages((prev) => {
        const newMessages = prev.filter(msg => !msg.isLoading);
        return [...newMessages, botMessage];
    });
    setIsLoading(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };
  
  const handleWriterClick = (writer: Writer) => {
      setSelectedWriter(writer);
  }
  
  const handleBack = () => {
      setSelectedWriter(null);
  }

  if (selectedWriter) {
      return <WriterDetails writer={selectedWriter} onBack={handleBack} language={language} />;
  }

  return (
    <div className="flex flex-col h-full bg-transparent">
      <header className="relative p-4 text-center text-white bg-black/20 shadow-lg flex-shrink-0">
        <h1 className="text-xl font-bold">Kannada Writers' Quotes</h1>
        <p className="text-sm opacity-90">ಕನ್ನಡ ಸಾಹಿತಿಗಳ ನುಡಿಮುತ್ತುಗಳು</p>
        <button
          onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-sm font-semibold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors"
          aria-label={language === 'en' ? 'Switch to Kannada' : 'Switch to English'}
        >
          {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
        </button>
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} onWriterClick={handleWriterClick} language={language} />
        ))}
        <div ref={messagesEndRef} />
      </main>
      <footer className="p-4 bg-transparent flex-shrink-0">
        <form onSubmit={handleFormSubmit} className="flex items-center space-x-2 bg-white/80 rounded-full p-2 shadow-xl focus-within:ring-2 focus-within:ring-yellow-400">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={language === 'en' ? "Ask about a writer or a quote..." : "ಬರಹಗಾರರ ಬಗ್ಗೆ ಅಥವಾ ಒಂದು ಉಲ್ಲೇಖವನ್ನು ಕೇಳಿ..."}
            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-500 px-3"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white rounded-full p-3 hover:bg-red-500 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isLoading || !inputValue.trim()}
          >
            <SendIcon />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Chatbot;