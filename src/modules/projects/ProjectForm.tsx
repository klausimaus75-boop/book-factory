import type { FormEvent } from "react";
import type { ProjectFormValues, ProjectValidationErrors } from "./types";

interface ProjectFormProps {
  values: ProjectFormValues;
  errors: ProjectValidationErrors;
  submitLabel: string;
  onChange: (values: ProjectFormValues) => void;
  onSubmit: () => void;
}

export function ProjectForm({ values, errors, submitLabel, onChange, onSubmit }: ProjectFormProps) {
  function updateField(field: keyof ProjectFormValues, value: string) {
    onChange({ ...values, [field]: value });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate>
      <Field label="Projekttitel" error={errors.title}>
        <input value={values.title} onChange={(event) => updateField("title", event.target.value)} />
      </Field>

      <Field label="Buchart" error={errors.bookType}>
        <select value={values.bookType} onChange={(event) => updateField("bookType", event.target.value)}>
          <option>Kinderbuch</option>
        </select>
      </Field>

      <Field label="Thema" error={errors.topic}>
        <input value={values.topic} onChange={(event) => updateField("topic", event.target.value)} />
      </Field>

      <Field label="Zielgruppe" error={errors.targetAudience}>
        <input
          value={values.targetAudience}
          onChange={(event) => updateField("targetAudience", event.target.value)}
          placeholder="z. B. Vorschulkinder"
        />
      </Field>

      <Field label="Altersspanne" error={errors.ageRange}>
        <input
          value={values.ageRange}
          onChange={(event) => updateField("ageRange", event.target.value)}
          placeholder="z. B. 4-6 Jahre"
        />
      </Field>

      <Field label="Sprache" error={errors.language}>
        <input value={values.language} onChange={(event) => updateField("language", event.target.value)} />
      </Field>

      <Field label="Buchformat" error={errors.bookFormat}>
        <input
          value={values.bookFormat}
          onChange={(event) => updateField("bookFormat", event.target.value)}
        />
      </Field>

      <Field label="Seitenzahl" error={errors.pageCount}>
        <input
          type="number"
          min="1"
          value={values.pageCount}
          onChange={(event) => updateField("pageCount", event.target.value)}
        />
      </Field>

      <Field label="Erzählperspektive" error={errors.narrativePerspective}>
        <input
          value={values.narrativePerspective}
          onChange={(event) => updateField("narrativePerspective", event.target.value)}
        />
      </Field>

      <Field label="Stil und Ton" error={errors.styleAndTone} wide>
        <textarea
          value={values.styleAndTone}
          onChange={(event) => updateField("styleAndTone", event.target.value)}
          rows={4}
        />
      </Field>

      <div className="form-actions">
        <button className="button primary" type="submit">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  wide,
  children
}: {
  label: string;
  error?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={wide ? "field wide" : "field"}>
      <span>{label}</span>
      {children}
      {error ? <small className="field-error">{error}</small> : null}
    </label>
  );
}
