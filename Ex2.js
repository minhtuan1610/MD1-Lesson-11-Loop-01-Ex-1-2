function inputTemperature() {
    let x = prompt("Nhập nhiệt độ phòng vào đây");
    return x;
}

function checkInputTemp(a) {
    a = parseFloat(a);
    if (a >= 0 || a < 0) {
        if (a > 100) {
            alert("Cao quá. Giảm nhiệt độ đi bạn ơi");
            operation();
            return 1;
        } else if (a < 20) {
            alert("Không thấy lạnh à. Tăng nhiệt độ lên");
            operation();
            return 1;
        } else if (20 <= a <= 100) {
            alert("Ok bạn êi!!!");
            console.log(a);
            return 1;
        }
    } else {
        alert("Mày không nhập nhiệt độ vào à");
        operation();
    }
}

function operation() {
    let inputTemp = inputTemperature();
    checkInputTemp(inputTemp);
}

operation();
