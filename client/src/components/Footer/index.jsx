import "./footer.css";
import mtkLogo from "../../../public/assets/images/mtk.png";

export default function Footer() {
    return (
        <div className="w-[100vw] h-[25vh] bg-blue-100 relative overflow-hidden mx-auto ">
    <div className="footer-thang flex flex-row items-center mx-20 mt-16">
            <p className="text-xs text-center flex-1">
                SchedulEd whose registered office is at Miami, Florida (“SchedulEd", “we”, “our” or “us”), 
                acting as data controller, is committed to protecting and respecting your privacy. 
                This notice is designed to tell you about our practices regarding the collection, 
                use and disclosure of information that you may provide via this website or our mobile applications.
            </p>
            <br />
        <img src={mtkLogo} className='h-48 w-48'></img>
        <p className="text-xs text-center flex-1">
            Mandatory information required to register for the service we provide on our Platforms or to access other services provided by us, 
            including your name, email address, and a password. Some of these fields are mandatory. 
            SchedulEd will not be able to provide you with the services offered on our Platforms if the required information 
            is not provided, consequently you will not be able to register for a user account on our Platforms.
        </p>
    </div>
    </div>
    );
}
