import styles from "@/app/page.module.css";
import { PrevButton, NextButton, usePrevNextButtons } from '@/components/ui/EmblaCarouselArrowButton'
import { motion, MotionValue, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const Section1 = ({scrollYProgress}: { scrollYProgress: MotionValue<number> }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: true});
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <motion.div style={{scale, rotate}} className={styles.section1}>
            <h1>Welcome To 'DiiVE Point'</h1>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <iframe
                            className={styles.iframe}
                            src="https://www.youtube.com/embed/sACY-dsecGY?autoplay=1&mute=1&loop=1&controls=1"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        />
                    </div>
                    <div className="embla__slide">
                        <iframe
                            className={styles.iframe}
                            src="https://www.youtube.com/embed/uGhNueeuS7w?si=o_zMJP9iBneljT8O"
                            title="DiiVER 브랜드 쇼룸 'DiiVE Point' 공식 영상 (2)" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        />
                    </div>
                </div>
                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                </div>
            </div>
            <div className={styles.section1_div}>
                <motion.b
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span>Diving의 '뛰어들다'와</span> <br/>
                    <span>'Buddy System'을 담았습니다.</span>
                </motion.b>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    DiiVER는 스쿠버다이빙의 버디 시스템을 닮았습니다.<br/>
                    2인 1조로 짝을 지어 다이빙을 하는 것을 버디 시스템이라고 합니다.<br/>
                    여기서 버디는 다이빙을 준비하는 시점부터 마무리하는 순간까지<br/>
                    서로의 안전을 책임지고 돕는 코치이자 즐거움을 공유하는 파트너를 뜻합니다.<br/>
                    따라서, DiiVER 속 'ii'는 도전으로 뛰어들어<br/>
                    성공의 즐거움을 공유할 당신과 우리, Buddy를 말합니다.
                </motion.p>
            </div>
        </motion.div>
    )
}
export default Section1;
