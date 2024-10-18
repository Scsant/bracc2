// Constantes para configuração
let currentChart = null;
const jornadaPorPagina = 400; // Limite de treinamentos por página para teste
let paginaAtual = 1;
let totalPaginas = 1;

const jorDados = [
    {
        "Matricula": 7015263,
        "Nome": "Sebastiao Ribeiro De Campos",
        "Data infração": "2024-09-28",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:31:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015267,
        "Nome": "Emerson Loriano Martins",
        "Data infração": "2024-09-30",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015270,
        "Nome": "Elton Aparecido Fadoni",
        "Data infração": "2024-09-14",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:59:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015279,
        "Nome": "Bruno Cesar Rodrigues Missias",
        "Data infração": "2024-09-11",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "01:52:00"
    },
    {
        "Matricula": 37015279,
        "Nome": "Bruno Cesar Rodrigues Missias",
        "Data infração": "2024-09-27",
        "Centro de Custo": 373100,
        "Estouro jornada": "04:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015279,
        "Nome": "Bruno Cesar Rodrigues Missias",
        "Data infração": "2024-10-02",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:23:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015287,
        "Nome": "Edenilson Floriano De Almeida",
        "Data infração": "2024-09-12",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015287,
        "Nome": "Edenilson Floriano De Almeida",
        "Data infração": "2024-09-23",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:30:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015287,
        "Nome": "Edenilson Floriano De Almeida",
        "Data infração": "2024-09-29",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015287,
        "Nome": "Edenilson Floriano De Almeida",
        "Data infração": "2024-10-03",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015287,
        "Nome": "Edenilson Floriano De Almeida",
        "Data infração": "2024-10-05",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015290,
        "Nome": "Caio Rodrigo Barbosa do Amaral",
        "Data infração": "2024-09-21",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015300,
        "Nome": "Claudio Dos Santos Ribeiro",
        "Data infração": "2024-09-20",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015300,
        "Nome": "Claudio Dos Santos Ribeiro",
        "Data infração": "2024-09-26",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015300,
        "Nome": "Claudio Dos Santos Ribeiro",
        "Data infração": "2024-10-02",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:45:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015300,
        "Nome": "Claudio Dos Santos Ribeiro",
        "Data infração": "2024-10-07",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015578,
        "Nome": "Jose Dos Santos Araujo",
        "Data infração": "2024-09-28",
        "Centro de Custo": 373100,
        "Estouro jornada": "04:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016350,
        "Nome": "Isaias Jose Da Silva",
        "Data infração": "2024-09-28",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016350,
        "Nome": "Isaias Jose Da Silva",
        "Data infração": "2024-10-08",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016354,
        "Nome": "Marcos Leite",
        "Data infração": "2024-10-08",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016355,
        "Nome": "Alexsandro Rodrigues da Silva",
        "Data infração": "2024-09-16",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016355,
        "Nome": "Alexsandro Rodrigues da Silva",
        "Data infração": "2024-09-19",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:30:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016355,
        "Nome": "Alexsandro Rodrigues da Silva",
        "Data infração": "2024-09-20",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:41:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016355,
        "Nome": "Alexsandro Rodrigues da Silva",
        "Data infração": "2024-10-05",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:29:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016355,
        "Nome": "Alexsandro Rodrigues da Silva",
        "Data infração": "2024-10-06",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016357,
        "Nome": "Carlos Fabiano Ruiz",
        "Data infração": "2024-09-12",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:43:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016357,
        "Nome": "Carlos Fabiano Ruiz",
        "Data infração": "2024-09-13",
        "Centro de Custo": 373100,
        "Estouro jornada": "04:24:00",
        "Interjornada": "00:26:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016357,
        "Nome": "Carlos Fabiano Ruiz",
        "Data infração": "2024-09-17",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016357,
        "Nome": "Carlos Fabiano Ruiz",
        "Data infração": "2024-09-18",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016357,
        "Nome": "Carlos Fabiano Ruiz",
        "Data infração": "2024-09-25",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016357,
        "Nome": "Carlos Fabiano Ruiz",
        "Data infração": "2024-10-07",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016388,
        "Nome": "Jose Macedo De Araujo",
        "Data infração": "2024-09-20",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016388,
        "Nome": "Jose Macedo De Araujo",
        "Data infração": "2024-09-22",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016388,
        "Nome": "Jose Macedo De Araujo",
        "Data infração": "2024-10-02",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016106,
        "Nome": "Rodrigo de Oliveira Venancio",
        "Data infração": "2024-09-21",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37016106,
        "Nome": "Rodrigo de Oliveira Venancio",
        "Data infração": "2024-09-22",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-09-11",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:53:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-09-14",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:18:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-09-23",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-09-24",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-09-27",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-09-29",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-09-30",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:56:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-10-03",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015521,
        "Nome": "Alex Sandro Jose Rossi",
        "Data infração": "2024-10-04",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015522,
        "Nome": "Genival Luiz De Assis",
        "Data infração": "2024-09-11",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015523,
        "Nome": "Claudinei Aparecido Da Silva",
        "Data infração": "2024-09-21",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015523,
        "Nome": "Claudinei Aparecido Da Silva",
        "Data infração": "2024-09-29",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015447,
        "Nome": "JAIR FERREIRA SANTOS",
        "Data infração": "2024-09-14",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:55:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015447,
        "Nome": "JAIR FERREIRA SANTOS",
        "Data infração": "2024-09-19",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015447,
        "Nome": "JAIR FERREIRA SANTOS",
        "Data infração": "2024-09-28",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015447,
        "Nome": "JAIR FERREIRA SANTOS",
        "Data infração": "2024-10-02",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:23:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015447,
        "Nome": "JAIR FERREIRA SANTOS",
        "Data infração": "2024-10-03",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:22:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015447,
        "Nome": "JAIR FERREIRA SANTOS",
        "Data infração": "2024-10-04",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:19:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015435,
        "Nome": "Alexandre Aparecido Ferreira",
        "Data infração": "2024-09-13",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015437,
        "Nome": "Ricardo Cesar Dos Santos",
        "Data infração": "2024-09-25",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015437,
        "Nome": "Ricardo Cesar Dos Santos",
        "Data infração": "2024-09-29",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:35:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015437,
        "Nome": "Ricardo Cesar Dos Santos",
        "Data infração": "2024-09-30",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:35:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015437,
        "Nome": "Ricardo Cesar Dos Santos",
        "Data infração": "2024-10-01",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015431,
        "Nome": "Tedi Alisson Rodrigues",
        "Data infração": "2024-09-28",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015432,
        "Nome": "Marco Antonio dos Santos",
        "Data infração": "2024-09-13",
        "Centro de Custo": 373100,
        "Estouro jornada": "04:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015432,
        "Nome": "Marco Antonio dos Santos",
        "Data infração": "2024-09-19",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015432,
        "Nome": "Marco Antonio dos Santos",
        "Data infração": "2024-09-20",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015432,
        "Nome": "Marco Antonio dos Santos",
        "Data infração": "2024-10-07",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015427,
        "Nome": "Lucio Goncalves Maldonado",
        "Data infração": "2024-09-19",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015427,
        "Nome": "Lucio Goncalves Maldonado",
        "Data infração": "2024-09-20",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015427,
        "Nome": "Lucio Goncalves Maldonado",
        "Data infração": "2024-10-01",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37015427,
        "Nome": "Lucio Goncalves Maldonado",
        "Data infração": "2024-10-02",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:22:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37017785,
        "Nome": "Nilton Cesar Chaves",
        "Data infração": "2024-09-22",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37017954,
        "Nome": "Carlos Alexandre De Sousa Pereira",
        "Data infração": "2024-09-24",
        "Centro de Custo": 373100,
        "Estouro jornada": "05:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37017954,
        "Nome": "Carlos Alexandre De Sousa Pereira",
        "Data infração": "2024-09-25",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:27:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37017998,
        "Nome": "Fabricio Brizighello De Sa Pavan",
        "Data infração": "2024-10-09",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37017999,
        "Nome": "Donizete Junior Dos Santos",
        "Data infração": "2024-10-08",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018095,
        "Nome": "Wellington Aparecido Dias",
        "Data infração": "2024-09-24",
        "Centro de Custo": 373100,
        "Estouro jornada": "04:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018095,
        "Nome": "Wellington Aparecido Dias",
        "Data infração": "2024-09-25",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:26:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018704,
        "Nome": "Jander Olimpio Stefanato",
        "Data infração": "2024-09-26",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018704,
        "Nome": "Jander Olimpio Stefanato",
        "Data infração": "2024-09-29",
        "Centro de Custo": 373113,
        "Estouro jornada": "03:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018704,
        "Nome": "Jander Olimpio Stefanato",
        "Data infração": "2024-10-07",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018704,
        "Nome": "Jander Olimpio Stefanato",
        "Data infração": "2024-10-08",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018724,
        "Nome": "Jose Marcos Da Silva",
        "Data infração": "2024-09-21",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:51:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018724,
        "Nome": "Jose Marcos Da Silva",
        "Data infração": "2024-10-01",
        "Centro de Custo": 373113,
        "Estouro jornada": "03:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018724,
        "Nome": "Jose Marcos Da Silva",
        "Data infração": "2024-10-04",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018724,
        "Nome": "Jose Marcos Da Silva",
        "Data infração": "2024-10-09",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018499,
        "Nome": "Jose Antonio Moeca Junior",
        "Data infração": "2024-09-13",
        "Centro de Custo": 373113,
        "Estouro jornada": "04:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018499,
        "Nome": "Jose Antonio Moeca Junior",
        "Data infração": "2024-09-14",
        "Centro de Custo": 373113,
        "Estouro jornada": "06:50:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018499,
        "Nome": "Jose Antonio Moeca Junior",
        "Data infração": "2024-09-20",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018499,
        "Nome": "Jose Antonio Moeca Junior",
        "Data infração": "2024-10-03",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018517,
        "Nome": "Andre Luis Furlanetto",
        "Data infração": "2024-09-19",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:57:00",
        "Interjornada": "00:33:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018517,
        "Nome": "Andre Luis Furlanetto",
        "Data infração": "2024-10-01",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019144,
        "Nome": "Rosiel dos Santos Rodrigues",
        "Data infração": "2024-10-07",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019159,
        "Nome": "Rodolfo Do Vale",
        "Data infração": "2024-09-28",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019159,
        "Nome": "Rodolfo Do Vale",
        "Data infração": "2024-10-03",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019183,
        "Nome": "Daniel Marcelino Dos Santos",
        "Data infração": "2024-09-12",
        "Centro de Custo": 373113,
        "Estouro jornada": "04:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019183,
        "Nome": "Daniel Marcelino Dos Santos",
        "Data infração": "2024-09-16",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:31:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019183,
        "Nome": "Daniel Marcelino Dos Santos",
        "Data infração": "2024-09-23",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019183,
        "Nome": "Daniel Marcelino Dos Santos",
        "Data infração": "2024-09-27",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019183,
        "Nome": "Daniel Marcelino Dos Santos",
        "Data infração": "2024-09-28",
        "Centro de Custo": 373113,
        "Estouro jornada": "03:48:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019183,
        "Nome": "Daniel Marcelino Dos Santos",
        "Data infração": "2024-09-30",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019183,
        "Nome": "Daniel Marcelino Dos Santos",
        "Data infração": "2024-10-06",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019274,
        "Nome": "Elton Rogerio Brombini",
        "Data infração": "2024-09-27",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019274,
        "Nome": "Elton Rogerio Brombini",
        "Data infração": "2024-09-28",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37019274,
        "Nome": "Elton Rogerio Brombini",
        "Data infração": "2024-09-29",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018083,
        "Nome": "Andre Luis Segura",
        "Data infração": "2024-09-22",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018083,
        "Nome": "Andre Luis Segura",
        "Data infração": "2024-09-23",
        "Centro de Custo": 373113,
        "Estouro jornada": "03:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018083,
        "Nome": "Andre Luis Segura",
        "Data infração": "2024-09-29",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018083,
        "Nome": "Andre Luis Segura",
        "Data infração": "2024-09-30",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018083,
        "Nome": "Andre Luis Segura",
        "Data infração": "2024-10-03",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018072,
        "Nome": "Jhon Cresler Primo",
        "Data infração": "2024-09-11",
        "Centro de Custo": 373113,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:41:00",
        "Trabalho na folga": "01:41:00"
    },
    {
        "Matricula": 37018072,
        "Nome": "Jhon Cresler Primo",
        "Data infração": "2024-10-04",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018072,
        "Nome": "Jhon Cresler Primo",
        "Data infração": "2024-10-10",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018081,
        "Nome": "Guilherme Dos Santos Silva",
        "Data infração": "2024-09-13",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:28:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018081,
        "Nome": "Guilherme Dos Santos Silva",
        "Data infração": "2024-09-21",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:24:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018081,
        "Nome": "Guilherme Dos Santos Silva",
        "Data infração": "2024-09-26",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:19:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018074,
        "Nome": "Marcilio Aparecido Marques Dos Santos Pr",
        "Data infração": "2024-09-12",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018079,
        "Nome": "Tiago Gomes Araujo",
        "Data infração": "2024-09-25",
        "Centro de Custo": 373113,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018082,
        "Nome": "Aparecido Donizeti Costa",
        "Data infração": "2024-09-12",
        "Centro de Custo": 421102,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018082,
        "Nome": "Aparecido Donizeti Costa",
        "Data infração": "2024-09-26",
        "Centro de Custo": 421102,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018082,
        "Nome": "Aparecido Donizeti Costa",
        "Data infração": "2024-10-03",
        "Centro de Custo": 421102,
        "Estouro jornada": "02:39:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37018082,
        "Nome": "Aparecido Donizeti Costa",
        "Data infração": "2024-10-10",
        "Centro de Custo": 421102,
        "Estouro jornada": "02:54:00",
        "Interjornada": "00:00:00",
        "Trabalho na folga": "00:00:00"
    },
    {
        "Matricula": 37014393,
        "Nome": "Ronaldo Dos Santos Lopes",
        "Data infração": "2024-09-14",
        "Centro de Custo": 331120,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014393,
        "Nome": "Ronaldo Dos Santos Lopes",
        "Data infração": "2024-09-21",
        "Centro de Custo": 331120,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014393,
        "Nome": "Ronaldo Dos Santos Lopes",
        "Data infração": "2024-09-28",
        "Centro de Custo": 331120,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014393,
        "Nome": "Ronaldo Dos Santos Lopes",
        "Data infração": "2024-10-05",
        "Centro de Custo": 331120,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013970,
        "Nome": "Carlos Eduardo Custodio",
        "Data infração": "2024-09-24",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014538,
        "Nome": "Thiago De Padua",
        "Data infração": "2024-09-11",
        "Centro de Custo": 371009,
        "Estouro jornada": "04:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014538,
        "Nome": "Thiago De Padua",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371009,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:09:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014538,
        "Nome": "Thiago De Padua",
        "Data infração": "2024-09-13",
        "Centro de Custo": 371009,
        "Estouro jornada": "03:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014538,
        "Nome": "Thiago De Padua",
        "Data infração": "2024-09-24",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014583,
        "Nome": "JOSIMAR DA SILVA",
        "Data infração": "2024-09-18",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014583,
        "Nome": "JOSIMAR DA SILVA",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:23:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014586,
        "Nome": "Luis Rogerio Da Silva",
        "Data infração": "2024-09-19",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014587,
        "Nome": "Vanderlei Aparecido Reinhold",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014592,
        "Nome": "Edson Vaz Cardoso Moreira",
        "Data infração": "2024-10-08",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014618,
        "Nome": "JOSE ROBERTO FERREIRA DA ROCHA",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014618,
        "Nome": "JOSE ROBERTO FERREIRA DA ROCHA",
        "Data infração": "2024-10-08",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014649,
        "Nome": "AGNALDO GOMES DE OLIVEIRA",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014649,
        "Nome": "AGNALDO GOMES DE OLIVEIRA",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:38:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014438,
        "Nome": "Francisco Das Chagas Carvalho Rodrigues",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014438,
        "Nome": "Francisco Das Chagas Carvalho Rodrigues",
        "Data infração": "2024-09-25",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014438,
        "Nome": "Francisco Das Chagas Carvalho Rodrigues",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014438,
        "Nome": "Francisco Das Chagas Carvalho Rodrigues",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014449,
        "Nome": "Wagner Fernando Catto",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014449,
        "Nome": "Wagner Fernando Catto",
        "Data infração": "2024-10-07",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014463,
        "Nome": "Ezequiel Miranda Dos Santos",
        "Data infração": "2024-09-16",
        "Centro de Custo": 371009,
        "Estouro jornada": "03:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014463,
        "Nome": "Ezequiel Miranda Dos Santos",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014463,
        "Nome": "Ezequiel Miranda Dos Santos",
        "Data infração": "2024-09-26",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014463,
        "Nome": "Ezequiel Miranda Dos Santos",
        "Data infração": "2024-09-27",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:41:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014463,
        "Nome": "Ezequiel Miranda Dos Santos",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014463,
        "Nome": "Ezequiel Miranda Dos Santos",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014463,
        "Nome": "Ezequiel Miranda Dos Santos",
        "Data infração": "2024-10-08",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015357,
        "Nome": "Michael Emanoel da Anunciacao",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015357,
        "Nome": "Michael Emanoel da Anunciacao",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015357,
        "Nome": "Michael Emanoel da Anunciacao",
        "Data infração": "2024-09-27",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:50:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018073,
        "Nome": "Samuel Da Silva Cordeiro",
        "Data infração": "2024-10-07",
        "Centro de Custo": 371009,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37019169,
        "Nome": "Vagner Magalhaes Viana",
        "Data infração": "2024-09-25",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:50:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37019169,
        "Nome": "Vagner Magalhaes Viana",
        "Data infração": "2024-09-26",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37019169,
        "Nome": "Vagner Magalhaes Viana",
        "Data infração": "2024-09-27",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37019169,
        "Nome": "Vagner Magalhaes Viana",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37019169,
        "Nome": "Vagner Magalhaes Viana",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "04:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37019169,
        "Nome": "Vagner Magalhaes Viana",
        "Data infração": "2024-10-02",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:13:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37019169,
        "Nome": "Vagner Magalhaes Viana",
        "Data infração": "2024-10-09",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37019141,
        "Nome": "Leson Ricki Teodoro de Souza",
        "Data infração": "2024-10-02",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018401,
        "Nome": "Gabriel Ricardo Pazinato Gobi",
        "Data infração": "2024-09-11",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:59:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018401,
        "Nome": "Gabriel Ricardo Pazinato Gobi",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:59:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018096,
        "Nome": "Valdinei Vicente Da Silva",
        "Data infração": "2024-09-18",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:50:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018096,
        "Nome": "Valdinei Vicente Da Silva",
        "Data infração": "2024-09-27",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018096,
        "Nome": "Valdinei Vicente Da Silva",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:06:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018096,
        "Nome": "Valdinei Vicente Da Silva",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018005,
        "Nome": "Jose Rogerio Firmino Da Silva",
        "Data infração": "2024-09-11",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:40:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018005,
        "Nome": "Jose Rogerio Firmino Da Silva",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:47:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018005,
        "Nome": "Jose Rogerio Firmino Da Silva",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:48:00",
        "Interjornada": "00:13:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018005,
        "Nome": "Jose Rogerio Firmino Da Silva",
        "Data infração": "2024-09-30",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018005,
        "Nome": "Jose Rogerio Firmino Da Silva",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017814,
        "Nome": "Sebastiao De Araujo",
        "Data infração": "2024-09-19",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:45:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017814,
        "Nome": "Sebastiao De Araujo",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015411,
        "Nome": "Everton Luiz Pedroso",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:35:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015415,
        "Nome": "FRANCISCO ANTONIO SILVESTRE",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015416,
        "Nome": "Carlos Alberto Da Silva",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015416,
        "Nome": "Carlos Alberto Da Silva",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015416,
        "Nome": "Carlos Alberto Da Silva",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015077,
        "Nome": "Denison Eduardo De Almeida",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015171,
        "Nome": "Leandro Henrique Da Silva Bortoleti",
        "Data infração": "2024-09-13",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015171,
        "Nome": "Leandro Henrique Da Silva Bortoleti",
        "Data infração": "2024-09-19",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008918,
        "Nome": "LEANDRO GENERICK",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:40:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008918,
        "Nome": "LEANDRO GENERICK",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008931,
        "Nome": "FERNANDO RICARDO SILVA",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008931,
        "Nome": "FERNANDO RICARDO SILVA",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008931,
        "Nome": "FERNANDO RICARDO SILVA",
        "Data infração": "2024-09-26",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008931,
        "Nome": "FERNANDO RICARDO SILVA",
        "Data infração": "2024-09-27",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008931,
        "Nome": "FERNANDO RICARDO SILVA",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:28:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008931,
        "Nome": "FERNANDO RICARDO SILVA",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:55:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008931,
        "Nome": "FERNANDO RICARDO SILVA",
        "Data infração": "2024-10-08",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008931,
        "Nome": "FERNANDO RICARDO SILVA",
        "Data infração": "2024-10-09",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008954,
        "Nome": "JERRI GILBERTO TEIXEIRA",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008958,
        "Nome": "EDSON LUIS DE FRANCA",
        "Data infração": "2024-09-25",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008958,
        "Nome": "EDSON LUIS DE FRANCA",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:36:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008963,
        "Nome": "ABEL JOSE DE OLIVEIRA",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008963,
        "Nome": "ABEL JOSE DE OLIVEIRA",
        "Data infração": "2024-09-23",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:38:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008963,
        "Nome": "ABEL JOSE DE OLIVEIRA",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008963,
        "Nome": "ABEL JOSE DE OLIVEIRA",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008965,
        "Nome": "ELENILSON ALEXANDRE ALVES",
        "Data infração": "2024-09-26",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008971,
        "Nome": "MARCOS ANTONIO GRASSI",
        "Data infração": "2024-10-09",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008972,
        "Nome": "JEFERSON VICENTE VIGNA",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008976,
        "Nome": "ADEMIR CORDEIRO DE LIMA",
        "Data infração": "2024-09-17",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37008976,
        "Nome": "ADEMIR CORDEIRO DE LIMA",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:28:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009153,
        "Nome": "ROBERTO ANTONIO DE ANDRADE",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009154,
        "Nome": "OSMAR DE ARRUDA",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:31:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009154,
        "Nome": "OSMAR DE ARRUDA",
        "Data infração": "2024-10-02",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:03:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009162,
        "Nome": "OSVALDO GUERRA PAIXAO JUNIOR",
        "Data infração": "2024-09-20",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009169,
        "Nome": "ROBERTO SOUSA LOPES",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "04:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009169,
        "Nome": "ROBERTO SOUSA LOPES",
        "Data infração": "2024-10-02",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:02:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009169,
        "Nome": "ROBERTO SOUSA LOPES",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009193,
        "Nome": "RONALDO FRANCISCO DOS SANTOS",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009195,
        "Nome": "NILDO CERQUEIRA CAVALCANTE",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009195,
        "Nome": "NILDO CERQUEIRA CAVALCANTE",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009195,
        "Nome": "NILDO CERQUEIRA CAVALCANTE",
        "Data infração": "2024-10-09",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:50:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009197,
        "Nome": "ARCISIO CLAUDINEI SILVA",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009197,
        "Nome": "ARCISIO CLAUDINEI SILVA",
        "Data infração": "2024-09-13",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009197,
        "Nome": "ARCISIO CLAUDINEI SILVA",
        "Data infração": "2024-09-18",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009197,
        "Nome": "ARCISIO CLAUDINEI SILVA",
        "Data infração": "2024-09-25",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:26:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009197,
        "Nome": "ARCISIO CLAUDINEI SILVA",
        "Data infração": "2024-09-26",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:56:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009199,
        "Nome": "ALEX MISAEL MARTINEZ",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009212,
        "Nome": "FERNANDO DOS SANTOS FERREIRA",
        "Data infração": "2024-10-06",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009237,
        "Nome": "ANTONIO MARCOS MARTINS",
        "Data infração": "2024-09-18",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009237,
        "Nome": "ANTONIO MARCOS MARTINS",
        "Data infração": "2024-09-19",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:34:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009237,
        "Nome": "ANTONIO MARCOS MARTINS",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:40:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009237,
        "Nome": "ANTONIO MARCOS MARTINS",
        "Data infração": "2024-09-30",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:30:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009237,
        "Nome": "ANTONIO MARCOS MARTINS",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:28:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009237,
        "Nome": "ANTONIO MARCOS MARTINS",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009237,
        "Nome": "ANTONIO MARCOS MARTINS",
        "Data infração": "2024-10-06",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:11:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009257,
        "Nome": "ANDRE SOARES DE CAMPOS",
        "Data infração": "2024-09-24",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009257,
        "Nome": "ANDRE SOARES DE CAMPOS",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009257,
        "Nome": "ANDRE SOARES DE CAMPOS",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009262,
        "Nome": "DURVAL FERNANDO DOS SANTOS",
        "Data infração": "2024-09-27",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:36:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009262,
        "Nome": "DURVAL FERNANDO DOS SANTOS",
        "Data infração": "2024-09-30",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:29:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009267,
        "Nome": "MAURICIO FRUTUOSO CAVALCANTI",
        "Data infração": "2024-09-23",
        "Centro de Custo": 371120,
        "Estouro jornada": "10:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009267,
        "Nome": "MAURICIO FRUTUOSO CAVALCANTI",
        "Data infração": "2024-10-02",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009284,
        "Nome": "PAULO SUMAN",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:32:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009284,
        "Nome": "PAULO SUMAN",
        "Data infração": "2024-09-27",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009284,
        "Nome": "PAULO SUMAN",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:24:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009284,
        "Nome": "PAULO SUMAN",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371120,
        "Estouro jornada": "05:56:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009284,
        "Nome": "PAULO SUMAN",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:31:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009298,
        "Nome": "REINALDO DE ALMEIDA FERREIRA",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:02:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009351,
        "Nome": "ANTONIO CARLOS RIBEIRO ALVES",
        "Data infração": "2024-10-06",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009362,
        "Nome": "EFRAIM JEFFERSON DE OLIVEIRA",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009362,
        "Nome": "EFRAIM JEFFERSON DE OLIVEIRA",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009362,
        "Nome": "EFRAIM JEFFERSON DE OLIVEIRA",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:06:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009362,
        "Nome": "EFRAIM JEFFERSON DE OLIVEIRA",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015170,
        "Nome": "Leandro Henrique Da Silva Bortoleti",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015171,
        "Nome": "Leandro Henrique Da Silva Bortoleti",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014469,
        "Nome": "Fabricio Camargo Da Silva",
        "Data infração": "2024-09-26",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:01:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015087,
        "Nome": "Aguinaldo Aparecido Justo",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015087,
        "Nome": "Aguinaldo Aparecido Justo",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015102,
        "Nome": "Luciano Antonio Oliveira",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015102,
        "Nome": "Luciano Antonio Oliveira",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:11:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015102,
        "Nome": "Luciano Antonio Oliveira",
        "Data infração": "2024-10-09",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015106,
        "Nome": "Alexandre De Jesus Vitorino",
        "Data infração": "2024-09-23",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015106,
        "Nome": "Alexandre De Jesus Vitorino",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015115,
        "Nome": "Marcelo Augusto Peres Da Silva",
        "Data infração": "2024-09-11",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015115,
        "Nome": "Marcelo Augusto Peres Da Silva",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015115,
        "Nome": "Marcelo Augusto Peres Da Silva",
        "Data infração": "2024-09-14",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014711,
        "Nome": "JOSIVAM LUIZ DA SILVA",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:23:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014711,
        "Nome": "JOSIVAM LUIZ DA SILVA",
        "Data infração": "2024-09-24",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014711,
        "Nome": "JOSIVAM LUIZ DA SILVA",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:55:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014711,
        "Nome": "JOSIVAM LUIZ DA SILVA",
        "Data infração": "2024-10-02",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014711,
        "Nome": "JOSIVAM LUIZ DA SILVA",
        "Data infração": "2024-10-05",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:47:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014718,
        "Nome": "SIDNEY APARECIDO MUNHOZ",
        "Data infração": "2024-09-27",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014727,
        "Nome": "Daniel Marco Andre",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014727,
        "Nome": "Daniel Marco Andre",
        "Data infração": "2024-10-09",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014737,
        "Nome": "Eduardo Rodrigues Martinucho",
        "Data infração": "2024-09-11",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014739,
        "Nome": "David Biancao",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:19:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014739,
        "Nome": "David Biancao",
        "Data infração": "2024-09-25",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014744,
        "Nome": "Gilmar Barboza",
        "Data infração": "2024-09-11",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014744,
        "Nome": "Gilmar Barboza",
        "Data infração": "2024-09-17",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014748,
        "Nome": "Vanderleia Aparecida Da Fonseca",
        "Data infração": "2024-09-14",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014748,
        "Nome": "Vanderleia Aparecida Da Fonseca",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014756,
        "Nome": "Jose Luiz De Oliveira",
        "Data infração": "2024-10-07",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:20:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014758,
        "Nome": "LUIS GUSTAVO BOATO",
        "Data infração": "2024-09-24",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:55:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014761,
        "Nome": "Bruno Rodrigues de Morais",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014761,
        "Nome": "Bruno Rodrigues de Morais",
        "Data infração": "2024-09-16",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014776,
        "Nome": "Jose Luis Barbosa De Oliveira",
        "Data infração": "2024-09-25",
        "Centro de Custo": 371120,
        "Estouro jornada": "05:48:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014776,
        "Nome": "Jose Luis Barbosa De Oliveira",
        "Data infração": "2024-09-26",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:08:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014776,
        "Nome": "Jose Luis Barbosa De Oliveira",
        "Data infração": "2024-10-02",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014789,
        "Nome": "VITOR HELIO DANTAS PURIDELI",
        "Data infração": "2024-09-20",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014789,
        "Nome": "VITOR HELIO DANTAS PURIDELI",
        "Data infração": "2024-09-29",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014833,
        "Nome": "Vanderlei Aparecido De Lima",
        "Data infração": "2024-09-20",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014833,
        "Nome": "Vanderlei Aparecido De Lima",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014853,
        "Nome": "Jose Adelson De Carvalho",
        "Data infração": "2024-09-25",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:44:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014854,
        "Nome": "Jose Nilson Rodrigues Bonfim",
        "Data infração": "2024-09-20",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014855,
        "Nome": "Erisvan Barros da Silva",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014855,
        "Nome": "Erisvan Barros da Silva",
        "Data infração": "2024-10-04",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013979,
        "Nome": "Alessandro Aparecido Porto",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013979,
        "Nome": "Alessandro Aparecido Porto",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:26:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014013,
        "Nome": "William Alex Theodoro",
        "Data infração": "2024-09-19",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014013,
        "Nome": "William Alex Theodoro",
        "Data infração": "2024-09-28",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014054,
        "Nome": "Ailton Pereira",
        "Data infração": "2024-09-23",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:44:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014054,
        "Nome": "Ailton Pereira",
        "Data infração": "2024-09-24",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:55:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014158,
        "Nome": "Carlos Eduardo Duarte Souza Campos",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014194,
        "Nome": "Daniel Elias De Siqueira",
        "Data infração": "2024-09-22",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014194,
        "Nome": "Daniel Elias De Siqueira",
        "Data infração": "2024-09-23",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014194,
        "Nome": "Daniel Elias De Siqueira",
        "Data infração": "2024-09-30",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:39:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014249,
        "Nome": "Aldair Jose Da Silva",
        "Data infração": "2024-09-11",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "09:56:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014249,
        "Nome": "Aldair Jose Da Silva",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:30:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014328,
        "Nome": "Gabriel Augusto Antunes",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014340,
        "Nome": "Jose Roberto Aureliano",
        "Data infração": "2024-09-12",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:01:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014340,
        "Nome": "Jose Roberto Aureliano",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:54:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014340,
        "Nome": "Jose Roberto Aureliano",
        "Data infração": "2024-10-03",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014340,
        "Nome": "Jose Roberto Aureliano",
        "Data infração": "2024-10-10",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014370,
        "Nome": "Jose Ernandes Da Silva Soares",
        "Data infração": "2024-09-26",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:54:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37010468,
        "Nome": "Marcos Roberto de Oliveira",
        "Data infração": "2024-09-18",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37010468,
        "Nome": "Marcos Roberto de Oliveira",
        "Data infração": "2024-09-30",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013225,
        "Nome": "Valter Alves Lima",
        "Data infração": "2024-09-21",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013225,
        "Nome": "Valter Alves Lima",
        "Data infração": "2024-10-01",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "11:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014888,
        "Nome": "Jose Carlos De Oliveira",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:26:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014919,
        "Nome": "Rodolfo Henrique Souza Silva",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014921,
        "Nome": "ADRIANO APARECIDO RAMIRO",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014921,
        "Nome": "ADRIANO APARECIDO RAMIRO",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014921,
        "Nome": "ADRIANO APARECIDO RAMIRO",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014922,
        "Nome": "Wanderson Rafael Americo",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:29:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014939,
        "Nome": "Marcio Pereira",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014961,
        "Nome": "Alex Brandao Lopes",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "12:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014961,
        "Nome": "Alex Brandao Lopes",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014961,
        "Nome": "Alex Brandao Lopes",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014968,
        "Nome": "Luiz Paulo Gimenes",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014970,
        "Nome": "Eider Cesar Costa Soares",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014971,
        "Nome": "RONY NEUBERN ZAGO",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014971,
        "Nome": "RONY NEUBERN ZAGO",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014971,
        "Nome": "RONY NEUBERN ZAGO",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014971,
        "Nome": "RONY NEUBERN ZAGO",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014972,
        "Nome": "Silvio Nunes da Assuncao",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:41:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014972,
        "Nome": "Silvio Nunes da Assuncao",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014972,
        "Nome": "Silvio Nunes da Assuncao",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014972,
        "Nome": "Silvio Nunes da Assuncao",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:41:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014980,
        "Nome": "Helton De Oliveira Martins",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:59:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014980,
        "Nome": "Helton De Oliveira Martins",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:59:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014981,
        "Nome": "Paulo Sergio Maiolo Junior",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014981,
        "Nome": "Paulo Sergio Maiolo Junior",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014981,
        "Nome": "Paulo Sergio Maiolo Junior",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014982,
        "Nome": "Jose Prudente Melo",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014999,
        "Nome": "Gilberto Rodrigues Campos",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014999,
        "Nome": "Gilberto Rodrigues Campos",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014999,
        "Nome": "Gilberto Rodrigues Campos",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014999,
        "Nome": "Gilberto Rodrigues Campos",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37014999,
        "Nome": "Gilberto Rodrigues Campos",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015011,
        "Nome": "Marcelo Gobbi Marciano",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015011,
        "Nome": "Marcelo Gobbi Marciano",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015011,
        "Nome": "Marcelo Gobbi Marciano",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015012,
        "Nome": "ADRIANO FERNANDES DE OLIVEIRA",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:45:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015012,
        "Nome": "ADRIANO FERNANDES DE OLIVEIRA",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:44:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015014,
        "Nome": "ANTONIO DE JESUS BATISTA",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015015,
        "Nome": "Alex Sandro de Almeida Cestaro",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015015,
        "Nome": "Alex Sandro de Almeida Cestaro",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015015,
        "Nome": "Alex Sandro de Almeida Cestaro",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015015,
        "Nome": "Alex Sandro de Almeida Cestaro",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015015,
        "Nome": "Alex Sandro de Almeida Cestaro",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015015,
        "Nome": "Alex Sandro de Almeida Cestaro",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015056,
        "Nome": "MARCELO DE SOUZA CARDOSO",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015344,
        "Nome": "NIVALDO GARCIA",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015344,
        "Nome": "NIVALDO GARCIA",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015429,
        "Nome": "Tiago Henrique Xavier",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:53:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015495,
        "Nome": "Jean Mota Santos",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "07:15:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015495,
        "Nome": "Jean Mota Santos",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "05:26:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015495,
        "Nome": "Jean Mota Santos",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "03:04:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015495,
        "Nome": "Jean Mota Santos",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015509,
        "Nome": "Gilmar Rocha Teixeira",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:38:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015613,
        "Nome": "Silvio Cezar Marcato",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015613,
        "Nome": "Silvio Cezar Marcato",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015613,
        "Nome": "Silvio Cezar Marcato",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015613,
        "Nome": "Silvio Cezar Marcato",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015613,
        "Nome": "Silvio Cezar Marcato",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015613,
        "Nome": "Silvio Cezar Marcato",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015613,
        "Nome": "Silvio Cezar Marcato",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015615,
        "Nome": "Aldemar Pereira De Jesus",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015726,
        "Nome": "Marcio Roberto De Paula",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:30:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015726,
        "Nome": "Marcio Roberto De Paula",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015726,
        "Nome": "Marcio Roberto De Paula",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015726,
        "Nome": "Marcio Roberto De Paula",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:36:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015752,
        "Nome": "Maicon Rogerio Fayan",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:38:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015752,
        "Nome": "Maicon Rogerio Fayan",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:34:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015772,
        "Nome": "Jhonatan Wilson Dias Oliveira",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015779,
        "Nome": "Vanderlei Suptil da Silva",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015796,
        "Nome": "Douglas Felipe Ulian",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015796,
        "Nome": "Douglas Felipe Ulian",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:50:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015796,
        "Nome": "Douglas Felipe Ulian",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015796,
        "Nome": "Douglas Felipe Ulian",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015796,
        "Nome": "Douglas Felipe Ulian",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:11:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015796,
        "Nome": "Douglas Felipe Ulian",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015796,
        "Nome": "Douglas Felipe Ulian",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015803,
        "Nome": "Adailton Correa da Silva",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015822,
        "Nome": "Claudir Martins Lopes",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015822,
        "Nome": "Claudir Martins Lopes",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015825,
        "Nome": "Edson Aparecido Lopes",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "09:54:00",
        "Interjornada": "08:53:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015825,
        "Nome": "Edson Aparecido Lopes",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015825,
        "Nome": "Edson Aparecido Lopes",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015827,
        "Nome": "Denni Carlos De Jesus",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "05:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015827,
        "Nome": "Denni Carlos De Jesus",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015827,
        "Nome": "Denni Carlos De Jesus",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:34:00",
        "Interjornada": "00:25:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015827,
        "Nome": "Denni Carlos De Jesus",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:53:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015827,
        "Nome": "Denni Carlos De Jesus",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015898,
        "Nome": "Roberto De Arcanjo Junior",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015898,
        "Nome": "Roberto De Arcanjo Junior",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015898,
        "Nome": "Roberto De Arcanjo Junior",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015898,
        "Nome": "Roberto De Arcanjo Junior",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016114,
        "Nome": "Carlos Alexandre De Albuquerque",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016118,
        "Nome": "Thiago Henrique Goncalves Medolago",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016118,
        "Nome": "Thiago Henrique Goncalves Medolago",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016120,
        "Nome": "Jessica Maria Barbosa",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016122,
        "Nome": "Eduardo Marciano",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016129,
        "Nome": "Jose Aparecido da Paixao",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016129,
        "Nome": "Jose Aparecido da Paixao",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015580,
        "Nome": "Robson Lucio De Souza Santos",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:35:00",
        "Interjornada": "00:02:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015584,
        "Nome": "Jeferson Coelho Da Silva Vieira",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:37:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015585,
        "Nome": "Renato Pereira Dos Santos",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015585,
        "Nome": "Renato Pereira Dos Santos",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:59:00",
        "Interjornada": "01:04:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015586,
        "Nome": "Vanclei Dias De Souza",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015587,
        "Nome": "Jose Carlos Mesacio",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015587,
        "Nome": "Jose Carlos Mesacio",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:58:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015587,
        "Nome": "Jose Carlos Mesacio",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015587,
        "Nome": "Jose Carlos Mesacio",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015587,
        "Nome": "Jose Carlos Mesacio",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "04:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015587,
        "Nome": "Jose Carlos Mesacio",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:24:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015591,
        "Nome": "Reginaldo Rocha De Jesus Santos",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:26:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015591,
        "Nome": "Reginaldo Rocha De Jesus Santos",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015592,
        "Nome": "Eduardo Rosanova",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015592,
        "Nome": "Eduardo Rosanova",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015592,
        "Nome": "Eduardo Rosanova",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015592,
        "Nome": "Eduardo Rosanova",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015601,
        "Nome": "Sebastiao Adicio Ramos De Moraes",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015601,
        "Nome": "Sebastiao Adicio Ramos De Moraes",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015601,
        "Nome": "Sebastiao Adicio Ramos De Moraes",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:54:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015601,
        "Nome": "Sebastiao Adicio Ramos De Moraes",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015601,
        "Nome": "Sebastiao Adicio Ramos De Moraes",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015573,
        "Nome": "Adriano Severino Da Silva",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015573,
        "Nome": "Adriano Severino Da Silva",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:33:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015573,
        "Nome": "Adriano Severino Da Silva",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015574,
        "Nome": "Carlos Jose Correia Gomes",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015574,
        "Nome": "Carlos Jose Correia Gomes",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016457,
        "Nome": "Helton Fernando Rodrigues",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016727,
        "Nome": "Jose Ronildo Ferreira Da Silva",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017453,
        "Nome": "Jose Irineudo De Lima",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017453,
        "Nome": "Jose Irineudo De Lima",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017453,
        "Nome": "Jose Irineudo De Lima",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:26:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017453,
        "Nome": "Jose Irineudo De Lima",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "09:58:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017557,
        "Nome": "Jose Augusto Verardo",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017566,
        "Nome": "Denivaldo Batista De Souza",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017566,
        "Nome": "Denivaldo Batista De Souza",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:38:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017573,
        "Nome": "Ygor Dantas Gomes Da Silva",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017551,
        "Nome": "Lucas Eduardo Morelato",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:19:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017551,
        "Nome": "Lucas Eduardo Morelato",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017581,
        "Nome": "Ronaldo Francisco Machado",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017581,
        "Nome": "Ronaldo Francisco Machado",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "01:48:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017653,
        "Nome": "Luciano Marcelino Elias Gomes Coletta",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017653,
        "Nome": "Luciano Marcelino Elias Gomes Coletta",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:33:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017654,
        "Nome": "Luiz Antonio Candido",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017658,
        "Nome": "Leandro Aparecido Martins",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017658,
        "Nome": "Leandro Aparecido Martins",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017658,
        "Nome": "Leandro Aparecido Martins",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017660,
        "Nome": "Dinomar Da Costa Carvalho",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017667,
        "Nome": "Marcos Balbueno Dos Santos",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "11:22:00",
        "Interjornada": "11:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017667,
        "Nome": "Marcos Balbueno Dos Santos",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017667,
        "Nome": "Marcos Balbueno Dos Santos",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017667,
        "Nome": "Marcos Balbueno Dos Santos",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017680,
        "Nome": "Joao Dias Gomes",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:32:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017683,
        "Nome": "Alexandre De Souza",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017739,
        "Nome": "Celio Moreira Da Silva",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "13:57:00",
        "Interjornada": "11:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017794,
        "Nome": "Felipe Gameleira da Silva",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:39:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017794,
        "Nome": "Felipe Gameleira da Silva",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017794,
        "Nome": "Felipe Gameleira da Silva",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017833,
        "Nome": "Jefferson Carlos Da Silva",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017833,
        "Nome": "Jefferson Carlos Da Silva",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:19:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017833,
        "Nome": "Jefferson Carlos Da Silva",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:59:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37000605,
        "Nome": "MANOEL BENEDITO DA SILVA",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37000605,
        "Nome": "MANOEL BENEDITO DA SILVA",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:02:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006243,
        "Nome": "EVANDRO CARLOS RIBEIRO DA SILVA",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006243,
        "Nome": "EVANDRO CARLOS RIBEIRO DA SILVA",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006243,
        "Nome": "EVANDRO CARLOS RIBEIRO DA SILVA",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006243,
        "Nome": "EVANDRO CARLOS RIBEIRO DA SILVA",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:38:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006246,
        "Nome": "SERGIO CARVALHO DE SOUZA",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006246,
        "Nome": "SERGIO CARVALHO DE SOUZA",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006246,
        "Nome": "SERGIO CARVALHO DE SOUZA",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006250,
        "Nome": "ATAMIRIO APARECIDO DA SILVA",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006250,
        "Nome": "ATAMIRIO APARECIDO DA SILVA",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:55:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006250,
        "Nome": "ATAMIRIO APARECIDO DA SILVA",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006253,
        "Nome": "CARLOS ORTIZ DE CAMARGO",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006271,
        "Nome": "JEFFERSON RONY CLAY GOMES",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006271,
        "Nome": "JEFFERSON RONY CLAY GOMES",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:24:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006271,
        "Nome": "JEFFERSON RONY CLAY GOMES",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006285,
        "Nome": "ALDEIRANO ARTIOLI JUNIOR",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006285,
        "Nome": "ALDEIRANO ARTIOLI JUNIOR",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006285,
        "Nome": "ALDEIRANO ARTIOLI JUNIOR",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006294,
        "Nome": "EDMILSON DO CARMO",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "13:48:00",
        "Interjornada": "10:30:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006294,
        "Nome": "EDMILSON DO CARMO",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006294,
        "Nome": "EDMILSON DO CARMO",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006314,
        "Nome": "SERGIO GRACIANO DOS SANTOS",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006314,
        "Nome": "SERGIO GRACIANO DOS SANTOS",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "12:45:00",
        "Interjornada": "01:59:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006314,
        "Nome": "SERGIO GRACIANO DOS SANTOS",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006315,
        "Nome": "SIVALDO DOS SANTOS",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006333,
        "Nome": "OSMAR PEREIRA",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006334,
        "Nome": "OSMAR PEREIRA",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006355,
        "Nome": "JOSE LUIZ DE GODOY",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006355,
        "Nome": "JOSE LUIZ DE GODOY",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "13:57:00",
        "Interjornada": "10:54:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006355,
        "Nome": "JOSE LUIZ DE GODOY",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006358,
        "Nome": "MARCOS ROBERTO MIRANDA",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006358,
        "Nome": "MARCOS ROBERTO MIRANDA",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:20:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006358,
        "Nome": "MARCOS ROBERTO MIRANDA",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006358,
        "Nome": "MARCOS ROBERTO MIRANDA",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:22:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006358,
        "Nome": "MARCOS ROBERTO MIRANDA",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006360,
        "Nome": "CARLOS ANDRE GONCALVES DE SOUZA",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006360,
        "Nome": "CARLOS ANDRE GONCALVES DE SOUZA",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006499,
        "Nome": "VALDEILSON REIS FONSECA",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006512,
        "Nome": "LUIZ SEBASTIAO JORDAN",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006512,
        "Nome": "LUIZ SEBASTIAO JORDAN",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006512,
        "Nome": "LUIZ SEBASTIAO JORDAN",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006512,
        "Nome": "LUIZ SEBASTIAO JORDAN",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006526,
        "Nome": "JOAO BATISTA BORGES",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006534,
        "Nome": "PEDRO LUIZ ALEIXO DO PRADO",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006534,
        "Nome": "PEDRO LUIZ ALEIXO DO PRADO",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006635,
        "Nome": "DAVI GUILHERME DO CARMO",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006635,
        "Nome": "DAVI GUILHERME DO CARMO",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006635,
        "Nome": "DAVI GUILHERME DO CARMO",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006639,
        "Nome": "HENRIQUE FERNANDO DE OLIVEIRA",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006639,
        "Nome": "HENRIQUE FERNANDO DE OLIVEIRA",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006643,
        "Nome": "FABIO FLAVIO DA SILVA",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "07:42:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006645,
        "Nome": "CLAUDINEI NALIN",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006645,
        "Nome": "CLAUDINEI NALIN",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006646,
        "Nome": "MARCELO CRISTIANO ALMEIDA",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006646,
        "Nome": "MARCELO CRISTIANO ALMEIDA",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:51:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006650,
        "Nome": "BENEDITO DE OLIVEIRA",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:47:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006650,
        "Nome": "BENEDITO DE OLIVEIRA",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006650,
        "Nome": "BENEDITO DE OLIVEIRA",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006679,
        "Nome": "ANDERSON DENIS PEREIRA DA SILVA",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:54:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006679,
        "Nome": "ANDERSON DENIS PEREIRA DA SILVA",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006679,
        "Nome": "ANDERSON DENIS PEREIRA DA SILVA",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:44:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006679,
        "Nome": "ANDERSON DENIS PEREIRA DA SILVA",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:06:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006679,
        "Nome": "ANDERSON DENIS PEREIRA DA SILVA",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:26:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006679,
        "Nome": "ANDERSON DENIS PEREIRA DA SILVA",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006686,
        "Nome": "JOSE ANGELO LEITE BARAUNA",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006686,
        "Nome": "JOSE ANGELO LEITE BARAUNA",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006686,
        "Nome": "JOSE ANGELO LEITE BARAUNA",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006686,
        "Nome": "JOSE ANGELO LEITE BARAUNA",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "08:20:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006686,
        "Nome": "JOSE ANGELO LEITE BARAUNA",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006716,
        "Nome": "CRISTIANO FERMINO ALVES",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006724,
        "Nome": "ANTONIO CESAR IANELLA",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:23:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006729,
        "Nome": "ODEMIR ARCOS",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006729,
        "Nome": "ODEMIR ARCOS",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:29:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006751,
        "Nome": "REGIS DE ALMEIDA MACHADO",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006755,
        "Nome": "AMARO DA SILVA SOUZA",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "07:20:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006755,
        "Nome": "AMARO DA SILVA SOUZA",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "04:12:00",
        "Interjornada": "02:11:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006756,
        "Nome": "ROGERIO MACHADO DE ABREU",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "05:28:00",
        "Interjornada": "05:19:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006756,
        "Nome": "ROGERIO MACHADO DE ABREU",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:22:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006756,
        "Nome": "ROGERIO MACHADO DE ABREU",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006756,
        "Nome": "ROGERIO MACHADO DE ABREU",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006758,
        "Nome": "VALTEMIR SOUZA DOS SANTOS",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "04:51:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006758,
        "Nome": "VALTEMIR SOUZA DOS SANTOS",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:50:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006758,
        "Nome": "VALTEMIR SOUZA DOS SANTOS",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006758,
        "Nome": "VALTEMIR SOUZA DOS SANTOS",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:39:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006758,
        "Nome": "VALTEMIR SOUZA DOS SANTOS",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006788,
        "Nome": "DIOGENES ALVES DE ARRUDA",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006788,
        "Nome": "DIOGENES ALVES DE ARRUDA",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006788,
        "Nome": "DIOGENES ALVES DE ARRUDA",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006790,
        "Nome": "BRAZ APARECIDO ZAGHI TEIXEIRA",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006790,
        "Nome": "BRAZ APARECIDO ZAGHI TEIXEIRA",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37006790,
        "Nome": "BRAZ APARECIDO ZAGHI TEIXEIRA",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006790,
        "Nome": "BRAZ APARECIDO ZAGHI TEIXEIRA",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "7     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006790,
        "Nome": "BRAZ APARECIDO ZAGHI TEIXEIRA",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "7     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006790,
        "Nome": "BRAZ APARECIDO ZAGHI TEIXEIRA",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006791,
        "Nome": "DANIEL LOPES MENDES DA CRUZ",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "3     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006791,
        "Nome": "DANIEL LOPES MENDES DA CRUZ",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "9     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37005694,
        "Nome": "DIVALDO GILIOLI",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "3     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37005694,
        "Nome": "DIVALDO GILIOLI",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "9     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37005694,
        "Nome": "DIVALDO GILIOLI",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "9     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37005694,
        "Nome": "DIVALDO GILIOLI",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:00:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37005694,
        "Nome": "DIVALDO GILIOLI",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "6     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37005700,
        "Nome": "REGINALDO RIGO PEREIRA",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "2     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37005874,
        "Nome": "VILAMAR ANTONIO MARTOS",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "9     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006560,
        "Nome": "APARECIDO CICERO GOMES",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "0     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006560,
        "Nome": "APARECIDO CICERO GOMES",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "7     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006560,
        "Nome": "APARECIDO CICERO GOMES",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "3     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006560,
        "Nome": "APARECIDO CICERO GOMES",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "3     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006831,
        "Nome": "MARCELO RODRIGO PALUDETO",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006832,
        "Nome": "NADIE DE ALCANTARA",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006832,
        "Nome": "NADIE DE ALCANTARA",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "6     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006832,
        "Nome": "NADIE DE ALCANTARA",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "4     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006855,
        "Nome": "ADAILTON MANOEL DA SILVA",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006913,
        "Nome": "EDSON ROBERTO DE CAMARGO",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37006913,
        "Nome": "EDSON ROBERTO DE CAMARGO",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "7     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37007667,
        "Nome": "REGINALDO ANTONIO DOS SANTOS BERTU",
        "Data infração": "LA13/09/2024 0",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37007667,
        "Nome": "REGINALDO ANTONIO DOS SANTOS BERTU",
        "Data infração": "LA02/10/2024 0",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37007746,
        "Nome": "DJAVAN BARROS DE SOUZA",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "04:01:00",
        "Interjornada": "9     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37007746,
        "Nome": "DJAVAN BARROS DE SOUZA",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "0     01:1",
        "Trabalho na Folga": "2     00:00"
    },
    {
        "Matricula": 37007746,
        "Nome": "DJAVAN BARROS DE SOUZA",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "0     00:4",
        "Trabalho na Folga": "6     00:00"
    },
    {
        "Matricula": 37008009,
        "Nome": "EDENIR BATISTA DE ARAUJO",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "3     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008012,
        "Nome": "JOAO VITOR MALDONADO",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "6     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008012,
        "Nome": "JOAO VITOR MALDONADO",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008014,
        "Nome": "JORGE DE SOUZA BEZERRA",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "9     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008014,
        "Nome": "JORGE DE SOUZA BEZERRA",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008014,
        "Nome": "JORGE DE SOUZA BEZERRA",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "4     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008014,
        "Nome": "JORGE DE SOUZA BEZERRA",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008054,
        "Nome": "ODAIR JOSE DA SILVA",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008089,
        "Nome": "ELIO ANTONIO DE OLIVEIRA FILHO",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008089,
        "Nome": "ELIO ANTONIO DE OLIVEIRA FILHO",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "4     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008813,
        "Nome": "JOSE CARLOS CAMILO",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "7     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008814,
        "Nome": "MARCELO XAVIER DUARTE PIPA",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "4     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008814,
        "Nome": "MARCELO XAVIER DUARTE PIPA",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "7     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008818,
        "Nome": "MARCOS ANTONIO SOARES",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "2     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008818,
        "Nome": "MARCOS ANTONIO SOARES",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "4     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008818,
        "Nome": "MARCOS ANTONIO SOARES",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008818,
        "Nome": "MARCOS ANTONIO SOARES",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "0     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008838,
        "Nome": "EGUENSON REIS DA SILVA",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008841,
        "Nome": "PEDRO PEREIRA DA SILVA",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "3     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008841,
        "Nome": "PEDRO PEREIRA DA SILVA",
        "Data infração": "2024-09-15 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "0     00:4",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008841,
        "Nome": "PEDRO PEREIRA DA SILVA",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "8     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008845,
        "Nome": "BENEDITO CLEBER DE SIQUEIRA",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "8     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008845,
        "Nome": "BENEDITO CLEBER DE SIQUEIRA",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008845,
        "Nome": "BENEDITO CLEBER DE SIQUEIRA",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "7     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008845,
        "Nome": "BENEDITO CLEBER DE SIQUEIRA",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "1     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008851,
        "Nome": "AGUINALDO ISRAEL PELA",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008859,
        "Nome": "NILTON APARECIDO SILVA",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "2     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008859,
        "Nome": "NILTON APARECIDO SILVA",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "0     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008885,
        "Nome": "EDVALDO BARBOZA",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "9     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008891,
        "Nome": "ELI CRISTIANO MUSSI",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "3     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008900,
        "Nome": "PAULO HENRIQUE DA SILVA",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "6     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008900,
        "Nome": "PAULO HENRIQUE DA SILVA",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "7     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008900,
        "Nome": "PAULO HENRIQUE DA SILVA",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "3     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008908,
        "Nome": "JOSIEL PEREIRA",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:00:00",
        "Interjornada": "2     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008918,
        "Nome": "LEANDRO GENERICK",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "0     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37008918,
        "Nome": "LEANDRO GENERICK",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "5     00:0",
        "Trabalho na Folga": "0     00:00"
    },
    {
        "Matricula": 37009362,
        "Nome": "EFRAIM JEFFERSON DE OLIVEIRA",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009363,
        "Nome": "MARCELO APARECIDO BENTO",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009363,
        "Nome": "MARCELO APARECIDO BENTO",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:20:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009363,
        "Nome": "MARCELO APARECIDO BENTO",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009363,
        "Nome": "MARCELO APARECIDO BENTO",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009363,
        "Nome": "MARCELO APARECIDO BENTO",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009368,
        "Nome": "JOSE ROBERTO DE LIMA",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009368,
        "Nome": "JOSE ROBERTO DE LIMA",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009371,
        "Nome": "LEANDRO PUERTA GIANFILICI",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:02:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009371,
        "Nome": "LEANDRO PUERTA GIANFILICI",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009372,
        "Nome": "VALDEMIR DONIZETTI DA SILVA",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009372,
        "Nome": "VALDEMIR DONIZETTI DA SILVA",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009372,
        "Nome": "VALDEMIR DONIZETTI DA SILVA",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009377,
        "Nome": "JOSE ROBERTO GRAMMINHA",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009377,
        "Nome": "JOSE ROBERTO GRAMMINHA",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009382,
        "Nome": "EVERTON LUIZ MENDES DA SILVA",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:39:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009382,
        "Nome": "EVERTON LUIZ MENDES DA SILVA",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009415,
        "Nome": "PAULO HENRIQUE MAROLA",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009423,
        "Nome": "ODAIR CORDEIRO DE OLIVEIRA",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "10:59:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009423,
        "Nome": "ODAIR CORDEIRO DE OLIVEIRA",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "04:14:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009423,
        "Nome": "ODAIR CORDEIRO DE OLIVEIRA",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009423,
        "Nome": "ODAIR CORDEIRO DE OLIVEIRA",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "13:51:00",
        "Interjornada": "11:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009423,
        "Nome": "ODAIR CORDEIRO DE OLIVEIRA",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:47:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009513,
        "Nome": "ODAIR ROGERIO DE SOUZA",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "11:00:00",
        "Interjornada": "11:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37009513,
        "Nome": "ODAIR ROGERIO DE SOUZA",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009526,
        "Nome": "CARLOS ALBERTO BRAZILIO",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009526,
        "Nome": "CARLOS ALBERTO BRAZILIO",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:04:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009526,
        "Nome": "CARLOS ALBERTO BRAZILIO",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009532,
        "Nome": "ALEX BAUMANN SKAU",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009532,
        "Nome": "ALEX BAUMANN SKAU",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009538,
        "Nome": "GILMAR EVANGELISTA DE OLIVEIRA",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:53:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37009544,
        "Nome": "JONAS DANIEL FERNANDES",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007321,
        "Nome": "PEDRO DE SOUZA",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:39:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007356,
        "Nome": "SEBASTIAO BATISTA DE FREITAS FILHO",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007356,
        "Nome": "SEBASTIAO BATISTA DE FREITAS FILHO",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007356,
        "Nome": "SEBASTIAO BATISTA DE FREITAS FILHO",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007361,
        "Nome": "ADRIANO APARECIDO LIMA DE OLIVEIRA",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007361,
        "Nome": "ADRIANO APARECIDO LIMA DE OLIVEIRA",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007361,
        "Nome": "ADRIANO APARECIDO LIMA DE OLIVEIRA",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:45:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007361,
        "Nome": "ADRIANO APARECIDO LIMA DE OLIVEIRA",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:56:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007370,
        "Nome": "ADEILDO FERREIRA DA SILVA",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007370,
        "Nome": "ADEILDO FERREIRA DA SILVA",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:16:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007370,
        "Nome": "ADEILDO FERREIRA DA SILVA",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007370,
        "Nome": "ADEILDO FERREIRA DA SILVA",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007370,
        "Nome": "ADEILDO FERREIRA DA SILVA",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007376,
        "Nome": "IVANILDO BALBINO DA SILVA",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007384,
        "Nome": "ROGERIO APARECIDO MOTA",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007384,
        "Nome": "ROGERIO APARECIDO MOTA",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007384,
        "Nome": "ROGERIO APARECIDO MOTA",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007386,
        "Nome": "CLAUDINEI LUIZ VINCOLETO",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007386,
        "Nome": "CLAUDINEI LUIZ VINCOLETO",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007386,
        "Nome": "CLAUDINEI LUIZ VINCOLETO",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007387,
        "Nome": "RICARDO RODRIGUES DA SILVA",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007387,
        "Nome": "RICARDO RODRIGUES DA SILVA",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007387,
        "Nome": "RICARDO RODRIGUES DA SILVA",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007387,
        "Nome": "RICARDO RODRIGUES DA SILVA",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007388,
        "Nome": "ORCELO LOURENCO DOS SANTOS FILHO",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007388,
        "Nome": "ORCELO LOURENCO DOS SANTOS FILHO",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007388,
        "Nome": "ORCELO LOURENCO DOS SANTOS FILHO",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007388,
        "Nome": "ORCELO LOURENCO DOS SANTOS FILHO",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007388,
        "Nome": "ORCELO LOURENCO DOS SANTOS FILHO",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007388,
        "Nome": "ORCELO LOURENCO DOS SANTOS FILHO",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007388,
        "Nome": "ORCELO LOURENCO DOS SANTOS FILHO",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "01:21:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007402,
        "Nome": "SERGIO ANTONIO ROSA",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007402,
        "Nome": "SERGIO ANTONIO ROSA",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37011299,
        "Nome": "Luiz Carlos Panini",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37011370,
        "Nome": "Arlindo Vicente Filho",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37011396,
        "Nome": "Luiz Marcos De Lima",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37011396,
        "Nome": "Luiz Marcos De Lima",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37011396,
        "Nome": "Luiz Marcos De Lima",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37011396,
        "Nome": "Luiz Marcos De Lima",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37011403,
        "Nome": "Ananias Marciano Ruiz",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37011403,
        "Nome": "Ananias Marciano Ruiz",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012075,
        "Nome": "Jose Marcio Palharim",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012075,
        "Nome": "Jose Marcio Palharim",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012075,
        "Nome": "Jose Marcio Palharim",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012075,
        "Nome": "Jose Marcio Palharim",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:02:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012264,
        "Nome": "Murilo Furlan",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012264,
        "Nome": "Murilo Furlan",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012441,
        "Nome": "Valdenil Da Silva",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012441,
        "Nome": "Valdenil Da Silva",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012484,
        "Nome": "Francisco Pereira Severo De Lima",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "03:55:00",
        "Interjornada": "02:49:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012645,
        "Nome": "Daniel De Oliveira",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012655,
        "Nome": "Moacir Sinval Correa Baptista",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012655,
        "Nome": "Moacir Sinval Correa Baptista",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012655,
        "Nome": "Moacir Sinval Correa Baptista",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:23:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012655,
        "Nome": "Moacir Sinval Correa Baptista",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012658,
        "Nome": "Renato Junior Sonsino",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012659,
        "Nome": "William Godoi",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012661,
        "Nome": "Valdenir Cordeiro Vitor",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012661,
        "Nome": "Valdenir Cordeiro Vitor",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012661,
        "Nome": "Valdenir Cordeiro Vitor",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:24:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012661,
        "Nome": "Valdenir Cordeiro Vitor",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012661,
        "Nome": "Valdenir Cordeiro Vitor",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012661,
        "Nome": "Valdenir Cordeiro Vitor",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012664,
        "Nome": "Jose Marcos Lopes Lacerda",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012664,
        "Nome": "Jose Marcos Lopes Lacerda",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012664,
        "Nome": "Jose Marcos Lopes Lacerda",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012664,
        "Nome": "Jose Marcos Lopes Lacerda",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012666,
        "Nome": "Francisco Batista Franca",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:19:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012666,
        "Nome": "Francisco Batista Franca",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012706,
        "Nome": "Valter de Souza",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:24:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012706,
        "Nome": "Valter de Souza",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012809,
        "Nome": "Divaldo de Jesus Lessei",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012809,
        "Nome": "Divaldo de Jesus Lessei",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012809,
        "Nome": "Divaldo de Jesus Lessei",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012812,
        "Nome": "Fabricio Mantuan de Assis",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:22:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012817,
        "Nome": "Vagner Jose Apolonio",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012817,
        "Nome": "Vagner Jose Apolonio",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012817,
        "Nome": "Vagner Jose Apolonio",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012817,
        "Nome": "Vagner Jose Apolonio",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012817,
        "Nome": "Vagner Jose Apolonio",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:15:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012817,
        "Nome": "Vagner Jose Apolonio",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013353,
        "Nome": "Ronaldo De Souza Lima",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013460,
        "Nome": "Felipe Proenca De Camargo",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013460,
        "Nome": "Felipe Proenca De Camargo",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013463,
        "Nome": "Cristiano Jose Da Silva",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013463,
        "Nome": "Cristiano Jose Da Silva",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013463,
        "Nome": "Cristiano Jose Da Silva",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013468,
        "Nome": "Anderson Alberico Gallis",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013469,
        "Nome": "Rogerio Antonio Da Silva",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013469,
        "Nome": "Rogerio Antonio Da Silva",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013479,
        "Nome": "Anderson Jose Bertoncin",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013481,
        "Nome": "Bruno Vinicius De Souza Regonato",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:01:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013485,
        "Nome": "Ueliton Pasqualinotto",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:35:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013485,
        "Nome": "Ueliton Pasqualinotto",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013485,
        "Nome": "Ueliton Pasqualinotto",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013492,
        "Nome": "Miguel Santos Junior",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:34:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013506,
        "Nome": "Fabio De Souza Lima",
        "Data infração": "2024-09-15 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:52:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013623,
        "Nome": "Izaltino Miguel De Oliveira",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013683,
        "Nome": "Julio Cesar Dos Santos",
        "Data infração": "2024-09-20 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013683,
        "Nome": "Julio Cesar Dos Santos",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013683,
        "Nome": "Julio Cesar Dos Santos",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013683,
        "Nome": "Julio Cesar Dos Santos",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013683,
        "Nome": "Julio Cesar Dos Santos",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013683,
        "Nome": "Julio Cesar Dos Santos",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013720,
        "Nome": "Reginaldo De Oliveira",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013724,
        "Nome": "Marcelo Joaquim",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013724,
        "Nome": "Marcelo Joaquim",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013724,
        "Nome": "Marcelo Joaquim",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013729,
        "Nome": "Jonas Alencar Daniel",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:19:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013729,
        "Nome": "Jonas Alencar Daniel",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013741,
        "Nome": "Julio Cesar Ribeiro De Bar",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:36:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013753,
        "Nome": "Fabiano Costa De Lima",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:19:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013753,
        "Nome": "Fabiano Costa De Lima",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013779,
        "Nome": "EDER MARTIMIANO LOPES",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:03:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013850,
        "Nome": "Julio Cesar Custodio",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:34:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013850,
        "Nome": "Julio Cesar Custodio",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013850,
        "Nome": "Julio Cesar Custodio",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013855,
        "Nome": "Danilo De Oliveira",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013862,
        "Nome": "Andre Luiz Alves Dos Santo",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:28:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013862,
        "Nome": "Andre Luiz Alves Dos Santo",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013864,
        "Nome": "Lucas Emanuel da Silva",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013882,
        "Nome": "Washington Paes Guimaraes",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013883,
        "Nome": "Jose Roberto Siqueira",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013883,
        "Nome": "Jose Roberto Siqueira",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013900,
        "Nome": "Ivan Henrique Brito Dos Sa",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013900,
        "Nome": "Ivan Henrique Brito Dos Sa",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371120,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017885,
        "Nome": "Carlos Gomes Da Costa Filh",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017649,
        "Nome": "THIAGO HENRIQUE FERRAZ",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "03:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017649,
        "Nome": "THIAGO HENRIQUE FERRAZ",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:51:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:17:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:22:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-18 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "03:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "03:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-09-30 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017555,
        "Nome": "Halan Da Silva Batista",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017578,
        "Nome": "Ronaldo Rodrigues Da Silva",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017578,
        "Nome": "Ronaldo Rodrigues Da Silva",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:22:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:37:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:47:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:37:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017558,
        "Nome": "Luiz Carlos Bernine",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:52:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017560,
        "Nome": "Jose Clodoaldo Camargo",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "06:00:00",
        "Interjornada": "03:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017283,
        "Nome": "Roberto Leandro Do Prado",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:20:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016788,
        "Nome": "Everton Fernando Pereira",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016805,
        "Nome": "Reginaldo Neres Sobrinho",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016805,
        "Nome": "Reginaldo Neres Sobrinho",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016805,
        "Nome": "Reginaldo Neres Sobrinho",
        "Data infração": "30/09/2024 0",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018013,
        "Nome": "Keber Antonio Cruz Ferreir",
        "Data infração": "25/09/2024 0",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018013,
        "Nome": "Keber Antonio Cruz Ferreir",
        "Data infração": "03/10/2024 0",
        "Centro de Custo": 371126,
        "Estouro jornada": "04:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018013,
        "Nome": "Keber Antonio Cruz Ferreir",
        "Data infração": "04/10/2024 0",
        "Centro de Custo": 371126,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:01:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018093,
        "Nome": "Sergio Ferreira Dos Santos Sakakibara",
        "Data infração": "22/09/2024 1",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018093,
        "Nome": "Sergio Ferreira Dos Santos Sakakibara",
        "Data infração": "29/09/2024 1",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:40:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018093,
        "Nome": "Sergio Ferreira Dos Santos Sakakibara",
        "Data infração": "05/10/2024 1",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018093,
        "Nome": "Sergio Ferreira Dos Santos Sakakibara",
        "Data infração": "06/10/2024 1",
        "Centro de Custo": 371126,
        "Estouro jornada": "03:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018036,
        "Nome": "Paulo Dos Santos Rosa",
        "Data infração": "08/10/2024 1",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018448,
        "Nome": "Joao Luiz Gallego",
        "Data infração": "13/09/2024 1",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37018448,
        "Nome": "Joao Luiz Gallego",
        "Data infração": "21/09/2024 1",
        "Centro de Custo": 371126,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016707,
        "Nome": "Edmilson Pereira Da Silva",
        "Data infração": "12/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "05:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016711,
        "Nome": "Fabio Dias Coelho",
        "Data infração": "22/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "03:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016711,
        "Nome": "Fabio Dias Coelho",
        "Data infração": "03/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016711,
        "Nome": "Fabio Dias Coelho",
        "Data infração": "05/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016711,
        "Nome": "Fabio Dias Coelho",
        "Data infração": "06/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "03:30:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016739,
        "Nome": "Marcelio Soares De Souza",
        "Data infração": "25/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "05:50:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016739,
        "Nome": "Marcelio Soares De Souza",
        "Data infração": "26/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "03:11:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37016739,
        "Nome": "Marcelio Soares De Souza",
        "Data infração": "01/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017064,
        "Nome": "Leandro Ricardo De Freitas",
        "Data infração": "22/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:33:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017064,
        "Nome": "Leandro Ricardo De Freitas",
        "Data infração": "27/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "03:42:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017536,
        "Nome": "Christian Takeshi Monteiro Higuto",
        "Data infração": "11/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "04:20:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017536,
        "Nome": "Christian Takeshi Monteiro Higuto",
        "Data infração": "12/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:42:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017536,
        "Nome": "Christian Takeshi Monteiro Higuto",
        "Data infração": "13/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:59:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017536,
        "Nome": "Christian Takeshi Monteiro Higuto",
        "Data infração": "14/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:48:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017536,
        "Nome": "Christian Takeshi Monteiro Higuto",
        "Data infração": "17/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "03:05:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017536,
        "Nome": "Christian Takeshi Monteiro Higuto",
        "Data infração": "18/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:36:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017536,
        "Nome": "Christian Takeshi Monteiro Higuto",
        "Data infração": "19/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "01:33:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017536,
        "Nome": "Christian Takeshi Monteiro Higuto",
        "Data infração": "05/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:47:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017538,
        "Nome": "Delio Santos Romao",
        "Data infração": "19/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:38:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017538,
        "Nome": "Delio Santos Romao",
        "Data infração": "28/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "03:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017538,
        "Nome": "Delio Santos Romao",
        "Data infração": "01/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:46:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017538,
        "Nome": "Delio Santos Romao",
        "Data infração": "02/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:28:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017593,
        "Nome": "Mauricio Jose Ramos De Sou",
        "Data infração": "19/09/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:47:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017593,
        "Nome": "Mauricio Jose Ramos De Sou",
        "Data infração": "02/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:48:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017593,
        "Nome": "Mauricio Jose Ramos De Sou",
        "Data infração": "08/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "03:57:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017593,
        "Nome": "Mauricio Jose Ramos De Sou",
        "Data infração": "09/10/2024 0",
        "Centro de Custo": 371127,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:21:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37017729,
        "Nome": "Diego Henrique De Campos",
        "Data infração": "25/09/2024 1",
        "Centro de Custo": 371127,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37005677,
        "Nome": "FABRICIO RODRIGUES PONTES",
        "Data infração": "06/10/2024 1",
        "Centro de Custo": 371171,
        "Estouro jornada": "09:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "09:00:00"
    },
    {
        "Matricula": 37013012,
        "Nome": "Marcelo de Souza Arantes",
        "Data infração": "05/10/2024 0",
        "Centro de Custo": 372080,
        "Estouro jornada": "05:28:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013012,
        "Nome": "Marcelo de Souza Arantes",
        "Data infração": "06/10/2024 0",
        "Centro de Custo": 372080,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:04:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37005802,
        "Nome": "ALEX APARECIDO MENDES",
        "Data infração": "14/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37005802,
        "Nome": "ALEX APARECIDO MENDES",
        "Data infração": "20/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37005802,
        "Nome": "ALEX APARECIDO MENDES",
        "Data infração": "01/10/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37000622,
        "Nome": "PAULO NATALINO BOAVENTURA",
        "Data infração": "22/09/2024 1",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37000622,
        "Nome": "PAULO NATALINO BOAVENTURA",
        "Data infração": "28/09/2024 1",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37000622,
        "Nome": "PAULO NATALINO BOAVENTURA",
        "Data infração": "04/10/2024 1",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37000622,
        "Nome": "PAULO NATALINO BOAVENTURA",
        "Data infração": "10/10/2024 1",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37013027,
        "Nome": "Wesley Maruchi",
        "Data infração": "22/09/2024 2",
        "Centro de Custo": 373100,
        "Estouro jornada": "09:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "09:00:00"
    },
    {
        "Matricula": 37013027,
        "Nome": "Wesley Maruchi",
        "Data infração": "28/09/2024 2",
        "Centro de Custo": 373100,
        "Estouro jornada": "09:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37013027,
        "Nome": "Wesley Maruchi",
        "Data infração": "05/10/2024 2",
        "Centro de Custo": 373100,
        "Estouro jornada": "09:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012257,
        "Nome": "Alexandry Borges Freitas",
        "Data infração": "14/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012257,
        "Nome": "Alexandry Borges Freitas",
        "Data infração": "21/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012257,
        "Nome": "Alexandry Borges Freitas",
        "Data infração": "28/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37012257,
        "Nome": "Alexandry Borges Freitas",
        "Data infração": "05/10/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007071,
        "Nome": "ROBSON APARECIDO DE OLIVEI",
        "Data infração": "19/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007071,
        "Nome": "ROBSON APARECIDO DE OLIVEI",
        "Data infração": "22/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:16:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37007262,
        "Nome": "DANIEL BENEDITO FALCO",
        "Data infração": "12/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37007262,
        "Nome": "DANIEL BENEDITO FALCO",
        "Data infração": "18/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37007262,
        "Nome": "DANIEL BENEDITO FALCO",
        "Data infração": "24/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37007262,
        "Nome": "DANIEL BENEDITO FALCO",
        "Data infração": "06/10/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37015071,
        "Nome": "Celio Aparecido Alves",
        "Data infração": "23/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015071,
        "Nome": "Celio Aparecido Alves",
        "Data infração": "06/10/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:56:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015075,
        "Nome": "Luiz Paulo Delfino",
        "Data infração": "29/09/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015075,
        "Nome": "Luiz Paulo Delfino",
        "Data infração": "03/10/2024 0",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:58:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015075,
        "Nome": "Luiz Paulo Delfino",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:30:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015123,
        "Nome": "Nicerso Da Silva",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015123,
        "Nome": "Nicerso Da Silva",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015125,
        "Nome": "Odair Da Silva Lopes",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015125,
        "Nome": "Odair Da Silva Lopes",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:48:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015125,
        "Nome": "Odair Da Silva Lopes",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:07:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015125,
        "Nome": "Odair Da Silva Lopes",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:10:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015133,
        "Nome": "Claudemir Carlos",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "12:12:00",
        "Interjornada": "09:16:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015133,
        "Nome": "Claudemir Carlos",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:03:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015133,
        "Nome": "Claudemir Carlos",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015107,
        "Nome": "Carlos Renato Cavalheiro",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015109,
        "Nome": "Rafael Jaime Rodrigues Santana",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015109,
        "Nome": "Rafael Jaime Rodrigues Santana",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:24:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015111,
        "Nome": "Luiz Carlos de Souza da Silva",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015111,
        "Nome": "Luiz Carlos de Souza da Silva",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015111,
        "Nome": "Luiz Carlos de Souza da Silva",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:06:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015111,
        "Nome": "Luiz Carlos de Souza da Silva",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015103,
        "Nome": "Joao Batista Da Silva Filho",
        "Data infração": "2024-09-16 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015103,
        "Nome": "Joao Batista Da Silva Filho",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:12:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015103,
        "Nome": "Joao Batista Da Silva Filho",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015104,
        "Nome": "Marcos Carinatto",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "04:18:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015104,
        "Nome": "Marcos Carinatto",
        "Data infração": "2024-09-21 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "04:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015104,
        "Nome": "Marcos Carinatto",
        "Data infração": "2024-09-23 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:08:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015104,
        "Nome": "Marcos Carinatto",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015104,
        "Nome": "Marcos Carinatto",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015105,
        "Nome": "Joao Batista Dos Santos",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "08:41:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015105,
        "Nome": "Joao Batista Dos Santos",
        "Data infração": "2024-09-24 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:39:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015096,
        "Nome": "Felipe Dos Santos Lima",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:20:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015096,
        "Nome": "Felipe Dos Santos Lima",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:15:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015096,
        "Nome": "Felipe Dos Santos Lima",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015098,
        "Nome": "Jose Fernando Freitas",
        "Data infração": "2024-09-11 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:14:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015098,
        "Nome": "Jose Fernando Freitas",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:37:00",
        "Interjornada": "00:14:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015098,
        "Nome": "Jose Fernando Freitas",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "00:52:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015256,
        "Nome": "Rudnei Roberto Gimenes",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015256,
        "Nome": "Rudnei Roberto Gimenes",
        "Data infração": "2024-10-10 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015258,
        "Nome": "Jose Luciano Oliveira",
        "Data infração": "2024-09-28 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:01:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015258,
        "Nome": "Jose Luciano Oliveira",
        "Data infração": "2024-10-04 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015258,
        "Nome": "Jose Luciano Oliveira",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015258,
        "Nome": "Jose Luciano Oliveira",
        "Data infração": "2024-10-09 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:04:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015260,
        "Nome": "Paulo Fernando Muroni",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "04:13:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015174,
        "Nome": "Luis Augusto Batista",
        "Data infração": "2024-09-19 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015174,
        "Nome": "Luis Augusto Batista",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:36:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015175,
        "Nome": "Lenaldo Marcelino dos Santos",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:24:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015175,
        "Nome": "Lenaldo Marcelino dos Santos",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015080,
        "Nome": "Dario Jose Armbruster",
        "Data infração": "2024-09-12 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015080,
        "Nome": "Dario Jose Armbruster",
        "Data infração": "2024-09-17 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015140,
        "Nome": "Rafael Dos Santos",
        "Data infração": "2024-10-01 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:23:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015140,
        "Nome": "Rafael Dos Santos",
        "Data infração": "2024-10-07 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:21:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015140,
        "Nome": "Rafael Dos Santos",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015142,
        "Nome": "Sergio Lourival De Oliveira",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:02:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015142,
        "Nome": "Sergio Lourival De Oliveira",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:32:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015145,
        "Nome": "Tiago Henrique Vieira Ribeiro",
        "Data infração": "2024-09-14 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015145,
        "Nome": "Tiago Henrique Vieira Ribeiro",
        "Data infração": "2024-09-22 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37015145,
        "Nome": "Tiago Henrique Vieira Ribeiro",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37015145,
        "Nome": "Tiago Henrique Vieira Ribeiro",
        "Data infração": "2024-10-06 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "11:00:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "11:00:00"
    },
    {
        "Matricula": 37015161,
        "Nome": "Leandro Ballan Abile",
        "Data infração": "2024-09-13 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "03:25:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015162,
        "Nome": "Claudio Donizeti Pequeno",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:28:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015162,
        "Nome": "Claudio Donizeti Pequeno",
        "Data infração": "2024-10-03 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:56:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015262,
        "Nome": "Maicon Douglas Aparecido Antonio",
        "Data infração": "2024-09-29 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015262,
        "Nome": "Maicon Douglas Aparecido Antonio",
        "Data infração": "2024-10-02 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:11:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015262,
        "Nome": "Maicon Douglas Aparecido Antonio",
        "Data infração": "2024-10-05 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:09:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015262,
        "Nome": "Maicon Douglas Aparecido Antonio",
        "Data infração": "2024-10-08 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:05:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015263,
        "Nome": "Sebastiao Ribeiro De Campos",
        "Data infração": "2024-09-25 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "05:27:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015263,
        "Nome": "Sebastiao Ribeiro De Campos",
        "Data infração": "2024-09-26 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "00:00:00",
        "Interjornada": "02:33:00",
        "Trabalho na Folga": "00:00:00"
    },
    {
        "Matricula": 37015263,
        "Nome": "Sebastiao Ribeiro De Campos",
        "Data infração": "2024-09-27 00:00:00",
        "Centro de Custo": 373100,
        "Estouro jornada": "02:54:00",
        "Interjornada": "00:00:00",
        "Trabalho na Folga": "00:00:00"
    }                
];

