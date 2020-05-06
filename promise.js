new Promise(function (resolve, reject) {
    resolve({"1": 1, "2": 1});
}).then(function (result) {
    console.log(1);
    return {"1": result["2"], "2": result["1"] + result["2"]};
}).then(function (result) {
    return {"1": result["2"], "2": result["1"] + result["2"]};
}).then(function (result) {
    console.log(2);
    return {"1": result["2"], "2": result["1"] + result["2"]}
}).then(function (result) {
    console.log(3);
    return {"1": result["2"], "2": result["1"] + result["2"]};
}).then(function (result) {
    return {"1": result["2"], "2": result["1"] + result["2"]};
}).then(function (result) {
    console.log(result["1"] + " " + result["2"]);
    return result;
});