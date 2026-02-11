type Props = {
    path: string;
    content: string;
}

function SkillTag({path, content}: Props){
    return (
        <div className="rounded-full border-3 border-accent flex px-4 py-2 hover:bg-accent active:bg-accent cursor-pointer gap-2">
            <div className="w-6 h-6 select-none">
                <img src={path} alt="" />
            </div>
            <div className="text-text select-none">
                {content}
            </div>
        </div>
    )
}

export default SkillTag;