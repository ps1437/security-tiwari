import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieProps {
  animationData: any;
}

const LottieAnimation: React.FC<LottieProps> = ({ animationData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let anim: AnimationItem | null = null;

  useEffect(() => {
    if (containerRef.current) {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      // Cleanup
      if (anim) {
        anim.destroy();
      }
    };
  }, [animationData]);

  return <div ref={containerRef}></div>;
};

export default LottieAnimation;
