// Logo.jsx
import { useEffect, useRef } from 'react';

function Logo() {
    const logoRef = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;
        
        if (!logo) return;
        
        const textPart1 = 'LIMA-';
        const textPart2 = 'DEV';
        const fullText = textPart1 + textPart2;
        
        const tempo = 150;
        
        let positionText = 0;
        let blinkCount = 0;

        function animationLogo() {
            if (positionText <= fullText.length) {
                const part1Length = Math.min(positionText, textPart1.length);
                const part2Length = Math.max(0, positionText - textPart1.length);
                
                logo.innerHTML = 
                    textPart1.slice(0, part1Length) + 
                    '<span style="color: #df2f03;">' + textPart2.slice(0, part2Length) + '</span>' +
                    '<span class="dot">.</span>';
                
                positionText++;
                setTimeout(animationLogo, tempo);
            } else {
                setTimeout(blinkDot, 300);
            }
        }

        function blinkDot() {
            if (blinkCount < 6) {
                const dot = logo.querySelector('.dot');
                if (dot.style.opacity === '0') {
                    dot.style.opacity = '1';
                    blinkCount++;
                } else {
                    dot.style.opacity = '0';
                }
                setTimeout(blinkDot, 300);
            } else {
                blinkCount = 0;
                positionText = fullText.length;
                const dot = logo.querySelector('.dot');
                if (dot) dot.style.opacity = '1';
                setTimeout(eraseText, 500);
            }
        }

        function eraseText() {
            if (positionText >= 0) {
                const part1Length = Math.min(positionText, textPart1.length);
                const part2Length = Math.max(0, positionText - textPart1.length);
                
                logo.innerHTML = 
                    textPart1.slice(0, part1Length) + 
                    '<span style="color: #df2f03;">' + textPart2.slice(0, part2Length) + '</span>' +
                    '<span class="dot">.</span>';
                
                positionText--;
                setTimeout(eraseText, tempo / 2);
            } else {
                logo.innerHTML = '';
                setTimeout(restart, 2000);
            }
        }

        function restart() {
            positionText = 0;
            animationLogo();
        }

        animationLogo();

    }, []);

    return <p ref={logoRef}></p>;
}

export default Logo;