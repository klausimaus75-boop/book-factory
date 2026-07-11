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
  const moduleLessons = module.lessons;
  const currentIndex = moduleLessons.findIndex((item) => item.id === activeLesson.id);
  const lessonIndex = allLessons.findIndex((item) => item.id === activeLesson.id);
  const nextLesson = moduleLessons[currentIndex + 1] ?? allLessons[lessonIndex + 1];
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
    <section className="lesson-layout">
      <aside className="lesson-nav panel">
        <h2><span>{module.moduleNumber}</span><span>{module.title}</span></h2>
        {module.lessons.map((item) => (
          <Link className={item.id === lesson.id ? "side-link active" : "side-link"} key={item.id} to={`/lesson/${item.id}`}>
            {item.lessonNumber} {item.title}
          </Link>
        ))}
      </aside>

      <article className="lesson-main panel">
        <span className="eyebrow">{lesson.lessonNumber} · {lesson.estimatedDuration}</span>
        <h1>{lesson.title}</h1>
        <h2>Lernziel</h2>
        <p>{lesson.learningGoal}</p>
        <div className="video-box">Videobereich · {lesson.video.title} · {lesson.video.duration}</div>
        {lesson.contentSections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <section>
          <h2>Schritt-für-Schritt-Anleitung</h2>
          <ol>{lesson.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
        <section>
          <h2>Praxisbeispiele</h2>
          <ul>{lesson.examples.map((example) => <li key={example}>{example}</li>)}</ul>
        </section>
        <section>
          <h2>Downloads</h2>
          <div className="download-list">{lesson.downloads.map((download) => <span key={download.title}>{download.title}</span>)}</div>
        </section>
        <section>
          <h2>Quiz</h2>
          {lesson.quiz.map((question) => <p key={question.question}><strong>{question.question}</strong><br />Richtige Antwort: {question.answer}</p>)}
        </section>
      </article>

      <aside className="lesson-tasks panel">
        <h2>Aufgaben</h2>
        {lesson.tasks.map((task, index) => {
          const taskId = taskIds[index];
          return (
            <label className="check-row" key={taskId}>
              <input checked={progress.completedTasks.includes(taskId)} onChange={() => toggleTask(taskId)} type="checkbox" />
              <span>{task}</span>
            </label>
          );
        })}
        <p className="muted">{lesson.completionRequirement}</p>
        <button className="button primary" disabled={!completeAllowed} onClick={completeLesson} type="button">
          Lektion abschließen
        </button>
        {nextLesson ? <Link className="button secondary" to={`/lesson/${nextLesson.id}`}>Nächste Lektion</Link> : <Link className="button secondary" to="/fortschritt">Zum Fortschritt</Link>}
      </aside>
    </section>
  );
}
