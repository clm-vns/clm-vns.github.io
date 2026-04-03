document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('#skip-links a').forEach((link) => {
        link.addEventListener('focus', function () {
            this.closest('#skip-links').classList.add('focus');
        });

        link.addEventListener('blur', function () {
            this.closest('#skip-links').classList.remove('focus');
        });
    });

    document.querySelectorAll('.js-trigger-click').forEach((el) => {
        el.addEventListener('click', function (event) {
            const controls = this.dataset.controls;

            if (controls) {
                const target = document.getElementById(controls);

                if (target && target.offsetParent !== null) {
                    target.click();
                    event.preventDefault();
                }
            } else {
                const target = document.querySelector(this.getAttribute('href'));

                if (target) {
                    target.click();
                    event.preventDefault();
                }
            }
        });
    });
});
