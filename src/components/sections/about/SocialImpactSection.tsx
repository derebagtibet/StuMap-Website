import { Rocket } from "lucide-react";
import { Container } from "../../common/Container";

export const SocialImpactSection = () => {
  return (
    <section
      className="bg-[#EEF1FF] py-20 sm:py-24 lg:py-28"
      aria-labelledby="social-impact-title"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#7B2CF5] shadow-[0_16px_40px_rgba(123,44,245,0.16)] ring-8 ring-white/45"
            aria-hidden="true"
          >
            <Rocket className="h-8 w-8" strokeWidth={2.25} />
          </div>

          <h2
            id="social-impact-title"
            className="text-3xl font-extrabold leading-tight tracking-normal text-[#081B4B] sm:text-4xl lg:text-h2"
          >
            Bir Sosyal Girişim Serüveni
          </h2>

          <article className="mx-auto mt-10 max-w-[56rem] rounded-[2rem] border border-[#D9DDFE] bg-white px-6 py-8 shadow-[0_22px_58px_rgba(8,27,75,0.08)] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="mx-auto max-w-[48rem] space-y-6 text-center text-base font-medium leading-8 text-[#081B4B]/68 sm:text-lg sm:leading-9">
              <p>
                Üniversite koridorlarında başlayan bu yolculuk, bugün binlerce
                öğrenciye dokunan bir sosyal girişime dönüştü. Stumap olarak,
                eğitimde fırsat eşitliğini savunuyor ve her gencin doğru
                kariyer adımlarını atması için oyunlaştırma tabanlı teknolojiler
                geliştiriyoruz.
              </p>

              <p>
                Biz sadece bir platform değiliz; öğrencilerin ilgi alanlarını,
                yeteneklerini ve değerlerini keşfettikleri dijital bir pusulayız.
                Karmaşık akademik verileri, herkes için anlaşılır ve
                uygulanabilir yol haritalarına dönüştürüyoruz.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};
