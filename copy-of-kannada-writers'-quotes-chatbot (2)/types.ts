export interface Quote {
  kn: string;
  en: string;
}

export interface Writer {
  id: string;
  nameEn: string;
  nameKn: string;
  imageUrl: string;
  bioSnippetEn: string;
  bioSnippetKn: string;
  birthPlaceEn: string;
  birthPlaceKn: string;
  birthDateEn: string;
  birthDateKn: string;
  famousBooksEn: string[];
  famousBooksKn: string[];
  awardsEn: string[];
  awardsKn: string[];
  contributionsEn: string;
  contributionsKn: string;
  quotes: Quote[];
}

export type Language = 'en' | 'kn';

export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    isIntro?: boolean;
    isLoading?: boolean;
}