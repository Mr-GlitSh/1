/* تنسيقات عامة للجسم والخلفية */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
}

/* تنسيقات الحاوية الرئيسية */
.container {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* تنسيقات العنوان الرئيسي */
#main-heading {
    color: #007bff; /* اللون الأولي */
    transition: color 0.5s ease; /* إضافة تأثير انتقالي سلس */
}

/* تنسيقات الزر */
#color-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    transition: background-color 0.3s;
}

#color-button:hover {
    background-color: #218838;
}
