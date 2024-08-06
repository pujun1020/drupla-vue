

/**
 * 导航到特定页面。
 * @param {string} path - 目标页面的路由名称。
 * @param {object} query - 查询参数（可选）。
 * @param {object} router - 路由实例（必须）。
 */
export let goToPage = (path: string, router:any, query?: {},) => {
    router.push({
        path,
        query,
    });
};
