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

