import type { PageParams, PageResult } from "@/types/global"
import type { BannerItem, CategoryItem,GuessItem,HotItem } from "@/types/home"
import { http } from "@/utils/http"
/**
 * 首页广告区域接口
 * @param distributionSite 
 * @returns 
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: "/home/banner",
        data: {
            distributionSite,
        },
    })
}
/**
 * 首页-前台分类
 * @returns 
 */
export const getHomeCategoryAPI = () => {
    return http<CategoryItem[]>({
        method: 'GET',
        url:'/home/category/mutli',
    })
}
/**
 * 首页-热门推荐
 * @returns 
 */
export const getHomeHotAPI = () => {
    return http<HotItem[]>({
        method: 'GET',
        url:'/home/hot/mutli',
    })
}
/**
 * 猜你喜欢
 * @returns 
 */
export const getHomeGoodsGuessLikeAPI = (data?:PageParams) => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data,
    })
}