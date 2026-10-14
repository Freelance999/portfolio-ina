import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full relative pt-space-lg pb-space-xl lg:pt-space-xl lg:pb-16 overflow-hidden" id="tentang">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary-container/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-surface-container-high/40 blur-3xl pointer-events-none" />

      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-bg-surface text-primary-container shadow-xs border border-border-subtle">
              <span
                className="material-symbols-outlined text-sm font-semibold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-label-md text-label-md tracking-wide">
                Administrative Specialist | HR Generalist
              </span>
            </div>
            <div className="space-y-space-xs">
              <h1 className="font-display text-4xl lg:text-5xl leading-tight text-text-primary tracking-tight font-extrabold">
                Mufliha Sobrina Syah
              </h1>
              <p className="font-headline-md text-lg lg:text-xl text-primary font-semibold leading-snug">
                Mewujudkan Efisiensi Operasional Melalui Administrasi yang Terstruktur &amp; Akurasi Data.
              </p>
            </div>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed max-w-2xl">
              Memiliki latar belakang Manajemen dengan kompetensi dalam administrasi operasional, pengelolaan dokumen, pengolahan data, penyusunan laporan, dan koordinasi lintas tim. Mampu mengelola informasi secara sistematis, menjaga akurasi data, serta memastikan dokumentasi tersusun dengan rapi untuk mendukung kelancaran operasional.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
                href="mailto:muflihasobrina4@gmail.com"
              >
                <span className="material-symbols-outlined text-lg transition-transform group-hover:scale-110">
                  mail
                </span>
                <span>Hubungi via Email</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-2.5 rounded-full border-2 border-primary-container text-primary-container font-label-md text-label-md hover:bg-primary-container/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                href="https://linkedin.com/in/mufliha-sobrina-syah"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.44a1.62 1.62 0 0 0-1.62 1.62c0 .89.73 1.62 1.62 1.62s1.62-.73 1.62-1.62c0-.89-.73-1.62-1.62-1.62Z" />
                </svg>
                <span>Kunjungi LinkedIn</span>
              </a>
            </div>

          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-space-lg lg:mt-0">
            <div className="relative w-full max-w-44 sm:max-w-48">
              <div className="absolute -inset-3 rounded-2xl bg-linear-to-tr from-secondary-container via-surface-container to-bg-surface -rotate-2 scale-95 opacity-80 shadow-md pointer-events-none" />
              <div
                className="relative rounded-2xl overflow-hidden bg-card-surface border-2 border-border-subtle shadow-xl aspect-square"
                style={{ position: "relative" }}
              >
                <Image
                  src="/assets/images/profile_photo.JPG"
                  alt="Mufliha Sobrina Syah - Professional Executive Portrait"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 176px, 192px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-text-primary/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card-surface/95 backdrop-blur-sm px-space-md py-1 rounded-full border border-border-subtle shadow-md flex items-center gap-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-label-sm text-label-sm font-semibold text-text-primary">
                  Available for Hire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
