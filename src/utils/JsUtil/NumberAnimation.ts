
/**
 * 数字动画
 * @param start 开始值
 * @param end 结束值
 * @param duration 动画时长
 * @param stepCallback (stepCallback('当前值')) 每次动画的回调函数
 */
export default function NumberAnimation(start: number, end: number, duration: number, stepCallback: (arg0: number) => void) {
    let total = end - start;
    let startTime = Date.now();
    let timer:number | null = null;
    function animate() {
        const time = Date.now();
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);//确保在 0 到 1 的范围内。
        const value = total * progress;// 计算当前值，当前值由0-1的进度决定变化。

        stepCallback(Math.floor(value));

        if (elapsed <= duration) {
            timer = requestAnimationFrame(animate);

        } else {
            cancelAnimationFrame(timer as number);
        }
    }

    timer = requestAnimationFrame(animate);
    return {
        cancel() {
            cancelAnimationFrame(timer as number);
        },
        start() {
            timer = requestAnimationFrame(animate);
        }
    }


}