import Project from "@/ui/Project"

import web2 from "@/assets/png/web2.png"
import java from "@/assets/png/java.jpg"
import cnpm from "@/assets/png/cnpm.png"

function Projects() {
    const projects = [
        {
            path: web2,
            title: "Online Quiz Management System",
            content: `This project develops an online quiz management system designed to streamline the examination process in educational institutions. 
            The system provides robust features for instructors to manage students by class and subject, as well as to design, schedule, and generate customized quiz exams. 
            A core highlight of the application is its integration of strict anti-cheating mechanisms to ensure exam integrity and academic honesty. 
            Students can securely log in, take their assigned quizzes, and receive instant feedback upon submission. 
            By digitalizing the testing process and reinforcing strict security, the system significantly improves administrative efficiency, reduces manual grading effort, and guarantees a fair, accurate evaluation environment.`,
            tech: ["React", "Laravel", "MySQL"],
            links: [{
                type: "github",
                content: "FE",
                link: "https://github.com/JacketHeee/QLThiTracNghiem"
            },
            {
                type: "github",
                content: "BE",
                link: "https://github.com/NguyenAn-25/QuanLyThiTracNghiem_Backend"
            },
            {
                type: "demo",
                content: "demo"
            }]
        },
        {
            path: java,
            title: "Bookstore management system",
            content: `This project develops a bookstore management system designed to support the daily operations of a book retail store. 
            The system provides features for managing books, categories, authors, publishers, customers, employees, and sales invoices. 
            It allows staff to easily perform tasks such as adding, updating, searching, and deleting book records, as well as processing sales transactions and tracking inventory. 
            The application also includes role-based access control to manage user permissions for different functions. 
            By organizing data efficiently and automating common tasks, the system helps improve store management efficiency, reduce manual work, and ensure accurate record keeping.`,
            tech: ["Java", "MySQL"],
            links: [{
                type: "github",
                content: "repo",
                link: "https://github.com/JacketHeee/QLCuaHangBanSach"
            },
            {
                type: "demo",
                content: "demo"
            }]
        },
        {
            path: cnpm,
            title: "Smart Restaurant Management & QR Ordering System",
            content: `This project develops a smart restaurant management system designed to digitalize and optimize the dining experience. 
            The system allows customers to simply scan a QR code at their table to access a web-based menu and place orders directly from their devices. 
            On the backend, kitchen staff and chefs can instantly receive, track, and manage orders through an interactive dashboard to prepare and serve dishes efficiently. 
            By streamlining the communication between guests and the kitchen, the application significantly enhances customer experience, reduces waiting times, and minimizes order errors. 
            The system also provides management tools for tracking revenue, monitoring inventory, and optimizing restaurant operations.`,
            tech: ["React", "NestJS", "PostgreSQL"],
            links: [{
                type: "github",
                content: "repo",
                link: "https://github.com/JacketHeee/HT_QLNhaHang"
            },
            {
                type: "demo",
                content: "demo"
            }]
        },
    ];
    return (
        <div className="flex flex-col items-center gap-8 w-full md:px-10">
            <div className="text-2xl font-black text-accent md:text-4xl">Projects</div>
            <div className="flex flex-col items-center gap-8 w-full">
                {projects.map(item => (<Project path={item.path} title={item.title} content={item.content} tech={item.tech} links={item.links}></Project>))}
            </div>
        </div>
    )
}
export default Projects