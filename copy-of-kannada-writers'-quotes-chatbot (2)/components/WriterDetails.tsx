import React from 'react';
import { Writer, Language } from '../types';

interface WriterDetailsProps {
  writer: Writer;
  onBack: () => void;
  language: Language;
}

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h2 className="text-xl font-bold text-red-700 border-b-2 border-yellow-400 pb-2 mb-3">
            {title}
        </h2>
        {children}
    </div>
);

const WriterDetails: React.FC<WriterDetailsProps> = ({ writer, onBack, language }) => {
    const isEn = language === 'en';

    return (
        <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm">
            <header className="relative p-4 text-center text-white bg-black/30 shadow-lg flex-shrink-0 flex items-center justify-center">
                <button
                    onClick={onBack}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-sm font-semibold bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    aria-label="Go back"
                >
                    <BackIcon />
                </button>
                <div>
                    <h1 className="text-2xl font-bold">{isEn ? writer.nameEn : writer.nameKn}</h1>
                    <p className="text-md opacity-90">{isEn ? writer.nameKn : writer.nameEn}</p>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-6 text-gray-800">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-6">
                        <img src={writer.imageUrl} alt={writer.nameEn} className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 mx-auto shadow-lg" />
                    </div>

                    <Section title={isEn ? "About the Writer (ಕವಿ)" : "ಕವಿ ಪರಿಚಯ (About)"}>
                        <p className="text-sm leading-relaxed mb-2">{isEn ? writer.bioSnippetEn : writer.bioSnippetKn}</p>
                        <p className="text-sm"><strong>{isEn ? 'Born:' : 'ಜನನ:'}</strong> {isEn ? writer.birthDateEn : writer.birthDateKn}</p>
                        <p className="text-sm"><strong>{isEn ? 'Place:' : 'ಸ್ಥಳ:'}</strong> {isEn ? writer.birthPlaceEn : writer.birthPlaceKn}</p>
                    </Section>

                    <Section title={isEn ? "Famous Books" : "ಪ್ರಸಿದ್ಧ ಕೃತಿಗಳು"}>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {(isEn ? writer.famousBooksEn : writer.famousBooksKn).map((book, i) => <li key={i}>{book}</li>)}
                        </ul>
                    </Section>
                    
                    <Section title={isEn ? "Major Awards" : "ಪ್ರಮುಖ ಪ್ರಶಸ್ತಿಗಳು"}>
                         <ul className="list-disc list-inside space-y-1 text-sm">
                            {(isEn ? writer.awardsEn : writer.awardsKn).map((award, i) => <li key={i}>{award}</li>)}
                        </ul>
                    </Section>

                    <Section title={isEn ? "Notable Contributions" : "ಗಮನಾರ್ಹ ಕೊಡುಗೆಗಳು"}>
                        <p className="text-sm">{isEn ? writer.contributionsEn : writer.contributionsKn}</p>
                    </Section>

                    <Section title={isEn ? "Famous Quotes (ನುಡಿಮುತ್ತುಗಳು)" : "ಪ್ರಸಿದ್ಧ ನುಡಿಮುತ್ತುಗಳು (Quotes)"}>
                        <div className="space-y-4">
                            {writer.quotes.map((quote, i) => (
                                <div key={i} className="bg-yellow-100/50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-sm">
                                    <p className="text-lg font-semibold text-gray-900 mb-1 font-serif">"{quote.kn}"</p>
                                    <p className="text-sm text-gray-700 italic">"{quote.en}"</p>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            </main>
        </div>
    );
};

export default WriterDetails;
