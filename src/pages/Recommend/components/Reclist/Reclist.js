import React from 'react'
import "./Reclist.css"

export default function Reclist(props) {
    const { reclist,toListDetail } = props
    return (
        <div className="reclist">
            <div className="title">推荐歌单</div>
            <ul>
                {
                    reclist.map(item => {
                        return (
                            <li key={item.id} onClick={()=>toListDetail(item.id)}>
                                <img src={item.picUrl} alt="" />
                                <div className="des">{item.name}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
