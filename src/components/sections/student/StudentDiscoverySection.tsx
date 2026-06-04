import { Brain, Compass, Gamepad2, Map } from "lucide-react";
import { Container } from "../../common/Container";

const discoveryCards = [
  {
    title: "Kendini Tanı",
    text: "İlgi alanlarını, değerlerini ve güçlü yönlerini kısa görevlerle görünür hale getir.",
    icon: Brain
  },
  {
    title: "Bölümleri Keşfet",
    text: "Sana uygun üniversite bölümlerini anlaşılır karşılaştırmalarla incele.",
    icon: Compass
  },
  {
    title: "Rozetler Kazan",
    text: "Her tamamlanan adım kariyer haritanda yeni bir alanın açılmasını sağlar.",
    icon: Gamepad2
  },
  {
    title: "Yol Haritanı Kur",
    text: "Bugünkü hedeflerinden üniversite seçimine kadar net bir aksiyon planı oluştur.",
    icon: Map
  }
];

export const StudentDiscoverySection = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="student-discovery-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="student-discovery-title" className="section-title">
            Kafandaki Soruları <span className="text-primary">Haritaya Dönüştür</span>
          </h2>
          <p className="body-copy-lg mx-auto mt-5 max-w-2xl">
            StuMap Student, karar vermeyi tek bir teste sıkıştırmaz; seni adım
            adım tanıyan eğlenceli bir keşif deneyimi sunar.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {discoveryCards.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="flex h-full min-h-[17rem] flex-col rounded-[1.75rem] border border-[#D9DDFE] bg-white p-6 shadow-[0_18px_44px_rgba(6,27,78,0.07)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(6,27,78,0.11)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-8 ring-primary/5">
                <Icon className="h-7 w-7" strokeWidth={2.25} />
              </div>
              <h3 className="mt-7 text-xl font-extrabold leading-tight text-dark">
                {title}
              </h3>
              <p className="mt-4 text-base font-medium leading-7 text-dark/62">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
