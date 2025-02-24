document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    // Máscara para CPF/CNPJ
    const documentInput = document.getElementById('document');
    documentInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            // CPF
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else {
            // CNPJ
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }
        e.target.value = value;
    });

    // Máscara para telefone
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
        }
        e.target.value = value;
    });

    // Manipulador de envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = {
            relation: document.getElementById('relation').value,
            uf: document.getElementById('uf').value,
            city: document.getElementById('city').value,
            address: document.getElementById('address').value,
            name: document.getElementById('name').value,
            document: document.getElementById('document').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            reason: document.getElementById('reason').value,
            brand: document.getElementById('brand').value,
            detail: document.getElementById('detail').value,
            description: document.getElementById('description').value
        };

        // Validar campos obrigatórios
        for (let key in formData) {
            if (!formData[key]) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
        }

        // Aqui você pode adicionar a lógica para enviar os dados para seu backend
        console.log('Dados do formulário:', formData);
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});