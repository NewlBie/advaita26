'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SceneManager from '@/components/core/SceneManager';
import AudioGate from '@/components/core/AudioGate';
import LoadingScreen from '@/components/core/LoadingScreen';
import { unlockAudio, registerMusic, playMusic } from '@/components/core/audio';

function PageContent() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const searchParams = useSearchParams();

  // Detect mobile devices on mount
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);

      const shouldSkip = searchParams?.get('skip') === 'true';

      // On mobile, automatically skip to website, OR if skip parameter is present
      if (mobile || shouldSkip) {
        unlockAudio();
        registerMusic('scene1', '/audio/music/ST_INTRO.mp3', 0.8);
        registerMusic('scene2', '/audio/music/vecna.mp3', 0.8);
        registerMusic('scene3', '/audio/music/Kids.mp3', 0.8);
        playMusic('scene3');
        setSkipIntro(true);
        setAudioReady(true);
        setLoadingComplete(true); // Skip loading screen on mobile/skip-param for speed
      }
    };

    checkMobile();
  }, [searchParams]);

  const handleDone = () => {
    setAudioReady(true);
  };

  const handleSkipToWebsite = () => {
    setSkipIntro(true);
    setAudioReady(true);
  };

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  // Wait for mobile detection to complete
  if (isMobile === null) {
    return null; // Brief loading state while detecting device
  }

  // Mobile: go directly to main website (Loading skipped above)
  if (isMobile) {
    return <SceneManager skipIntro={true} />;
  }

  // Desktop: Show Loading Screen First
  if (!loadingComplete) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  // Desktop: Then AudioGate
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

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageContent />
    </Suspense>
  );
}
