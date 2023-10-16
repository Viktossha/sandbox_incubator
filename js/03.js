function whoseMove(lastPlayer, win) {
    if (lastPlayer === 'black' && win === true) {
        return 'black'
    } else if (lastPlayer === 'black' && win === false) {
        return 'white'
    } else if (lastPlayer === 'white' && win === false) {
        return 'black'
    } else if (lastPlayer === 'white' && win === true) {
        return 'white'
    }
}