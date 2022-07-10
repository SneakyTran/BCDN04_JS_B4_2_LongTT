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
    var num1 = Number(document.getElementById("ipNum1").value);
    var num2 = Number(document.getElementById("ipNum2").value);
    var num3 = Number(document.getElementById("ipNum3").value);
    var temp = 0;
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num1 > num3) {
        temp = num1;
        num1 = num3;
        num3 = temp;
    }
    if (num2 > num3) {
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    document.getElementById("txtSortedNumberList").innerHTML =
        num1 + " " + num2 + " " + num3;
}
document.getElementById("btnSort").onclick = sort;

//todo Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
/**
 * Khối 1: input
 * familyMember
 *
 * Khối 2: progress
 * B1: Khai báo và lấy giá trị của biến từ form
 * B2: In lời chào ra màn hình
 *
 * Khối 3: output
 * Hello + familyMember
 *
 */

function getFamilyMember(familyCode) {
    switch (familyCode) {
        case "B":
            return "Bố";

        case "M":
            return "Mẹ";

        case "A":
            return "Anh trai";

        case "E":
            return "Em gái";

        default:
            alert("Không phải là thành viên!!!");
    }
}

function sayHello() {
    var familyMember = document.getElementById("selectUser").value;
    document.getElementById("txtSayHello").innerHTML =
        "Xin chào " + getFamilyMember(familyMember);
}

document.getElementById("btnHello").onclick = sayHello;

//todo Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
/**
 * Khối 1: input
 * num1, num2, num3
 *
 * Khối 2: progress
 * B1: Khai báo biến và lấy giá trị 3 số nguyên từ form
 * B2:
 * Hàm trả về số chẵn lẻ
 *      Nếu (num%2 == 0) => trả về số chẵn
 *      Ngược lại trả về số lẻ
 *
 * Khối 3: output
 * odd, even
 *
 */

function isOddNumber(number) {
    return number % 2 == 0 ? 1 : 0;
}

function countOddAndEven() {
    var num1 = document.getElementById("ipNumber1").value;
    var num2 = document.getElementById("ipNumber1").value;
    var num3 = document.getElementById("ipNumber1").value;
}
document.getElementById("btnCount").onclick = countOddAndEven;
