const queryString = {
  parse(string) {
    if (!string || string === '?') return {}
    return string
      .replace(/^\?/, '')
      .split('&')
      .map(pair => pair.split('='))
      .reduce((parsed, [ key, value ]) =>
        Object.assign(parsed, { [key]: value })
      , {})
  },
  stringify(object) {
    const keys = Object.keys(object)
    if (!keys.length) return ''
    return '?' + keys
      .map(key => `${key}=${object[key]}`)
      .join('&')
  }
}

export default queryString
