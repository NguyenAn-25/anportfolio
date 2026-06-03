import Button from './Button';
import PcScreen from './PcScreen';
import github from "@/assets/svg/Github.svg";
import screen from "@/assets/svg/PcScreen.svg"
import TechTag from './TechTag';

type Props = {
    path: string;
    title: string;
    content: string;
    tech: string[];
}

function Project({ path, title, content, tech }: Props) {
    return (
        <div className="flex flex-col gap-20 items-center py-8 w-full px-8 h-fit border-2 border-accent lg:flex-row">
            <PcScreen path={path}></PcScreen>
            {/* <div className='w-48 h-0.5 bg-text'></div> */}
            <div className='flex flex-col gap-5'>
                <div className="text-text text-2xl font-bold text-center lg:text-start md:text-3xl">
                    {title}
                </div>
                <div className='space-y-2'>
                    {content.split('\n').map((c) => (
                        <div className="text-text text-justify flex items-start gap-2">
                            <span className="text-accent text-2xl select-none">•</span>

                            {/* Phần nội dung chữ */}
                            <span className="flex-1">{c}</span>
                        </div>
                    ))}
                </div>
                <div className='flex gap-2 justify-center lg:justify-start'>
                    {
                        tech.map(item => (
                            <TechTag content={item}></TechTag>
                        ))
                    }
                </div>

                <div className="flex gap-2 justify-center lg:justify-start">
                    <Button path={github} content="repo"></Button>
                    <Button path={screen} content="demo"></Button>
                </div>
            </div>
        </div>
    )
}
export default Project;