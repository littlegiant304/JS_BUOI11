
/**
 * Khối 1:Inputs
 *   num //số cần tính
 * 
 * Khối 2:
 *   B1: Tạo hàm tính tổng 2 ký số
 *   B2: Gắn hàm vào sự kiện click button 
 *   B3: Trong hàm : lấy giá trị từ form
 *   B4: Trong hàm : lập công thức tính toán
 *    ? donvi = num % 10
 *    ? chuc = num / 10
 *   B5: TRong Hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *    Chu vi và diện tích hình chữ nhật
 *      
 * 
 */



 function tinhTong() {
    var num = document.getElementById("inputNum").value;
    var donvi = Number(num)%10;
    // var chuc = (Number(num) - (Number(num)%10))/10;
    var chuc = parseInt(Number(num)/10);
    var tong = donvi + chuc;
    document.getElementById("txtTong").value = tong.toString(); 
}

document.getElementById("btnTinh").onclick = tinhTong;