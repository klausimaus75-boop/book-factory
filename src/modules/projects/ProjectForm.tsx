import { useState, type FormEvent } from "react";
import { projectSelectOptions } from "./projectOptions";
import {
  applyAgeRangeRecommendations,
  applyBookTypeRecommendations,
  getRecommendedProjectOptions
} from "./projectRecommendations";
import type { ProjectFormValues, ProjectValidationErrors } from "./types";

interface ProjectFormProps {
  values: ProjectFormValues;
  errors: ProjectValidationErrors;
  submitLabel: string;
  onChange: (values: ProjectFormValues) => void;
  onSubmit: () => void;
}

export function ProjectForm({ values, errors, submitLabel, onChange, onSubmit }: ProjectFormProps) {
  const recommendedOptions = getRecommendedProjectOptions(values);

  function updateField(field: keyof ProjectFormValues, value: string) {
    if (field === "bookType") {
      onChange(applyBookTypeRecommendations(values, value));
      return;
    }

    if (field === "ageRange") {
      onChange(applyAgeRangeRecommendations(values, value));
      return;
    }

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
        <SelectField value={values.bookType} options={projectSelectOptions.bookType} onChange={(value) => updateField("bookType", value)} />
      </Field>

      <Field label="Thema" error={errors.topic}>
        <SelectField value={values.topic} options={recommendedOptions.topic} onChange={(value) => updateField("topic", value)} />
      </Field>

      <Field label="Zielgruppe" error={errors.targetAudience}>
        <SelectField value={values.targetAudience} options={recommendedOptions.targetAudience} onChange={(value) => updateField("targetAudience", value)} />
      </Field>

      <Field label="Altersspanne" error={errors.ageRange}>
        <SelectField value={values.ageRange} options={projectSelectOptions.ageRange} onChange={(value) => updateField("ageRange", value)} />
      </Field>

      <Field label="Sprache" error={errors.language}>
        <SelectField value={values.language} options={projectSelectOptions.language} onChange={(value) => updateField("language", value)} />
      </Field>

      <Field label="Buchformat" error={errors.bookFormat}>
        <SelectField value={values.bookFormat} options={recommendedOptions.bookFormat} onChange={(value) => updateField("bookFormat", value)} />
      </Field>

      <Field label="Beschnittzugabe Innenblock" error={errors.interiorBleed}>
        <SelectField value={values.interiorBleed} options={projectSelectOptions.interiorBleed} onChange={(value) => updateField("interiorBleed", value)} />
      </Field>

      <Field label="Seitenzahl" error={errors.pageCount}>
        <SelectField value={values.pageCount} options={recommendedOptions.pageCount} onChange={(value) => updateField("pageCount", value)} />
      </Field>

      <Field label="Erzählperspektive" error={errors.narrativePerspective}>
        <SelectField
          value={values.narrativePerspective}
          options={recommendedOptions.narrativePerspective}
          onChange={(value) => updateField("narrativePerspective", value)}
        />
      </Field>

      <Field label="Stil und Ton" error={errors.styleAndTone} wide>
        <SelectField
          value={values.styleAndTone}
          options={recommendedOptions.styleAndTone}
          allowCustom
          onChange={(value) => updateField("styleAndTone", value)}
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

function SelectField({
  value,
  options,
  allowCustom = false,
  onChange
}: {
  value: string;
  options: string[];
  allowCustom?: boolean;
  onChange: (value: string) => void;
}) {
  const isKnownOption = options.includes(value);
  const [customValue, setCustomValue] = useState(allowCustom && !isKnownOption ? value : "");

  function handleSelectChange(nextValue: string) {
    setCustomValue("");
    onChange(nextValue);
  }

  function handleCustomChange(nextValue: string) {
    setCustomValue(nextValue);
    onChange(nextValue);
  }

  return (
    <>
      <select
        value={isKnownOption ? value : ""}
        onChange={(event) => handleSelectChange(event.target.value)}
      >
        <option value="">Bitte auswählen</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {allowCustom ? (
        <input
          className="custom-select-input"
          value={customValue}
          placeholder="Eigene Angabe eintragen"
          onChange={(event) => handleCustomChange(event.target.value)}
        />
      ) : null}
    </>
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
