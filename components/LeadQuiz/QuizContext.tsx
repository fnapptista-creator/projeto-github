'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuizState {
    name: string;
    city: string;
    businessStage: string;
    painPoints: string[];
}

interface QuizContextData {
    isOpen: boolean;
    openQuiz: () => void;
    closeQuiz: () => void;
    quizData: QuizState;
    updateQuizData: (newData: Partial<QuizState>) => void;
    resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextData | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [quizData, setQuizData] = useState<QuizState>({
        name: '',
        city: '',
        businessStage: '',
        painPoints: []
    });

    const openQuiz = () => setIsOpen(true);
    const closeQuiz = () => {
        setIsOpen(false);
        // Opcional: manter os dados caso o usuário feche sem querer
    };
    const updateQuizData = (newData: Partial<QuizState>) => {
        setQuizData(prev => ({ ...prev, ...newData }));
    };
    const resetQuiz = () => {
        setQuizData({
            name: '',
            city: '',
            businessStage: '',
            painPoints: []
        });
    };

    return (
        <QuizContext.Provider value={{ isOpen, openQuiz, closeQuiz, quizData, updateQuizData, resetQuiz }}>
            {children}
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error('useQuiz must be used within a QuizProvider');
    }
    return context;
}
