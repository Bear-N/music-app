import React from 'react'
import "./Cover.css"
import "../../../assets/css/iconfont.css"

export default function Cover(props) {
    const { toBack,
        lyric,
        index,
        songid,
        inner,
        outer,
        audio,
        isplay,
        tstart,
        tmove,
        tend,
        playAudio } = props

    return (
        <div className="cover">
            <div className="back iconfont icon-fanhui" onClick={() => toBack()}></div>
            <div className={isplay ? "start rotate" : "start"}></div>
            <div className="mask" onClick={() => playAudio()}></div>
            <div className={isplay ? "coverimg act" : "coverimg"}>
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg" alt="" />
            </div>

            <audio ref={audio} src={`https://music.163.com/song/media/outer/url?id=${songid}.mp3`}></audio>

            <div className="outer"
                ref={outer}
                onTouchStart={(e) => tstart(e)}
                onTouchMove={(e) => tmove(e)}
                onTouchEnd={(e) => tend(e)}
            >
                <div className="inner" ref={inner}>
                    {
                        lyric.map((item, idx) => {
                            return <div key={item.id} className={idx === index ? "item select" : 'item'}>{item.lyc}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
