'use client'
import { useRef } from 'react';
import style from '../../css/enjoy.module.css';
import { useSectionObserver } from '@/hooks/useSectionObserver';
export default function Line() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { hasAnimated } = useSectionObserver({ sectionRef });

    return (
        <div className='h-[900px] lg:h-full w-full rotate-90 lg:rotate-0 ' ref={sectionRef}>
            <svg viewBox="0 0 1000 300" className="absolute w-full h-full">
                <path 
                    d="M 0 150 Q 250 50, 500 150 T 1000 150" 
                    stroke="black" 
                    strokeWidth="2" 
                    fill="none"
                    className={hasAnimated ? style.line : ""}
                />
            </svg>
            <svg viewBox="0 0 1000 300" className="absolute w-full h-full -rotate-12">
                <path 
                    d="M 0 150 Q 250 50, 500 150 T 1000 150" 
                    stroke="black" 
                    strokeWidth="2" 
                    fill="none"
                    className={hasAnimated ? style.line : ""}
                />
            </svg>
        </div>
    );
}
