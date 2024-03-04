var timer; // Biến để lưu định danh của bộ đếm thời gian

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval); // Dừng bộ đếm thời gian
            alert("Hết giờ!");
            alert("Bài của bạn đã được nộp") // Hiển thị thông báo khi hết giờ
            showResult(); // Hiển thị kết quả
        }
    }, 1000);

    return timerInterval; // Trả về định danh của bộ đếm thời gian
}

function submitQuiz() {
    clearInterval(timer); // Dừng bộ đếm thời gian
    alert("Bài của bạn đã được nộp!"); // Hiển thị thông báo sau khi nộp bài
    showResult(); // Hiển thị kết quả
}

function showResult() {
    document.getElementById('resultBtn').style.display = 'block'; // Hiển thị nút kết quả
}

function showResultPage() {
    window.location.href = "result001.html";
}
window.onload = function() {
    var fortyFiveMinutes = 60 * 45, // Thời gian là 45 phút
        display = document.querySelector('#time');
    timer = startTimer(fortyFiveMinutes, display); // Lưu định danh của bộ đếm thời gian
};
function check() {
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    if (q1 == 'option2') {c++}
    if (q2 == 'option3') {c++}
    if (q3 == 'option4') {c++}
    return c;
}

function showResultPage() {
    var score = check(); // Gọi hàm check() để tính điểm
    sessionStorage.setItem('score', score); // Lưu điểm vào sessionStorage
    window.location.href = "result001.html"; // Chuyển hướng sang trang result.html
}
// Khai báo một mảng chứa các câu hỏi và phương án đã chọn
var answersData = [
    { question: "Câu hỏi 1: Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?", chosenOption: "option2", correctOption: "option2" },
    { question: "Câu hỏi 2: Thiết bị Switch thông thường nằm ở tầng nào của mô hình OSI?", chosenOption: "option3", correctOption: "option3" },
    { question: "Câu hỏi 3: Thiết bị Repeater nằm ở tầng nào của mô hình OSI?", chosenOption: "option4", correctOption: "option4" },
    { question: "Câu hỏi 4: Thiết bị Bridge nằm ở tầng nào của mô hình OSI?", chosenOption: "option2", correctOption: "option2" },
    { question: "Câu hỏi 5: Cáp UTP có thể kết nối tối đa bao nhiêu mét?", chosenOption: "option3", correctOption: "option3" },
    { question: "Câu hỏi 6: Mô tả nào thích hợp cho mạng Bus:", chosenOption: "option4", correctOption: "option4" },
    { question: "Câu hỏi 7: Môi trường truyền tin thông thường trong mạng máy tính là:", chosenOption: "option2", correctOption: "option2" },
    { question: "Câu hỏi 8: Các mạng máy tính được thiết kế và cài đặt theo quan điểm:", chosenOption: "option3", correctOption: "option3" },
    { question: "Câu hỏi 9: Đơn vị cơ bản đo tốc độ truyền dữ liệu là", chosenOption: "option4", correctOption: "option4" },
    { question: "Câu hỏi 10: Cáp UTP Cat5e sử dụng đầu nối", chosenOption: "option4", correctOption: "option4" },
];

function reviewAnswers() {
    // Lấy phần tử có lớp 'Result'
    var resultDiv = document.querySelector('.Result');
    // Kiểm tra xem phần tử đó đang hiển thị hay không
    if (resultDiv.style.display !== 'none') {
        // Nếu đang hiển thị, ẩn nó đi
        resultDiv.style.display = 'none';
    } else {
        // Nếu không hiển thị, hiển thị nó
        resultDiv.style.display = 'block';
    }
    var answersHTML = "<div class='question-container'><h3>Câu trả lời:</h3></div>";


    // Duyệt qua mỗi câu hỏi trong mảng và tạo HTML tương ứng
    answersData.forEach(function(data, index) {
        answersHTML += "<div class='question-container'>";
        answersHTML += "<p>" + data.question + "</p>";

        // Duyệt qua mỗi phương án và tạo checkbox cho nó
        ['option1', 'option2', 'option3', 'option4'].forEach(function(option) {
            answersHTML += "<label>";
            answersHTML += "<input type='radio' disabled"; // Disable radio button
            if (data.chosenOption === option) {
                answersHTML += " checked"; // Check if chosenOption matches the current option
            }
            answersHTML += ">";
            answersHTML += getOptionText(option); // Hiển thị văn bản của phương án
            answersHTML += "</label>";
        });

        // Hiển thị đáp án đúng
        answersHTML += "<p>Đáp án đúng: " + getOptionText(data.correctOption) + "</p>";

        answersHTML += "</div>"; // Đóng question-container
    });

    document.getElementById('answers').innerHTML = answersHTML;
    document.getElementById('answers').style.display = "block"; // Hiển thị nội dung câu trả lời
}

// Hàm chuyển đổi giá trị option sang văn bản hiển thị
function getOptionText(optionValue) {
    switch (optionValue) {
        case "option1":
            return "Tầng 1";
        case "option2":
            return "Tầng 2";
        case "option3":
            return "Tầng 3";
        case "option4":
            return "Tầng 4";
        default:
            return "Không chọn";
    }
}






const redirectToNewPage = (new_page, paramName, paramValue) => {
    if (paramName !== undefined && paramValue !== undefined) {
      const encodedParamName = encodeURIComponent(paramName);
      const encodedParamValue = encodeURIComponent(paramValue);
  
      const separator = new_page.includes("?") ? "&" : "?";
  
      window.location.href = `${new_page}${separator}${encodedParamName}=${encodedParamValue}`;
    } else {
      window.location.href = new_page;
    }
  };




