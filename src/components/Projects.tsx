import Project from "@/ui/Project"
import project1 from "@/assets/png/Project1.svg"
function Projects() {
    const projects = [
        {
            path: project1,
            content: "This is my first project This is my first project, this is my first project, this is my first project",
        },
        {
            path: project1,
            content: "This is my first project This is my first project, this is my first project, this is my first project, this is my first project, this is my first project",
        },
        {
            path: project1,
            content: "This is my first project This is my first project, this is my first project, this is my first project",
        },
    ];
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="text-2xl font-black text-accent md:text-4xl">Projects</div>
            <div className="flex flex-col items-center gap-8 md:flex-row">
                {projects.map(item => (<Project path={item.path} content={item.content}></Project>))}
            </div>
        </div>
    )
}
export default Projects