let filteredData = [...jorDados]; // Copia dos dados para aplicar os filtros

// Função para preencher a tabela
function renderTable() {
    const tableBody = document.querySelector("#trainingTable tbody");
    tableBody.innerHTML = ""; // Limpa o conteúdo anterior da tabela
    
    const start = (paginaAtual - 1) * jornadaPorPagina;
    const end = start + jornadaPorPagina;
    const pageData = filteredData.slice(start, end); // Pega dados da página atual

    pageData.forEach(dado => {
        const row = `
            <tr>
                <td>${dado.Matricula}</td>
                <td>${dado.Nome}</td>
                <td>${dado["Data infração"]}</td>
                <td>${dado["Centro de Custo"]}</td>
                <td>${dado["Estouro jornada"]}</td>
                <td>${dado.Interjornada}</td>
                <td>${dado["Trabalho na folga"]}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML("beforeend", row);
    });
}

// Função para atualizar paginação
function updatePagination() {
    const paginationDiv = document.querySelector("#pagination");
    paginationDiv.innerHTML = ""; // Limpa os botões anteriores

    totalPaginas = Math.ceil(filteredData.length / jornadaPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = (i === paginaAtual) ? "active" : "";
        button.addEventListener("click", function() {
            paginaAtual = i;
            renderTable();
            updatePagination(); // Atualiza os botões de paginação
        });
        paginationDiv.appendChild(button);
    }
}

// Função de filtro
function filterTable() {
    const searchTerm = document.querySelector("#searchInput").value.toLowerCase();
    filteredData = jorDados.filter(dado => 
        dado.Matricula.toString().includes(searchTerm)
    );
    
    paginaAtual = 1; // Reset para a primeira página ao filtrar
    renderTable();
    updatePagination();
}

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    renderTable();
    updatePagination();
});
// Função para converter tempo no formato "HH:mm:ss" para minutos
function converterParaMinutos(tempo) {
    const [horas, minutos, segundos] = tempo.split(':').map(Number);
    return horas * 60 + minutos + segundos / 60;
}

// Função para gerar o histograma dos estouros de jornada
function gerarHistogramaDeEstouro() {
    // Destrói o gráfico anterior, se houver
    if (currentChart) {
        currentChart.destroy();
    }

    // Categorias dos intervalos de tempo
    const categorias = {
        '02:00 - 02:10': 0,
        '02:10 - 02:30': 0,
        '02:30 - 03:00': 0,
        'Acima de 03:00': 0
    };

    // Classificar cada estouro de jornada em um intervalo
    jorDados.forEach(dado => {
        const estouroMinutos = converterParaMinutos(dado["Estouro jornada"]);

        if (estouroMinutos >= 120 && estouroMinutos <= 130) {
            categorias['02:00 - 02:10']++;
        } else if (estouroMinutos > 130 && estouroMinutos <= 150) {
            categorias['02:10 - 02:30']++;
        } else if (estouroMinutos > 150 && estouroMinutos <= 180) {
            categorias['02:30 - 03:00']++;
        } else if (estouroMinutos > 180) {
            categorias['Acima de 03:00']++;
        }
    });

    // Separar as categorias e os valores
    const labels = Object.keys(categorias);
    const values = Object.values(categorias);

    // Configuração dos dados para o gráfico
    const data = {
        labels: labels,
        datasets: [{
            label: 'Estouro de Jornada por Intervalo',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: '#2c3e50',
            borderWidth: 1
        }]
    };

    // Seleciona o canvas onde o gráfico será renderizado
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // Gera o gráfico de barras (histograma)
    currentChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



document.addEventListener('DOMContentLoaded', function() {

    // Função para converter tempo no formato "HH:mm:ss" para minutos
    function converterParaMinutos(tempo) {
        if (!tempo || typeof tempo !== 'string') {
            return 0;
        }

        const [horas, minutos, segundos] = tempo.split(':').map(Number);
        return horas * 60 + minutos + segundos / 60;
    }

    // Função para filtrar a tabela com base nos filtros selecionados
    function aplicarFiltros() {
        const filtroEstouro = document.getElementById('estouroFiltro').value;
        const filtroInterjornada = document.getElementById('interjornadaFiltro').value.trim();
        const filtroFolga = document.getElementById('folgaFiltro').value.trim();

        filteredData = jorDados.filter(dado => {
            let estouroMinutos = converterParaMinutos(dado["Estouro jornada"]);
            let interjornadaMinutos = converterParaMinutos(dado.Interjornada);
            let folgaMinutos = converterParaMinutos(dado["Trabalho na folga"]);

            if (filtroEstouro === "menos2" && estouroMinutos >= 120) return false;
            if (filtroEstouro === "2-210" && !(estouroMinutos >= 120 && estouroMinutos <= 130)) return false;
            if (filtroEstouro === "210-230" && !(estouroMinutos > 130 && estouroMinutos <= 150)) return false;
            if (filtroEstouro === "230-300" && !(estouroMinutos > 150 && estouroMinutos <= 180)) return false;
            if (filtroEstouro === "acima3" && estouroMinutos <= 180) return false;

            if (filtroInterjornada && !dado.Interjornada.includes(filtroInterjornada)) return false;
            if (filtroFolga && !dado["Trabalho na folga"].includes(filtroFolga)) return false;

            return true;
        });

        paginaAtual = 1;
        renderTable();
        updatePagination();
    }

    // Esconder ou mostrar os filtros e o botão de Excel
    function esconderFiltrosEBotoes() {
        document.querySelector('.filters').style.display = 'none';
        document.getElementById('downloadExcelBtn').style.display = 'none';
        document.getElementById('searchInput').style.display = 'none';
    }

    function mostrarFiltrosEBotoes() {
        document.querySelector('.filters').style.display = 'block';
        document.getElementById('downloadExcelBtn').style.display = 'block';
        document.getElementById('searchInput').style.display = 'block';
    }

    // Mostrar o gráfico e esconder a tabela + filtros
    document.getElementById('showChartBtn').addEventListener('click', function() {
        document.getElementById('tableContainer').style.display = 'none'; // Oculta a tabela
        document.getElementById('chartContainer').style.display = 'block'; // Exibe o gráfico
        esconderFiltrosEBotoes(); // Esconde filtros e botão de Excel
        gerarHistogramaDeEstouro(); // Gera o histograma
    });

    // Voltar à tabela e mostrar filtros + botão Excel
    document.getElementById('backToTableBtn').addEventListener('click', function() {
        document.getElementById('chartContainer').style.display = 'none'; // Oculta o gráfico
        document.getElementById('tableContainer').style.display = 'block'; // Exibe a tabela
        mostrarFiltrosEBotoes(); // Mostra filtros e botão de Excel
    });

    // Adicionando evento de mudança para cada filtro
    document.getElementById('estouroFiltro').addEventListener('change', aplicarFiltros);
    document.getElementById('interjornadaFiltro').addEventListener('input', aplicarFiltros);
    document.getElementById('folgaFiltro').addEventListener('input', aplicarFiltros);
});

document.getElementById("homeBtn").addEventListener("click", function() {
    window.location.href = "indexLog.html"; // Redireciona para a página principal
});


document.addEventListener('DOMContentLoaded', function () {
    // Supondo que você obtenha a data de uma fonte de dados, ou use a data atual
    const lastUpdateDate = "16 de outubro de 2024"; // Data dinâmica, pode vir de uma API ou base de dados
    
    // Atualiza o texto no HTML
    document.getElementById('updateDate').textContent = lastUpdateDate;
});
// Função para baixar a tabela como Excel
function exportToExcel() {
    // Capturar a tabela HTML
    const table = document.getElementById('trainingTable');
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Treinamentos" });

    // Baixar o arquivo Excel
    XLSX.writeFile(workbook, 'jornadas.xlsx');
}

// Adiciona evento ao botão para baixar o Excel
document.getElementById('downloadExcelBtn').addEventListener('click', exportToExcel);