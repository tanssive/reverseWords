function reverseWords(str) {
    let strArr = str.split('');

    let newStrArr = strArr.reverse();
    
    let final = newStrArr.join('').split(' ').reverse();

    return final.join(' ');
  }

