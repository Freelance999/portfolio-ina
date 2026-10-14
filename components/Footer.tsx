"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Tentang Saya", id: "tentang" },
    { label: "Pengalaman Kerja", id: "pengalaman" },
    { label: "Kepemimpinan & Organisasi", id: "organisasi" },
    { label: "Keahlian Teknis & Bahasa", id: "keahlian" },
    { label: "Pendidikan & Sertifikasi", id: "pendidikan" },
  ];

  return (
    <footer className="w-full bg-text-primary text-bg-primary pt-16 sm:pt-20 pb-12 mt-16 lg:mt-24 scroll-mt-24" id="kontak">
      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          <div className="sm:col-span-1 md:col-span-5 lg:col-span-4 space-y-4">
            <h4 className="font-title-md text-title-md text-secondary-fixed font-semibold tracking-wide">
              Navigasi Portfolio
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-tertiary-fixed">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="hover:text-bg-primary transition-colors inline-block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-1 md:col-span-7 lg:col-span-6 space-y-4">
            <h4 className="font-title-md text-title-md text-secondary-fixed font-semibold tracking-wide">
              Kontak
            </h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-tertiary-fixed">
              <li>
                <a
                  href="mailto:muflihasobrina4@gmail.com"
                  className="hover:text-bg-primary transition-colors flex items-center gap-3 py-1"
                >
                  <span className="material-symbols-outlined text-lg text-secondary-fixed shrink-0">mail</span>
                  <span className="truncate">muflihasobrina4@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6283174540095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bg-primary transition-colors flex items-center gap-3 py-1"
                >
                  <span className="material-symbols-outlined text-lg text-secondary-fixed shrink-0">call</span>
                  <span>+62 831-7454-0095</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mufliha-sobrina-syah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bg-primary transition-colors flex items-center gap-3 py-1"
                >
                  <svg
                    className="w-4 h-4 text-secondary-fixed shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.44a1.62 1.62 0 0 0-1.62 1.62c0 .89.73 1.62 1.62 1.62s1.62-.73 1.62-1.62c0-.89-.73-1.62-1.62-1.62Z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li className="flex items-center gap-3 py-1 text-tertiary-fixed">
                <span className="material-symbols-outlined text-lg text-secondary-fixed shrink-0">location_on</span>
                <span>Bekasi, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-tertiary-fixed-dim font-body-sm text-body-sm">
          <p>© 2026 Mufliha Sobrina Syah</p>
          <p className="font-label-sm text-label-sm tracking-wide">
            Bekasi, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
