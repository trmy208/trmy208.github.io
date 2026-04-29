const password = document.getElementById('password');
const strength = document.getElementById('strength');

password.addEventListener('input', function () {
    const value = password.value;
    let level = 'Weak';

    if (value.length >= 8 && /[A-Za-z]/.test(value) && /\d/.test(value)) {
        level = 'Strong';
    } else if (value.length >= 6 && (/\d/.test(value) || /[A-Za-z]/.test(value))) {
        level = 'Medium';
    }

    strength.textContent = 'Password Strength: ' + level;
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const passwordValue = password.value;
    const file = document.getElementById('profilePic').files[0];
    const message = document.getElementById('message');

    if (username.length < 5 || username.length > 15) {
        message.textContent = 'Username must be 5-15 characters.';
        return;
    }

    if (!(/[A-Za-z]/.test(passwordValue) && /\d/.test(passwordValue))) {
        message.textContent = 'Password must contain letters and numbers.';
        return;
    }

    if (file) {
        const type = file.type;
        if (type !== 'image/jpeg' && type !== 'image/png') {
            message.textContent = 'Image must be JPG or PNG.';
            return;
        }
    }

    message.textContent = 'Registration successful!';
});

document.getElementById('profilePic').addEventListener('change', function () {
    const file = this.files[0];
    const preview = document.getElementById('previewImage');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
    }
});