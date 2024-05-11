import type { BannerItem, CategoryItem } from "@/types/home"
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