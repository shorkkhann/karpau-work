export default function Hero() {
  const vimeoId = "1193695685";

  return (
    <section id="hero" className="flex flex-col gap-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Motion Designer & 3D Generalist</h1>
        <p className="text-base text-neutral-500 dark:text-neutral-400">Creating high quality 3D animations and dynamic motion graphics.</p>
      </div>

      <div 
  className="relative w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 isolate" 
  style={{ 
    aspectRatio: "16/9", 
    backgroundImage: `url(https://vumbnail.com/${vimeoId}.jpg)`, 
    backgroundSize: "cover", 
    backgroundPosition: "center",
    WebkitMaskImage: "-webkit-radial-gradient(white, black)"
  }}
>
  <iframe 
    src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`} 
    className="absolute inset-0 w-full h-full border-0 rounded-xl"
    allow="autoplay; fullscreen; picture-in-picture" 
    allowFullScreen 
  />
</div>
    </section>
  );
}