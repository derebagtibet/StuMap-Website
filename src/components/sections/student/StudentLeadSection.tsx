import { FormEvent, useId, useState } from "react";
import { Container } from "../../common/Container";

interface FormValues {
  fullName: string;
  contactInfo: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdwaljj";

const initialValues: FormValues = {
  fullName: "",
  contactInfo: ""
};

interface LeadInputProps {
  id: string;
  label: string;
  name: keyof FormValues;
  value: string;
  placeholder: string;
  error?: string;
  disabled: boolean;
  onChange: (field: keyof FormValues, value: string) => void;
}

const LeadInput = ({
  id,
  label,
  name,
  value,
  placeholder,
  error,
  disabled,
  onChange
}: LeadInputProps) => {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-extrabold leading-6 text-dark">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        className="mt-2 h-14 w-full rounded-2xl border border-[#D9DDFE] bg-white px-5 text-base font-medium text-dark outline-none transition duration-200 placeholder:text-dark/35 focus:border-primary focus:ring-4 focus:ring-primary/15 aria-[invalid=true]:border-error aria-[invalid=true]:focus:ring-error/15"
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        disabled={disabled}
        onChange={(event) => onChange(name, event.target.value)}
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm font-semibold text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export const StudentLeadSection = () => {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (currentValues: FormValues) => {
    const nextErrors: FormErrors = {};

    if (!currentValues.fullName.trim()) {
      nextErrors.fullName = "Ad soyad zorunludur.";
    }

    if (!currentValues.contactInfo.trim()) {
      nextErrors.contactInfo = "İletişim bilgisi zorunludur.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setIsSubmitted(false);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ad_soyad: values.fullName.trim(),
          iletisim_bilgisi: values.contactInfo.trim(),
          talep_turu: "StuMap Student",
          _subject: "StuMap Student üyelik talebi"
        })
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setIsSubmitted(true);
      setValues(initialValues);
    } catch {
      setSubmitError(
        "Bilgiler gönderilemedi. Lütfen kısa süre sonra tekrar deneyin."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value
    }));

    if (errors[field]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: undefined
      }));
    }
  };

  return (
    <section
      id="student-lead"
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="student-lead-title"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-normal text-primary">
            Öğrenciler için
          </p>
          <h2 id="student-lead-title" className="section-title mt-3">
            StuMap Student'a Katıl
          </h2>
          <p className="body-copy-lg mx-auto mt-5 max-w-2xl">
            Kariyer yolculuğunu birlikte başlatmak için bilgilerini bırak, ekibimiz
            en kısa sürede seninle iletişime geçsin.
          </p>
        </div>

        <form
          className="mx-auto mt-10 w-full max-w-2xl rounded-[2rem] border border-[#D9DDFE] bg-[#F7F8FC] p-6 shadow-[0_22px_60px_rgba(6,27,78,0.09)] sm:mt-12 sm:p-8 lg:p-10"
          action={FORMSPREE_ENDPOINT}
          method="POST"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <LeadInput
              id={`${formId}-full-name`}
              label="Ad Soyad"
              name="fullName"
              value={values.fullName}
              placeholder="Adınızı ve soyadınızı yazın"
              error={errors.fullName}
              disabled={isLoading}
              onChange={updateField}
            />

            <LeadInput
              id={`${formId}-contact-info`}
              label="İletişim Bilgisi"
              name="contactInfo"
              value={values.contactInfo}
              placeholder="Telefon veya e-posta adresi"
              error={errors.contactInfo}
              disabled={isLoading}
              onChange={updateField}
            />
          </div>

          <button
            type="submit"
            className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-accent px-6 text-center text-base font-extrabold text-white shadow-[0_16px_36px_rgba(255,138,0,0.32)] transition duration-200 ease-out hover:-translate-y-1 hover:bg-accentHover hover:shadow-[0_22px_46px_rgba(255,138,0,0.38)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Gönderiliyor..." : "Beni Arayın"}
          </button>

          {isSubmitted && (
            <p
              className="mt-5 rounded-2xl bg-success/10 px-4 py-3 text-center text-sm font-bold text-success"
              role="status"
            >
              Teşekkürler, ekibimiz en kısa sürede seninle iletişime geçecek.
            </p>
          )}

          {submitError && (
            <p
              className="mt-5 rounded-2xl bg-error/10 px-4 py-3 text-center text-sm font-bold text-error"
              role="alert"
            >
              {submitError}
            </p>
          )}
        </form>
      </Container>
    </section>
  );
};
