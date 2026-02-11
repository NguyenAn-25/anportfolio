import iconsgu from "@/assets/png/LogoSGU.png"
function Education() {
    return (
        <div className="flex flex-col items-center gap-4 md:gap-8">
            <div className="text-accent font-black text-2xl md:text-4xl">Educations</div>
            <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="w-24">
                    <img src={iconsgu} alt="" />
                </div>
                <div className="text-text text-center md:text-2xl md:text-left">
                    <span className="font-black">Saigon University</span> <br/>
                    Engineer of Information Technology <br/>
                    September 2023 – February 2028 <br/>
                </div>
            </div>
        </div>
    );
}

export default Education