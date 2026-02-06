'use client';

import { useEffect, useState } from 'react';
import SceneManager from '@/components/core/SceneManager';
import AudioGate from '@/components/core/AudioGate';

export default function Page() {
  const [audioReady, setAudioReady] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setSkipIntro(true);
    }
    console.log('hi');
  }, []);
  const handleDone = () => {
    setAudioReady(true);
  };

  const handleSkipToWebsite = () => {
    setSkipIntro(true);
    setAudioReady(true);
  };

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
