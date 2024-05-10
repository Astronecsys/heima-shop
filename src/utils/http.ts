// src/utils/http.ts

import { useMemberStore } from "@/stores"

// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 请求超时
    options.timeout = 10000
    console.log(options)
    // 3. 添加小程序端请求头标识
    options.header = {
        ...options.header,
        'source-client': 'miniapp',
    }
    // 4. 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)


// 请求函数
// @param UniApp.ReaurestOptions
// @returns Rromise
// 1. 返回Promise对象
// 2. 请求成功
// 2.1提取核心数据res.data
// 2.2 添加类型, 支持泛型
// 3. 请求失败
// 3.1 网络错误 -> 提示用户换网络
// 3.2 401错误 -> 清理用户信息, 跳转到登录页
// 3.3 其他错误 -> 根据后端错误信息轻提示

interface Data<T>{
    code: string
    msg: string
    result:T
}

// 2.2 添加类型, 支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
    // 1. 返回Promise对象
    return new Promise<Data<T>>((resolve, rejuect) => {
        uni.request({
            ...options,
            // 2. 请求成功
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300){
                    // 2.1提取核心数据res.data
                    resolve(res.data as Data<T>)
                } else if (res.statusCode === 401) {
                    // 3.2 401错误 -> 清理用户信息, 跳转到登录页
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({ url: '/pages/login/login'})
                    rejuect(res)
                }else{
                    // 3.3 其他错误 -> 根据后端错误信息轻提示
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '数据获取失败',
                        mask: true
                    })
                    rejuect(res)
                }
            },
            // 3.1 网络错误 -> 提示用户换网络
            fail(err) {
                uni.showToast({
                    title: '网络错误, 换个网络试试',
                    icon: 'success',
                    mask: true
                })
                rejuect(err)
            }
        })
    })
}
    