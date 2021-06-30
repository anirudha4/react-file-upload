import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import music from '../assets/music.svg'
import video from '../assets/video.svg'
import photo from '../assets/images.svg'
import code from '../assets/code.svg'
import doc from '../assets/doc.svg'
import unknown from '../assets/unknown.svg'
import cross from '../assets/cross.svg'


export default function File({file}) {
    const docs = ['pdf', 'doc','docx', 'txt']
    const photos = ['jpg',  'jpeg', 'png', 'svg']
    const videos = ['mp4', 'mkv']
    const musics = ['mp3', 'm4a', 'm4A']
    const codes = ['html', 'css', 'c', 'cpp', 'c++', 'java', 'py', 'js']
    const [icon, setIcon] = useState('')
    useEffect(() => {
        const temp = file.name.split('.')
        const ext = temp[temp.length - 1]
        if(docs.includes(ext)) {
            setIcon(doc)
        }
        else if(photos.includes(ext)) {
            setIcon(photo)
        }
        else if(videos.includes(ext)) {
            setIcon(video)
        }
        else if(codes.includes(ext)) {
            setIcon(code)
        }
        else if(musics.includes(ext)) {
            setIcon(music)
        }
        else {
            setIcon(unknown)
        }
    }, [])
    return (
        <motion.div 
            whileTap={{scale: 0.95}} 
            className="file" 
            initial={{opacity: 0, scale: .5, width: 0}} 
            animate={{opacity: 1, scale: 1, width: '100%'}}
        >
            <div className="left">
                <div className="icon">
                    <img src={icon} alt="" />
                </div>
                <div className="file-desc">
                    <div className="name" title={file.name}>
                        {file.name}
                    </div>
                    <div className="size">
                        {Math.ceil(file.size / 1024)} KB
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
