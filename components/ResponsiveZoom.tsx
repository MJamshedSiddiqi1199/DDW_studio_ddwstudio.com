'use client';

import { useEffect } from 'react';

export default function ResponsiveZoom() {
    useEffect(() => {
        const adjustProjectScale = () => {
            // Dynamic zoom for PC (screens wider than 768px)
            if (window.innerWidth > 768) {
                // The USER wants a perceived 50% zoom level when browser is at 100%
                const baseTarget = 0.9;
                const pixelRatio = window.devicePixelRatio || 1;

                // Formula: Target / CurrentRatio
                // When browser zoom is 100% (ratio 1), it applies zoom: 0.5
                // When browser zoom is 200% (ratio 2), it applies zoom: 0.25 (total effect stays 0.5)
                const cssZoom = baseTarget / pixelRatio;

                // Apply to html element
                document.documentElement.style.zoom = (cssZoom * 100) + "%";
            } else {
                // Reset zoom for mobile devices
                document.documentElement.style.zoom = "100%";
            }
        };

        // Run on load
        adjustProjectScale();

        // Run on resize
        window.addEventListener('resize', adjustProjectScale);

        // Interval to detect browser zoom changes specifically
        const interval = setInterval(adjustProjectScale, 1000);

        return () => {
            window.removeEventListener('resize', adjustProjectScale);
            clearInterval(interval);
            // Reset zoom when component unmounts (though it shouldn't in layout)
            document.documentElement.style.zoom = "100%";
        };
    }, []);

    return null; // This component doesn't render anything
}
