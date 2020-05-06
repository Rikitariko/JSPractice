function fun(num, num2) {
    let l = num.length - num2.length - 1;
    let r = num2.length - 1;
    alert(l);
    alert(r);
    for (let i = num.length - 1; i >= 0; i--) {
        console.log(l, r, num[l], num2[r]);
        if (r === -1 || (l !== -1 && num[l] >= num2[r])) {
            num[i] = num[l];
            l--;
        } else if (l === -1 || (r !== -1 && num[l] < num2[r])) {
            num[i] = num2[r];
            r--;
        }
        console.log(num);
    }
    return num;
}

alert(fun([46, 55, 88, 0, 0, 0, 0], [18, 29, 80, 90]));