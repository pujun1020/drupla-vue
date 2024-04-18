/**
 * 
 * @param stylenumber 
 * @returns 返回一个HTML代码结构，vue请用v-html指令接收
 */
export default function (stylenumber: number) {
    let html = ""
    if (stylenumber) {
        html += `
            <div class="buttom2-wapper">
                <div class="buttom2-text">Buttom</div>
                <div class="buttom2-icon1 gg-arrow-right"></div>
                <div class="buttom2-icon2 gg-arrow-right"></div>
            </div>
        `
        return html
    }else if(stylenumber == 0){
        html += `
            <div class="buttom2-wapper">
                <div class="buttom2-text">Buttom</div>
                <div class="buttom2-icon1 gg-arrow-right"></div>
                <div class="buttom2-icon2 gg-arrow-right"></div>
            </div>
        `
        return html
    }
}