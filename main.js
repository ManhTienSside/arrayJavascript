var arrNum = [];
function number() {
    //b1 lay the chua gia trị
    var inNumber = document.getElementById('inputNumber').value;
    //b2 // luu vao mang~
        arrNum.push(Number(inNumber));
    
    console.log(arrNum);
    document.getElementById('showNumber').innerHTML = arrNum;
}
document.getElementById('addNum').onclick = number;

function soDuong() {
    // load tunggia tri trong mang
    // so sanh diêu kien la phai so duong
    //lay cac so duong di cong lai
    var numDuong = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if(arrNum[i]>0){
            numDuong +=  arrNum[i];
        }
    }
    document.getElementById('sumNumber').innerHTML = numDuong;
}
document.getElementById('plusNum').onclick = soDuong;

function demSoDuong() {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if(arrNum[i]>0){
            count++;
        }
    }
    document.getElementById('countNumber').innerHTML = count;
}
document.getElementById('countNum').onclick = demSoDuong;

function soNhoNhat() {
    var min = arrNum[0];
    for (var i = 0; i < arrNum.length; i++) {
        if(arrNum[i]<min){
            min=arrNum[i];
        }
    }
    document.getElementById('resultMin').innerHTML = min;
}
document.getElementById('minNum').onclick = soNhoNhat;

function soDuongNhoNhat() {
    var min = arrNum[0];
    for (var i = 0; i < arrNum.length; i++) {
        if(arrNum[i]>0 && arrNum[i]<min){
                min=arrNum[i];
        }
    }
    document.getElementById('resultMinNum').innerHTML = min;
}
document.getElementById('minPlusNum').onclick = soDuongNhoNhat;

function soChan() {
    var number = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if(arrNum[i]> 0 && arrNum[i]%2==0){
            number = arrNum[i];
        }
    }
    document.getElementById('resultChan').innerHTML = number;
}
document.getElementById('clickChan').onclick = soChan;

function upNumber() {
    var arrNumCoppy = [];
    for (var i = 0; i < arrNum.length; i++) {
            arrNumCoppy.push(arrNum[i]);
    }
    var result = arrNumCoppy.sort(function(a,b){
        return a-b;
    })
    document.getElementById('upNumber').innerHTML = result;
}
document.getElementById('upNum').onclick = upNumber;

function changePlace() {
    var placeOne = Number(document.getElementById('numberOne').value);
    var placeTwo = Number(document.getElementById('numberTwo').value);
    var arrNumCoppy = [];
    for (var i = 0; i < arrNum.length; i++) {
        arrNumCoppy.push(arrNum[i]);
    }
    var eleChange = arrNumCoppy[placeOne];
    arrNumCoppy[placeOne] = arrNumCoppy[placeTwo];
    arrNumCoppy[placeTwo]= eleChange;
    var a = document.getElementById('showNumber123');
    a.innerHTML= arrNumCoppy;
}
document.getElementById('replaceNum').onclick = changePlace;

function soNguyenTo() {
    var result = 0;
    for (var i = 0; i < arrNum.length; i++) {
        result = checkNumber(arrNum[i]);
        if(result){
            document.getElementById('firstNT').innerHTML = result;
            break;
        }
    }
}
document.getElementById('NTFisrt').onclick = soNguyenTo;

function checkNumber(number){
        if(number<2){
            return false;
        } 
        if(number==2){
            return number;
        } 
        if(number%2==0){
            return false;
        }
        for (var i=3; i <= number; i+=2) {
            if(number%i == 0){
                return number;
            }
        }
}
function countNumber() {
    var resultAm = 0;
    var resultDuong = 0;
    var amDuong = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if(arrNum[i]>0){
            resultDuong++;
        }else if (arrNum[i]<0){
            resultAm++; 
        }else{
            amDuong++;
        }
    }
    if(resultDuong>resultAm){
        document.getElementById('showCountNumber').innerHTML = 'so dương nhiều hơn số âm';
    }else if(resultDuong<resultAm){
        document.getElementById('showCountNumber').innerHTML = 'so dương ít hơn số âm';
    }else{
        document.getElementById('showCountNumber').innerHTML = 'so dương bằng số âm';
    }
}
document.getElementById('clickCountNumber').onclick = countNumber;
var arraySoNguyen = [];
function countSoNguyen(){
    var result = '';
    var count = 0;
    for (var i = 0; i < arraySoNguyen.length; i++) {
        if(Number.isInteger(Number(arraySoNguyen[i]))){
            count++;
        }
    document.getElementById('showDemSoNguyen').innerHTML = count;
    }
}
document.getElementById('clickDemSoNguyen').onclick = countSoNguyen;

function soNguyen() {
    var inputNumber = document.getElementById('soNguyen').value;
    arraySoNguyen.push(inputNumber);
    document.getElementById('showAddSoNguyen').innerHTML = arraySoNguyen;
}
document.getElementById('clickAddSoNguyen').onclick = soNguyen;