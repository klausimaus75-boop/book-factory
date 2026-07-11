import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { CourseDashboardPage } from "./modules/course/CourseDashboardPage";
import { CourseModulePage } from "./modules/course/CourseModulePage";

export function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<CourseDashboardPage />} />
        <Route path="/module/:moduleSlug" element={<CourseModulePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
