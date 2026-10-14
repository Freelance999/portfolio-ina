export default function OrganisationalExperience() {
  const highlights = [
    {
      icon: "article",
      text: "Menyusun, mengelola, dan mengarsipkan dokumen administrasi kegiatan, termasuk notulen rapat, surat-menyurat, proposal, dan laporan pelaksanaan.",
    },
    {
      icon: "how_to_reg",
      text: "Mengelola administrasi kegiatan melalui pendataan peserta, verifikasi informasi, serta memastikan kelengkapan dokumen pendukung acara.",
    },
    {
      icon: "handshake",
      text: "Mengoordinasikan kebutuhan operasional dan teknis kegiatan dengan berkolaborasi bersama panitia untuk memastikan pelaksanaan acara berjalan sesuai rencana.",
    },
    {
      icon: "troubleshoot",
      text: "Melakukan monitoring pelaksanaan kegiatan, mengidentifikasi kendala operasional, serta berkoordinasi dengan tim dalam penyelesaian masalah guna menjaga efektivitas penyelenggaraan acara.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-bg-surface/40 scroll-mt-24" id="organisasi">
      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin">
        <div className="max-w-2xl mb-10 lg:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-base">groups</span>
            <span>Leadership Track</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight">
            Pengalaman Organisasi &amp; Kepemimpinan
          </h2>
          <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            Pengalaman kepengurusan aktif dalam merancang tata kelola administrasi kegiatan, proposal, dan sinergi tim.
          </p>
        </div>
        <div className="bg-card-surface rounded-2xl border-y border-r border-border-subtle border-l-4 border-l-primary-container shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border-subtle mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  Divisi Kewirausahaan
                </span>
                <span className="text-text-secondary text-sm font-medium">• 2 Tahun Periode</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-text-primary font-bold tracking-tight mb-1">
                Deputy of Entrepreneurship Division
              </h3>
              <p className="font-title-md text-title-md text-primary font-medium">
                Himpunan Mahasiswa Manajemen
              </p>
            </div>
            <div className="flex items-center gap-2 text-text-secondary font-label-md text-label-md bg-bg-surface px-4 py-2 rounded-full border border-border-subtle self-start lg:self-auto shrink-0 shadow-2xs">
              <span className="material-symbols-outlined text-primary-container text-lg">date_range</span>
              <span>Oktober 2022 – Oktober 2024</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item) => (
              <div
                key={item.icon}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-bg-primary/70 border border-border-subtle/80 hover:bg-bg-primary transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-primary-container shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">{item.icon}</span>
                </div>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
