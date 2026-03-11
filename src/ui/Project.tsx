import Button from './Button';
import PcScreen from './PcScreen';
import github from "@/assets/svg/Github.svg";
import screen from "@/assets/svg/PcScreen.svg"

type Props = {
    path: string;
    content: string;
}

function Project({ path, content }: Props) {
    return (
        <div className="flex gap-20 items-center py-8 w-full px-8 h-fit border-2 border-accent">
            <PcScreen path={path}></PcScreen>
            {/* <div className='w-48 h-0.5 bg-text'></div> */}
            <div className='flex flex-col gap-5'>
                    <div className="text-text text-justify">
                        {content}
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