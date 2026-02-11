type Props = {
    path: string,
}
function RoundButton({ path }: Props) {
    return (
        <div className="w-12 h-12 rounded-full bg-text flex justify-center items-center hover:bg-accent active:bg-accent cursor-pointer">
            <div className="w-8 h-8 flex justify-center"> 
                <img src={path} alt="" className="select-none"/>
            </div>
        </div>
    )
}

export default RoundButton