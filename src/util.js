export function util(b = { c: 2 }, ...a) {
    const p = new Promise((resolved, reject) => {
        const { c = 1 } = b
        document.write('1userAgeng:' + navigator.userAgent + '<br>');
        testQuery();
        resolved(2)
    })
    const p2 = new Promise(() => {
        document.write('p2')
    })
    return Promise.all([p]).then(() => {
        document.write(`down`)
    })
}

function testQuery() {
    document.write('typeof document.querySelector:' + typeof document.querySelector + '<br>')
    document.write('typeof document.querySelectorAll:' + typeof document.querySelectorAll + '<br>')
    document.write('typeof Object.defineProperty:' + typeof Object.defineProperty + '<br>')

}
