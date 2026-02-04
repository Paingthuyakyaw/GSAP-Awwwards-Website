import {navLinks} from "../constant";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);
export const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger : {
                trigger : "nav",
                start : "bottom top",
            }
        })

        navTween.fromTo("nav" , {
            backgroundColor : "transparent",
        } , {
            backgroundColor : "#00000050",
            backgroundFilter : "blur(10px)",
            duration : 1,
            ease : "power1.inOut"
        })
    } ,[])

    return (
        <nav>
            <div>
                <a href="#home" className={"flex itemce gap-2"}>
                    <img src={'/images/logo.png'} alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {
                        navLinks.map((navLink, i) => <li key={i}>{navLink.title}</li>)
                    }
                </ul>
            </div>
        </nav>
    );
};

