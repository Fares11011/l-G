import React, { useState, useEffect } from 'react';
import { Target, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Simple Math Game Logic
const generateQuestion = () => {
    const ops = ['+', '-'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    const a = Math.floor(Math.random() * 20) + 1;
    const b = Math.floor(Math.random() * 20) + 1;
    const ans = op === '+' ? a + b : a - b;
    
    // Generate distractors
    const answers = new Set([ans]);
    while (answers.size < 4) {
        answers.add(ans + Math.floor(Math.random() * 10) - 5);
    }
    
    return {
        q: `${a} ${op} ${b} = ?`,
        a: ans,
        options: Array.from(answers).sort(() => Math.random() - 0.5)
    };
};

export const GameZone: React.FC = () => {
  const { t } = useLanguage();
  const [question, setQuestion] = useState(generateQuestion());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [streak, setStreak] = useState(0);

  const handleAnswer = (val: number) => {
      if (feedback) return; // Prevent double clicks

      if (val === question.a) {
          setScore(s => s + 10 + (streak * 2));
          setStreak(s => s + 1);
          setFeedback('correct');
      } else {
          setStreak(0);
          setFeedback('wrong');
      }

      setTimeout(() => {
          setFeedback(null);
          setQuestion(generateQuestion());
      }, 1000);
  };

  return (
    <div className="min-h-[500px] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border-4 border-brand-100 dark:border-slate-700">
            {/* Game Header */}
            <div className="bg-brand p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Target className="text-secondary-400" />
                    <span className="font-bold text-xl">{t('تحدي الأرقام', 'Number Challenge')}</span>
                </div>
                <div className="text-end">
                    <p className="text-xs text-brand-200">{t('النقاط', 'XP')}</p>
                    <p className="font-mono font-bold text-2xl">{score}</p>
                </div>
            </div>

            {/* Game Board */}
            <div className="p-8 text-center relative">
                {/* Feedback Overlay */}
                {feedback && (
                    <div className={`absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-10 animate-fade-in`}>
                        {feedback === 'correct' ? (
                            <div className="text-green-500 scale-150 transform transition-transform duration-300">
                                <CheckCircle size={80} />
                                <p className="font-bold text-lg mt-2">{t('ممتاز!', 'Excellent!')}</p>
                            </div>
                        ) : (
                            <div className="text-red-500 scale-150 transform transition-transform duration-300">
                                <XCircle size={80} />
                                <p className="font-bold text-lg mt-2">{t('حاول مرة أخرى', 'Try Again')}</p>
                            </div>
                        )}
                    </div>
                )}

                <div className="mb-8">
                    <h3 className="text-5xl font-black text-gray-800 dark:text-white tracking-wider mb-2">{question.q}</h3>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">{t('اختر الإجابة الصحيحة', 'Pick the correct answer')}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {question.options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => handleAnswer(opt)}
                            className="h-16 rounded-2xl bg-gray-50 dark:bg-slate-700 hover:bg-brand-50 dark:hover:bg-brand-900 border-2 border-gray-100 dark:border-slate-600 hover:border-brand-200 text-xl font-bold text-gray-600 dark:text-white transition-all duration-200 active:scale-95"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-slate-900 p-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>🔥 {t('تتابع:', 'Streak:')} {streak}</span>
                <button 
                    onClick={() => { setScore(0); setStreak(0); setQuestion(generateQuestion()); }}
                    className="flex items-center gap-1 hover:text-brand transition-colors font-bold"
                >
                    <RefreshCw size={14} /> {t('إعادة اللعب', 'Restart')}
                </button>
            </div>
        </div>
    </div>
  );
};