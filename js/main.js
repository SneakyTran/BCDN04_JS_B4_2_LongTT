//todo Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
/**
 * ?Khối 1: input
 * num1, num2, num3
 *
 * ?Khối 2: progress
 * B1: Khai báo biến và gán giá trị cho biến từ input form
 * B2:
 * Nếu num1 > num2
 *      temp = num1;
 *      num1 = num2;
 *      num2 = temp;
 * Nếu num2 > num3
 *      temp = num2;
 *      num2 = num3;
 *      num3 = temp;
 * Nếu num1 > num3
 *      temp = num1;
 *      num1 = num3;
 *      num3 = temp;
 * B3: In ra màn hình num1, num2 , num3 (đẫ được sắp xếp)
 *
 * ?Khối 3: output
 * 3 số theo thứ tự tăng dần
 *
 */
 function sort() {
    var num1 = document.getElementById("ipNum1").value;
    var num2 = document.getElementById("ipNum2").value;
    var num3 = document.getElementById("ipNum3").value;
    var temp = 0;
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num2 > num3) {
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if (num1 > num3) {
        temp = num1;
        num1 = num3;
        num3 = temp;
    }
    document.getElementById("txtSortedNumberList").innerHTML =
        num1 + " " + num2 + " " + num3;
}
document.getElementById("btnSort").onclick = sort;

//todo Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)


