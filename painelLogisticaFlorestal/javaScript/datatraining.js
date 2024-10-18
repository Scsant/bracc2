// datatraining.js
let currentChart = null;
const treinamentosPorPagina = 400; // Limite de treinamentos por página
let paginaAtual = 1;
let totalPaginas = 1;

const trainingData = [

    {
        "Status": "Valid",
        "Name": "Rui Jose Portes",
        "Employee ID": 20008123,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Wesley Henrique Lopes",
        "Employee ID": 20008349,
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Bianca Araujo Candido"
    },
    {
        "Status": "Valid",
        "Name": "Antonio Carlos De Oliveira",
        "Employee ID": 20008650,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Antonio Nicacio Da Silva Neto",
        "Employee ID": 20008665,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Claudemir Cadastro Eiras",
        "Employee ID": 20008800,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Valid",
        "Name": "Claudinei Henrique Pasqualinotto",
        "Employee ID": 20008808,
        "Job Profile": "OP CARREGADEIRA PATIO (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Valid",
        "Name": "Claudio Rogerio Domingues",
        "Employee ID": 20008815,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Cristiano Jose Alves",
        "Employee ID": 20008837,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Cristiano Jose Fiques",
        "Employee ID": 20008838,
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Valid",
        "Name": "Edimilson Ramos Dos Santos",
        "Employee ID": 20008944,
        "Job Profile": "OP CARREGADEIRA PATIO (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Valid",
        "Name": "Gabriel Cristiano Tamborim",
        "Employee ID": 20009129,
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Valid",
        "Name": "Genival Saluceste",
        "Employee ID": 20009157,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Joao Paulo Comidal",
        "Employee ID": 20009340,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Jose Laurindo Correa Da Silva Santos",
        "Employee ID": 20009397,
        "Job Profile": "OP CARREGADEIRA PATIO (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Valid",
        "Name": "Jose Luis Coltre",
        "Employee ID": 20009400,
        "Job Profile": "OP CARREGADEIRA PATIO (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Valid",
        "Name": "Luiz Carlos Martins",
        "Employee ID": 20009557,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Mateus Henrique Gomes",
        "Employee ID": 20009667,
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Valid",
        "Name": "Vagner Alves",
        "Employee ID": 20009977,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Vagner Donizete Luciano",
        "Employee ID": 20009978,
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Valid",
        "Name": "Gledison Alves De Almeida",
        "Employee ID": 20016061,
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Bianca Araujo Candido"
    },
    {
        "Status": "Valid",
        "Name": "Jean Carlos Bernardes Nunes",
        "Employee ID": 20016062,
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Augusto Batistela Pietro Sanches"
    },
    {
        "Status": "Valid",
        "Name": "Jose Carlos Puerta",
        "Employee ID": 20016066,
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Cesar Marques",
        "Employee ID": 20016067,
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Valid",
        "Name": "Evandro Carlos Ribeiro Da Silva",
        "Employee ID": 20016985,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Octavio Willian Sacoman",
        "Employee ID": 20017070,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Jose Ribeiro De Miranda",
        "Employee ID": 20017083,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Cesar Kodrai",
        "Employee ID": 20018081,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Luiz Sebastiao Jordan",
        "Employee ID": 20018110,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Joao Batista Borges",
        "Employee ID": 20018119,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Wagner Aparecido Da Cruz",
        "Employee ID": 20018158,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Diego Dias Da Silva",
        "Employee ID": 20018168,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Bianca Araujo Candido"
    },
    {
        "Status": "Valid",
        "Name": "Marcos Maciel Salau",
        "Employee ID": 20018170,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Valid",
        "Name": "Henrique Fernando De Oliveira",
        "Employee ID": 20018206,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Marcelo Cristiano Almeida",
        "Employee ID": 20018209,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Donizei Miranda Barbosa",
        "Employee ID": 20018213,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Marcos Antonio Cian",
        "Employee ID": 20018741,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Maria Antonia De Castro Diniz",
        "Employee ID": 20018757,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Thiago Augusto Batistela Pietro Sanches"
    },
    {
        "Status": "Valid",
        "Name": "Renato Luis De Freitas Campos",
        "Employee ID": 20018790,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Cristiano Fermino Alves",
        "Employee ID": 20018796,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Diogenes Alves De Arruda",
        "Employee ID": 20019014,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Lucas Rueda Dos Santos",
        "Employee ID": 20019019,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Edivaldo Pereira Da Silva",
        "Employee ID": 20020018,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Marina Favero Mendes",
        "Employee ID": 20020026,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Thiago Augusto Batistela Pietro Sanches"
    },
    {
        "Status": "Valid",
        "Name": "Adailton Manoel Da Silva",
        "Employee ID": 20020031,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Jose Antonio Silva Brito",
        "Employee ID": 20020036,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Bianca Araujo Candido"
    },
    {
        "Status": "Valid",
        "Name": "Andre Ambrosio Da Conceicao",
        "Employee ID": 20020038,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Edson Roberto De Camargo",
        "Employee ID": 20021275,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Severino Ramos Gabriel",
        "Employee ID": 20021277,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Guilherme Picoli Romano",
        "Employee ID": 20021282,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Alailson Pereira",
        "Employee ID": 20021300,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Thiago Augusto Batistela Pietro Sanches"
    },
    {
        "Status": "Valid",
        "Name": "Sidnei Vieira",
        "Employee ID": 20021301,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Thiago Augusto Batistela Pietro Sanches"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Cesar Vicente",
        "Employee ID": 20021304,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Valid",
        "Name": "Marcelo Romano Da Silva",
        "Employee ID": 20021311,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Valid",
        "Name": "Auro Vieira Da Silva",
        "Employee ID": 20022890,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Danner Porto Ciocca",
        "Employee ID": 20022916,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Luiz Carlos Veronez",
        "Employee ID": 20022917,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Adriano Jose Da Silva",
        "Employee ID": 20022958,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Jose Cicero Da Silva",
        "Employee ID": 20022989,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Leandro Marcos Correa",
        "Employee ID": 20023618,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Adeildo Ferreira Da Silva",
        "Employee ID": 20023732,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Rodrigo Aparecido Pereira De Godoi",
        "Employee ID": 20023807,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Claudinei Luiz Vincoleto",
        "Employee ID": 20023808,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Givanildo De Oliveira Pedroza",
        "Employee ID": 20025447,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Osmar Da Conceicao",
        "Employee ID": 20025487,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Sidnei Carmo Oliveira",
        "Employee ID": 20025497,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Osvaldo Pereira Dos Santos",
        "Employee ID": 20025541,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Pedro Francisco Da Silva Filho",
        "Employee ID": 20025582,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Jefferson De Souza Soares",
        "Employee ID": 20025614,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Cristiano Jose Dos Santos",
        "Employee ID": 20025711,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Djavan Barros De Souza",
        "Employee ID": 20025837,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Reinaldo Aparecido Piotto",
        "Employee ID": 20026021,
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Bianca Araujo Candido"
    },
    {
        "Status": "Valid",
        "Name": "Luiz Carlos Kodrai",
        "Employee ID": 20026028,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Lucas Elias Dos Santos",
        "Employee ID": 20026029,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Joao Vitor Maldonado",
        "Employee ID": 20026034,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Jorge De Souza Bezerra",
        "Employee ID": 20026037,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Danton Henrique Martines",
        "Employee ID": 20026046,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Antonio Aparecido De Brito",
        "Employee ID": 20026047,
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Valid",
        "Name": "Darci Foizzer",
        "Employee ID": 20030066,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Jose Adriano Da Silva Santos",
        "Employee ID": 20030101,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Elenilson Alexandre Alves",
        "Employee ID": 20030103,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Claudio Dos Reis",
        "Employee ID": 20030135,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Joao Biribile Neto",
        "Employee ID": 20031105,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Sebastiao Ferreira Rodrigues",
        "Employee ID": 20031834,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Alex Garcia Pereira",
        "Employee ID": 20031853,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Alex Misael Martinez",
        "Employee ID": 20031855,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Osvaldo Guerra Paixao Junior",
        "Employee ID": 20031911,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Ronaldo Francisco Dos Santos",
        "Employee ID": 20031913,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Roberto Sousa Lopes",
        "Employee ID": 20031925,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Fernando Dos Santos Ferreira",
        "Employee ID": 20031940,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Adriano Jose Da Silva",
        "Employee ID": 20032240,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Andre Soares De Campos",
        "Employee ID": 20032609,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Antonio Marcos Martins",
        "Employee ID": 20032755,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Jaqueline Pereira Lima",
        "Employee ID": 20032957,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Valid",
        "Name": "Mauricio Frutuoso Cavalcanti",
        "Employee ID": 20032959,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Efraim Jefferson De Oliveira",
        "Employee ID": 20033144,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Antonio Carlos Ribeiro Alves",
        "Employee ID": 20033147,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Valdemir Donizetti Da Silva",
        "Employee ID": 20033348,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Aguinaldo Israel Pela",
        "Employee ID": 20034586,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Benedito Cleber De Siqueira",
        "Employee ID": 20034593,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Alex Baumann Skau",
        "Employee ID": 20034887,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Aline Aparecida Floriano Fusco",
        "Employee ID": 20038628,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Thiago Augusto Batistela Pietro Sanches"
    },
    {
        "Status": "Valid",
        "Name": "Jubel De Oliveira",
        "Employee ID": 20042134,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Marcos Roberto Pereira",
        "Employee ID": 20042160,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Bianca Araujo Candido"
    },
    {
        "Status": "Valid",
        "Name": "Valdinei Jose Bispo",
        "Employee ID": 20042511,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Valid",
        "Name": "Diego Henrique Augustinho",
        "Employee ID": 20042625,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Luiz Carlos Panini",
        "Employee ID": 20042640,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Ananias Marciano Ruiz",
        "Employee ID": 20043884,
        "Job Profile": "MOTORISTA TRANSPORTE FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Mario Aparecido Pires Da Rosa",
        "Employee ID": 20043886,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Jose Marcio Palharim",
        "Employee ID": 20047589,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Daniel De Oliveira",
        "Employee ID": 20051152,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Willian Godoi",
        "Employee ID": 20051239,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Fabricio Mantuan de Assis",
        "Employee ID": 20051742,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Vagner Jose Apolonio",
        "Employee ID": 20051747,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Sergio Anzolin",
        "Employee ID": 20052324,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Fernando Alves de Oliveira",
        "Employee ID": 20052406,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Valid",
        "Name": "Sidney Antonio Cardoso",
        "Employee ID": 20054867,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Rodrigo Amaral de Souza",
        "Employee ID": 20055370,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Jucilio Da Silva Ferreira",
        "Employee ID": 20055380,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Deoclecio Antonio Ribeiro",
        "Employee ID": 20056256,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Valid",
        "Name": "Roberto Oliveira Santos",
        "Employee ID": 20056287,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Valid",
        "Name": "Jonas Alencar Daniel",
        "Employee ID": 20056324,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Marcos Vinicius Soares Da Silva",
        "Employee ID": 20056390,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Danilo De Oliveira",
        "Employee ID": 20056988,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Diego De Oliveira Oller",
        "Employee ID": 20056993,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Andre Luiz Alves Dos Santos",
        "Employee ID": 20056995,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Lucas Emanuel da Silva",
        "Employee ID": 20056997,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Josuel Aparecido Cavalcanti",
        "Employee ID": 20057007,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Edirlei Gonzales de Almeida",
        "Employee ID": 20057010,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Washington Paes Guimaraes",
        "Employee ID": 20057041,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Jose Roberto Siqueira",
        "Employee ID": 20057042,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Carlos Eduardo Custodio",
        "Employee ID": 20057452,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Reginaldo Aparecido Vaz",
        "Employee ID": 20058490,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Valid",
        "Name": "Ezequiel Miranda Dos Santos",
        "Employee ID": 20058877,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Edson Inacio Ferreira",
        "Employee ID": 20059034,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Edilson Fabrício da Silva",
        "Employee ID": 20059042,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "JOSIMAR DA SILVA",
        "Employee ID": 20059171,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Leandro Narciso Aureliano",
        "Employee ID": 20059173,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Luis Rogerio Da Silva",
        "Employee ID": 20059174,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Vanderlei Aparecido Reinhold",
        "Employee ID": 20059175,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Otavio Luis Alves Salvador",
        "Employee ID": 20059183,
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Valid",
        "Name": "Jose Roberto Ferreira Da Rocha",
        "Employee ID": 20059357,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Rodrigo Antonio De Sousa",
        "Employee ID": 20059382,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Valid",
        "Name": "Vanderleia Aparecida Da Fonseca",
        "Employee ID": 20059915,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Eder Antonio Franco",
        "Employee ID": 20059919,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Jose Luiz De Oliveira",
        "Employee ID": 20059961,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Luis Gustavo Boato",
        "Employee ID": 20059963,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Jose Luis Barbosa De Oliveira",
        "Employee ID": 20059981,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Jose Nivaldo De Oliveira",
        "Employee ID": 20060083,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Vanderlei Aparecido De Lima",
        "Employee ID": 20060315,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Jose Adelson De Carvalho",
        "Employee ID": 20060403,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Matheus Adriel Ferreira",
        "Employee ID": 20060446,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Maicon Rogerio Ramos",
        "Employee ID": 20060449,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Jose Carlos De Oliveira",
        "Employee ID": 20060475,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Sergio Rodrigues",
        "Employee ID": 20060516,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Rodolfo Henrique Souza Silva",
        "Employee ID": 20060518,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Adriano Aparecido Ramiro",
        "Employee ID": 20060520,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Milton Marcelo Gouveia",
        "Employee ID": 20060539,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Marcio Pereria",
        "Employee ID": 20060545,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Ricardo Marques da Silva",
        "Employee ID": 20060690,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Rony Neubern Zago",
        "Employee ID": 20060692,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Sergio Maiolo Junior",
        "Employee ID": 20060702,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Gilberto Rodrigues Campos",
        "Employee ID": 20060745,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Adriano Fernandes de Oliveira",
        "Employee ID": 20060814,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Alex Sandro de Almeida Cestaro",
        "Employee ID": 20060819,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Marcus Vinicius Beraldo Roncato",
        "Employee ID": 20061096,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Dario Jose Armbruster",
        "Employee ID": 20061119,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Joao Pedro Fonseca Spadotto",
        "Employee ID": 20061271,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Joao Batista Da Silva Filho",
        "Employee ID": 20061277,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Marcos Carinatto",
        "Employee ID": 20061278,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Odair Da Silva Lopes",
        "Employee ID": 20061351,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Claudemir Carlos",
        "Employee ID": 20061359,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Rafael Dos Santos",
        "Employee ID": 20061450,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Renato Andre Borin",
        "Employee ID": 20061451,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Sergio Lourival De Oliveira",
        "Employee ID": 20061452,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Leandro Ballan Abile",
        "Employee ID": 20061471,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Lenaldo Marcelino De Souza",
        "Employee ID": 20061491,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Henrique Vilanova Filho",
        "Employee ID": 20061968,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Fernando Muroni",
        "Employee ID": 20061971,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Luiz Hipolito Piccoli Junior",
        "Employee ID": 20061976,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Vagner Junio Ferreira",
        "Employee ID": 20061985,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Elaine Cristina Amaral da Silva",
        "Employee ID": 20061990,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Valid",
        "Name": "Bruno Cesar Rodrigues Missias",
        "Employee ID": 20061991,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Edenilson Floriano De Almeida",
        "Employee ID": 20061999,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Caio Rodrigo Barbosa do Amaral",
        "Employee ID": 20062002,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Claudio Dos Santos Ribeiro",
        "Employee ID": 20062069,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Everton Luiz Pedroso",
        "Employee ID": 20062443,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Francisco Antonio Silvestre",
        "Employee ID": 20062578,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Tiago Henrique Xavier",
        "Employee ID": 20062619,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Marco Antonio dos Santos",
        "Employee ID": 20062622,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Alexandre Aparecido Ferreira",
        "Employee ID": 20062625,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Ricardo Cesar Dos Santos",
        "Employee ID": 20062627,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Eluan Rafael Rocha",
        "Employee ID": 20062629,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Jean Mota Santos",
        "Employee ID": 20062746,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Alex Sandro Jose Rossi",
        "Employee ID": 20062786,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Genival Luiz De Assis",
        "Employee ID": 20062787,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Renato Pereira Dos Santos",
        "Employee ID": 20062973,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Vanclei Dias De Souza",
        "Employee ID": 20062974,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Eduardo Rosanova",
        "Employee ID": 20062980,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Adenilson Teixeira Xavier",
        "Employee ID": 20063000,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Silvio Cezar Marcato",
        "Employee ID": 20063011,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Aldemar Pereira De Jesus",
        "Employee ID": 20063013,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Vanderlei Suptil Silva",
        "Employee ID": 20063491,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Wesley Rodrigo Biancone",
        "Employee ID": 20063571,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Gelogiane Pereira de Sousa",
        "Employee ID": 20063573,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Roberto De Arcanjo Junior",
        "Employee ID": 20063576,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Eduardo Gonzaga dos Santos",
        "Employee ID": 20063726,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Valid",
        "Name": "Isaias Jose Da Silva",
        "Employee ID": 20064096,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Jose Macedo De Araujo",
        "Employee ID": 20064137,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Willian Gustavo Mendonca",
        "Employee ID": 20064310,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Valid",
        "Name": "Renato Deodata dos Santos",
        "Employee ID": 20064518,
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Jose Manoel Bernardo",
        "Employee ID": 20064764,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Thiago Augusto Batistela Pietro Sanches"
    },
    {
        "Status": "Valid",
        "Name": "Laudelino Ribas De Oliveira Matos",
        "Employee ID": 20064772,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Mario Fraiz Coelho Maia De Andrade"
    },
    {
        "Status": "Valid",
        "Name": "Jesus Nazareno De Moura",
        "Employee ID": 20065261,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Mario Fraiz Coelho Maia De Andrade"
    },
    {
        "Status": "Valid",
        "Name": "Bruno Jose Ravagio",
        "Employee ID": 20065301,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Reginaldo Neres Sobrinho",
        "Employee ID": 20065304,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Valid",
        "Name": "Alan Da Cruz Goncalves",
        "Employee ID": 20065308,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Valid",
        "Name": "Juliano Helio Da Silva",
        "Employee ID": 20065311,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Mario Fraiz Coelho Maia De Andrade"
    },
    {
        "Status": "Valid",
        "Name": "Joao Victor Mamud Franco Calaco",
        "Employee ID": 20065469,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Valid",
        "Name": "Adilson Jose Dias Dos Santos",
        "Employee ID": 20065483,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Valid",
        "Name": "Leonardo De Melo Arf",
        "Employee ID": 20065907,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Edervandson Brito Ferreira",
        "Employee ID": 20066635,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Edson Edvaldo Camillo",
        "Employee ID": 20067078,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Joao Kleber Antonio Lopes",
        "Employee ID": 20067411,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Jesus Fernando Ferreira De Oliveira",
        "Employee ID": 20067418,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Diego Alencar Ferreira",
        "Employee ID": 20067433,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Valid",
        "Name": "Rodrigo Correia",
        "Employee ID": 20069466,
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Valid",
        "Name": "Thiago da Silva dos Reis",
        "Employee ID": 20069654,
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Santos Glaucio Da Silva",
        "Employee ID": 20069674,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Valid",
        "Name": "Denivaldo Batista De Souza",
        "Employee ID": 20069945,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Willian Carlos Pires",
        "Employee ID": 20070274,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Valid",
        "Name": "Lincoln Marcos De Abreu",
        "Employee ID": 20070693,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Luiz Wildner Casarin",
        "Employee ID": 20070708,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Marciano Alves  Evangelista",
        "Employee ID": 20070730,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Carlos Gomes Da Costa Filho",
        "Employee ID": 20070932,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Marcio Vicente Mendes",
        "Employee ID": 20071349,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Valid",
        "Name": "Fabricio Brizighello De Sa Pavan",
        "Employee ID": 20071357,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Marcilio Aparecido Marques Dos Santos Primo",
        "Employee ID": 20071742,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Jose Domingos De Jesus Santana",
        "Employee ID": 20071744,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Gustavo Da Silva",
        "Employee ID": 20071748,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Aparecido Donizeti Costa",
        "Employee ID": 20071750,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Marco Rogerio Paludeto",
        "Employee ID": 20071767,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Valid",
        "Name": "Everton De Souza Pinto",
        "Employee ID": 20071768,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Henrique De Lima Vieira",
        "Employee ID": 20072298,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Carlos Rodrigues De Oliveira Souza",
        "Employee ID": 20072833,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Claudivan Aparecido Soares De Goes",
        "Employee ID": 20072858,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Sergio Aparecido De Freitas",
        "Employee ID": 20072860,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Anderson Avila Vaz",
        "Employee ID": 20072862,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Paulo Sergio Martins Junior",
        "Employee ID": 20073125,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Emerson Santos De Oliveira",
        "Employee ID": 20073127,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Valid",
        "Name": "Ariovaldo Antonio Roda",
        "Employee ID": 20073162,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Elder De Oliveira Silva",
        "Employee ID": 20073859,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Andre Luis Furlanetto",
        "Employee ID": 20073874,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Valid",
        "Name": "Enoque Vieira De Paulo",
        "Employee ID": 20074848,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Valid",
        "Name": "Esau Vieira De Paulo",
        "Employee ID": 20074849,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Valid",
        "Name": "Gileno Dos Santos Oliveira",
        "Employee ID": 20075064,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Rodrigo Da Costa Vasconcellos",
        "Employee ID": 20075123,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Valid",
        "Name": "Giuliano Carilo Póvoas",
        "Employee ID": 20075128,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Ortides Menezes Souza",
        "Employee ID": 20075137,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Denis Visael Guerra Valdiviezo",
        "Employee ID": 20076185,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Valid",
        "Name": "Antonio Santos",
        "Employee ID": 20076850,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Sandro Jose De Souza",
        "Employee ID": 20076935,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Valid",
        "Name": "Jose Hermano Do Carmo",
        "Employee ID": 20076937,
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Mario Fraiz Coelho Maia De Andrade"
    },
    {
        "Status": "Valid",
        "Name": "Cleiber Pinto Teixeira",
        "Employee ID": 20077381,
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Valid",
        "Name": "Andre Signoreli",
        "Employee ID": 20078011,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Valid",
        "Name": "Sergio Antonio Pereira De Freitas Junior",
        "Employee ID": 20078012,
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    }


    
    
    // Adicione mais dados conforme necessário
];

