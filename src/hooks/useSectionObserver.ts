'use client'

import { RefObject, useEffect, useState } from "react"

interface HookProps {
    sectionRef: RefObject<HTMLDivElement | null>
}

export const useSectionObserver = ({ sectionRef }: HookProps) => {
    const [hasAnimated, setHasAnimated] = useState(false); 

    useEffect(() => {
        if (!sectionRef.current || hasAnimated) return; 

        const section = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true); 
                    observer.disconnect(); 
                }
            },
            { threshold: 0.2 } 
        );

        observer.observe(section);
        
        return () => observer.disconnect(); 

    }, [sectionRef, hasAnimated]); 

    return {  hasAnimated };
}


/*
  Este hook ayuda a observar las secciones yproporciona el valor de hasAnimated para saver si 
  la seccion de la cual se está pasando la referencia  es necesario activar los estilos o animaciones que tiene,
  cuanod ya se activó una vez, se desconecta porque solo queremos que la animación suceda una vez cuando el usuario llegue a esa sección 
*/