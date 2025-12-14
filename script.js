const cards = document.querySelectorAll('.servico-card');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

const modalTitulo = document.getElementById('modalTitulo');
const modalDescricao = document.getElementById('modalDescricao');
const modalTempo = document.getElementById('modalTempo');
const modalValor = document.getElementById('modalValor');
const modalWhatsapp = document.getElementById('modalWhatsapp');

cards.forEach(card => {
    card.addEventListener('click', () => {
        modalTitulo.textContent = card.dataset.servico;
        modalDescricao.textContent = card.dataset.descricao;
        modalTempo.textContent = `⏱ Tempo médio: ${card.dataset.tempo}`;
        modalValor.textContent = `💰 Valor: ${card.dataset.valor}`;

        modalWhatsapp.href =
            `https://wa.me/5547991418036?text=${encodeURIComponent(card.dataset.msg)}`;

        modal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
