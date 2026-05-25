import { Quote } from "lucide-react";
import { Container } from "../../common/Container";

interface Testimonial {
  quote: string;
  studentName: string;
  studentRole: string;
}

interface TestimonialQuoteCardProps {
  testimonial: Testimonial;
}

const testimonial: Testimonial = {
  quote:
    "Stumap sayesinde hangi alanlara daha yatkın olduğumu fark ettim. Kariyer hedeflerimi daha net belirledim ve önümdeki adımları güvenle planlamaya başladım.",
  studentName: "Elif Yılmaz",
  studentRole: "12. Sınıf Öğrencisi"
};

const TestimonialQuoteCard = ({
  testimonial: review
}: TestimonialQuoteCardProps) => {
  return (
    <figure className="testimonial-card mx-auto max-w-4xl">
      <Quote
        className="h-11 w-11 text-primary sm:h-12 sm:w-12"
        strokeWidth={2.4}
        aria-hidden="true"
      />

      <blockquote className="mt-5">
        <p className="text-lg font-semibold leading-8 text-dark sm:text-xl sm:leading-9 lg:text-[22px]">
          {review.quote}
        </p>
      </blockquote>

      <figcaption className="mt-7 border-t border-primaryLight pt-5">
        <p className="text-lg font-extrabold leading-tight text-dark">
          {review.studentName}
        </p>
        <p className="mt-1 text-base font-medium leading-7 text-dark/55">
          {review.studentRole}
        </p>
      </figcaption>
    </figure>
  );
};

export const TestimonialSection = () => {
  return (
    <section
      className="page-section section-blue overflow-hidden"
      aria-labelledby="testimonial-title"
    >
      <Container>
        <h2 id="testimonial-title" className="sr-only">
          Öğrenci deneyimi
        </h2>

        <TestimonialQuoteCard testimonial={testimonial} />
      </Container>
    </section>
  );
};
