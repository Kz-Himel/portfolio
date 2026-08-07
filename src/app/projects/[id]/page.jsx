import ProjectDetailPage from "@/components/ProjectDetailPage";

export const metadata = {
  title: "Project · Case Study | Kz Himel",
  description: "In-depth case study of a production project.",
};

export default function ProjectDetailRoute({ params }) {
  return <ProjectDetailPage params={params} />;
}
