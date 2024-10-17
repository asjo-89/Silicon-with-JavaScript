const radioButtons = document.querySelectorAll('input[name="radio"]');
        let isChecked = null;
        
        radioButtons.forEach(radio => {
            radio.addEventListener('click', function() {
                if (this === isChecked) {
                    this.checked = false;
                    isChecked = null;
                } else {
                    isChecked = this;
                }
            });
        });

        