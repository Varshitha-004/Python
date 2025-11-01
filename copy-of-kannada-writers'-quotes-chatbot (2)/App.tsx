import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import Quiz from './components/Quiz';
import { Language } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'welcome' | 'chat' | 'quiz'>('welcome');
  const [language, setLanguage] = useState<Language>('en');
  
  const greeting = "Happy Kannada Rajyotsava! Let’s celebrate the pride of our language and literature. ❤💛";

  if (view === 'welcome') {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-500 animated-gradient">
        <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವದ ಶುಭಾಶಯಗಳು!</h1>
            <p className="text-lg font-semibold text-yellow-200 mb-4">Proud to be a Kannadiga ❤💛</p>
            <p className="text-md text-white mb-8">{greeting}</p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setView('chat')}
                className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full shadow-xl hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto"
              >
                Explore Writers
              </button>
              <button
                onClick={() => setView('quiz')}
                className="px-8 py-4 bg-red-600 text-white font-bold rounded-full shadow-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto"
              >
                Take the Poetry Quiz
              </button>
            </div>
        </div>
      </div>
    );
  }

  if (view === 'quiz') {
      return (
         <div className="w-full h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-red-400 overflow-hidden">
            <Quiz 
                language={language} 
                setLanguage={setLanguage} 
                onQuizComplete={() => setView('chat')} 
            />
        </div>
      )
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-red-400 overflow-hidden">
        <Chatbot language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default App;