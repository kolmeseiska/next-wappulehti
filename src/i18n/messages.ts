type MessageTree = { [key: string]: MessageTree | string | string[] }

const isPlainObject = (value: unknown): value is MessageTree =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

// `pages` is used both for full-page content (messages/app) and for shared
// content components like NoUpcomingEvents (messages/components), so a
// shallow merge would let one clobber the other - merge nested objects too.
const deepMerge = (a: MessageTree, b: MessageTree): MessageTree => {
  const result: MessageTree = { ...a }

  for (const key of Object.keys(b)) {
    const existing = result[key]
    const incoming = b[key]

    result[key] = isPlainObject(existing) && isPlainObject(incoming)
      ? deepMerge(existing, incoming)
      : incoming
  }

  return result
}

export const mergeMessages = (...trees: MessageTree[]): MessageTree =>
  trees.reduce((acc, tree) => deepMerge(acc, tree), {})
