/**
 * 16进制颜色转换透明度后的16进制颜色值
 * @param {string} color 原始颜色 #FFFFFF
 * @param {number} opacity 颜色透明度 10 20
 * @returns {string} 转换后的颜色值
 */
export const adjustColorOpacity = function (color: string, opacity: number) {
    // 移除 # 号（如果有）
    color = color.replace("#", "");

    // 将十六进制颜色值转换为 RGB 值
    let r = parseInt(color.substring(0, 2), 16);
    let g = parseInt(color.substring(2, 4), 16);
    let b = parseInt(color.substring(4, 6), 16);

    // 将透明度转换为 0 到 1 之间的值
    opacity = opacity / 100;

    // 计算插值后的颜色值
    let interpolatedR = Math.round((1 - opacity) * 255 + opacity * r);
    let interpolatedG = Math.round((1 - opacity) * 255 + opacity * g);
    let interpolatedB = Math.round((1 - opacity) * 255 + opacity * b);

    // 将插值后的 RGB 值转换回十六进制颜色值
    let result = "#" + (interpolatedR < 16 ? "0" : "") + interpolatedR.toString(16);
    result += (interpolatedG < 16 ? "0" : "") + interpolatedG.toString(16);
    result += (interpolatedB < 16 ? "0" : "") + interpolatedB.toString(16);

    return result;
}



interface FullScreen extends HTMLElement {
     mozRequestFullScreen?: () => void; 
     webkitRequestFullscreen?: () => void;
     msRequestFullscreen?: () => void;
     mozCancelFullScreen?: () => void;
     webkitExitFullscreen?: () => void;
     msExitFullscreen?: () => void;
     exitFullscreen?: () => void;
}
// 打开全屏
export const openFullscreen = () => {
    const element = document.documentElement as FullScreen;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
};

// 打开某个元素的全屏
export const openElementFullscreen = (e:Event) => {
    console.log(e.target);
    let element = e.target as FullScreen;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
};

/* // 关闭全屏
export const closeFullscreen = () => {
    const element = document.documentElement as FullScreen;
    if (element.exitFullscreen) {
        element.exitFullscreen();
    } else if (element.mozCancelFullScreen) {
        element.mozCancelFullScreen();
    } else if (element.webkitExitFullscreen) {
        element.webkitExitFullscreen();
    } else if (element.msExitFullscreen) {
        element.msExitFullscreen();
    }
}; */

