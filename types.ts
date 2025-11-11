// Fix: Removed a circular self-import of the 'Page' type that was causing a conflict with its local declaration.

export type Page = 'home' | 'bible' | 'songs' | 'events' | 'verse' | 'about';

export interface VerseContent {
  verse: string;
  reference: string;
  explanation: string;
  application: string;
  dos: string[];
  donts: string[];
}

export interface VerseData {
  english: VerseContent;
  telugu: VerseContent;
  tamil: VerseContent;
}

export interface Song {
  title: string;
  artist: string;
  youtubeUrl: string;
  spotifyUrl: string;
  summary: string;
  lyricist: string;
  album: string;
  year: string;
  background: string;
  theme: string;
  lyrics: string;
  imageUrl: string;
}

export interface SongsByLanguage {
  [language: string]: Song[];
}

export interface SongCategory {
  [category: string]: SongsByLanguage;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  city: string;
}

export interface BibleVerse {
  verse: number;
  text: string;
}

export interface BibleChapter {
  chapter: number;
  verses: BibleVerse[];
}

export interface BibleBook {
  [book: string]: BibleChapter[];
}

export interface BibleVersion {
  [language:string]: BibleBook;
}

export interface BibleBookGroup {
  group: string;
  books: string[];
}
