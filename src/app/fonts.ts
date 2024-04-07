
import { DM_Serif_Display } from 'next/font/google'
import { Raleway } from 'next/font/google'

export const dmSerifDisplay = DM_Serif_Display({ weight: '400', display: 'swap', subsets: ['latin'], variable: '--font-display' })
export const raleway = Raleway({ display: 'swap', subsets: ['latin'], variable: '--font-body' })
