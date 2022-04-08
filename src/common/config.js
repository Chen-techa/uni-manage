let baseURL = ''
let Timeout = 60 * 1000

if (process.env.NODE_ENV === 'development') {
    baseURL = ''
} else {
    baseURL = ''
}

export {baseURL, Timeout}