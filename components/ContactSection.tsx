export default function ContactSection() {
  return (
    <section className="w-full py-space-xl lg:py-24" id="hubungi-saya">
      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin">
        <div className="rounded-2xl bg-text-primary text-bg-primary p-space-lg sm:p-space-xl shadow-xl relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-primary-container/30 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mb-space-xl space-y-space-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container/20 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              <span className="material-symbols-outlined text-sm">connect_without_contact</span>
              <span>Mulai Kolaborasi</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-bg-primary font-bold tracking-tight">
              Mari Berkolaborasi untuk Mendukung Kelancaran Operasional Tim Anda.
            </h2>
            <p className="font-body-lg text-body-lg text-tertiary-fixed leading-relaxed">
              Terbuka untuk posisi Executive Administrator, Data Administrator, Operations Specialist, serta proyek manajemen operasional strategis di wilayah Jabodetabek maupun kerja jarak jauh (remote).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md relative z-10">
            <div className="p-space-md rounded-xl bg-card-surface/5 border border-white/10 hover:bg-card-surface/10 transition-colors flex flex-col justify-between">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="w-9 h-9 rounded-lg bg-surface-container/20 flex items-center justify-center text-secondary-fixed">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </span>
                <span className="font-label-md text-label-md text-secondary-fixed font-semibold">
                  Domisili
                </span>
              </div>
              <div>
                <p className="font-title-md text-title-md text-bg-primary font-bold">
                  Bekasi, Indonesia
                </p>
                <span className="font-body-sm text-body-sm text-tertiary-fixed">
                  Kode Pos: 17564
                </span>
              </div>
            </div>
            <a
              className="p-space-md rounded-xl bg-card-surface/5 border border-white/10 hover:bg-card-surface/15 hover:border-secondary-fixed transition-all group flex flex-col justify-between"
              href="mailto:muflihasobrina4@gmail.com"
            >
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="w-9 h-9 rounded-lg bg-surface-container/20 flex items-center justify-center text-secondary-fixed group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </span>
                  <span className="font-label-md text-label-md text-secondary-fixed font-semibold">
                    Email
                  </span>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed group-hover:text-bg-primary text-sm transition-transform group-hover:translate-x-0.5">
                  open_in_new
                </span>
              </div>
              <div>
                <p className="font-body-md text-body-md text-bg-primary font-bold truncate">
                  muflihasobrina4@gmail.com
                </p>
                <span className="font-body-sm text-body-sm text-tertiary-fixed">
                  Respon Cepat 24 Jam
                </span>
              </div>
            </a>
            <a
              className="p-space-md rounded-xl bg-card-surface/5 border border-white/10 hover:bg-card-surface/15 hover:border-secondary-fixed transition-all group flex flex-col justify-between"
              href="https://wa.me/6283174540095"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="w-9 h-9 rounded-lg bg-surface-container/20 flex items-center justify-center text-secondary-fixed group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </span>
                  <span className="font-label-md text-label-md text-secondary-fixed font-semibold">
                    WhatsApp / Tel
                  </span>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed group-hover:text-bg-primary text-sm transition-transform group-hover:translate-x-0.5">
                  open_in_new
                </span>
              </div>
              <div>
                <p className="font-title-md text-title-md text-bg-primary font-bold">
                  +62 831-7454-0095
                </p>
                <span className="font-body-sm text-body-sm text-tertiary-fixed">
                  Percakapan Langsung
                </span>
              </div>
            </a>
            <a
              className="p-space-md rounded-xl bg-card-surface/5 border border-white/10 hover:bg-card-surface/15 hover:border-secondary-fixed transition-all group flex flex-col justify-between"
              href="https://linkedin.com/in/mufliha-sobrina-syah"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="w-9 h-9 rounded-lg bg-surface-container/20 flex items-center justify-center text-secondary-fixed group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.44a1.62 1.62 0 0 0-1.62 1.62c0 .89.73 1.62 1.62 1.62s1.62-.73 1.62-1.62c0-.89-.73-1.62-1.62-1.62Z" />
                    </svg>
                  </span>
                  <span className="font-label-md text-label-md text-secondary-fixed font-semibold">
                    LinkedIn
                  </span>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed group-hover:text-bg-primary text-sm transition-transform group-hover:translate-x-0.5">
                  open_in_new
                </span>
              </div>
              <div>
                <p className="font-title-md text-title-md text-bg-primary font-bold">
                  mufliha-sobrina-syah
                </p>
                <span className="font-body-sm text-body-sm text-tertiary-fixed">
                  Jejaring Profesional
                </span>
              </div>
            </a>
          </div>
          <div className="mt-space-lg pt-space-lg border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <span className="font-body-sm text-body-sm text-tertiary-fixed text-center sm:text-left">
              Salinan resume lengkap, portofolio dokumen terstruktur, dan surat rekomendasi tersedia berdasarkan permintaan.
            </span>
            <div className="flex items-center gap-space-sm shrink-0">
              <a
                className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:bg-secondary-fixed transition-colors shadow-sm"
                href="mailto:muflihasobrina4@gmail.com?subject=Undangan%20Interview%20-%20Mufliha%20Sobrina%20Syah"
              >
                <span className="material-symbols-outlined text-lg">outgoing_mail</span>
                <span>Kirim Penawaran Kerja</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
