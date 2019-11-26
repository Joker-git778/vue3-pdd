import ajax from "./ajax";

// 1. 基础路径
const BASE_URL = "http://localhost:3000";

// 2. 请求方法
// 获取首页轮播图片
export const getHomeCasula = () => ajax(`${BASE_URL}/api/homecasual`);
// 首页导航图片
export const getHomeNav = () => ajax(`${BASE_URL}/api/homenav`);
// 首页商品数据
export const getHomeShopList = () => ajax(`${BASE_URL}/api/homeshoplist`);

// 推荐商品列表
export const getRecommentShopList = (params) => ajax(`${BASE_URL}/api/recommendshoplist`, params);

// 搜索列表数据
export const getSearchGoods = () => ajax(`${BASE_URL}/api/searchgoods`);

// 短信验证码
export const getPhoneCode = (phone) => ajax(`${BASE_URL}/api/sendCode`, phone);

// 手机验证码登录
export const phoneCodeLogin = (phone, code) => ajax(`${BASE_URL}/api/loginCode`, { phone, code }, 'POST');