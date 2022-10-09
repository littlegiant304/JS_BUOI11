
/**
 * Khối 1:Inputs
 *   dai, rong
 * 
 * Khối 2:
 *   B1: Tạo hàm tình chu vi, diện tích
 *   B2: Gắn hàm vào sự kiện click button 
 *   B3: Trong hàm : lấy giá trị từ form
 *   B4: Trong hàm : lập công thức tính toán
 *    ? chuvi = (dai + rong) * 2
 *    ? dientich = dai * rong
 *   B5: TRong Hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *    Chu vi và diện tích hình chữ nhật
 *      
 * 
 */



 function tinhCV_DT() {
    var dai = document.getElementById("inputDai").value;
    var rong = document.getElementById("inputRong").value;
    var chuvi = (parseFloat(dai) + parseFloat(rong)) * 2;
    var dientich = parseFloat(dai) * parseFloat(rong);
    document.getElementById("txtChuVi").value = chuvi.toString(); 
    document.getElementById("txtDienTich").value = dientich.toString(); 
}

document.getElementById("btnTinhHCN").onclick = tinhCV_DT;