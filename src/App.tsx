import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { LandingPage } from "./pages/LandingPage";
import { CoursePage } from "./pages/CoursePage";
import { DashboardPage } from "./pages/DashboardPage";
import { ModulesPage } from "./pages/ModulesPage";
import { ModulePage } from "./pages/ModulePage";
import { LessonPage } from "./pages/LessonPage";
import { ProjectPage } from "./pages/ProjectPage";
import { TemplatesPage } from "./pages/TemplatesPage";
import { ChecklistsPage } from "./pages/ChecklistsPage";
import { ProgressPage } from "./pages/ProgressPage";
import { AuthPage } from "./pages/AuthPage";
import { CheckoutPage } from "./pages/CheckoutPage";

export function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kurs" element={<CoursePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/module" element={<ModulesPage />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/projekt" element={<ProjectPage />} />
        <Route path="/vorlagen" element={<TemplatesPage />} />
        <Route path="/checklisten" element={<ChecklistsPage />} />
        <Route path="/fortschritt" element={<ProgressPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/registrieren" element={<AuthPage mode="register" />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
