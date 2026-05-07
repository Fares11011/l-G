export enum UserRole {
  STUDENT = 'STUDENT',
  SUPERVISOR = 'SUPERVISOR',
  ADMIN = 'ADMIN'
}

export type TrackType = 'programming' | 'soft-skills' | 'ai-electrical' | 'yta';

export type Language = 'ar' | 'en';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
  level?: number; 
  points?: number; 
  isYTA?: boolean;
}

export interface Course {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional' | 'Final';
  hours: number;
  track: TrackType;
  ageGroup?: string;
  skillsAr: string[];
  skillsEn: string[];
  progress: number;
  isLocked: boolean;
  iconName?: string; // e.g. 'Code', 'Cpu', 'Users'
}

export interface StudentStat {
  studentId: string;
  studentName: string;
  coursesCompleted: number;
  averageScore: number;
  lastActive: string;
}

export interface SupervisorStat {
  id: string;
  name: string;
  studentsCount: number;
  averageStudentPerformance: number;
  activeCourses: number;
}

export interface GameState {
  score: number;
  level: number;
  lives: number;
}