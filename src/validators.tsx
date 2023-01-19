
import * as yup from 'yup'

const getTypeString = (type:string) => {
  switch(type) {
    case 'number':
      return 'numero'
    case 'boolean':
      return 'tosi/epätosi'
    case 'string':
      return 'tekstiä'
    case 'date':
      return 'päivämäärä'
    case 'object':
      return 'objekti'
    case 'array':
      return 'taulukko'
    default: 
      return 'tuntematon tyyppi'
  }
}

yup.setLocale({
  mixed: {
    default: '${path} on virheellinen',
    required: '${path} on pakollinen kenttä',
    oneOf: '${path} pitää olla jokin seuraavista: "${values}"',
    notOneOf: '${path} ei saa olla mikään seuraavista: "${values}"',
    notType: ({ path, type }:{path:string, type: string}) => `${path} pitää olla ${getTypeString(type)}`,
    defined: '${path} pitää olla määritetty'
  },
  number: {
    integer: '${path} pitää olla kokonaisluku',
    min: '${path} pitää olla vähintään ${min}',
    max: '${path} saa olla enintään ${max}',
    lessThan: '${path} pitää olla vähemmän kuin ${less}',
    moreThan: '${path} pitää olla enemmän kuin ${more}',
    positive: '${path} pitää olla positiivinen numero',
    negative: '${path} pitää olla negatiivinen numero'
  },
  string: {
    length: '${path} pitää olla ${length} merkkiä pitkä',
    min: '${path} pitää olla vähintään ${min} merkkiä pitkä',
    max: '${path} saa olla enintään ${max} merkkiä pitkä',
    matches: '${path} pitää olla seuraavaa muotoa: "${regex}"',
    email: '${path} pitää olla sähköpostimuotoa',
    url: '${path} pitää olla kelvollinen URL',
    uuid: '${path} pitää olla kelvollinen UUID',
    trim: '${path} ei saa alkaa tai päättyä välilyöntiin',
    lowercase: '${path} pitää olla pienillä kirjaimilla',
    uppercase: '${path} pitää olla isoilla kirjaimilla'
  },
  boolean: {
    isValue: '${path} pitää olla asetettu'
  },
  date: {},
  object: {
    noUnknown: '${path} sisältää virheellisiä avaimia: ${unknown}'
  },
  array: {
    min: '${path} pitää sisältää vähintään ${min} kohdetta',
    max: '${path} pitää sisältää enintään ${max} kohdetta'
  }
})

export const objectValidator = (schema = {}, label:string) => yup.object().label(label).shape(schema)

export const arrayValidator = (ofSchema = yup.mixed(), label:string) => yup.array().label(label).of(ofSchema)

export default yup
