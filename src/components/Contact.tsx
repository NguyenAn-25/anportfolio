import RoundButton from "@/ui/RoundButton";
import github from "@/assets/svg/Github.svg";
import facebook from "@/assets/svg/BlackFaceBook.svg";
import mail from "@/assets/svg/BlackMail.svg";

function Contact() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-text text-2xl font-black"><span className="text-accent">Find Me</span> On</div>
            <div className="text-text">feel free to connect with me</div>
            <div className="flex gap-4">
                <RoundButton path={github}></RoundButton>
                <RoundButton path={facebook}></RoundButton>
                <RoundButton path={mail}></RoundButton>
            </div>
        </div>
    );
}
export default Contact