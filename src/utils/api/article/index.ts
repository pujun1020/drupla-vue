import service from "@/utils/api/request";
//文章内容请求
export function ArticleApi( url:string ){
    return service({
        url
    })
}