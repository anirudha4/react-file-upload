import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import dropIcon from '../dropicon.svg'
import { FileContext } from '../store/Files'
import { ADD_FILE } from '../store/Files'

export default function FileInput() {
    const { files, dispatch } = useContext(FileContext)

    const [isOver, setIsover] = useState(false)
    const dragOver = e => {
        e.preventDefault()
        setIsover(true)
    }
    const dragEnter = e => {
        e.preventDefault()
        setIsover(true)
    }
    const dragLeave = e => {
        e.preventDefault()
        setIsover(false)
    }
    const fileDrop = e => {
        e.preventDefault()
        const temp = e.dataTransfer.files;
        dispatch({type: ADD_FILE, payload: temp})
        setIsover(false)
    }
    return (
        <motion.div className="file-upload-container">
            <motion.label htmlFor="file" initial={{opacity: 0}} animate={{opacity: 1, scale: isOver ? .95 : 1}} className="fileChooseLabel"
               onDragOver={dragOver}
               onDragEnter={dragEnter}
               onDragLeave={dragLeave}
               onDrop={fileDrop}
               whileTap={{scale: 0.95}}
            >
                <img src={dropIcon} width="110px" alt="" />
                <motion.p animate={{scale: isOver ? 1.05 : 1}}>{isOver ? "Drop files" :"Drag and Drop Files"}</motion.p>
            </motion.label>
            <input onChange={e => dispatch({type: ADD_FILE, payload: e.target.files })} type="file" id="file" className="fileInput"/>
        </motion.div>
    )
}
