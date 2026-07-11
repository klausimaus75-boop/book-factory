import { checklistGroups } from "../data/courseData";
import { getChecklistProgress, toggleValue } from "../lib/progress";
import { useCourseProgress } from "../hooks/useCourseState";

export function ChecklistsPage() {
  const [progress, setProgress] = useCourseProgress();

  function toggleItem(id: string) {
    setProgress({ ...progress, completedChecklistItems: toggleValue(progress.completedChecklistItems, id) });
  }

  return (
    <section className="section-block">
      <div className="page-title-row">
        <div><h1>Checklisten</h1><p>Zentrale Prüfpunkte für dein Buchprojekt.</p></div>
        <strong className="progress-badge">{getChecklistProgress(progress)}%</strong>
      </div>
      <div className="checklist-grid">
        {checklistGroups.map((group) => (
          <article className="panel" key={group.id}>
            <h2>{group.title}</h2>
            {group.items.map((item, index) => {
              const id = `${group.id}-${index}`;
              return (
                <label className="check-row" key={id}>
                  <input checked={progress.completedChecklistItems.includes(id)} onChange={() => toggleItem(id)} type="checkbox" />
                  <span>{item}</span>
                </label>
              );
            })}
          </article>
        ))}
      </div>
    </section>
  );
}
