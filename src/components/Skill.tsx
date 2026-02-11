import SkillTag from "@/ui/SkillTag";
import csharp from "@/assets/svg/Csharp.svg";
import java from "@/assets/svg/Java.svg";
import javascript from "@/assets/svg/JavaScript.svg";
import nestjs from "@/assets/svg/NestJS.svg";
import git from "@/assets/svg/Git.svg";
import vscode from "@/assets/svg/Vscode.svg"


function Skill() {
    const listSkill = [
        { path: csharp, content: "CSharp" },
        { path: java, content: "Java" },
        { path: javascript, content: "JavaScript" },
        { path: nestjs, content: "NestJS" },
        { path: csharp, content: "CSharp" },
        { path: java, content: "Java" },
        { path: javascript, content: "JavaScript" },
        { path: nestjs, content: "NestJS" },
        { path: csharp, content: "CSharp" },
        { path: java, content: "Java" },
        { path: javascript, content: "JavaScript" },
        { path: nestjs, content: "NestJS" },
    ];
    const listTool = [
        { path: git, content: "Git" },
        { path: vscode, content: "Vs Code" },
    ];

    return (
        <div className="flex flex-col items-center gap-10 md:gap-20">
            <div className="flex flex-col items-center gap-4">
                <div className="text-text text-2xl font-black md:text-4xl">Technical <span className="text-accent">Skills</span></div>
                <div className="flex gap-4 flex-wrap justify-center p-8">
                    {listSkill.map(item => (<SkillTag path={item.path} content={item.content}></SkillTag>))}
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="text-text text-2xl font-black md:text-4xl"><span className="text-accent">Tools</span> I Use</div>
                <div className="flex gap-4 flex-wrap justify-center">
                    {listTool.map(item => (<SkillTag path={item.path} content={item.content}></SkillTag>))}
                </div>
            </div>

        </div>

    )
}

export default Skill;