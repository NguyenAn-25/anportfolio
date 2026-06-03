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
        <div className="flex gap-20 items-center py-8 w-full px-8 h-fit border-2 border-accent">
            <PcScreen path={path}></PcScreen>
            {/* <div className='w-48 h-0.5 bg-text'></div> */}
            <div className='flex flex-col gap-5'>
                <div className="text-text text-3xl font-bold">
                    {title}
                </div>
                <div>
                    {content.split('\n').map((c) => (
                        <div className="text-text text-justify">
                            {c}
                        </div>
                    ))}
                </div>
                <div className='flex gap-2'>
                    {
                        tech.map(item => (
                            <TechTag content={item}></TechTag>
                        ))
                    }
                </div>

                <div className="flex gap-2">
                    <Button path={github} content="repo"></Button>
                    <Button path={screen} content="demo"></Button>
                </div>
            </div>
        </div>
    )
}
export default Project;