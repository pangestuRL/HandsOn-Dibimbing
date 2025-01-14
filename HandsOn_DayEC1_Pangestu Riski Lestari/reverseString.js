const reverseString = str => {
    const splited= str.split(' ')
    for (let i = 0; i < splited.length; i++) {
        if(splited[i].length >= 3){
            let reverseWord = '';
            for(let j = splited[i].length-1; j >= 0; j--){
                reverseWord += splited[i][j];
            }
            splited[i] = reverseWord;
        }
    }
    return splited.join(' ');
}


  console.log(reverseString(`Hi hello world`));