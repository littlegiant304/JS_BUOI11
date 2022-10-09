
/**
 * Khối 1:Inputs
 *   usd, rate, vnd
 * 
 * Khối 2:
 *   B1: Tạo hàm quy đổi tỷ giá
 *   B2: Gắn hàm vào sự kiện click button 
 *   B3: Trong hàm : lấy giá trị từ form
 *   B4: Trong hàm : lập công thức tính toán
 *    ? vnd = rate * usd
 *   B5: TRong Hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *    Số tiền đã quy đổi từ usd sang vnđ
 *      
 * 
 */



 function quyDoiTien() {
    var usd = document.getElementById("inputUSD").value;
    var rate = 23500;
    var vnd = rate * Number(usd);
    // document.txtResult.value = vnd;
    document.getElementById("txtVND").value = vnd.toString(); 
}

document.getElementById("btnDoi").onclick = quyDoiTien;