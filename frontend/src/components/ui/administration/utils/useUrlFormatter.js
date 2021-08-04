

export default function useFormatter() {

    const extractKeys = (url) => {
        let re = /(?<=:)\w+/g
        return url.match(re)
    }

    const assembleUrl = (url, values) => {
        let re = /:\w+/
        let newUrl = url

        for (let index in values) {
            newUrl = newUrl.replace(re, values[index].toString())
        }

        return newUrl
    }

    const createUrl = (url, object) => {
        let re = /:\w+/
        let newUrl = url
        let key = null
        let keys = extractKeys(url)

        for (let index in keys) {
            key = keys[index]
            newUrl = newUrl.replace(re, object[key].toString())
        }

        return newUrl
    }

    const extractKeyValues = (url, object) => {
        let re = /:\w+/
        let keys = extractKeys(url)

        return keys.map((key) => object[key])
    }

    return { extractKeys, assembleUrl, createUrl, extractKeyValues }
}