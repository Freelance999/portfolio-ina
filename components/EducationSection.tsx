export default function EducationSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-bg-surface/40 scroll-mt-24" id="pendidikan">
      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin">
        <div className="max-w-2xl mb-10 lg:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-base">school</span>
            <span>Akademik &amp; Kualifikasi</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight">
            Pendidikan &amp; Sertifikasi
          </h2>
          <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            Landasan keilmuan tata kelola bisnis dan pembuktian kecakapan bahasa internasional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-card-surface rounded-2xl p-6 sm:p-8 border border-border-subtle shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-secondary-container/40 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">history_edu</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow-2xs">
                  Tahun 2025
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold tracking-tight mb-1.5">
                Bachelor of Management (S1 Manajemen)
              </h3>
              <p className="font-title-md text-title-md text-primary font-medium mb-3">
                Sekolah Tinggi Ilmu Ekonomi Indonesia Jakarta
              </p>
              <div className="flex items-center gap-2 text-text-secondary font-label-sm text-label-sm mb-5">
                <span className="material-symbols-outlined text-base text-primary-container">date_range</span>
                <span>September 2021 - Agustus 2025</span>
              </div>
              <p className="font-body-md text-body-md text-text-secondary leading-relaxed border-t border-border-subtle pt-4 sm:pt-5">
                Fokus mendalam pada Manajemen Operasional, Administrasi Bisnis, Tata Kelola Organisasi, dan Riset Analisis Data Kuantitatif untuk pengambilan keputusan strategis.
              </p>
            </div>
          </div>
          <div className="bg-card-surface rounded-2xl p-6 sm:p-8 border border-border-subtle shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-surface-container-high/40 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shadow-2xs">
                  <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow-2xs">
                  Tahun 2026
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold tracking-tight mb-1.5">
                TOEFL ITP
              </h3>
              <p className="font-title-md text-title-md text-primary font-medium mb-3">
                Penerbit: Sekolah Tinggi Ilmu Ekonomi Indonesia Jakarta
              </p>
              <div className="flex items-center gap-2 text-text-secondary font-label-sm text-label-sm mb-5">
                <span className="material-symbols-outlined text-base text-primary-container">verified</span>
                <span>Valid English Proficiency Assessment</span>
              </div>
              <p className="font-body-md text-body-md text-text-secondary leading-relaxed border-t border-border-subtle pt-4 sm:pt-5">
                Memvalidasi kompetensi bahasa Inggris dalam lingkup formal akademik dan profesional, meliputi pemahaman mendengarkan (Listening Comprehension), tata bahasa tulisan (Structure &amp; Written Expression), serta membaca dokumen kerja (Reading Comprehension).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
