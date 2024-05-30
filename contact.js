var textarea = document.getElementById('message');
        
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
        
    textarea.dispatchEvent(new Event('input'));