import React from 'react'
import "./Newsong.css"
import "../../../../assets/css/iconfont.css"

export default function Newsong(props) {
    const { newsong, toSong } = props
    return (
        <div className="newsong">
            <div className="title">最新音乐</div>
            <ul>
                {
                    newsong.map(item => {
                        return (
                            <li key={item.id} onClick={() => { toSong(item.id) }}>
                                <div className="left">
                                    <div className="name">{item.name}</div>
                                    <div className="bottom">
                                        <span>SQ</span>
                                        <span>
                                            {item.song.artists.map((i, index) => {
                                                if (index === item.song.artists.length - 1) {
                                                    return i.name + "-" + item.name
                                                } else {
                                                    return i.name + "/"
                                                }
                                            })}
                                        </span>
                                    </div>
                                </div>
                                <div className="right">
                                    <span className="iconfont icon-bofang"></span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
