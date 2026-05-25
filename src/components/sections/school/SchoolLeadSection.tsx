import { FormEvent, useId, useState } from "react";
import { SchoolSectionHeader } from "./SchoolSectionHeader";
import { Container } from "../../common/Container";

interface FormValues {
  institutionName: string;
  contactInfo: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdwaljj";

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

const initialValues: FormValues = {
  institutionName: "",
  contactInfo: ""
};

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

export const SchoolLeadSection = () => {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (currentValues: FormValues) => {
    const nextErrors: FormErrors = {};

    if (!currentValues.institutionName.trim()) {
      nextErrors.institutionName = "Kurum adı zorunludur.";
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
          kurum_adi: values.institutionName.trim(),
          iletisim_bilgisi: values.contactInfo.trim(),
          _subject: "StuMap School bilgi talebi"
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
      className="bg-white pt-8 sm:pt-12 lg:pt-16"
      aria-labelledby="school-lead-title"
    >
      <div className="rounded-t-[2.5rem] bg-cta-purple py-20 sm:rounded-t-[3.5rem] sm:py-24 lg:py-28">
        <Container>
          <SchoolSectionHeader
            titleId="school-lead-title"
            eyebrow="Kurumunuz için"
            title="StuMap School'u Keşfedin"
            description="Rehberlik süreçlerinizi dijitalleştirmek ve kurumunuza özel çözümü öğrenmek için bilgilerinizi bırakın."
            inverted
          />

          <form
            className="mx-auto mt-10 w-full max-w-2xl rounded-[2rem] bg-white p-6 shadow-[0_28px_80px_rgba(6,27,78,0.24)] sm:mt-12 sm:p-8 lg:p-10"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <LeadInput
                id={`${formId}-institution-name`}
                label="Kurum Adı"
                name="institutionName"
                value={values.institutionName}
                placeholder="Kurum adınızı yazın"
                error={errors.institutionName}
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
              {isLoading ? "Gönderiliyor..." : "Bilgi Al"}
            </button>

            {isSubmitted && (
              <p
                className="mt-5 rounded-2xl bg-success/10 px-4 py-3 text-center text-sm font-bold text-success"
                role="status"
              >
                Teşekkürler, ekibimiz en kısa sürede sizinle iletişime geçecek.
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
      </div>
    </section>
  );
};
