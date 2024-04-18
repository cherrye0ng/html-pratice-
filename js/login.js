
    // 로그인 유효성 검사 
    document.addEventListener('DOMContentLoaded', function () {
        // 로그인 폼 가져오기 
        var loginForm = document.getElementById('loginForm');
        
        // 재실행방지 
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
        });
    });

    // check_onclick
    function check_onclick() {
        var id = document.querySelector("#id").value.trim();
        var password = document.querySelector("#password").value.trim();

        if (id === '' || password === '' ) {
            alert("필수 입력란이 비어있습니다. 입력해주세요");
        } else {
            alert('로그인되었습니다!  ');
            location.href = 'index.html';
        }
    }


    // 회원가입 유효성 검사

    document.addEventListener('DOMContentLoaded', function () {
        // 회원가입폼 가져오기
        var joinForm = document.getElementById('JoinForm');
        // 재실행방지
        joinForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
        });
    });

    // memcheck_onclick
    function memcheck_onclick() {
        var id = document.querySelector("#id").value.trim();
        var password = document.querySelector("#password").value.trim();
        var password_1 = document.querySelector("#password_1").value.trim();
        
        if (id === '' || password === '' || password_1 === '') {
            alert("필수 입력란이 비어있습니다. 입력해주세요");
        } else {
            alert('떡볶잉의 회원이 되었어요! ');
            location.href = 'login.html';
        }
    }