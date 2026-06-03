type Props = {
    path: string,
    link?: string
}
function RoundButton({ path, link }: Props) {
    return (
        <a href={link} target="_blank" className="w-12 h-12 rounded-full bg-text flex justify-center items-center hover:bg-accent active:bg-accent cursor-pointer">
            <div className="w-8 h-8 flex justify-center"> 
                <img src={path} alt="" className="select-none"/>
            </div>
        </a>
    )
}

export default RoundButton