'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/app/page.module.css';
import Image from "next/image";
import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import MarkerImage from '@/public/images/marker.png';
import LogoImage from '@/public/images/logo-color.png';

export const KAKAO_API = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer,drawing&autoload=false`
const Section4 = () => {
    const position = { lat: 37.570945072991, lng: 126.93289413888 }
    const [scriptLoad, setScriptLoad] = useState<boolean>(false);
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = KAKAO_API;
        document.head.appendChild(script);
        script.addEventListener('load', () => {
            window.kakao.maps.load(() => {
                setScriptLoad(true);
            })
        })
    }, []);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('서울 서대문구 연희로25길 37 2층');
            alert('클립보드에 주소가 복사되었습니다.');
        } catch (err) {
            console.error('클립보드 복사 실패:', err);
        }
    }
    return (
        <>
        <Script src={KAKAO_API} strategy='beforeInteractive'/>
        <section className={`skyBlue_bg ${styles.section4}`}>
            <div className={styles.section4_info}>
                <h2><Image src={LogoImage} alt='Logo Image' width={200} height={77}/></h2>
                <h3>
                    굿즈에서 한발 더 나아가 실체하는 모든 것들에 대한 브랜딩을 제안합니다. <br/>
                    <span>쇼룸을 통해 <b>DiiVER</b>를 직접 경험해보세요.</span>
                </h3>
            </div>
            {scriptLoad &&
                <Map
                    className={styles.map}
                    center={position}
                    level={2}
                    zoomable={false}
                    draggable={false}
                >
                    <MapMarker
                        position={position}
                        onClick={copyToClipboard}
                        image={{
                            src: MarkerImage.src,
                            size: {
                                width: 40,
                                height: 40,
                            }
                        }}
                    />
                </Map>
            }
            <ul className={styles.section4_info_bottom}>
                <li><b>주소</b>: 서울특별시 서대문구 연희로25길 37, 2층 <span>(마커 클릭시 주소 복사)</span></li>
                <li><b>운영 시간</b>: 평일 09:00~18:00 (점심시간 12:00~13:00) / 대관 별도 문의</li>
                <li><b>방문 예약</b>: 상담 문의</li>
            </ul>
        </section>
        </>
    );
};

export default Section4;