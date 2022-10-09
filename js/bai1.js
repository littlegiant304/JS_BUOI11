/**
 * Khối 1:Inputs
 *   soNV,luong, tongLuong
 * 
 * Khối 2:
 *   B1: Tạo hàm tính tiền lương
 *   B2: Gắn hàm vào sự kiện click button 
 *   B3: Trong hàm : lấy giá trị từ form
 *   B4: Trong hàm : lập công thức tính toán
 *    ? tongLuong = luong * soNV
 *   B5: TRong Hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *    Tổng tiền lương
 *    
 * 
 */

 //B1:
 function tinhTongLuong(){
    var soNV = document.getElementById("inputNumber").value;
    var luong = 100000;
    var tongLuong = luong * Number(soNV);
    document.getElementById("txtResult").innerHTML = "Tổng tiền lương là: "+tongLuong;

    document.getElementById("txtResult").style.textAlign = "center";
    document.getElementById("txtResult").style.padding = "20px 0";
 }

 document.getElementById("btnCalc").onclick = tinhTongLuong;