type Props = {
    content: string;
}

function TechTag({content}: Props){
    return (
        <div className="rounded-full bg-accent/50 border-accent flex px-3 py-1 hover:bg-accent active:bg-accent cursor-pointer gap-2">
            <div className="text-accent text-xs select-none">
                {content}
            </div>
        </div>
    )
}

export default TechTag;