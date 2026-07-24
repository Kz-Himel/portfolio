import AllProjectsPage from "@/components/AllProjectsPage";

export const metadata = {
  title: "Projects | Kz Himel",
  description: "A collection of full-stack and frontend projects built by Kz Himel.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-10">
      <AllProjectsPage />
    </div>
  );
}