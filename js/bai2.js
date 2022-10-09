
/**
 * Khối 1:Inputs
 *   number1, number2, number3, number4, number5, avg
 * 
 * Khối 2:
 *   B1: Tạo hàm tính gía trị trung bình
 *   B2: Gắn hàm vào sự kiện click button 
 *   B3: Trong hàm : lấy giá trị từ form
 *   B4: Trong hàm : lập công thức tính toán
 *    ? avg = (number1 + number2 + number3 + number4 + number5) / 5
 *   B5: TRong Hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *    Giá trị trung bình của 5 số đã nhập
 *      
 * 
 */



function tinhTrungBinh() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    var trungBinh = ( Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) ) / 5; 

    document.getElementById("result").innerHTML = "Giá trị trung bình là: "+trungBinh; 
}

document.getElementById("btnTrungBinh").onclick = tinhTrungBinh;