export interface QuizQuestion {
  questionEn: string;
  questionKn: string;
  optionsEn: string[];
  optionsKn: string[];
  correctAnswerIndex: number;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    questionEn: "Who is known as 'Varakavi' (gifted poet)?",
    questionKn: "'ವರಕವಿ' ಎಂದು ಯಾರು ಪ್ರಸಿದ್ಧರಾಗಿದ್ದಾರೆ?",
    optionsEn: ['Kuvempu', 'D. R. Bendre', 'K. S. Nissar Ahmed', 'U. R. Ananthamurthy'],
    optionsKn: ['ಕುವೆಂಪು', 'ಡಿ. ಆರ್. ಬೆಂದ್ರೆ', 'ಕೆ. ಎಸ್. ನಿಸಾರ್ ಅಹ್ಮದ್', 'ಯು.ಆರ್. ಅನಂತಮೂರ್ತಿ'],
    correctAnswerIndex: 1,
  },
  {
    questionEn: "Which poem, written by K. S. Nissar Ahmed, is considered an unofficial anthem for Karnataka?",
    questionKn: "ಕೆ. ಎಸ್. ನಿಸಾರ್ ಅಹ್ಮದ್ ಬರೆದ ಯಾವ ಕವಿತೆಯನ್ನು ಕರ್ನಾಟಕದ ಅನಧಿಕೃತ ನಾಡಗೀತೆ ಎಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ?",
    optionsEn: ['Naaku Tanti', 'Bhoomigeetha', 'Nityotsava', 'Sri Ramayana Darshanam'],
    optionsKn: ['ನಾಕು ತಂತಿ', 'ಭೂಮಿಗೀತ', 'ನಿತ್ಯೋತ್ಸವ', 'ಶ್ರೀ ರಾಮಾಯಣ ದರ್ಶನಂ'],
    correctAnswerIndex: 2,
  },
  {
    questionEn: "Who pioneered the 'Navya' (modernist) movement in Kannada literature?",
    questionKn: "ಕನ್ನಡ ಸಾಹಿತ್ಯದಲ್ಲಿ 'ನವ್ಯ' ಚಳುವಳಿಯನ್ನು ಯಾರು ಪ್ರವರ್ತನಗೊಳಿಸಿದರು?",
    optionsEn: ['Masti Venkatesha Iyengar', 'Shivaram Karanth', 'P. Lankesh', 'Gopalakrishna Adiga'],
    optionsKn: ['ಮಾಸ್ತಿ ವೆಂಕಟೇಶ ಅಯ್ಯಂಗಾರ್', 'ಶಿವರಾಮ ಕಾರಂತ', 'ಪಿ. ಲಂಕೇಶ್', 'ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ'],
    correctAnswerIndex: 3,
  },
  {
    questionEn: "Kuvempu's epic 'Sri Ramayana Darshanam' earned him which prestigious award?",
    questionKn: "ಕುವೆಂಪು ಅವರ ಮಹಾಕಾವ್ಯ 'ಶ್ರೀ ರಾಮಾಯಣ ದರ್ಶನಂ' ಅವರಿಗೆ ಯಾವ ಪ್ರತಿಷ್ಠಿತ ಪ್ರಶಸ್ತಿಯನ್ನು ತಂದುಕೊಟ್ಟಿತು?",
    optionsEn: ['Padma Shri', 'Sahitya Akademi Award', 'Jnanpith Award', 'Pampa Award'],
    optionsKn: ['ಪದ್ಮಶ್ರೀ', 'ಸಾಹಿತ್ಯ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ', 'ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ', 'ಪಂಪ ಪ್ರಶಸ್ತಿ'],
    correctAnswerIndex: 2,
  },
  {
    questionEn: "Who is revered as the 'father of the Kannada short story' and used the pen name 'Srinivasa'?",
    questionKn: "'ಕನ್ನಡದ ಸಣ್ಣ ಕಥೆಗಳ ಪಿತಾಮಹ' ಎಂದು ಪೂಜಿಸಲ್ಪಡುವ ಮತ್ತು 'ಶ್ರೀನಿವಾಸ' ಎಂಬ ಕಾವ್ಯನಾಮವನ್ನು ಬಳಸಿದವರು ಯಾರು?",
    optionsEn: ['Masti Venkatesha Iyengar', 'D. R. Bendre', 'Kuvempu', 'P. Lankesh'],
    optionsKn: ['ಮಾಸ್ತಿ ವೆಂಕಟೇಶ ಅಯ್ಯಂಗಾರ್', 'ಡಿ. ಆರ್. ಬೆಂದ್ರೆ', 'ಕುವೆಂಪು', 'ಪಿ. ಲಂಕೇಶ್'],
    correctAnswerIndex: 0,
  },
];
