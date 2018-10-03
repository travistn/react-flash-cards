import queryString from './query-string'

const hash = {
  parse(string) {
    const [path, query] = string.split('?')
    return {
      path: path.slice(1) || '',
      params: queryString.parse(query)
    }
  },
  stringify({ path, params }) {
    return '#' + path + queryString.stringify(params)
  }
}

export default hash
