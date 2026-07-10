import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { DashboardPage } from "./modules/projects/DashboardPage";
import { ProjectFormPage } from "./modules/projects/ProjectFormPage";
import { ProjectDetailPage } from "./modules/projects/ProjectDetailPage";
import { BookConceptStepPage } from "./modules/projects/BookConceptStepPage";
import { SettingsPage } from "./modules/settings/SettingsPage";
import { AuthGate } from "./modules/auth/AuthGate";

export function App() {
  return (
    <AuthGate>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/projects/new" element={<ProjectFormPage mode="create" />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/projects/:projectId/edit" element={<ProjectFormPage mode="edit" />} />
          <Route path="/projects/:projectId/steps/book-concept" element={<BookConceptStepPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </AuthGate>
  );
}
