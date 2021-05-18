var alldata = " ";
fetch("https://sheets.googleapis.com/v4/spreadsheets/1dyVOP5Oi-hQyOUWysAA_aKIe_P2b7FZTZxVc_WVi1k8/values:batchGet?dateTimeRenderOption=FORMATTED_STRING&majorDimension=DIMENSION_UNSPECIFIED&ranges=listA!A%3AJ&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCkGVQfrH7sqzjaKOR6Z1inbBFQSPE0j-k", {
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ja;q=0.5,zh-TW;q=0.4",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
    },
    "method": "GET",
}).then(
    function (response) {
        if (response.status !== 200) {
            console.log("存在一个问题，状态码为：" + response.status);
            return;
        }
        //检查响应文本
        response.json().then(function (datas) {
            var inner_alldata = "";
            var dataset = datas.valueRanges[0].values;
            console.log(dataset);
            for (var i = 2; i < dataset.length; i++) {
                var name = dataset[i][0] + " | " + dataset[i][1];
                inner_alldata += name + ","
            }
            document.querySelector("#a span").textContent = dataset[0]
            sessionStorage.lista = inner_alldata;
        })
    })

fetch("https://sheets.googleapis.com/v4/spreadsheets/1dyVOP5Oi-hQyOUWysAA_aKIe_P2b7FZTZxVc_WVi1k8/values:batchGet?dateTimeRenderOption=FORMATTED_STRING&majorDimension=DIMENSION_UNSPECIFIED&ranges=listB!A%3AJ&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCkGVQfrH7sqzjaKOR6Z1inbBFQSPE0j-k", {
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ja;q=0.5,zh-TW;q=0.4",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
    },
    "method": "GET",
}).then(
    function (response) {
        if (response.status !== 200) {
            console.log("存在一个问题，状态码为：" + response.status);
            return;
        }
        //检查响应文本
        response.json().then(function (datas) {
            var inner_alldata = "";
            var dataset = datas.valueRanges[0].values;
            console.log(dataset);
            for (var i = 2; i < dataset.length; i++) {
                var name = dataset[i][0] + " | " + dataset[i][1];
                inner_alldata += name + ","
            }
            document.querySelector("#b span").textContent = dataset[0]
            sessionStorage.listb = inner_alldata;
        })
    })

fetch("https://sheets.googleapis.com/v4/spreadsheets/1dyVOP5Oi-hQyOUWysAA_aKIe_P2b7FZTZxVc_WVi1k8/values:batchGet?dateTimeRenderOption=FORMATTED_STRING&majorDimension=DIMENSION_UNSPECIFIED&ranges=project!A%3AJ&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCkGVQfrH7sqzjaKOR6Z1inbBFQSPE0j-k", {
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ja;q=0.5,zh-TW;q=0.4",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
    },
    "method": "GET",
}).then(
    function (response) {
        if (response.status !== 200) {
            console.log("存在一个问题，状态码为：" + response.status);
            return;
        }
        //检查响应文本
        response.json().then(function (datas) {
            var dataset = datas.valueRanges[0].values;
            console.log(dataset);
            for (var i = 2; i < dataset.length; i++) {
                var project = dataset[i][0] + ", " + dataset[i][1];
                var pjt = document.createElement("p");
                pjt.innerText = project;
                document.getElementById("project").appendChild(pjt)
            }
            document.querySelector("#pjt_h1").textContent = dataset[0]
        })
    })

alldata = sessionStorage.lista;
var notice = alldata?"Lottery Ready !":"Please refresh this page to load data";
window.onload = function(){document.getElementById("oknum").innerText = notice};

function setlista() {
    alldata = sessionStorage.lista
}

function setlistb() {
    alldata = sessionStorage.listb
}

var alldataarr = alldata.split(",");
// var alldata = " ";  

var num = alldataarr.length - 1;
var timer;

function change() {
    document.getElementById("oknum").innerText = alldataarr[GetRnd(0, num)];
}

function start() {

    clearInterval(timer);
    timer = setInterval('change()', 46); //滚动速度
}
var count = 0;

function ok() {
    clearInterval(timer);
    alldata = alldata.replace(document.getElementById("oknum").innerText, "").replace(",,", ",");
    if (alldata.substr(0, 1) == ",") {
        alldata = alldata.substr(1, alldata.length);
    }
    if (alldata.substr(alldata.length - 1, 1) == ",") {
        alldata = alldata.substring(0, alldata.length - 1);
    }
    alldataarr = alldata.split(",");
    num = alldataarr.length - 1;
    count += 1;
    var lucky_dog = document.createElement("p")
    lucky_dog.innerText = count.toString() + ". " + document.getElementById("oknum").innerText
    document.getElementById("result").appendChild(lucky_dog)
}

function GetRnd(min, max) {
    return parseInt(Math.random() * (max - min + 1));
}