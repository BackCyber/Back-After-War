document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const subButtons = document.querySelectorAll('.sub-btn');
    const subscriptionInput = document.getElementById('subscription');
    const cancelBtn = document.querySelector('.cancel-btn');

    // اختيار الاشتراك (تغيير لون الزر النشط)
    subButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            subButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            subscriptionInput.value = btn.dataset.sub;
        });
    });

    // زرار Cancel: إعادة تهيئة النموذج
    cancelBtn.addEventListener('click', () => {
        form.reset();
        subButtons.forEach(b => b.classList.remove('active'));
        subscriptionInput.value = '';
    });

    // الـ Submit مع Validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        let errorMessage = '';

        // تحقق من الاسم
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            isValid = false;
            errorMessage += 'الاسم مطلوب.\n';
        }

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

        // تحقق من كلمة المرور
        const password = document.getElementById('password').value.trim();
        if (password === '') {
            isValid = false;
            errorMessage += 'كلمة المرور مطلوبة.\n';
        } else if (password.length < 6) {
            isValid = false;
            errorMessage += 'كلمة المرور يجب أن تكون 6 أحرف على الأقل.\n';
        }

        // تحقق من الجنس
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            isValid = false;
            errorMessage += 'اختر الجنس.\n';
        }

        // تحقق من تاريخ الميلاد
        const dob = document.getElementById('dob').value;
        if (dob === '') {
            isValid = false;
            errorMessage += 'تاريخ الميلاد مطلوب.\n';
        }

        // تحقق من البلد
        const country = document.getElementById('country').value;
        if (country === '') {
            isValid = false;
            errorMessage += 'اختر البلد.\n';
        }

        // تحقق من الاشتراك
        if (subscriptionInput.value === '') {
            isValid = false;
            errorMessage += 'اختر نوع الاشتراك.\n';
        }

        if (isValid) {
            alert('التسجيل ناجح!');
        } else {
            alert(errorMessage);
        }
    });
});