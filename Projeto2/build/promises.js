"use strict";
let espera_ai5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar ...');
            resolve(true);
        }, 5000);
    });
};
(async () => {
    await espera_ai5();
    console.log('terminou...');
})();
