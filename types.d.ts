type ApiSuccess = {
  message: string
}
type ApiError = {
  message: string,
  error: string
}

type SheetArray = [
  createdAt:Date
]

type ParticipationSheetData = Omit<Participation, 'files'> & 
  { 
    filename:string
  }

type ParticipationSheetArray = SheetArray &[
  joke:string,
  email:string,
  guild:string,
  filename:string,
  isFuksi:boolean
]
