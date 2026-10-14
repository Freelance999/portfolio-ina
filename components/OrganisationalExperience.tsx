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
    <section className="w-full py-space-xl bg-bg-surface/40" id="organisasi">
      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin">
        <div className="max-w-2xl mb-space-lg space-y-space-xs">
          <div className="inline-flex items-center gap-1 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-base">groups</span>
            <span>Leadership Track</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold">
            Pengalaman Organisasi &amp; Kepemimpinan
          </h2>
          <p className="font-body-md text-body-md text-text-secondary">
            Pengalaman kepengurusan aktif dalam merancang tata kelola administrasi kegiatan, proposal, dan sinergi tim.
          </p>
        </div>
        <div className="bg-card-surface rounded-xl border-y border-r border-border-subtle border-l-4 border-l-primary-container shadow-sm hover:shadow-md transition-shadow p-space-md sm:p-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md border-b border-border-subtle mb-space-lg">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  Divisi Kewirausahaan
                </span>
                <span className="text-text-secondary text-sm font-semibold">• 2 Tahun Periode</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-text-primary font-bold">
                Deputy of Entrepreneurship Division
              </h3>
              <p className="font-title-md text-title-md text-primary font-medium">
                Himpunan Mahasiswa Manajemen
              </p>
            </div>
            <div className="flex items-center gap-2 text-text-secondary font-label-md text-label-md bg-bg-surface px-4 py-2 rounded-full border border-border-subtle self-start lg:self-auto shrink-0">
              <span className="material-symbols-outlined text-primary-container text-lg">date_range</span>
              <span>Oktober 2022 – Oktober 2024</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {highlights.map((item) => (
              <div
                key={item.icon}
                className="flex items-start gap-space-sm p-3.5 rounded-lg bg-bg-primary/70 border border-border-subtle/80 hover:bg-bg-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary-container shrink-0 mt-0.5">
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
