import { Link, Navigate, useParams } from "react-router-dom";
import { allLessons, courseModules } from "../data/courseData";
import { canCompleteLesson, getLessonTasks, toggleValue } from "../lib/progress";
import { useCourseProgress } from "../hooks/useCourseState";

export function LessonPage() {
  const { lessonId } = useParams();
  const [progress, setProgress] = useCourseProgress();
  const lesson = allLessons.find((item) => item.id === lessonId);

  if (!lesson) {
    return <Navigate to="/module" replace />;
  }

  const activeLesson = lesson;
  const module = courseModules.find((item) => item.id === activeLesson.moduleId)!;
  const lessonIndex = allLessons.findIndex((item) => item.id === activeLesson.id);
  const nextLesson = allLessons[lessonIndex + 1];
  const taskIds = getLessonTasks(activeLesson.id);
  const completeAllowed = canCompleteLesson(activeLesson.id, progress);

  function toggleTask(taskId: string) {
    setProgress({ ...progress, completedTasks: toggleValue(progress.completedTasks, taskId) });
  }

  function completeLesson() {
    if (!completeAllowed) {
      return;
    }
    setProgress({ ...progress, completedLessons: progress.completedLessons.includes(activeLesson.id) ? progress.completedLessons : [...progress.completedLessons, activeLesson.id] });
  }

  return (
    <section className="lesson-layout guided-lesson">
      <aside className="lesson-nav panel">
        <h2>Deine Reise</h2>
        {courseModules.map((item) => {
          const active = item.id === module.id;
          return (
            <Link className={active ? "side-link active" : "side-link"} key={item.id} to={`/module/${item.id}`}>
              <span>{item.moduleNumber}</span>
              {item.title}
            </Link>
          );
        })}
      </aside>

      <article className="lesson-main panel">
        <span className="eyebrow">Modul {module.moduleNumber} · Lektion {activeLesson.lessonNumber.split(".")[1]} von {module.lessons.length}</span>
        <h1>{activeLesson.title}</h1>
        <p>{activeLesson.learningGoal}</p>

        <section className="lesson-goal-box">
          <h2>Lernziel</h2>
          <p>{activeLesson.learningGoal}</p>
        </section>

        <section>
          <h2>Schritt für Schritt</h2>
          <ol className="step-list">{activeLesson.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>

        <div className="lesson-actions">
          <Link className="button secondary" to={`/module/${module.id}`}>Zurück</Link>
          {nextLesson ? <Link className="button primary" to={`/lesson/${nextLesson.id}`}>Weiter <span aria-hidden="true">→</span></Link> : <Link className="button primary" to="/fortschritt">Zum Fortschritt</Link>}
        </div>
      </article>

      <aside className="lesson-tasks panel">
        <h2>Deine Aufgabe</h2>
        <p>{activeLesson.completionRequirement}</p>
        {activeLesson.tasks.map((task, index) => {
          const taskId = taskIds[index];
          return (
            <label className="check-row" key={taskId}>
              <input checked={progress.completedTasks.includes(taskId)} onChange={() => toggleTask(taskId)} type="checkbox" />
              <span>{task}</span>
            </label>
          );
        })}
        <button className="button primary" disabled={!completeAllowed} onClick={completeLesson} type="button">
          Aufgabe erledigt
        </button>
      </aside>
    </section>
  );
}
