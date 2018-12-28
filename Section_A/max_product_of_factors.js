let result = {};

function factors(n) {
    let num_factors = [];

    for (let i=1; i<=Math.floor(Math.sqrt(n)); i+=1){
        if (n%i === 0)
        {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
        num_factors.sort(function(x, y) {
            return x - y;
        });
    }
    return num_factors;
}

const findWXYZ = f => {

    result.f = f;

    let  maxProduct = 1;
    let flag = 1;

    let all_factors = factors(f);

    for (let i = 0; i < all_factors.length; i++) {

        for (let j = i; j < all_factors.length; j++) {

            for(let k = j; k < all_factors.length; k++) {

                let y = f - all_factors[i] - all_factors[j] - all_factors[k];

                if (y <= 0){
                    break;
                }

                if (f%y === 0) {
                    result.W = all_factors[i];
                    result.X = all_factors[j];
                    result.Y = all_factors[k];
                    result.Z = y;
                    flag = 0;
                    maxProduct = Math.max(all_factors[i] * all_factors[j] * all_factors[k] * y, maxProduct);
                }
            }
        }
    }
    if (flag === 0){
        return result;
    }else{
        return "Not Possible"
    }
};

console.log(findWXYZ(32));