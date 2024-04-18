/**
 * 
 * @param stylenumber 
 * @returns 返回一个HTML代码结构，vue请用v-html指令接收
 */
export default function (stylenumber: number) {
    let html = ""
    if (stylenumber) {
        html += `
            <div class="buttom1-wapper">
                <div class="buttom1-text style${stylenumber}">Buttom</div>
                <div class="buttom1-bg"></div>
            </div>
        `
        return html
    }else if(stylenumber == 0){
        html += `
            <div class="buttom1-wapper">
                <div class="buttom1-text">Buttom</div>
                <div class="buttom1-bg"></div>
            </div>
        `
        return html
    }
}