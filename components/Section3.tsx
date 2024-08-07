import React, { ReactNode, useRef } from 'react';
import styles from '@/app/page.module.css';
import Link from "next/link";
import reactStringReplace from 'react-string-replace';
import { useScroll, motion } from "framer-motion";
import { data } from "@/constans/data";

const Item = ({ children, color }: { children?: ReactNode, color?: string }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["end end", "start start"]
    })
    return (
        <article className={`${styles.section3} ${color}_bg`}>
            <div className={styles.section3_progress} ref={container}>
                <figure className="progress">
                    <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="indicator"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                </figure>
            </div>
            <div className={styles.section3_content}>
                {children}
            </div>
        </article>
    );
}
const Section3 = () => {
    return (
        <section>
            {data.map((item, index) => {
                const description = item.description.includes('포트폴리오')
                    ? reactStringReplace(item.description, '*포트폴리오*', (match, i) => (
                        <Link href='https://diiver.kr/Portfolio-all' target='_blank'>포트폴리오</Link>
                    ))
                    : item.description;
                return (
                    <Item color={item.color}>
                        <h4 className={index % 2 === 0 ? styles.right : ''}>
                            <span>{item.title}</span>
                        </h4>
                        <div className={styles.section3_content_images}>
                            {item.images.map((img, i) => (
                                <div
                                    style={{ width: `calc(100% / ${item.images.length})` }}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.35 }}
                                        src={`/images/${img}`}
                                        alt={img.split('.')[0]}
                                    />
                                </div>
                            ))}
                        </div>
                        <p>{description}</p>
                    </Item>
                )
            })}
        </section>
    );
};

export default Section3;