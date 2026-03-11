type Props = {
    content:string;
}
function LinkButton({content}: Props){
    return(
        <div className="cursor-pointer flex justify-center gap-2 rounded py-2 w-18 bg-accent hover:bg-hoverButton active:bg-hoverButton text-base">
            <div className="select-none">{content}</div>
        </div>
    )
}

export default LinkButton;