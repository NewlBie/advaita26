'use client';

import { useState, useEffect } from 'react';
import SceneManager from '@/components/core/SceneManager';
import AudioGate from '@/components/core/AudioGate';
import { unlockAudio, registerMusic, playMusic } from '@/components/core/audio';

export default function Page() {
  const [audioReady, setAudioReady] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Detect mobile devices on mount
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);

      // On mobile, automatically skip to website
      if (mobile) {
        unlockAudio();
        registerMusic('scene1', '/audio/music/ST_INTRO.mp3', 0.8);
        registerMusic('scene2', '/audio/music/vecna.mp3', 0.8);
        registerMusic('scene3', '/audio/music/Kids.mp3', 0.8);
        playMusic('scene3');
        setSkipIntro(true);
        setAudioReady(true);
      }
    };

    checkMobile();
  }, []);

  const handleDone = () => {
    setAudioReady(true);
  };

  const handleSkipToWebsite = () => {
    setSkipIntro(true);
    setAudioReady(true);
  };

  // Wait for mobile detection to complete
  if (isMobile === null) {
    return null; // Brief loading state while detecting device
  }

  // Mobile: go directly to main website
  if (isMobile) {
    return <SceneManager skipIntro={true} />;
  }

  // Desktop: show AudioGate first
  if (!audioReady) {
    return (
      <AudioGate
        onDone={handleDone}
        onSkipToWebsite={handleSkipToWebsite}
      />
    );
  }

  return <SceneManager skipIntro={skipIntro} />;
}
