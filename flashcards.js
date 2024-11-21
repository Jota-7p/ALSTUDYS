const cards = [
    { category: "Ciências", question: "Por que o céu é azul?", answer: "A luz do sol se espalha na atmosfera, e o azul é a cor que se espalha mais devido à sua menor frequência." },
    { category: "História", question: "Qual foi o principal impacto da Revolução Industrial?", answer: "Transformou as sociedades agrárias em industriais, promovendo avanços tecnológicos e urbanização." },
    { category: "Matemática", question: "O que é o número π (pi)?", answer: "É uma constante que representa a razão entre a circunferência e o diâmetro de um círculo, aproximadamente 3,14159." },
    { category: "Física", question: "O que é a teoria da relatividade?", answer: "É uma teoria de Albert Einstein que explica a relação entre espaço, tempo e gravidade." },
    { category: "Geografia", question: "Qual país tem a maior quantidade de fusos horários?", answer: "A França, devido aos seus territórios ultramarinos." },
    { category: "Astronomia", question: "O que é um buraco negro?", answer: "É uma região do espaço com gravidade tão forte que nem a luz pode escapar." },
    { category: "Biologia", question: "Qual é o papel do DNA nas células?", answer: "O DNA contém as instruções genéticas para o desenvolvimento e funcionamento dos organismos vivos." },
    { category: "Tecnologia", question: "O que é inteligência artificial?", answer: "É o campo da ciência da computação que busca criar sistemas capazes de realizar tarefas que normalmente requerem inteligência humana." },
    { category: "Arte", question: "O que caracteriza o estilo impressionista?", answer: "Uso de pinceladas soltas, cores vivas e foco em captar luz e movimento." },
    { category: "Filosofia", question: "O que significa 'cogito, ergo sum'?", answer: "Significa 'Penso, logo existo', uma frase do filósofo René Descartes." },
];

const flashcardContainer = document.getElementById('alstudys-cards');

cards.forEach(({ category, question, answer }) => {
    const card = document.createElement('div');
    card.classList.add('flashcard');

    card.innerHTML = `
        <h3>${category}</h3>
        <p class="question">${question}</p>
        <p class="answer hidden">${answer}</p>
    `;

    card.addEventListener('click', () => {
        const answerElement = card.querySelector('.answer');
        answerElement.classList.toggle('hidden');
    });

    flashcardContainer.appendChild(card);
});
