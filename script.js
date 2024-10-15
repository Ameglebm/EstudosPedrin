const questions = [
    {
        question: "Qual a principal diferença entre o esqueleto dos insetos e o dos humanos?",
        options: [
            "Insetos têm esqueleto interno.",
            "Insetos têm esqueleto externo.",
            "Insetos não têm esqueleto.",
            "Ambos têm o mesmo tipo de esqueleto."
        ],
        answer: 1
    },
    {
        question: "O que são élitros e qual sua função nos besouros?",
        options: [
            "Asas de voo.",
            "Asas de proteção.",
            "Órgãos de reprodução.",
            "Apêndices para locomoção."
        ],
        answer: 1
    },
    {
        question: "Quais são alguns sintomas comuns de Lesões por Esforços Repetitivos (LER)?",
        options: [
            "Fadiga.",
            "Dores e formigamento.",
            "Aumento de peso.",
            "Melhora da postura."
        ],
        answer: 1
    },
    {
        question: "O que acontece com os ossos de galinha imersos em vinagre?",
        options: [
            "Eles se tornam mais rígidos.",
            "Eles se dissolvem completamente.",
            "Eles ficam flexíveis.",
            "Nada acontece."
        ],
        answer: 2
    },
    {
        question: "Qual é a função do tendão de Aquiles?",
        options: [
            "Flexão do pé.",
            "Apoio para a perna.",
            "Proteção do calcanhar.",
            "Movimento dos dedos."
        ],
        answer: 0
    },

    {
        question: "O que caracteriza o esqueleto dos insetos?",
        options: [
            "Esqueleto interno.",
            "Esqueleto externo.",
            "Esqueleto cartilaginoso.",
            "Esqueleto de colágeno."
        ],
        answer: 1
    },

    {
        question: "Quais são os principais componentes do sistema esquelético humano?",
        options: [
            "Ossos e tendões.",
            "Ossos e músculos.",
            "Ossos e nervos.",
            "Ossos, cartilagens e articulações."
        ],
        answer: 3
    },

    {
        question: "Qual dos seguintes é um desvio da coluna vertebral?",
        options: [
            "Hipercifose",
            "Hiperuricose",
            "Hipertensão",
            "Hiperlipidemia."
        ],
        answer: 1
    },

    {
        question: "O que pode ser uma causa de dor nas costas?",
        options: [
            "Apenas cansaço",
            "Problemas no sistema urinário",
            "Doenças respiratórias",
            "Falta de apetite"
        ],
        answer: 1 
    },

    {
        question: "Qual é uma recomendação para manter a saúde da coluna?",
        options: [
            "Dormir em colchões macios",
            "Manter as costas retas ao caminhar",
            "Carregar objetos pesados com um braço",
            "Permanecer sentado por longos períodos"
        ],
        answer: 1
    },

    {
        question: "A osteoporose é caracterizada por:",
        options: [
            "Aumento da massa óssea",
            "Fragilidade dos ossos",
            "Diminuição da dor nas articulações",
            "Melhora na mobilidade"
        ],
        answer: 1 
    },

    {
        question: "Em que idade a osteoporose tem maior incidência?",
        options: [
            "A partir dos 20 anos",
            "A partir dos 30 anos",
            "A partir dos 50 anos",
            "A partir dos 70 anos"
        ],
        answer: 2 
    },

    {
        question: "O que é uma fratura?",
        options: [
            "Uma lesão muscular",
            "Um deslocamento do osso",
            "Quebra de um osso",
            "Lesão ligamentar"
        ],
        answer: 2 
    },

    {
        question: "O que deve ser feito se houver suspeita de fratura?",
        options: [
            "Reposicionar o osso imediatamente",
            "Manter a vítima imóvel",
            "Aplicar calor na área fraturada",
            "Deixar a pessoa se mover livremente"
        ],
        answer: 1 
    },

    {
        question: "Qual é o objetivo de manter as partes quebradas do osso próximas uma da outra?",
        options: [
            "Para evitar dor",
            "Para permitir a regeneração do osso",
            "Para melhorar a circulação sanguínea",
            "Para evitar a formação de hematomas"
        ],
        answer: 1 
    },

    {
        question: "O que são entorses?",
        options: [
            "Quebra de ossos",
            "Lesões nos ligamentos",
            "Luxações de articulações",
            "Inflamações nos músculos"
        ],
        answer: 1 
    },

    {
        question: "Qual é uma forma comum de entorse?",
        options: [
            "No punho",
            "No tornozelo",
            "No quadril",
            "Na coluna vertebral"
        ],
        answer: 1 
    },

    {
        question: "O que é uma luxação?",
        options: [
            "Uma fratura simples",
            "Um deslocamento do osso na articulação",
            "Uma lesão ligamentar",
            "Um tipo de fratura com múltiplas partes"
        ],
        answer: 1 
    },

    {
        question: "Qual exame é normalmente realizado para diagnóstico de osteoporose?",
        options: [
            "Raio-X",
            "Densitometria óssea",
            "Tomografia computadorizada",
            "Ultrassonografia"
        ],
        answer: 1 
    },

    {
        question: "De acordo com a Organização Mundial da Saúde (OMS), o que é considerado atividade física?",
        options: [
            "Apenas exercícios em academias",
            "Qualquer movimento corporal que requeira gasto de energia",
            "Somente esportes competitivos",
            "Atividades que envolvem levantamento de peso"
        ],
        answer: 1 
    },

    {
        question: "O que é o termo 'exercício' se referindo?",
        options: [
            "Movimento natural do corpo",
            "Atividade física não planejada",
            "Atividade física planejada com objetivo específico",
            "Qualquer atividade recreativa"
        ],
        answer: 2 
    },

    {
        question: "Por que é importante ter orientação profissional ao praticar exercícios?",
        options: [
            "Para escolher a roupa adequada",
            "Para evitar lesões e garantir a eficácia do treino",
            "Para se sentir mais motivado",
            "Para garantir que todos pratiquem a mesma atividade"
        ],
        answer: 1 
    },

    {
        question: "Quais são alguns dos benefícios da prática regular de atividades físicas?",
        options: [
            "Aumento do estresse e da fadiga",
            "Melhora do condicionamento físico e controle de peso",
            "Diminuição da força muscular",
            "Aumento da pressão arterial"
        ],
        answer: 1 
    },

    {
        question: "Como a atividade física regular pode impactar a saúde mental?",
        options: [
            "Aumenta a ansiedade e a depressão",
            "Melhora a disposição física e mental",
            "Não tem impacto na saúde mental",
            "Faz com que as pessoas se sintam mais cansadas"
        ],
        answer: 1 
    },

    {
        question: "O que são esteroides anabolizantes?",
        options: [
            "Hormônios sintéticos semelhantes à insulina",
            "Hormônios sintéticos semelhantes à testosterona",
            "Vitaminas sintéticas para melhorar o desempenho",
            "Minerais que ajudam na construção muscular"
        ],
        answer: 1 
    },

    {
        question: "Para quais finalidades os esteroides anabolizantes podem ser prescritos por médicos?",
        options: [
            "Para emagrecimento",
            "Para aumentar a energia",
            "Para tratar a falta de hormônios masculinos",
            "Para melhorar o sono"
        ],
        answer: 2 
    },


    {
        question: "Quais são alguns dos perigos do uso não controlado de esteroides anabolizantes?",
        options: [
            "Aumento da força muscular e resistência",
            "Interrupção do crescimento, depressão e câncer de fígado",
            "Melhora na saúde cardiovascular",
            "Redução do estresse"
        ],
        answer: 1 
    },

    {
        question: "Qual é um dos efeitos colaterais do uso de esteroides anabolizantes nos homens?",
        options: [
            "Aumento do tamanho das mamas",
            "Esterilidade",
            "Aumento do ciclo menstrual",
            "Crescimento de cabelos na cabeça"
        ],
        answer: 1 
    },

    {
        question: "Quais alterações podem ocorrer nas mulheres que usam esteroides anabolizantes?",
        options: [
            "Aumento do tamanho dos seios",
            "Desenvolvimento de características masculinas",
            "Melhora no ciclo menstrual",
            "Aumento da feminilidade"
        ],
        answer: 1 
    },

    {
        question: "O que caracteriza o esqueleto dos animais vertebrados?",
        options: [
            "É externo e coberto pela pele",
            "É interno e fornece suporte ao corpo",
            "Não é presente em todos os vertebrados",
            "É feito de cartilagem apenas"
        ],
        answer: 1 
    },

    {
        question: "Como os exoesqueletos diferem dos esqueletos internos?",
        options: [
            "Os exoesqueletos são mais fortes",
            "Os exoesqueletos estão por fora do corpo",
            "Os exoesqueletos são mais flexíveis",
            "Os exoesqueletos são encontrados apenas em mamíferos"
        ],
        answer: 1 
    },

    {
        question: "Qual é a principal função do exoesqueleto dos artrópodes?",
        options: [
            "Proteger os órgãos internos",
            "Facilitar a respiração",
            "Permitir a expansão do corpo",
            "Produzir energia"
        ],
        answer: 0 
    },

    {
        question: "Como o exoesqueleto dos artrópodes se adapta ao crescimento do animal?",
        options: [
            "Ele se expande junto com o corpo",
            "Ele é substituído periodicamente durante o crescimento",
            "Ele se torna mais flexível",
            "Ele desaparece completamente"
        ],
        answer: 1 
    },

    {
        question: "Quais órgãos dos sentidos estão associados às antenas dos artrópodes?",
        options: [
            "Visão e paladar",
            "Olfato e tato",
            "Audição e equilíbrio",
            "Sensação térmica e gustativa"
        ],
        answer: 1 
    },

    {
        question: "Qual é a principal função do sistema nervoso nos artrópodes?",
        options: [
            "Controlar a respiração",
            "Regular a temperatura corporal",
            "Controlar a contração dos músculos e o movimento",
            "Produzir hormônios"
        ],
        answer: 2 
    },

    {
        question: "O que caracteriza o movimento de animais como minhocas e águas-vivas?",
        options: [
            "Eles têm esqueletos externos",
            "Eles se movem através da pressão de fluidos internos ou não possuem esqueleto",
            "Eles dependem exclusivamente do sistema nervoso",
            "Eles têm exoesqueletos rígidos"
        ],
        answer: 1 
    },

    {
        question: "Como a quitina, presente no exoesqueleto dos camarões, pode ser utilizada?",
        options: [
            "Para alimentar outros animais",
            "Para produzir plásticos ecológicos",
            "Para criar medicamentos",
            "Para enriquecer o solo"
        ],
        answer: 1 
    },

    {
        question: "Qual é o princípio da física que explica o voo das aves e dos aviões?",
        options: [
            "Lei da Gravidade",
            "Lei de Newton",
            "Lei de Bernoulli",
            "Lei da Conservação da Energia"
        ],
        answer: 2 
    },

    {
        question: "Qual é a principal característica dos insetos que permite o voo?",
        options: [
            "Sistema nervoso complexo",
            "Exoesqueleto leve",
            "Presença de asas",
            "Musculatura peitoral"
        ],
        answer: 2 
    },

    {
        question: "Como os músculos verticais e longitudinais dos insetos contribuem para o movimento das asas?",
        options: [
            "Eles controlam a respiração",
            "Eles alteram a pressão do ar",
            "A contração dos músculos altera a forma do exoesqueleto, fazendo as asas subirem e descerem",
            "Eles criam calor para o voo"
        ],
        answer: 2 
    },

    {
        question: "O que caracteriza o esqueleto das aves que as ajuda a voar?",
        options: [
            "É rígido e pesado",
            "É leve e possui um osso externo bem desenvolvido com carena",
            "É formado apenas por cartilagem",
            "É composto por ossos sólidos e densos"
        ],
        answer: 1 
    },

    {
        question: "Qual é a função da carena no esqueleto das aves?",
        options: [
            "Proteger o coração",
            "Sustentar os músculos das pernas",
            "Servir como ponto de fixação para a musculatura peitoral",
            "Aumentar a resistência ao vento"
        ],
        answer: 2 
    },

    {
        question: "Qual é a importância da visão nas aves durante o voo?",
        options: [
            "Ajuda na identificação de predadores",
            "Contribui para o controle preciso dos músculos das asas",
            "Melhora a comunicação entre aves",
            "Permite encontrar alimentos no solo"
        ],
        answer: 1 
    },

    {
        question: "Como as aves criam força de ascensão ao bater as asas?",
        options: [
            "Quando as asas se levantam",
            "Quando as asas descem",
            "Quando as asas estão paradas",
            "Durante a decolagem apenas"
        ],
        answer: 1 
    },

    {
        question: "O que ocorre quando uma ave se lança de um ponto alto para decolar?",
        options: [
            "Ela não precisa bater as asas",
            "Ela utiliza a energia da gravidade para ganhar altura",
            "Ela não pode controlar sua altura",
            "Ela deve bater as asas continuamente para descer"
        ],
        answer: 0 
    },

    {
        question: "Qual é a relação entre os músculos do peito das aves e o movimento das asas?",
        options: [
            "Eles não têm relação",
            "Os músculos do peito são os responsáveis pelo batimento das asas",
            "Os músculos das asas são independentes dos músculos do peito",
            "Os músculos do peito são apenas para sustentar o corpo"
        ],
        answer: 1 
    },

    {
        question: "Qual osso é responsável por proteger a medula espinal?",
        options: [
            "Fêmur",
            "Mandíbula",
            "Vértebra", 
            "Esterno"
        ],
        answer: 2
    },
    
    {
        question: "Qual é o osso mais longo do corpo humano?",
        options: [
            "Tíbia",
            "Fêmur", 
            "Úmero",
            "Rádio"
        ],
        answer: 1
    },

    {
        question: "Qual é a função da mandíbula?",
        options: [
            "Proteger o cérebro",
            "Permitir a movimentação da boca para a mastigação e a fala", 
            "Conectar a coluna vertebral ao crânio",
            "Servir como ponto de anexo para os músculos do pescoço"
        ],
        answer: 1
    },

    {
        question: "Quais ossos formam a caixa torácica?",
        options: [
            "Costelas", 
            "Vértebras",
            "Escápulas",
            "Esterno"
        ],
        answer: 0
    },

    {
        question: "Quais órgãos são protegidos pela caixa torácica?",
        options: [
            "Coração e fígado",
            "Coração e pulmões", 
            "Fígado e baço",
            "Pulmões e cérebro"
        ],
        answer: 1
    },

    {
        question: "Na radiografia de tórax, o que geralmente aparece como duas manchas grandes e escuras?",
        options: [
            "Coração",
            "Estômago",
            "Pulmões", 
            "Costelas"
        ],
        answer: 2
    },

    {
        question: "Como os músculos antagonistas permitem o movimento do braço?",
        options: [
            "Um músculo se contrai enquanto o outro relaxa", 
            "Ambos os músculos se contraem simultaneamente",
            "Um músculo é responsável pela flexão e o outro pela extensão",
            "O sistema nervoso não está envolvido no movimento"
        ],
        answer: 0
    },

    {
        question: "Qual sistema controla e coordena os movimentos musculares?",
        options: [
            "Sistema circulatório",
            "Sistema nervoso", 
            "Sistema digestório",
            "Sistema endócrino"
        ],
        answer: 1
    },

    {
        question: "Quais músculos continuam a se contrair mesmo em repouso?",
        options: [
            "Músculos esqueléticos",
            "Músculos do coração", 
            "Músculos lisos do intestino",
            "Músculos da face"
        ],
        answer: 1
    },

    {
        question: "Qual sistema é responsável pela contração dos músculos esqueléticos?",
        options: [
            "Sistema nervoso central",
            "Sistema nervoso periférico",
            "Sistema nervoso autônomo", 
            "Sistema respiratório"
        ],
        answer: 2
    },

    {
        question: "Qual sistema é responsável pela contração dos músculos esqueléticos?",
        options: [
            "Sistema nervoso central",
            "Sistema nervoso periférico",
            "Sistema nervoso autônomo", 
            "Sistema respiratório"
        ],
        answer: 2
    },

    {
        question: "Como o sistema esquelético interage com o sistema muscular?",
        options: [
            "Os músculos esqueléticos se conectam aos ossos", 
            "Os ossos se contraem para movimentar os músculos",
            "Não há interação entre eles",
            "Os músculos apenas protegem os ossos"
        ],
        answer: 0
    },

    {
        question: "Como o sistema nervoso interage com o sistema esquelético?",
        options: [
            "Ele não interage",
            "O sistema nervoso controla os músculos e coordena os movimentos", 
            "Ele fortalece os ossos",
            "Ele é responsável pela formação dos ossos"
        ],
        answer: 1
    },

    {
        question: "Qual é a relação entre a caixa torácica e o sistema respiratório?",
        options: [
            "A caixa torácica é responsável pela produção de oxigênio",
            "A caixa torácica protege os órgãos respiratórios e ajuda na respiração", 
            "A caixa torácica não tem relação com a respiração",
            "A caixa torácica é onde os músculos respiratórios se conectam"
        ],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hidden");
    scoreElement.classList.add("hidden");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("div");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(index) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const selectedOption = optionsElement.children[index];

    if (index === correctAnswer) {
        selectedOption.classList.add("correct");
        score++;
    } else {
        selectedOption.classList.add("wrong");
        optionsElement.children[correctAnswer].classList.add("correct");
    }

    Array.from(optionsElement.children).forEach(button => {
        button.classList.add("disabled");
    });

    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add("hidden");
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.classList.add("hidden");
    optionsElement.classList.add("hidden");
    nextButton.classList.add("hidden");

    scoreElement.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
    scoreElement.classList.remove("hidden");
}

startGame();
