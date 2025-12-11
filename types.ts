
// Fix: Removed self-import which caused conflicts with local type declarations.

export type BibleLanguage = 'english' | 'telugu' | 'tamil';
export type EnglishVersion = 'KJV' | 'NKJV' | 'ESV' | 'NASB';

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
  NASB: BibleBook;
}

export interface BibleData {
  english: EnglishBible;
  telugu: BibleBook;
  tamil: BibleBook;
}

export type Page = 'home' | 'verse' | 'bible' | 'songs' | 'events' | 'about' | 'admin' | 'profile' | 'plans' | 'create' | 'casestudies' | 'study' | 'introspection' | 'botanica' | 'video';

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

export type UserRole = 'admin' | 'user';

export interface UserProfile {
    displayName?: string;
    bio?: string;
    notificationsEnabled: boolean;
    streak: number;
    versesRead: number;
    avatar?: string; // Color code or emoji
    lastNotificationDate?: string; // ISO Date string
}

export interface User {
  email: string;
  role: UserRole;
  password?: string;
  profile?: UserProfile;
}

export interface BiblePlanDay {
    day: number;
    reference: string; // e.g., "Genesis 1-3"
    completed: boolean;
}

export interface BiblePlan {
    id: string;
    title: string;
    description: string;
    days: number;
    schedule: BiblePlanDay[];
    imageUrl: string;
}

export interface UserPlanProgress {
    planId: string;
    startDate: string;
    completedDays: number[]; // Array of day numbers
}

export interface DailyLog {
    date: string; // YYYY-MM-DD
    readBible: boolean;
    readVerse: boolean;
    prayed: boolean;
    worship: boolean;
    peaceScore: number; // 1-10
}

export interface CharacterProfile {
    name: string;
    tagline: string; // e.g., "The Pioneer of Faith"
    plant_type: string; // Metaphorical plant name
    origin: string; // Soil/Background
    growth_story: string; // Brief bio
    key_fruit: string; // Legacy/Achievements
    thorns: string; // Struggles/Failures
    scripture_ref: string; // Key verses
}