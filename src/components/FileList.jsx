import React, { useContext } from 'react'
import { FileContext } from '../store/Files'
import File from './File'
export default function FileList() {
    const {files} = useContext(FileContext)
    return (
        <div className="files-container">
            {files.length ? (
                <>
                    {files.map((file, idx) => (
                            <File key={idx} file={file} />
                    ))}
                </>
            ) : (
                <>
                </>
            )}
        </div>
    )
}
