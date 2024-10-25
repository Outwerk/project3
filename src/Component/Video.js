import React from 'react';

const VimeoVideoEmbed = () => {
  return (
    <div style={{ width: '100%', position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src="https://player.vimeo.com/video/1012777458?h=c12de80be9&badge=0&controls=0&muted=1&loop=1&autoplay=1&autopause=0&playsinline=1"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        title="Vimeo Video Player"
      />
    </div>  
  );
};

export default VimeoVideoEmbed;
