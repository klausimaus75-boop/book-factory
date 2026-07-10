import { useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ProjectForm } from "./ProjectForm";
import { createProject, emptyProjectFormValues, projectToFormValues, updateProjectFromForm } from "./projectFactory";
import { hasValidationErrors, validateProjectForm } from "./projectValidation";
import type { ProjectFormValues, ProjectValidationErrors } from "./types";
import { useProjects } from "./useProjects";

interface ProjectFormPageProps {
  mode: "create" | "edit";
}

export function ProjectFormPage({ mode }: ProjectFormPageProps) {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { getProject, saveProject } = useProjects();
  const existingProject = projectId ? getProject(projectId) : undefined;
  const initialValues = useMemo(
    () => (mode === "edit" && existingProject ? projectToFormValues(existingProject) : emptyProjectFormValues),
    [existingProject, mode]
  );
  const [values, setValues] = useState<ProjectFormValues>(initialValues);
  const [errors, setErrors] = useState<ProjectValidationErrors>({});

  if (mode === "edit" && projectId && !existingProject) {
    return <Navigate to="/" replace />;
  }

  function submitForm() {
    const nextErrors = validateProjectForm(values);
    setErrors(nextErrors);

    if (hasValidationErrors(nextErrors)) {
      return;
    }

    const project =
      mode === "edit" && existingProject
        ? updateProjectFromForm(existingProject, values)
        : createProject(values);

    saveProject(project);
    navigate(`/projects/${project.id}`);
  }

  return (
    <section className="stack">
      <div className="page-header">
        <div>
          <p className="section-label">{mode === "edit" ? "Projekt bearbeiten" : "Neues Projekt"}</p>
          <h1>{mode === "edit" ? "Projektdaten bearbeiten" : "Buchprojekt erstellen"}</h1>
          <p>Fülle die Grunddaten sorgfältig aus. Diese Angaben steuern später den gesamten Workflow.</p>
        </div>
        <Link className="button secondary" to={existingProject ? `/projects/${existingProject.id}` : "/"}>
          Abbrechen
        </Link>
      </div>

      <ProjectForm
        values={values}
        errors={errors}
        submitLabel={mode === "edit" ? "Änderungen speichern" : "Projekt speichern"}
        onChange={setValues}
        onSubmit={submitForm}
      />
    </section>
  );
}
