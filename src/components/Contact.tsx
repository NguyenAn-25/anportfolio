import RoundButton from "@/ui/RoundButton";
import github from "@/assets/svg/Github.svg";
import facebook from "@/assets/svg/BlackFaceBook.svg";
import mail from "@/assets/svg/BlackMail.svg";

function Contact() {
    const linkGithub = "https://github.com/NguyenAn-25";
    const linkFaceBook = "https://www.facebook.com/nguyen.an.976752";
    const linkGmail = "https://mail.google.com/mail/?view=cm&fs=1&to=nguyenan21062005ne@gmail.com";
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-text text-2xl font-black"><span className="text-accent">Find Me</span> On</div>
            <div className="text-text">feel free to connect with me</div>
            <div className="flex gap-4">
                <RoundButton path={github} link={linkGithub}></RoundButton>
                <RoundButton path={facebook} link={linkFaceBook}></RoundButton>
                <RoundButton path={mail} link={linkGmail}></RoundButton>
            </div>
        </div>
    );
}
export default Contact