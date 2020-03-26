import instance from './ajax'

const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => instance.get(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => instance.get(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => instance.get(BASE_URL + '/shops', { longitude, latitude })
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => instance.get(BASE_URL + '/search_shops', { geohash, keyword })
// 6、用户名密码登陆
export const reqPwdLogin = ({ name, pwd, captcha }) => instance.post(BASE_URL + '/login_pwd', { name, pwd, captcha })
// 7、发送短信验证码
export const reqSendCode = (phone) => instance.get(BASE_URL + '/sendcode', { phone })
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => instance.post(BASE_URL + '/login_sms', { phone, code })
// 9、根据会话获取用户信息
export const reqUserInfo = () => instance.get(BASE_URL + '/userinfo')
// 10、用户登出
export const reqLogout = () => instance.get(BASE_URL + '/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => instance.get('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => instance.get('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => instance.get('/goods')
