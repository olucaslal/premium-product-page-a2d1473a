import floatingVideo from "@/assets/floating-gif.mp4";

const FloatingVideo = () => {
  return (
    <div className="fixed right-4 bottom-24 z-50 hidden md:block animate-fade-in">
      <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-2 border-primary/30 hover:scale-110 transition-transform duration-300">
        <video
          src={floatingVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FloatingVideo;
