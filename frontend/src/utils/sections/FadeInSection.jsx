import React, { useEffect, useRef, useState } from 'react'

const FadeInSection = ({ children }) => {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect(); // animate once only
            }
        },
            { threshold: 0.1 }
        );

        if (ref.current){
            observer.observe(ref.current);
        }

        return ()=> observer.disconnect()

    }, [])

    return (
        <section
            ref={ref}
            className={`transition-all duration-2000 ease-out transform ${visible ? "opacity-100 translate-y-[-100]" 
                : "opacity-0 translate-y-0" }`}
        >
            {children}
        </section>
    )
}

export default FadeInSection