import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, speed = 0.05, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed * 1000);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return <span className={className}>{displayedText}</span>;
};

function App() {
  return (
    <div className="min-h-screen crt-effect crt-flicker selection:bg-brand-copper selection:text-brand-black pb-12">
      {/* 1. HEADER & NAVIGATION */}
      <header className="flex justify-between items-center p-6 border-b border-brand-copper/30">
        <div className="flex items-center">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="After Human Logo" 
            className="h-[60px] object-contain" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><rect width='60' height='60' fill='black' stroke='%23B87333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23D3D3D3' font-family='monospace' font-size='12'>LOGO</text></svg>";
            }}
          />
        </div>
        <div className="text-brand-copper text-sm md:text-base copper-glow">
          <span className="blink">STATUS: SECURE // YEAR: 2226</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-12 md:mt-24 space-y-24">
        
        {/* 2. HERO SECTION */}
        <section className="space-y-6">
          <div className="text-brand-copper font-medium tracking-widest text-sm md:text-base">
            <TypewriterText text="> ІНІЦІАЛІЗАЦІЯ АРХІВУ... ДОСТУП ДОЗВОЛЕНО." speed={0.03} />
            <span className="blink ml-1">_</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-glow"
          >
            AFTER HUMAN
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-xl md:text-2xl text-brand-gray/80"
          >
            Артефакти Епохи До Падіння.
          </motion.p>
        </section>

        {/* 3. LORE SECTION */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border border-brand-copper p-6 md:p-8 bg-brand-black/50 backdrop-blur-sm box-glow relative"
        >
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-copper -translate-x-px -translate-y-px"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-copper translate-x-px -translate-y-px"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-copper -translate-x-px translate-y-px"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-copper translate-x-px translate-y-px"></div>
          
          <h2 className="text-brand-copper text-xl md:text-2xl mb-4 uppercase tracking-widest copper-glow">
            СИСТЕМНИЙ ЖУРНАЛ: 2026 - 2226
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-brand-gray/90">
            Світ не згорів за один день. Він просто зупинився. Минуло 200 років. На руїнах мертвих бетонних джунглів техно-археологи знаходять залишки минулої цивілізації. Мертвий пластик, смартфони та мікросхеми стали їхніми святинями. Наш одяг — це задокументовані артефакти цієї техно-релігії.
          </p>
        </motion.section>

        {/* 4. THE ARTIFACTS */}
        <section>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 text-brand-copper"
          >
            <span className="text-xl md:text-2xl uppercase tracking-widest">АРХІВ_ВИЛУЧЕНЬ</span>
            <div className="h-px bg-brand-copper/30 flex-grow"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group border border-brand-copper/50 hover:border-brand-copper transition-colors p-4 flex flex-col bg-brand-black"
            >
              <div className="aspect-[4/5] w-full border border-brand-copper/30 mb-4 relative overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rV7928GBgYmBggwAAgwADcHAw0YLEmAAAAAAElFTkSuQmCC')] opacity-10 mix-blend-overlay"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}print1.png`}
                  alt="Black Mirror" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += "<div class='text-brand-gray/30 text-sm'>[ IMAGE DATA CORRUPTED ]</div>";
                  }}
                />
                <div className="absolute top-2 right-2 text-xs text-brand-copper/70">SCAN_01</div>
              </div>
              <div className="text-brand-copper/80 text-xs mb-2 tracking-wider">
                [ ІНВЕНТАРНИЙ НОМЕР: AH-01 ]
              </div>
              <h3 className="text-xl mb-3 font-bold uppercase">Black Mirror (Чорне Дзеркало)</h3>
              <p className="text-sm text-brand-gray/70 leading-relaxed flex-grow">
                Скам'янілий моноліт пам'яті. Згідно з дослідженнями, жителі Епохи До Падіння використовували його для добровільної передачі свого часу невідомому цифровому божеству.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group border border-brand-copper/50 hover:border-brand-copper transition-colors p-4 flex flex-col bg-brand-black"
            >
              <div className="aspect-[4/5] w-full border border-brand-copper/30 mb-4 relative overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rV7928GBgYmBggwAAgwADcHAw0YLEmAAAAAAElFTkSuQmCC')] opacity-10 mix-blend-overlay"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}print2.png`}  
                  alt="Key to Nowhere" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += "<div class='text-brand-gray/30 text-sm'>[ IMAGE DATA CORRUPTED ]</div>";
                  }}
                />
                <div className="absolute top-2 right-2 text-xs text-brand-copper/70">SCAN_02</div>
              </div>
              <div className="text-brand-copper/80 text-xs mb-2 tracking-wider">
                [ ІНВЕНТАРНИЙ НОМЕР: AH-02 ]
              </div>
              <h3 className="text-xl mb-3 font-bold uppercase">Key to Nowhere (Ключ в Нікуди)</h3>
              <p className="text-sm text-brand-gray/70 leading-relaxed flex-grow">
                Шматок мертвого пластику з магнітною смугою. Вважалося, що він відкривав доступ до нематеріальних багатств, які зникли в одну секунду під час Колапсу.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group border border-brand-copper/50 hover:border-brand-copper transition-colors p-4 flex flex-col bg-brand-black"
            >
              <div className="aspect-[4/5] w-full border border-brand-copper/30 mb-4 relative overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rV7928GBgYmBggwAAgwADcHAw0YLEmAAAAAAElFTkSuQmCC')] opacity-10 mix-blend-overlay"></div>
                <img 
                   src={`${import.meta.env.BASE_URL}print3.png`}  
                  alt="Perfect World" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += "<div class='text-brand-gray/30 text-sm'>[ IMAGE DATA CORRUPTED ]</div>";
                  }}
                />
                <div className="absolute top-2 right-2 text-xs text-brand-copper/70">SCAN_03</div>
              </div>
              <div className="text-brand-copper/80 text-xs mb-2 tracking-wider">
                [ ІНВЕНТАРНИЙ НОМЕР: AH-03 ]
              </div>
              <h3 className="text-xl mb-3 font-bold uppercase">Perfect World (Ідеальний Світ)</h3>
              <p className="text-sm text-brand-gray/70 leading-relaxed flex-grow">
                Оптична ілюзія. Пристрій (VR-шолом), який надягали на голову, щоб не бачити, як руйнується справжній світ навколо.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5. EXTRACTION PROTOCOL */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 border-t-2 border-b-2 border-brand-red/60 py-12 text-center bg-gradient-to-b from-brand-red/5 to-transparent relative overflow-hidden"
        >
          <div className="absolute left-4 top-4 text-brand-red/40 text-xs">SYS.REQ.094</div>
          <div className="absolute right-4 bottom-4 text-brand-red/40 text-xs">END.REQ</div>
          
          <h2 className="text-2xl md:text-3xl text-brand-gray mb-6 uppercase tracking-widest font-bold">
            ЗАПИТ НА ВИЛУЧЕННЯ АРТЕФАКТІВ
          </h2>
          <p className="text-brand-gray/80 max-w-2xl mx-auto mb-10 text-lg">
            Щоб отримати допуск до архіву та оформити вилучення артефактів, перейдіть на захищений канал зв'язку бази.
          </p>
          
          <a 
            href="https://instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-brand-copper text-brand-copper px-8 py-4 text-xl tracking-widest font-bold hover:bg-brand-copper hover:text-brand-black transition-all duration-300 uppercase relative group"
          >
            <span className="absolute w-2 h-2 bg-brand-copper top-0 left-0 -translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-black transition-colors"></span>
            <span className="absolute w-2 h-2 bg-brand-copper top-0 right-0 translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-black transition-colors"></span>
            <span className="absolute w-2 h-2 bg-brand-copper bottom-0 left-0 -translate-x-1/2 translate-y-1/2 group-hover:bg-brand-black transition-colors"></span>
            <span className="absolute w-2 h-2 bg-brand-copper bottom-0 right-0 translate-x-1/2 translate-y-1/2 group-hover:bg-brand-black transition-colors"></span>
            [ ВСТАНОВИТИ_ЗВ'ЯЗОК_INSTAGRAM ]
          </a>
        </motion.section>

        <footer className="text-center text-brand-gray/40 text-xs tracking-widest uppercase mt-24 mb-8">
          © 2226 AFTER HUMAN. Усі дані засекречено.
        </footer>
      </main>
    </div>
  );
}

export default App;
