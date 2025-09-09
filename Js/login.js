document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const cancelBtn = document.querySelector('.cancel-btn');

    // زرار Cancel: إعادة تهيئة النموذج
    cancelBtn.addEventListener('click', () => {
        form.reset();
    });

    // الـ Submit مع Validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        let errorMessage = '';

        // تحقق من الإيميل
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            isValid = false;
            errorMessage += 'الإيميل مطلوب.\n';
        } else if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'الإيميل غير صالح.\n';
        }

        // تحقق من الباسوورد
        const password = document.getElementById('password').value.trim();
        if (password === '') {
            isValid = false;
            errorMessage += 'كلمة المرور مطلوبة.\n';
        } else if (password.length < 6) {
            isValid = false;
            errorMessage += 'كلمة المرور يجب أن تكون 6 أحرف على الأقل.\n';
        }

        if (isValid) {
            alert('تسجيل الدخول ناجح!'); // هنا ممكن تبعت البيانات للـ backend
            // form.submit(); // لو عايز تبعت حقيقي
        } else {
            alert(errorMessage);
        }
    });
});