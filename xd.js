function bogoLeftPad (str, len, ch) {
    let i = 0;
    let char = "";

    while (i !== len) {
        i = Math.floor(Math.random() * 1000);
    }

    for (let j = str.length; j < i; j++) {
        char += ch;
    }
    
    return char + str;
}

