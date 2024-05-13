import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"

type LoginParams = {
    code: string,
    encryptedData: string,
    iv:string
}

export const postLoginWxMinAPI = (data:LoginParams) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin',
        data,
    })
}

type LoginParamsSimple = {
    phoneNumber: string
}

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (data: LoginParamsSimple) => {
    return http<LoginResult>({
      method: 'POST',
      url: '/login/wxMin/simple',
      data,
    })
  }