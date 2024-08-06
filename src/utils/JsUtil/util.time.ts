/**
 * 对文章发布时间进行分段，刚刚、 多少分钟前、多少小时前
 * @param formatTime 对文章发布时间进行格式化
 * @param formatRelativeTime 时间分段
 * @returns {string}
 * @example TimeUtils.formatRelativeTime('2022-01-01 12:00:00')、TimeUtils.formatTime('2022-01-01 12:00:00', 'yyyy-MM-dd hh:mm:ss')
 */
export class TimeUtils {
    static formatTime(date: Date | number, fmt: string = 'yyyy-MM-dd hh:mm:ss'): string {
        let crtTime = new Date(date);
        const o: { [key: string]: number } = {
            "M+": crtTime.getMonth() + 1,               // 月份
            "d+": crtTime.getDate(),                    // 日
            "h+": crtTime.getHours(),                   // 小时
            "m+": crtTime.getMinutes(),                 // 分
            "s+": crtTime.getSeconds(),                 // 秒
            "q+": Math.floor((crtTime.getMonth() + 3) / 3), // 季度
            "S": crtTime.getMilliseconds()             // 毫秒
        };

        // 替换年份
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(/(y+)/, (_match, group) => {
                return crtTime.getFullYear().toString().slice(-group.length);
            });
        }

        // 替换其他时间格式
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(new RegExp("(" + k + ")"), (_match, group) => {
                    const value = o[k].toString();
                    return group.length === 1 ? value : ("00" + value).slice(-2);
                });
            }
        }

        return fmt;
    }


    static formatRelativeTime(date: Date | number): string {
        const now = new Date();
        const diff = now.getTime() - new Date(date).getTime();

        if (diff < 60000) {
            return '刚刚';
        } else if (diff < 3600000) {
            const minutes = Math.floor(diff / 60000);
            return `${minutes} 分钟前`;
        } else if (diff < 86400000) {
            const hours = Math.floor(diff / 3600000);
            return `${hours} 小时前`;
        } else {
            return this.formatTime(new Date(date)); // Assuming formatTime function is defined elsewhere
        }
    }
}

