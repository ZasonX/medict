export class KeyBlockEntry {
  id: number
  record_start_offset: number
  record_end_offset: number
  keyword: string
  key_block_idx: number

  static createFrom(source: Record<string, unknown> = {}) {
    return new KeyBlockEntry(source)
  }

  constructor(source: Record<string, unknown> = {}) {
    if ('string' === typeof source) source = JSON.parse(source)
    this.id = source['id'] as number
    this.record_start_offset = source['record_start_offset'] as number
    this.record_end_offset = source['record_end_offset'] as number
    this.keyword = source['keyword'] as string
    this.key_block_idx = source['key_block_idx'] as number
  }
}

export class PlainDictionaryItem {
  id: string
  name: string
  path: string

  static createFrom(source: Record<string, unknown> = {}) {
    return new PlainDictionaryItem(source)
  }

  constructor(source: Record<string, unknown> = {}) {
    if ('string' === typeof source) source = JSON.parse(source)
    this.id = source['id'] as string
    this.name = source['name'] as string
    this.path = source['path'] as string
  }
}

export class Resp {
  data: unknown
  err: string
  code: number

  static createFrom(source: Record<string, unknown> = {}) {
    return new Resp(source)
  }

  constructor(source: Record<string, unknown> = {}) {
    if ('string' === typeof source) source = JSON.parse(source)
    this.data = source['data']
    this.err = source['err'] as string
    this.code = source['code'] as number
  }
}

export default {
  KeyBlockEntry,
  PlainDictionaryItem,
  Resp,
}