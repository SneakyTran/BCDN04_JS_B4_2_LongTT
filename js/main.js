//todo Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
/**
 * ?Khối 1: input
 * num1, num2, num3
 *
 * ?Khối 2: progress
 * B1: Khai báo biến và gán giá trị cho biến từ input form
 * B2:
 * *Nếu num1 > num2
 *      temp = num1;
 *      num1 = num2;
 *      num2 = temp;
 * *Nếu num2 > num3
 *      temp = num2;
 *      num2 = num3;
 *      num3 = temp;
 * *Nếu num1 > num3
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
 * ?Khối 1: input
 * familyMember
 *
 * ?Khối 2: progress
 * B1: Khai báo và lấy giá trị của biến từ form
 * B2: In lời chào ra màn hình
 *
 * ?Khối 3: output
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
 * ?Khối 1: input
 * num1, num2, num3
 *
 * ?Khối 2: progress
 * B1: Khai báo biến và lấy giá trị 3 số nguyên từ form
 * B2:
 * Hàm trả về số chẵn lẻ
 *      *Nếu (num%2 == 0) => trả về số chẵn
 *      *Ngược lại trả về số lẻ
 * Dùng biến count để đếm số lượng số lẻ và số chẵn
 *
 * ?Khối 3: output
 * odd, even
 *
 */

function isEvenNumber(number) {
    return number % 2 == 0 ? 1 : 0;
}

function countOddAndEven() {
    var num1 = document.getElementById("ipNumber1").value;
    var num2 = document.getElementById("ipNumber2").value;
    var num3 = document.getElementById("ipNumber3").value;
    var oddCount = 0;
    var evenCount = 0;
    if (isEvenNumber(num1)) {
        evenCount++;
    } else {
        oddCount++;
    }
    if (isEvenNumber(num2)) {
        evenCount++;
    } else {
        oddCount++;
    }
    if (isEvenNumber(num3)) {
        evenCount++;
    } else {
        oddCount++;
    }
    document.getElementById("txtOdd").innerHTML = "Số số lẻ: " + oddCount;
    document.getElementById("txtEven").innerHTML = "Số số chắn: " + evenCount;
}
document.getElementById("btnCount").onclick = countOddAndEven;

//todo Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
/**
 * ?Khối 1: input
 * a,b,c
 *
 * ?Khối 2: progress
 * B1: Khai báo biến và lấy giá trị 3 cạnh tam giác từ form
 * B2:
 * *Nếu a==b || b==c || c==a
 *      => tam giác cân
 * *Nếu a==b && b==c
 *      => tam giác đều
 * *Nếu a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a
 *      => tam giác vuông
 * *Ngược lại
 *      => tam giác thường
 *
 * ?Khối 3: output
 * typeTriangle
 */
function isTriangle(a, b, c) {
    return (a + b > c || a + c > b || b + c > a) && a > 0 && b > 0 && c > 0
        ? 1
        : 0;
}

function checkTriangle() {
    var a = document.getElementById("ipEdge1").value;
    var b = document.getElementById("ipEdge2").value;
    var c = document.getElementById("ipEdge3").value;
    var txtTriangleType = document.getElementById("txtTriangleType");
    if (!isTriangle(a, b, c)) {
        txtTriangleType.innerHTML = "Không phải là tam giác";
    } else if (a == b && b == c) {
        txtTriangleType.innerHTML = "Tam giác đều";
    } else if (a == b || b == c || c == a) {
        txtTriangleType.innerHTML = "Tam giác cân";
    } else if (
        a * a + b * b == c * c ||
        a * a + c * c == b * b ||
        b * b + c * c == a * a
    ) {
        txtTriangleType.innerHTML = "Tam giác vuông";
    } else {
        txtTriangleType.innerHTML = "Tam giác thường";
    }
}
document.getElementById("btnCheckTriangle").onclick = checkTriangle;
