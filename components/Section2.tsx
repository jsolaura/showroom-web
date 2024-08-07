import { useState } from "react";
import styles from "@/app/page.module.css";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import { motion, MotionValue, useTransform } from "framer-motion";
import LeftImage from "@/public/images/section2_1.jpeg";
import RightImage from "@/public/images/section2_2.jpeg";

interface IHoverItem {
    index: number | null;
    isHovered: boolean;
}
interface IImages {
    src: string | StaticImageData;
    alt: string;

}
const imageArr: IImages[] = [
    {
        src: LeftImage,
        alt: 'Image1',
    },
    {
        src: RightImage,
        alt: 'Image2',
    },
]
const Section2 = ({scrollYProgress}: { scrollYProgress: MotionValue<number> }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
    const [hoverItem, setHoverItem] = useState<IHoverItem>({
        index: null,
        isHovered: false,
    })
    const handleMouseEnter = (i: number) => {
        setHoverItem({
            index: i,
            isHovered: true
        })
    }
    const handleMouseLeave = () => {
        setHoverItem({
            index: null,
            isHovered: false,
        })
    }
    return (
        <motion.div style={{ scale, rotate }} className={styles.section2}>
            <h1>DiiVER 쇼룸. "DiiVE POINT"</h1>
            <div className={styles.section2_info}>
                <p>
                    DiiVER는 유무형의 서비스를 모두 제공하고 있습니다.
                    우리 브랜드에 딱 맞는 굿즈를 직접 제작하는 과정에서 이 굿즈가 세상에 나오기까지 수많은 무형의 솔루션을 제공하기 때문인데요.
                    고객이 원하는 굿즈에 대해 상담하고 기획하는 준비 단계를 거쳐,
                    디자인 솔루션부터 배송과 스토어 운영 대행 등 다양한 무형의 서비스까지 전부 함께하게 됩니다.
                </p>
                <p>
                    DiiVER는 이 특색을 이용하여 굿즈 중심 솔루션을 넘어 공간과 디자인 등 실체감을 주는 '보이는 브랜딩' 솔루션으로 서비스를 확장했습니다.
                </p>
            </div>
            <div className={styles.section2_images}>
                {imageArr.map((img, i) => (
                    <Image
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                        src={img.src}
                        alt={img.alt}
                        className={hoverItem.index === null ? styles.default : hoverItem.index === i && hoverItem.isHovered ? styles.hovering : styles.noHovering}
                    />
                ))}
            </div>
            <span className={`${styles.caption} caption`}>DiiVER 쇼룸 : (좌)문, (우)다이빙대</span>
            <div className={styles.section2_info}>
                <p>
                    DiiVER에게 쇼룸이란 고객과 교감하며 최적의 솔루션을 제안하는 시작점입니다.<br/>
                    DiiVER의 고객이라면 누구나 <Link href='https://diiver.kr/SHOW-ROOM' target='_blank'>예약</Link> 을 통해 쇼룸에 방문할 수 있으며,
                    DiiVER의 전문적인 솔루션을 직접 경험하고 다양한 결과물을 만들 수 있거든요.
                </p>
                <p>그럼 지금부터 DiiVER의 브랜드 쇼룸, DiiVE Point가 어떻게 구성되어 있는지 소개해 드리겠습니다.</p>
            </div>
        </motion.div>
    )
}
export default Section2;
