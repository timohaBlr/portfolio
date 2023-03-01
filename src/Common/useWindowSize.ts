import {useEffect, useState} from "react";

/**
 * https://www.cyberforum.ru/react-js/thread3019812.html
 */

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
};