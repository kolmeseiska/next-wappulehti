import React, { useReducer } from 'react'

enum FileDropActionKey {
  SET_IN_DROP_ZONE= 'SET_IN_DROP_ZONE',
  ADD_FILE_TO_LIST= 'ADD_FILE_TO_LIST',
  REMOVE_FILE_FROM_LIST= 'REMOVE_FILE_FROM_LIST'
}

type FileDropState = {
  inDropZone: boolean,
  files: File[]
}
type FileDropAction = 
  {type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: boolean} |
  {type: FileDropActionKey.ADD_FILE_TO_LIST, files: File[]} |
  {type: FileDropActionKey.REMOVE_FILE_FROM_LIST, filename:string}

const reducer = (state: FileDropState, action: FileDropAction) => {
  switch(action.type) {
    case FileDropActionKey.SET_IN_DROP_ZONE:
      return { ...state, inDropZone: action.inDropZone }
    case FileDropActionKey.ADD_FILE_TO_LIST:
      if(action.files == null) {
        return state
      }
      return { ...state, files: state.files.concat(action.files) }
    case FileDropActionKey.REMOVE_FILE_FROM_LIST:
      return { ...state, files: state.files.filter(file => file.name !== action.filename) }
    default:
      return state
  }
}

const useFileDrop =() => {
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    files: [],
  })

  const handleDragEnter = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch({ type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: true })
  }

  const handleDragLeave = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()

    dispatch({ type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: false })
  }

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()

    event.dataTransfer.dropEffect = 'copy'
    dispatch({ type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: true })
  }

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const target = event.target as HTMLInputElement
    if(!target.files) {
      return
    }
    let files =  Array.from(target.files)

    if (files?.length) {
      const existingFiles = data.files.map(file => file.name)
      files = files.filter(file => !existingFiles.includes(file.name))

      dispatch({ type: FileDropActionKey.ADD_FILE_TO_LIST, files })
      dispatch({ type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: false })
    }
  }

  const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement
    if(!target.files) {
      return
    }
    let files = Array.from(target.files)
    if (files?.length ) {
      const existingFiles = data.files.map(file => file.name)
      files = files.filter(file => !existingFiles.includes(file.name))

      dispatch({ type: FileDropActionKey.ADD_FILE_TO_LIST, files })
    }
  }

  const handleRemoveFile = (filename:string) => {
    dispatch({ type: FileDropActionKey.REMOVE_FILE_FROM_LIST, filename })
  }
  return {
    data,
    dispatch,
    inputProps: {  
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      handleFileSelect,
      handleRemoveFile
    }
  }
}

export default useFileDrop
