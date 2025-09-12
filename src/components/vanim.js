import { useEffect, useRef } from 'react';

const VideoOnceOnView = ({ src, alt, className }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (!videoRef.current) return;

    const handlePlay = () => {
      console.log('Attempting to play video');
      videoRef.current.play().catch((e) => {
        console.log('Video playback prevented:', e);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          console.log('Video entered viewport');
          handlePlay();
        } else {
          console.log('Video left viewport');
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      className={className}
      preload="auto"
      aria-label={alt}
      loop={false}
    />
  );
};

export default VideoOnceOnView;
