import {useGSAP} from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import {ScrollTrigger} from  "gsap/ScrollTrigger"
import gsap from "gsap";

gsap.registerPlugin(SplitText,ScrollTrigger);
const Hero = () => {

   useGSAP(() => {



       const heroSplit = new SplitText(".title" , {type : "words, chars"} )
       const paraSplit = new SplitText(".subtitle" , {type : "lines"} )

       gsap.from(heroSplit.chars, {
           duration: 1,
           yPercent: 100,         // animate from 100px below
           // autoAlpha: 0,   // fade in from opacity: 0 and visibility: hidden
           stagger: 0.06,  // 0.05 seconds between each
           ease : "expo.out"
       });

       gsap.from(paraSplit.lines, {
           opacity : 0,
           yPercent: 100,
           duration : 1,
           stagger : 0.06,
           ease : "expo.out",
           delay : 0.5
       })

       gsap.timeline({
           scrollTrigger : {
               trigger : "#hero",
               start : "top top",
               end : "bottom top",
               scrub : true,

           }
       })
           .to(".left-leaf" , {y : -200} , 0)
           .to(".right-leaf" , {y : 200} , 0)

   } ,[])

    return (
        <section id={"hero"} className={"noisy"} >
            <h1 className={"title"}>MOJITO</h1>

            <img src={"/images/hero-left-leaf.png"} alt={"left leaf"} className={"left-leaf"} />
            <img src={"/images/hero-right-leaf.png"} alt={"right leaf"} className={"right-leaf"} />

            <div className={"body"} >
                <div className={"content"} >
                    <div className=" space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br/> of Summer
                        </p>
                    </div>

                    <div className={"view-cocktails"} >
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam facilis incidunt ipsam magni omnis quia quidem repudiandae sunt voluptas.</p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;