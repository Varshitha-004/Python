import React, { useState } from 'react';
import { Writer, Language } from '../types';

interface WriterCardProps {
  writer: Writer;
  onClick: (writer: Writer) => void;
  language: Language;
}

const WriterCard: React.FC<WriterCardProps> = ({ writer, onClick, language }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => onClick(writer)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center p-2 text-center bg-white/20 rounded-lg shadow-md hover:bg-white/30 transition-colors duration-200 w-28 flex-shrink-0"
    >
      <img src={writer.imageUrl} alt={writer.nameEn} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-300" />
      <p className="mt-2 text-sm font-semibold text-gray-900">{writer.nameEn}</p>
      <p className="text-xs text-gray-800">{writer.nameKn}</p>
      
      {isHovered && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm text-white p-2 rounded-lg flex items-center justify-center transition-opacity duration-300 opacity-100">
          <p className="text-xs text-center">
            {language === 'en' ? writer.bioSnippetEn : writer.bioSnippetKn}
          </p>
        </div>
      )}
    </button>
  );
};

export default WriterCard;