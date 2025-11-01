import React from 'react';
import { ChatMessage, Writer, Language } from '../types';
import { WRITERS } from '../constants';
import WriterCard from './WriterCard';

interface MessageProps {
  message: ChatMessage;
  onWriterClick: (writer: Writer) => void;
  language: Language;
}

const Message: React.FC<MessageProps> = ({ message, onWriterClick, language }) => {
  const isUser = message.sender === 'user';

  if (message.isLoading) {
    return (
      <div className="flex justify-start mb-4">
        <div className="bg-white/90 rounded-lg p-3 max-w-lg shadow-md">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse [animation-delay:0.1s]"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`${
          isUser
            ? 'bg-yellow-200 text-gray-800'
            : 'bg-white/90 text-gray-900'
        } rounded-lg p-3 max-w-lg shadow-md`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        {message.isIntro && (
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2 text-gray-800">
              {language === 'en' ? 'Or select a writer to learn about:' : 'ಅಥವಾ ಅವರ ಬಗ್ಗೆ ತಿಳಿಯಲು ಒಬ್ಬ ಬರಹಗಾರರನ್ನು ಆಯ್ಕೆ ಮಾಡಿ:'}
            </p>
            <div className="flex space-x-3 overflow-x-auto pb-2 -mx-2 px-2">
              {WRITERS.map((writer) => (
                <WriterCard key={writer.id} writer={writer} onClick={onWriterClick} language={language} />
              ))}
            </div>
            <p className="text-xs text-center mt-2 text-gray-600">
              {language === 'en' ? 'You can also ask for a "random quote"!' : '"ಯಾದೃಚ್ಛಿಕ ಉಲ್ಲೇಖ" ಗಾಗಿ ಸಹ ನೀವು ಕೇಳಬಹುದು!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;