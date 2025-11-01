import React, { useState } from 'react';
import { Language } from '../types';
import { QUIZ_QUESTIONS } from '../quizData';

interface QuizProps {
  language: Language;
  setLanguage: (language: Language) => void;
  onQuizComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ language, setLanguage, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const isEn = language === 'en';
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswerClick = (selectedIndex: number) => {
    if (isFeedbackVisible) return; // Prevent clicking while feedback is showing

    setSelectedAnswerIndex(selectedIndex);
    setIsFeedbackVisible(true);

    if (selectedIndex === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < QUIZ_QUESTIONS.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setShowScore(true);
      }
      // Reset for the next question
      setSelectedAnswerIndex(null);
      setIsFeedbackVisible(false);
    }, 1500); // 1.5-second delay to show feedback
  };

  if (showScore) {
    return (
      <div className="flex flex-col h-full bg-transparent items-center justify-center text-center p-4">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full text-gray-800">
            <h2 className="text-3xl font-bold mb-4">{isEn ? 'Quiz Complete!' : 'ರಸಪ್ರಶ್ನೆ ಪೂರ್ಣಗೊಂಡಿದೆ!'}</h2>
            <p className="text-5xl font-extrabold text-red-600 mb-2">{score} <span className="text-3xl text-gray-700">/ {QUIZ_QUESTIONS.length}</span></p>
            <p className="text-lg mb-8">{isEn ? 'You did a great job!' : 'ನೀವು ಉತ್ತಮ ಕೆಲಸ ಮಾಡಿದ್ದೀರಿ!'}</p>
            <button
                onClick={onQuizComplete}
                className="px-8 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-xl hover:bg-red-500 transform hover:scale-105 transition-all duration-300 text-lg"
            >
                {isEn ? 'Explore Writers' : 'ಬರಹಗಾರರನ್ನು ಅನ್ವೇಷಿಸಿ'}
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-transparent">
        <header className="relative p-4 text-center text-white bg-black/20 shadow-lg flex-shrink-0">
            <h1 className="text-xl font-bold">{isEn ? 'Kannada Poetry Quiz' : 'ಕನ್ನಡ ಕಾವ್ಯ ರಸಪ್ರಶ್ನೆ'}</h1>
            <p className="text-sm opacity-90">{`Question ${currentQuestionIndex + 1}/${QUIZ_QUESTIONS.length}`}</p>
            <button
            onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-sm font-semibold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors"
            aria-label={isEn ? 'Switch to Kannada' : 'Switch to English'}
            >
            {isEn ? 'ಕನ್ನಡ' : 'English'}
            </button>
      </header>
       <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {isEn ? currentQuestion.questionEn : currentQuestion.questionKn}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(isEn ? currentQuestion.optionsEn : currentQuestion.optionsKn).map((option, index) => {
                    const isSelected = selectedAnswerIndex === index;
                    const isCorrect = currentQuestion.correctAnswerIndex === index;
                    
                    let buttonClass = 'w-full p-4 bg-white/80 rounded-lg shadow-md hover:bg-yellow-200 transition-colors duration-200 text-gray-800 font-medium';

                    if (isFeedbackVisible) {
                        if (isCorrect) {
                            buttonClass = 'w-full p-4 bg-green-500 text-white rounded-lg shadow-md transition-colors duration-200 font-medium';
                        } else if (isSelected && !isCorrect) {
                            buttonClass = 'w-full p-4 bg-red-500 text-white rounded-lg shadow-md transition-colors duration-200 font-medium';
                        } else {
                            buttonClass = 'w-full p-4 bg-white/40 rounded-lg shadow-md transition-colors duration-200 text-gray-600 font-medium opacity-70 cursor-not-allowed';
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(index)}
                            className={buttonClass}
                            disabled={isFeedbackVisible}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;