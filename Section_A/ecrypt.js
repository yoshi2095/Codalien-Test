const encrypt = (str) => {
    let res = '';

    for(let i=0; i<str.length; i++){
        if(!isNaN(parseInt(str[i]))){
            res+=`${parseInt(str[i])+4}`;
        }else if(str.charCodeAt(i) === 119){
            res+= "a";
        }
        else if(str.charCodeAt(i) === 120){
            res+="b";
        }else if(str.charCodeAt(i) === 121){
            res+='c';
        }else if(str.charCodeAt(i) === 122){
            res+='d'
        }else if(str.charCodeAt(i) === 87){
            res+='A'
        }else if(str.charCodeAt(i) === 88){
            res+='B'
        }else if(str.charCodeAt(i) === 89){
            res+='C'
        }else if(str.charCodeAt(i) === 90){
            res+='D'
        } else if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 86) || (str.charCodeAt(i) >=97 && str.charCodeAt(i) <= 118)) {
            res += String.fromCharCode(str.charCodeAt(i) + 4);
        } else {
            res += str.charAt(i);
        }
    }
    return res;
};

console.log( encrypt("Yo Yo Yoshita dudes. Lets say hello-world_2, we like using camelCase more than snake_case."));