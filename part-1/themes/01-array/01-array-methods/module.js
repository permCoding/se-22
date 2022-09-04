/**
 * функция для очистки консоли
 * разные реализации
 * @param {int} id - номер варианта исполнения
 */
function clear_win(id=0) {
    switch(id) {
        case 0:
            console.clear();
            break;
        case 1:
            process.stdout.write('\033c');
            break;
        case 2:
            console.log('\033c');
            break;
        case 3:
            process.stdout.write('\033c');
            break;
        case 4:
            console.log('\033[2J');
            break;
                        
        default:
            let lines = process.stdout.getWindowSize()[1];
            for (let i = 0; i < lines; i++) {
                console.log('\r\n');
            }
            break;
    }
}

module.exports = {
    clear_win
}
