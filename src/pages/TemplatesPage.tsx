import { resourceTemplates } from "../data/courseData";

export function TemplatesPage() {
  return (
    <section className="section-block">
      <h1>Vorlagenbibliothek</h1>
      <p className="lead">Strukturierte Ressourcen für Planung, Analyse, Upload und Vermarktung.</p>
      <div className="resource-grid">
        {resourceTemplates.map((template) => (
          <article className="panel" key={template.id}>
            <span className="eyebrow">{template.category}</span>
            <h2>{template.title}</h2>
            <p>{template.description}</p>
            <ul>{template.fields.map((field) => <li key={field}>{field}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
