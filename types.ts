// Fix: Removed self-import which caused conflicts with local type declarations.

export type BibleLanguage = 'english' | 'telugu';
export type EnglishVersion = 'KJV' | 'NKJV' | 'ESV';

export interface Verse {
  [verseNumber: number]: string;
}

export interface Chapter {
  [chapterNumber: number]: Verse;
}

export interface BibleBook {
  [bookName: string]: Chapter;
}

export interface EnglishBible {
  KJV: BibleBook;
  NKJV: BibleBook;
  ESV: BibleBook;
}

export interface BibleData {
  english: EnglishBible;
  telugu: BibleBook;
}

export type Page = 'home' | 'verse' | 'bible' | 'songs' | 'events' | 'about';

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
  album: string;
  year: number;
  language: 'English' | 'Telugu' | 'Tamil' | 'Hindi';
  lyricist: string;
  summary: string;
  background: string;
  theme: string;
  lyrics: string;
  youtubeUrl: string;
  spotifyUrl: string;
  imageUrl: string;
}

export interface SongCategory {
  [language: string]: Song[];
}

export interface SongData {
  [category: string]: SongCategory;
}

export interface Event {
  id: number;
  title: string;
  date: string; // ISO format
  city: string;
  description: string;
}
