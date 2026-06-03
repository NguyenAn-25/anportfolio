import SkillTag from "@/ui/SkillTag";
import java from "@/assets/svg/Java.svg";
import javascript from "@/assets/svg/JavaScript.svg";
import typescript from "@/assets/svg/Typescript.svg";
import nestjs from "@/assets/svg/NestJS.svg";
import react from "@/assets/svg/React.svg";
import php from "@/assets/svg/PHP.svg";
import mysql from "@/assets/svg/MySQL.svg";
import postgreSQL from "@/assets/svg/PostgreSQL.svg";

import git from "@/assets/svg/Git.svg";
import vscode from "@/assets/svg/Vscode.svg"


function Skill() {
    const listSkill = [
        { path: java, content: "Java" },
        { path: javascript, content: "JavaScript" },
        { path: typescript, content: "TypeScript" },
        { path: nestjs, content: "NestJS" },
        { path: react, content: "React" },
        { path: php, content: "PHP" },
        { path: mysql, content: "MySQL" },
        { path: postgreSQL, content: "PostgreSQL" },
        
    ];
    const listTool = [
        { path: git, content: "Git" },
        { path: vscode, content: "Vs Code" },
        { path: postgreSQL, content: "pgAdmin" },
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