import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { ROUTES } from "../constants/routes";

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <section className="page-section min-h-[calc(100vh-72px)]">
      <Container>
        <h1 className="section-title">{title}</h1>
        <Link
          to={ROUTES.HOME}
          className="btn-primary mt-6"
        >
          Ana sayfaya dön
        </Link>
      </Container>
    </section>
  );
};

export default PlaceholderPage;
