import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import AddFolderButton from './AddFolderButton'
import Navbar from './Navbar'
import Folder from './Folder'
import { useParams } from 'react-router-dom'
import FolderBreadcrumbs from './FolderBreadcrumbs'
import AddFileButton from './AddFileButton'
import File from './File'

export default function Dashboard() {
    const { folderId } = useParams()
    // const { state = {} } = useLocation()
    const { folder, childFolders, childFiles } = useFolder(folderId)
    // console.log(childFolders)

  return (
    <>
        <Container fluid>
            <Navbar />
        </Container>
        <Container fluid>
            <div className='d-flex align-items-center'>
                <FolderBreadcrumbs currentFolder={folder}/>
                <AddFileButton currentFolder={folder}/>
                <AddFolderButton currentFolder={folder}/>
            </div>

            {childFolders.length > 0 && (
                <div className='d-flex flex-wrap'>
                    {childFolders.map(childFolder => (
                        <div 
                            key={childFolder.id} 
                            style={{ maxWidth: '250px'}} 
                            className="p-2"
                        >
                            <Folder folder={childFolder} />
                        </div>
                    ))}
                </div>
            )}

            {childFolders.length > 0 && childFiles.length > 0 && <hr />}
            {childFiles.length > 0 && (
                <div className='d-flex flex-wrap'>
                    {childFiles.map(childFile => (
                        <div 
                            key={childFile.id} 
                            style={{ maxWidth: '250px'}} 
                            className="p-2"
                        >
                            <File file={childFile} />
                        </div>
                    ))}
                </div>
            )}
        </Container>
    </>
  )
}
