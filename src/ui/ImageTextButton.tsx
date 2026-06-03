type Props = {
    imagePath: string;
    content: string;
    path: string;
}
function ImageTextButton({imagePath ,content, path}: Props){
    return(
        <a href={path} className="cursor-pointer flex justify-center gap-2 rounded py-2 text-accent">
            <div className="w-3 flex justify-center">
                <img src={imagePath} className="select-none" />
            </div>
            <div className="select-none">{content}</div>
        </a>
    )
}

export default ImageTextButton;