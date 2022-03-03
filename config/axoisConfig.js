import axios from "axios"

const devUrl = "http://localhost:3003/"
const paymentgatewayUrl=''
const testUrl = ''
const prodUrl=""


const axiosInstance = axios.create ({
    baseUrl: devUrl
})

const axiosInstancePayment = axios.create({
    baseUrl: paymentgatewayUrl,
})

export default axiosInstance
export {axiosInstancePayment}