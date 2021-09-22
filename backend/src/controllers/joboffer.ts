class JobOfferController {
    defaultMethod() {
        return {
            jobOffers: TEST_JOB_OFFERS,
        };
    }
}

const TEST_JOB_OFFERS = [
    {
        "jobId": 0,
        "jobTitle": "Vaga de estágio na empresa ZUP",
        "jobTags": ["Web", "Banco de dados", "HTML", "CSS", "JS", "C#", "Café Pilão", "Cartucho de Impressora"],
        "jobDescription": "Descrição da empresa.\nDescrição da vaga, suas funções, responsablidades e observações.\nRequisitos da vaga:\nExperiência em desenvolvimento web\nRemuneração: A combinar."
    },
    {
        "jobId": 2,
        "jobTitle": "Vaga de Data Scientist na empresa Lorem Ipsum",
        "jobTags": ["Python", "Machine learning", "Data science"],
        "jobDescription": "Descrição da empresa.\nDescrição da vaga, suas funções, responsablidades e observações.\nRequisitos da vaga:\nExperiência em desenvolvimento web\nRemuneração: A combinar."
    },
    {
        "jobId": 3,
        "jobTitle": "Vaga de Suporte Técnico na empresa Arron Badah",
        "jobTags": ["Suporte", "MS Windows", "MS Office"],
        "jobDescription": "Descrição da empresa.\nDescrição da vaga, suas funções, responsablidades e observações.\nRequisitos da vaga:\nExperiência em desenvolvimento web\nRemuneração: A combinar."
    },
    {
        "jobId": 4,
        "jobTitle": "Vaga na empresa Arron Badah",
        "jobTags": ["Web", "Banco de dados", "Python", "Criptomoedas"],
        "jobDescription": "Descrição da empresa.\nDescrição da vaga, suas funções, responsablidades e observações.\nRequisitos da vaga:\nExperiência em desenvolvimento web\nRemuneração: A combinar."
    },
    {
        "jobId": 5,
        "jobTitle": "TITLE",
        "jobTags": ["TAGS"],
        "jobDescription": "Descrição da empresa.\nDescrição da vaga, suas funções, responsablidades e observações.\nRequisitos da vaga:\nExperiência em desenvolvimento web\nRemuneração: A combinar."
    }
]

export = new JobOfferController;
