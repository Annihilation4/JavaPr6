// Функція, яка змінює колір фону сторінки
function changeBackgroundColor() {
    var colorSelect = document.getElementById("colorSelect");
    var selectedColor = colorSelect.value;
    document.body.style.backgroundColor = selectedColor;
}

// Додати подію "change" для вибору кольору
document.getElementById("colorSelect").addEventListener("change", changeBackgroundColor);

// Функція, що перевіряє вибрані варіанти та виводить результат
function checkAnswers() {
    var checkbox1 = document.getElementById("checkbox1").checked;
    var checkbox2 = document.getElementById("checkbox2").checked;
    var checkbox3 = document.getElementById("checkbox3").checked;
    var checkbox4 = document.getElementById("checkbox4").checked;

    var resultElement = document.getElementById("result");

    // Перевірка правильності відповідей
    if (checkbox1 && !checkbox2 && !checkbox3 && !checkbox4) {
        resultElement.textContent = "Correct!"
    } else {
        resultElement.textContent = "Uncorrect!"
    }
}

// Додати подію "click" на кнопку для перевірки
document.getElementById("checkButton").addEventListener("click", checkAnswers);

// Функція для перевірки відповіді
function checkAnswer() {
    // Отримання обраного варіанту відповіді
    var selectedAnswer = document.getElementById("answer1").value;

    // Правильна відповідь
    var correctAnswer = "12";

    // Вивід результату перевірки
    var resultElement = document.getElementById("result1");
    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Uncorrect!";
    }
}

// Додати подію "click" на кнопку для перевірки відповіді
document.getElementById("checkButton1").addEventListener("click", checkAnswer);

function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    var errorMessages = "";

    if (!username) {
        errorMessages += "Введіть ім'я користувача.<br>";
    }

    if (!email) {
        errorMessages += "Введіть email.<br>";
    }

    if (!password) {
        errorMessages += "Введіть пароль.<br>";
    } else if (password.length < 6) {
        errorMessages += "Пароль повинен містити принаймні 6 символів.<br>";
    }

    if (password !== confirm_password) {
        errorMessages += "Пароль та його підтвердження не співпадають.<br>";
    }

    if (errorMessages) {
        document.getElementById("errorMessages").innerHTML = "<div class='error'>" + errorMessages + "</div>";
        return false;
    }

    return true;
}

function calculateSum() {
    // Отримання значень чисел з полів форми
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    var errorMessages = "";

    // Перевірка чи числа дійсні
    if (isNaN(number1)) {
        errorMessages += "Перше число недійсне.<br>";
    }

    if (isNaN(number2)) {
        errorMessages += "Друге число недійсне.<br>";
    }

    // Якщо є помилки, відобразити їх та зупинити виконання
    if (errorMessages) {
        document.getElementById("errorMessages2").innerHTML = "<div class='error'>" + errorMessages + "</div>";
        return false;
    }

    // Обчислення суми
    var sum = number1 + number2;

    // Виведення результату
    document.getElementById("result2").textContent = "Сума: " + sum;

    // Очистка повідомлень про помилки
    document.getElementById("errorMessages2").innerHTML = "";

    return true;
}
    document.getElementById("checkButton2").addEventListener("click", calculateSum);

    // Функція для обробки натискання кнопки "Send"
document.getElementById("checkButton3").addEventListener("click", function() {
    var form = document.forms['mailer'];
    var name = form['Name'].value;
    var subject = form['Subject'].value;
    var message = form['Message'].value;
    var mailto = 'mailto:example@example.com';
    
    var mailtoLink = mailto + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('Name: ' + name + '\n\nMessage: ' + message);
    window.location.href = mailtoLink;
});

// Функція для очищення полів форми
document.getElementById("checkButton4").addEventListener("click", function() {
    document.forms['mailer'].reset();
});
