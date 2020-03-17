function fun(num, k) {
    let map = new Map();

    for (let i = 0; i < num.length; i++)
        if (map.has(num[i]))
            map.set(num[i], map.get(num[i]) + 1);
        else
            map.set(num[i], 1);

    for (let i = 0; i < num.length; i++)
        if (map.has(k - num[i]) && (k - num[i] !== num[i] || map.get(num[i]) >= 2))
            return true;
        return false;
}

alert(fun([10, 15, 3, 7], 17));
alert(fun([10, 10, 15, 3, 7], 20));