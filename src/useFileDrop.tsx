import React, { ChangeEvent, useReducer, useRef } from 'react'

import { supportedFileTypes } from './participation'

enum FileDropActionKey {
  SET_IN_DROP_ZONE = 'SET_IN_DROP_ZONE',
  ADD_FILE_TO_LIST = 'ADD_FILE_TO_LIST',
  SET_FILE_LIST = 'SET_FILE_LIST',
  REMOVE_FILE_FROM_LIST = 'REMOVE_FILE_FROM_LIST'
}

type FileDropState = {
  inDropZone: boolean,
  files: File[]
}
type FileDropAction =
  { type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: boolean } |
  { type: FileDropActionKey.ADD_FILE_TO_LIST, files: File[] } |
  { type: FileDropActionKey.SET_FILE_LIST, files: File[] } |
  { type: FileDropActionKey.REMOVE_FILE_FROM_LIST, filename: string }

const reducer = (state: FileDropState, action: FileDropAction) => {
  switch(action.type) {
    case FileDropActionKey.SET_IN_DROP_ZONE:
      return state.inDropZone === action.inDropZone
        ? state
        : { ...state, inDropZone: action.inDropZone }
    case FileDropActionKey.ADD_FILE_TO_LIST:
      if(action.files == null) {
        return state
      }
      return { ...state, files: state.files.concat(action.files) }
    case FileDropActionKey.SET_FILE_LIST:
      return { ...state, files: action.files }
    case FileDropActionKey.REMOVE_FILE_FROM_LIST:
      return { ...state, files: state.files.filter(file => file.name !== action.filename) }
    default:
      return state
  }
}

const useFileDrop = () => {
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    files: [],
  })

  const fileInputRef = useRef<HTMLInputElement>(null)
  const actionsRef = useRef({
    handleDragEnter: (event: React.DragEvent<HTMLElement>) => {
      event.preventDefault()
      event.stopPropagation()
      dispatch({ type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: true })
    },
    handleDragLeave: (event: React.DragEvent<HTMLElement>) => {
      event.preventDefault()
      event.stopPropagation()

      dispatch({ type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: false })
    },
    handleDragOver: (event: React.DragEvent<HTMLElement>) => {
      event.preventDefault()
      event.stopPropagation()

      event.dataTransfer.dropEffect = 'copy'
      dispatch({ type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: true })
    },
    handleDrop: (event: React.DragEvent<HTMLElement>) => {
      event.preventDefault()
      event.stopPropagation()

      const target = event.dataTransfer
      if(!target.files) {
        return
      }
      let files = Array.from(target.files)

      if(files?.length) {
        const existingFiles = data.files.map(file => file.name)
        files = files.filter(file => !existingFiles.includes(file.name) && supportedFileTypes.some(type => type === file.type))

        dispatch({ type: FileDropActionKey.ADD_FILE_TO_LIST, files })
        dispatch({ type: FileDropActionKey.SET_IN_DROP_ZONE, inDropZone: false })
      }
    },
    handleSelectFile: (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement
      if(!target.files) {
        return
      }
      let files = Array.from(target.files)
      if(files?.length) {
        const existingFiles = data.files.map(file => file.name)
        files = files.filter(file => !existingFiles.includes(file.name))
        dispatch({ type: FileDropActionKey.ADD_FILE_TO_LIST, files })
      }
    },
    handleRemoveFile: (filename: string) => {
      if(!fileInputRef.current?.files) {
        return null
      }
      const files = Array.from(fileInputRef.current.files)
      const dt = new DataTransfer()
      for(const file of files) {
        if(file.name === filename) {
          continue
        }
        dt.items.add(file)
      }
      fileInputRef.current.files = dt.files
      dispatch({ type: FileDropActionKey.REMOVE_FILE_FROM_LIST, filename })
    },
    handleClearFiles: () => {
      console.log('hmmm', fileInputRef.current?.files)
      console.dir(fileInputRef.current)
      if(!fileInputRef.current?.files) {
        return null
      }
      const dt = new DataTransfer()
      fileInputRef.current.files = dt.files
      dispatch({ type: FileDropActionKey.SET_FILE_LIST, files: [] })
    }
  })

  return {
    data,
    dispatch,
    actionsRef,
    fileInputRef,
    fileDropProps: {
      onDragEnter: actionsRef.current.handleDragEnter,
      onDragLeave: actionsRef.current.handleDragLeave,
      onDragOver: actionsRef.current.handleDragOver,
      onDrop: actionsRef.current.handleDrop
    }
  }
}

export default useFileDrop
