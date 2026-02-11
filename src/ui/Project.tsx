import SimpleBar from 'simplebar-react';
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
        <div className="flex flex-col gap-4 items-center py-8 w-64 px-5 h-112 border-2 border-accent">
            <PcScreen path={path}></PcScreen>
            <div className='w-48 h-0.5 bg-text'></div>
            <SimpleBar style={{ maxHeight: 128 , width: 168}}>
                <div className="text-text text-justify">
                    {content}
                </div>
            </SimpleBar>
            <div className="flex gap-2">
                <Button path={github} content="repo"></Button>
                <Button path={screen} content="demo"></Button>
            </div>
        </div>
    )
}
export default Project;