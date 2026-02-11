type Props = {
    path: string
};

function PcScreen({path}: Props) {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="w-48 h-32 border border-text rounded">
                <img src={path} className="w-full h-full"/>
            </div>
            <div className="w-4 h-6  bg-text rounded">
            </div>
            <div className="w-32 h-2 bg-text rounded-b">
            </div>
        </div>
    );
}
export default PcScreen;