let filteredData = [...trainingData]; // Copia dos dados para aplicar os filtros

// Função para renderizar a tabela com dados de treinamento por página
function renderTable(data, pagina) {
    const tbody = document.querySelector('#trainingTable tbody');
    tbody.innerHTML = ''; // Limpar tabela

    const inicio = (pagina - 1) * treinamentosPorPagina;
    const fim = inicio + treinamentosPorPagina;
    const treinamentosPagina = data.slice(inicio, fim); // Dados da página

    treinamentosPagina.forEach(training => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="Status">${training["Status"]}</td>
            <td data-label="Nome">${training["Name"]}</td>
            <td data-label="ID Funcionário">${training["Employee ID"]}</td>
            <td data-label="Perfil de Cargo">${training["Job Profile"]}</td>
            <td data-label="Título do Treinamento">${training["Training Title"]}</td>
            <td data-label="Gerente Direto">${training["Direct Manager"]}</td>
        `;
        tbody.appendChild(row);
    });

    renderPagination(data.length, pagina); // Atualizar barra de paginação
}

// Função de filtragem por nome do supervisor
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Filtra os dados pelo nome do Gerente Direto (Supervisor)
    filteredData = trainingData.filter(training => 
        training["Direct Manager"].toLowerCase().includes(searchTerm)
    );

    // Reiniciar a paginação e renderizar a tabela filtrada
    paginaAtual = 1;
    renderTable(filteredData, paginaAtual);
}

// Função para baixar a tabela como Excel
function exportToExcel() {
    // Capturar a tabela HTML
    const table = document.getElementById('trainingTable');
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Treinamentos" });

    // Baixar o arquivo Excel
    XLSX.writeFile(workbook, 'treinamentos.xlsx');
}

// Adiciona evento ao botão para baixar o Excel
document.getElementById('downloadExcelBtn').addEventListener('click', exportToExcel);

// Função para renderizar a barra de paginação
function renderPagination(totalTreinamentos, paginaAtual) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = ''; // Limpar paginação

    totalPaginas = Math.ceil(totalTreinamentos / treinamentosPorPagina); // Calcular total de páginas

    // Botão "Anterior"
    const botaoAnterior = document.createElement('button');
    botaoAnterior.innerText = 'Anterior';
    botaoAnterior.disabled = paginaAtual === 1;
    botaoAnterior.addEventListener('click', () => mudarPagina(paginaAtual - 1));
    paginationDiv.appendChild(botaoAnterior);

    // Números das páginas
    for (let i = 1; i <= totalPaginas; i++) {
        const botaoPagina = document.createElement('button');
        botaoPagina.innerText = i;
        botaoPagina.className = i === paginaAtual ? 'active' : '';
        botaoPagina.addEventListener('click', () => mudarPagina(i));
        paginationDiv.appendChild(botaoPagina);
    }

    // Botão "Próxima"
    const botaoProxima = document.createElement('button');
    botaoProxima.innerText = 'Próxima';
    botaoProxima.disabled = paginaAtual === totalPaginas;
    botaoProxima.addEventListener('click', () => mudarPagina(paginaAtual + 1));
    paginationDiv.appendChild(botaoProxima);
}

// Função para mudar de página
function mudarPagina(novaPagina) {
    paginaAtual = novaPagina;
    renderTable(trainingData, paginaAtual); // Atualizar tabela para a nova página
}

// Função para inicializar a tabela
function initTable() {
    renderTable(trainingData, paginaAtual);
}


// Função para gerar o gráfico de ocorrências por supervisor
function gerarGraficoPorSupervisor() {
    // Destrói o gráfico anterior, se houver
    if (currentChart) {
        currentChart.destroy();
    }

    const ocorrenciasPorSupervisor = {};

    // Contar quantas ocorrências cada supervisor tem
    trainingData.forEach(training => {
        const supervisor = training["Direct Manager"];
        if (ocorrenciasPorSupervisor[supervisor]) {
            ocorrenciasPorSupervisor[supervisor]++;
        } else {
            ocorrenciasPorSupervisor[supervisor] = 1;
        }
    });

    // Ordenar os supervisores pelo número de ocorrências (do maior para o menor)
    const sortedSupervisors = Object.entries(ocorrenciasPorSupervisor).sort((a, b) => b[1] - a[1]);

    // Separar os dados ordenados
    const labels = sortedSupervisors.map(supervisor => supervisor[0]);
    const values = sortedSupervisors.map(supervisor => supervisor[1]);

    const data = {
        labels: labels,
        datasets: [{
            label: 'Ocorrências por Supervisor',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    currentChart = new Chart(ctx, {
        type: 'bar', // Gráfico de barras
        data: data,
        options: {
            indexAxis: 'y', // Isso transforma as barras em horizontais
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}



document.addEventListener('DOMContentLoaded', function () {

    // Função para esconder filtros e botão de Excel
    function esconderFiltrosEBotoes() {
        document.getElementById('searchInput').style.display = 'none';  // Esconde a barra de pesquisa
        document.getElementById('downloadExcelBtn').style.display = 'none'; // Esconde o botão de Excel
    }

    // Função para mostrar filtros e botão de Excel
    function mostrarFiltrosEBotoes() {
        document.getElementById('searchInput').style.display = 'block';  // Mostra a barra de pesquisa
        document.getElementById('downloadExcelBtn').style.display = 'block'; // Mostra o botão de Excel
    }

    // Botão Home redireciona para a página principal
    document.getElementById("homeBtn").addEventListener("click", function() {
        window.location.href = "indexLog.html"; // Redireciona para a página principal
    });

    // Alternar entre tabela e gráfico
    document.getElementById('showChartBtn').addEventListener('click', function () {
        document.getElementById('tableContainer').style.display = 'none'; // Esconde a tabela
        document.getElementById('chartContainer').style.display = 'block'; // Mostra o gráfico
        esconderFiltrosEBotoes(); // Esconde os filtros e o botão de Excel
        gerarGraficoPorSupervisor(); // Gera o gráfico de ocorrências por supervisor
    });

    // Voltar para a tabela
    document.getElementById('backToTableBtn').addEventListener('click', function () {
        document.getElementById('chartContainer').style.display = 'none'; // Esconde o gráfico
        document.getElementById('tableContainer').style.display = 'block'; // Mostra a tabela
        mostrarFiltrosEBotoes(); // Mostra os filtros e o botão de Excel
    });

    // Inicializa a tabela na primeira página
    initTable();
});


document.addEventListener('DOMContentLoaded', function () {
    // Supondo que você obtenha a data de uma fonte de dados, ou use a data atual
    const lastUpdateDate = "18 de outubro de 2024"; // Data dinâmica, pode vir de uma API ou base de dados
    
    // Atualiza o texto no HTML
    document.getElementById('updateDate').textContent = lastUpdateDate;
});
