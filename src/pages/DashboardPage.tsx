import { Link } from "react-router-dom";
import { allLessons, courseModules } from "../data/courseData";
import { getCourseProgress, getModuleProgress, getLessonTasks } from "../lib/progress";
import { useCourseProgress } from "../hooks/useCourseState";

export function DashboardPage() {
  const [progress] = useCourseProgress();
  const currentLesson = allLessons.find((lesson) => !progress.completedLessons.includes(lesson.id)) ?? allLessons[0];
  const currentModule = courseModules.find((module) => module.id === currentLesson.moduleId) ?? courseModules[0];
  const requiredTasks = getLessonTasks(currentLesson.id);
  const completedRequiredTasks = requiredTasks.filter((taskId) => progress.completedTasks.includes(taskId)).length;

  return (
    <section className="dashboard-page guided-dashboard">
      <div className="course-topline">
        <h1>Dein nächster Schritt</h1>
        <div className="progress-mini">
          <span>Dein Fortschritt</span>
          <strong>{getCourseProgress(progress)}%</strong>
          <i><b style={{ width: `${getCourseProgress(progress)}%` }} /></i>
        </div>
      </div>

      <div className="dashboard-focus">
        <section className="panel next-step-panel">
          <span className="eyebrow">Modul {currentModule.moduleNumber}</span>
          <h2>{currentModule.title}</h2>
          <p>{currentModule.description}</p>
          <ul className="compact-list">
            <li>{currentLesson.title}</li>
            <li>{currentLesson.learningGoal}</li>
            <li>{completedRequiredTasks} von {requiredTasks.length} Pflichtaufgaben erledigt</li>
          </ul>
          <Link className="button primary" to={`/lesson/${currentLesson.id}`}>
            Weiterarbeiten
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="panel task-panel">
          <h2>Deine Aufgaben</h2>
          {currentLesson.tasks.map((task, index) => {
            const taskId = requiredTasks[index];
            const done = progress.completedTasks.includes(taskId);
            return (
              <div className={done ? "task-row done" : "task-row"} key={taskId}>
                <span>{done ? "✓" : "○"}</span>
                <strong>{task}</strong>
                <small>{index === 0 ? "15 Min." : "20 Min."}</small>
              </div>
            );
          })}
        </section>
      </div>

      <section className="journey-rail dashboard-journey" aria-label="Deine 18 Module">
        {courseModules.map((module) => {
          const moduleProgress = getModuleProgress(module.id, progress);
          const active = module.id === currentModule.id;
          const done = moduleProgress === 100;
          return (
            <Link className={done ? "journey-node done" : active ? "journey-node active" : "journey-node"} key={module.id} to={`/module/${module.id}`}>
              <span>{done ? "✓" : module.moduleNumber}</span>
              <strong>{module.title}</strong>
            </Link>
          );
        })}
      </section>
    </section>
  );
}
