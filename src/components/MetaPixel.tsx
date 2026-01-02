import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}

const MetaPixel = () => {
  useEffect(() => {
    // Meta Pixel Code
    (function(f: Window, b: Document, e: string, v: string) {
      let n: typeof f.fbq;
      let t: HTMLScriptElement;
      let s: HTMLScriptElement;
      
      if (f.fbq) return;
      
      n = f.fbq = function(...args: unknown[]) {
        if ((n as any).callMethod) {
          (n as any).callMethod.apply(n, args);
        } else {
          (n as any).queue.push(args);
        }
      } as typeof f.fbq;
      
      if (!f._fbq) f._fbq = n;
      (n as any).push = n;
      (n as any).loaded = true;
      (n as any).version = '2.0';
      (n as any).queue = [];
      
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
      s.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', '1368920974612657');
    window.fbq('track', 'PageView');
    console.log('Meta Pixel Initialized: 1368920974612657');
  }, []);

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1368920974612657&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
};

export default MetaPixel;
