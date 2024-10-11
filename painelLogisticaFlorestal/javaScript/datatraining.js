// datatraining.js
let currentChart = null;
const treinamentosPorPagina = 18; // Limite de treinamentos por página
let paginaAtual = 1;
let totalPaginas = 1;

const trainingData = [
    {
        "Status": "Expired",
        "Name": "Aparecido Rodrigues De Souza",
        "Employee ID": "20008678",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Pending",
        "Name": "Jose Dos Santos Silva",
        "Employee ID": "20009387",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Pending",
        "Name": "Vagner Pereira Dos Santos",
        "Employee ID": "20009981",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },



    
    {
        "Status": "Pending",
        "Name": "Jorge Flexa Barbosa",
        "Employee ID": "20033390",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Pending",
        "Name": "Olaziel Goncalves Ferreira",
        "Employee ID": "20035356",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Pending",
        "Name": "Mayco Marques Oliveira",
        "Employee ID": "20035366",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Pending",
        "Name": "Juan Santos Do Carmo",
        "Employee ID": "20035367",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Pending",
        "Name": "Wellington Lopes Cordeiro Enoque",
        "Employee ID": "20038164",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Pending",
        "Name": "Everton Lopes Alves",
        "Employee ID": "20040228",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Pending",
        "Name": "Samuel De Souza Duarte",
        "Employee ID": "20062321",
        "Job Profile": "ASSIST OP CARREGAMENTO GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Pending",
        "Name": "Ricardo De Oliveira",
        "Employee ID": "20018779",
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Pending",
        "Name": "Luis Antonio Da Silva",
        "Employee ID": "20018795",
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Expired",
        "Name": "Juliano Roberto Demai",
        "Employee ID": "20022872",
        "Job Profile": "MOTORISTA PATIO MADEIRA FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Jose Junior Rocha"
    },
    {
        "Status": "Pending",
        "Name": "Adilson Barbosa Da Silva",
        "Employee ID": "20008494",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Clodoaldo Jorge Do Prado",
        "Employee ID": "20008832",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Dorival Bertini",
        "Employee ID": "20008921",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Manoel Benedito Da Silva",
        "Employee ID": "20009581",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Jose Norberto Sartorelli",
        "Employee ID": "20014395",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Sergio Carvalho De Souza",
        "Employee ID": "20016988",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Atamirio Aparecido Da Silva",
        "Employee ID": "20016992",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Jefferson Rony Clay Gomes",
        "Employee ID": "20017009",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Edmilson Do Carmo",
        "Employee ID": "20017026",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Sergio Graciano Dos Santos",
        "Employee ID": "20017041",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Sivaldo Dos Santos",
        "Employee ID": "20017042",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Osmar Pereira",
        "Employee ID": "20017061",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Octavio Willian Sacoman",
        "Employee ID": "20017070",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Luiz De Godoy",
        "Employee ID": "20017082",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Jose Ribeiro De Miranda",
        "Employee ID": "20017083",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Marcos Roberto Miranda",
        "Employee ID": "20017085",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Carlos Andre Goncalves De Souza",
        "Employee ID": "20017087",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Expired",
        "Name": "Claudinei Ferreira Da Silva",
        "Employee ID": "20018082",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Pending",
        "Name": "Alessandro Simao Feltrin",
        "Employee ID": "20018107",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Expired",
        "Name": "Pedro Luiz Aleixo Do Prado",
        "Employee ID": "20018125",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Edson Martins",
        "Employee ID": "20018159",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Anderson Denis Pereira Da Silva",
        "Employee ID": "20018756",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Angelo Leite Barauna",
        "Employee ID": "20018761",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Edson Luiz Da Silva",
        "Employee ID": "20018786",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Amaro Da Silva Souza",
        "Employee ID": "20018985",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Rogerio Machado De Abreu",
        "Employee ID": "20018986",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Valtemir Souza Dos Santos",
        "Employee ID": "20018989",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Daniel Lopes Mendes Da Cruz",
        "Employee ID": "20019017",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Nadie De Alcantara",
        "Employee ID": "20020010",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Expired",
        "Name": "Edison Carvalho Dos Santos",
        "Employee ID": "20020011",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Adriano Dos Santos",
        "Employee ID": "20021281",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Zeir Dos Santos",
        "Employee ID": "20021286",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Gerson Cordeiro Vitor",
        "Employee ID": "20021290",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Anderson Donizete Moretto",
        "Employee ID": "20021307",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Jose Roberto Da Silva",
        "Employee ID": "20022877",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Eder Mauricio Fernandes",
        "Employee ID": "20022919",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Jose Vicente Cardoso",
        "Employee ID": "20022928",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Expired",
        "Name": "Lorivaldo De Lima",
        "Employee ID": "20022943",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Ricardo Andrade De Souza",
        "Employee ID": "20022963",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Estacio Ribeiro Da Silva",
        "Employee ID": "20022984",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Cleber Alves Sila",
        "Employee ID": "20023013",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Paulo Souzano Braz",
        "Employee ID": "20023026",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Reginaldo Vieira Gomes",
        "Employee ID": "20023616",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Antonio Augusto Henrique",
        "Employee ID": "20023617",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Roberio Franklim Da Silva",
        "Employee ID": "20023629",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Roberto Pereira De Souza Junior",
        "Employee ID": "20023655",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Expired",
        "Name": "Nilton Carlos Marciano",
        "Employee ID": "20023665",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Pedro De Souza",
        "Employee ID": "20023691",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Eleno Balbino Da Silva",
        "Employee ID": "20023707",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Edenilson Aparecido Dos Santos",
        "Employee ID": "20023717",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Expired",
        "Name": "Adriano Aparecido Lima De Oliveira",
        "Employee ID": "20023728",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Daniel Pinheiro Junior",
        "Employee ID": "20023735",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Adriano Cantaluppi",
        "Employee ID": "20023742",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Ivanildo Balbino Da Silva",
        "Employee ID": "20023748",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Rogerio Aparecido Mota",
        "Employee ID": "20023800",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Claudinei Luiz Vincoleto",
        "Employee ID": "20023808",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Ricardo Rodrigues Da Silva",
        "Employee ID": "20023812",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Rosemil Pires Cabral",
        "Employee ID": "20025436",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Rodrigo De Souza Monteiro",
        "Employee ID": "20025478",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Expired",
        "Name": "Marcos Roberto De Freitas",
        "Employee ID": "20025479",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Cleber Aparecido Queiroz",
        "Employee ID": "20025481",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Osmar Da Conceicao",
        "Employee ID": "20025487",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Reginaldo Leno De Oliveira",
        "Employee ID": "20025489",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Laercio Da Silva Cardoso",
        "Employee ID": "20025500",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Ronaldo Paulino Dos Santos",
        "Employee ID": "20025616",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Jose Jackson Mendes Brito",
        "Employee ID": "20025620",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Antonio Carlos De Lima",
        "Employee ID": "20025625",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Vilson Roberto Pires",
        "Employee ID": "20025691",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Fernando Rangel Da Silva",
        "Employee ID": "20025840",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Expired",
        "Name": "Edenir Batista De Araujo",
        "Employee ID": "20026031",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Odair Jose Da Silva",
        "Employee ID": "20026035",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Luciano Raimundo Nunes",
        "Employee ID": "20026769",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Eguenson Reis Da Silva",
        "Employee ID": "20029977",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Edvaldo Barboza",
        "Employee ID": "20030031",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Jose Irineudo De Lima",
        "Employee ID": "20030035",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Eli Cristiano Mussi",
        "Employee ID": "20030040",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Paulo Henrique Da Silva",
        "Employee ID": "20030052",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jerri Gilberto Teixeira",
        "Employee ID": "20030081",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Claudinei De Matos",
        "Employee ID": "20030093",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Abel Jose De Oliveira",
        "Employee ID": "20030099",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Fabio Quintilho Da Silva",
        "Employee ID": "20030109",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Antonio Francisco Pereira Da Silva",
        "Employee ID": "20030143",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Marcos Carvalho Ferreira",
        "Employee ID": "20030146",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Jose Augusto Gomes Correia",
        "Employee ID": "20031836",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Roberto Antonio De Andrade",
        "Employee ID": "20031846",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Ronaldo Francisco Dos Santos",
        "Employee ID": "20031913",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Roberto Carlos Ribeiro",
        "Employee ID": "20031914",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Carlos Dantas",
        "Employee ID": "20031916",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Dolvalino Medrado",
        "Employee ID": "20031917",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Reinaldo De Almeida Ferreira",
        "Employee ID": "20032754",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Paulo Suman",
        "Employee ID": "20032960",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Fabio Candido Da Silva",
        "Employee ID": "20033146",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Jose Ferreira Da Silva",
        "Employee ID": "20033148",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Valdemir Donizetti Da Silva",
        "Employee ID": "20033348",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "NIVALDO GARCIA",
        "Employee ID": "20033383",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Everton Luiz Mendes Da Silva",
        "Employee ID": "20033393",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Jose Roberto De Lima",
        "Employee ID": "20033397",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Adelino Moreira Da Silva",
        "Employee ID": "20033409",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Vanderlei Dias Barbosa",
        "Employee ID": "20033410",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Jose Carlos Camilo",
        "Employee ID": "20034590",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Valmir Aparecido Fonseca",
        "Employee ID": "20034592",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Pedro Pereira Da Silva",
        "Employee ID": "20034595",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Odair Rogerio De Souza",
        "Employee ID": "20034870",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Carlos Alberto Brazilio",
        "Employee ID": "20034894",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Jonas Daniel Fernandes",
        "Employee ID": "20035355",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Expired",
        "Name": "Ilson Aparecido Victorino",
        "Employee ID": "20037099",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Marcos Roberto de Oliveira",
        "Employee ID": "20039967",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jhon Cresler Primo",
        "Employee ID": "20041601",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Pending",
        "Name": "Luiz Carlos Severiano",
        "Employee ID": "20042166",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Mesac Ferreira Dias",
        "Employee ID": "20042190",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Luiz Carlos Panini",
        "Employee ID": "20042640",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Arlindo Vicente Filho",
        "Employee ID": "20043852",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Alessandro Da Silva Nascimento",
        "Employee ID": "20046771",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Wiler Jose de Freitas Garcia",
        "Employee ID": "20049063",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Expired",
        "Name": "Claudemir Martins Lopes",
        "Employee ID": "20049737",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Valdenil Da Silva",
        "Employee ID": "20049741",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Francisco Pereira Severo De Lima",
        "Employee ID": "20050181",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Joao Alves Dos Santos",
        "Employee ID": "20050228",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Moacir Sinval Correa Baptista",
        "Employee ID": "20051235",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Marcos Lopes Lacerda",
        "Employee ID": "20051244",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Francisco Batista Franca",
        "Employee ID": "20051246",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Valter Cristovao Dos Santos",
        "Employee ID": "20051340",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Marcelo de Souza Arantes",
        "Employee ID": "20052429",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Claudio Leandro Costa",
        "Employee ID": "20053357",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Ronaldo De Souza Lima",
        "Employee ID": "20054010",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Rodrigo Amaral de Souza",
        "Employee ID": "20055370",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Anderson Jose Bertoncin",
        "Employee ID": "20055375",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Jucilio Da Silva Ferreira",
        "Employee ID": "20055380",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Julio Cesar Dos Santos",
        "Employee ID": "20056246",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Reginaldo De Oliveira",
        "Employee ID": "20056315",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Lucio Donizete Pantarotto",
        "Employee ID": "20056382",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Fabiano Costa De Lima",
        "Employee ID": "20056388",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Regiano Rodrigues",
        "Employee ID": "20057003",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Alessandro Aparecido Porto",
        "Employee ID": "20057461",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "William Alex Theodoro",
        "Employee ID": "20057503",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Daniel Elias De Siqueira",
        "Employee ID": "20057993",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Aldair Jose Da Silva",
        "Employee ID": "20058311",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Ernandes Da Silva Soares",
        "Employee ID": "20058505",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Fabricio Camargo Da Silva",
        "Employee ID": "20058883",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Edson Vaz Cardoso Moreira",
        "Employee ID": "20059180",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Expired",
        "Name": "Marcio Giovani Goncalves",
        "Employee ID": "20059363",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "AGNALDO GOMES DE OLIVEIRA",
        "Employee ID": "20059388",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "JOSIVAM LUIZ DA SILVA",
        "Employee ID": "20059708",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "Ademir Ribeiro",
        "Employee ID": "20059781",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "David Biancao",
        "Employee ID": "20059823",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Gilmar Barboza",
        "Employee ID": "20059911",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Expired",
        "Name": "Bruno Rodrigues de Morais",
        "Employee ID": "20059966",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Nilson Rodrigues Bonfim",
        "Employee ID": "20060404",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Wanderson Rafael Americo",
        "Employee ID": "20060521",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Luiz Paulo Gimenes",
        "Employee ID": "20060689",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Jose Prudente Melo",
        "Employee ID": "20060703",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Marcelo Gobbi Marciano",
        "Employee ID": "20060813",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Luiz Carlos de Souza da Silva",
        "Employee ID": "20061335",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Danilo Jose Barreto Turco",
        "Employee ID": "20061361",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Leandro Henrique Da Silva Bortoleti",
        "Employee ID": "20061487",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Marcelo Augusto Fermino",
        "Employee ID": "20061494",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Edson Caldeira Barbosa",
        "Employee ID": "20061495",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Uarly Santos De Abreu",
        "Employee ID": "20061920",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "Sebastiao Ribeiro De Campos",
        "Employee ID": "20061974",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Carlos Alberto Da Silva",
        "Employee ID": "20062579",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Gilmar Rocha Teixeira",
        "Employee ID": "20062760",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jeferson Coelho Da Silva Vieira",
        "Employee ID": "20062972",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "Jose Carlos Mesacio",
        "Employee ID": "20062975",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "Alexandre Dos Reis Silveira",
        "Employee ID": "20063419",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Thiago Ferreira De Souza",
        "Employee ID": "20063435",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Maicon Rogerio Fayan",
        "Employee ID": "20063437",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Jhonatan Wilson Dias Oliveira",
        "Employee ID": "20063484",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Claudir Martins Lopes",
        "Employee ID": "20063536",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Denni Carlos De Jesus",
        "Employee ID": "20063541",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Rodrigo Oliveira Venancio",
        "Employee ID": "20063718",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Eduardo Gonzaga dos Santos",
        "Employee ID": "20063726",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Carlos Alexandre De Albuquerque",
        "Employee ID": "20063732",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Jessica Maria Barbosa",
        "Employee ID": "20063739",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Eduardo Marciano",
        "Employee ID": "20063741",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Uedslei Luiz Da Cunha"
    },
    {
        "Status": "Pending",
        "Name": "Alexsandro Rodrigues da Silva",
        "Employee ID": "20064101",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "Helton Fernando Rodrigues",
        "Employee ID": "20064330",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Joao Claudio Ferreira Garcia",
        "Employee ID": "20064742",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Edmilson Pereira Da Silva",
        "Employee ID": "20064901",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Fabio Dias Coelho",
        "Employee ID": "20064905",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Leandro Ricardo De Freitas",
        "Employee ID": "20064918",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Jose Ronildo Ferreira Da Silva",
        "Employee ID": "20064921",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Marcelio Soares De Souza",
        "Employee ID": "20065185",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Expired",
        "Name": "Heraldo Bittu Do Carmo",
        "Employee ID": "20069612",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Runi Dias Barbosa",
        "Employee ID": "20069895",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Leandro Andrade Goncalves",
        "Employee ID": "20069896",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Christian Takeshi Monteiro Higuto",
        "Employee ID": "20069897",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Delio Santos Romao",
        "Employee ID": "20069899",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Fabio Bezerra Da Silva",
        "Employee ID": "20069900",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Alair Jose De Carvalho",
        "Employee ID": "20069901",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Lucas Eduardo Morelato",
        "Employee ID": "20069928",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Augusto Verardo",
        "Employee ID": "20069936",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Denivaldo Batista De Souza",
        "Employee ID": "20069945",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Marco Aurelio Timoteo Leal Martins",
        "Employee ID": "20069949",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Ygor Dantas Gomes Da Silva",
        "Employee ID": "20069952",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Ronaldo Francisco Machado",
        "Employee ID": "20069960",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Mauricio Jose Ramos De Souza",
        "Employee ID": "20069972",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Luciano Marcelino Elias Gomes Coletta",
        "Employee ID": "20070263",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Luiz Antonio Candido",
        "Employee ID": "20070264",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Carlos De Lima",
        "Employee ID": "20070266",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Leandro Aparecido Martins",
        "Employee ID": "20070268",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Pending",
        "Name": "Dinomar Da Costa Carvalho",
        "Employee ID": "20070270",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Marcos Balbueno Dos Santos",
        "Employee ID": "20070277",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Joao Dias Gomes",
        "Employee ID": "20070290",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Kihorky Mariano Dos Santos",
        "Employee ID": "20070291",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Ailton Edson Dos Santos",
        "Employee ID": "20070317",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Regis Fernando Leal",
        "Employee ID": "20070322",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Rodrigo Tadeu David",
        "Employee ID": "20070328",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Rosilaine Cristina Ferreira da Silva",
        "Employee ID": "20070332",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Joana Antonia Xavier Dos Reis",
        "Employee ID": "20070348",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Nilton Cesar Chaves",
        "Employee ID": "20070674",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Marcos Venicio Laurentino Pereira",
        "Employee ID": "20070679",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Felipe Gamaleira Da Silva",
        "Employee ID": "20070683",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Sebastiao De Araujo",
        "Employee ID": "20070703",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Valdir Ozorio",
        "Employee ID": "20070705",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Jefferson Carlos Da Silva",
        "Employee ID": "20070740",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Carlos Gomes Da Costa Filho",
        "Employee ID": "20070932",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Daniel Vitor Teodoro",
        "Employee ID": "20070958",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Pending",
        "Name": "Carlos Alexandre De Souza Pereira",
        "Employee ID": "20071222",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Bruno Teodoro Firmino",
        "Employee ID": "20071244",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Osvaldir Garcia de Freitar Júnior",
        "Employee ID": "20071350",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Geumires Vilar dos Anjos",
        "Employee ID": "20071354",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Donizete Junior Dos Santos",
        "Employee ID": "20071358",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "Fabio Da Silva Garcia",
        "Employee ID": "20071362",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Jose Rogerio Firmino Da Silva",
        "Employee ID": "20071364",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Leferson Luis Souza da Silva",
        "Employee ID": "20071366",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Luiz Carlos Dias",
        "Employee ID": "20071367",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Fabio Roberto rosa rosa rosa",
        "Employee ID": "20071371",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "Keber Antonio Cruz Ferreira",
        "Employee ID": "20071372",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Fabio De Souza Silva",
        "Employee ID": "20071418",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Fabio Teles Ramos De Souza",
        "Employee ID": "20071743",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Tiago Gomes Araujo",
        "Employee ID": "20071747",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Sidnei Pasini",
        "Employee ID": "20071765",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Julio Cesar Albino Ribeiro",
        "Employee ID": "20071766",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Claudemir Jose Martins",
        "Employee ID": "20071770",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Renan Ignatz De Souza",
        "Employee ID": "20071771",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Sergio Ferreira Dos Santos Sakakibara",
        "Employee ID": "20071772",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Wemerson Dos Santos Olímpio",
        "Employee ID": "20071773",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Wellington Aparecido Dias",
        "Employee ID": "20071774",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Valdinei Vicente Da Silva",
        "Employee ID": "20071775",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Sérgio Cares Lacerda",
        "Employee ID": "20071776",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Edinilson Jorge",
        "Employee ID": "20071777",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Carlos Roberto Da Silva  Junior",
        "Employee ID": "20071971",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Emerson Santos De Oliveira",
        "Employee ID": "20073127",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Adolfo Aparecido Luis Correa",
        "Employee ID": "20073168",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Fernando Santos Lima",
        "Employee ID": "20073641",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Adilson Rodrigues Basto"
    },
    {
        "Status": "Pending",
        "Name": "Jose Antonio Moeça Junior",
        "Employee ID": "20073855",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Luiz Cristiano Fernandes",
        "Employee ID": "20073856",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Andre Luis Furlanetto",
        "Employee ID": "20073874",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Fabio Augusto De Oliveira",
        "Employee ID": "20074180",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Misael Victorio Justino Ribeiro",
        "Employee ID": "20074871",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Jander Olímpio Stefanato",
        "Employee ID": "20074872",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Bruno Henrique De Sousa Silva",
        "Employee ID": "20074881",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Jose Marcos Da Silva",
        "Employee ID": "20074910",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Danieli De Souza Tenorio"
    },
    {
        "Status": "Pending",
        "Name": "Andrius Washington Vicente",
        "Employee ID": "20077317",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Celso Dias Barbosa",
        "Employee ID": "20077322",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Alaor Marcolino Dos Santos",
        "Employee ID": "20077357",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Rodolfo Do Vale",
        "Employee ID": "20077366",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Vagner Magalhaes Viana",
        "Employee ID": "20077376",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Daniel Marcelino Dos Santos",
        "Employee ID": "20077390",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Elder Paulo Dos Santos"
    },
    {
        "Status": "Pending",
        "Name": "Elton Rogerio Brombini",
        "Employee ID": "20077956",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Fabiana Barbosa Oliveira"
    },
    {
        "Status": "Pending",
        "Name": "Andre Signoreli",
        "Employee ID": "20078011",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Arthur Magnino Santana"
    },
    {
        "Status": "Pending",
        "Name": "Sergio Antonio Pereira De Freitas Junior",
        "Employee ID": "20078012",
        "Job Profile": "MOTORISTA TRANSPORTE CARGAS (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Maximiliano Carvalho Silva"
    },
    {
        "Status": "Pending",
        "Name": "Luiz Marcos De Lima",
        "Employee ID": "20043877",
        "Job Profile": "MOTORISTA TRANSPORTE FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Valdenir Cordeiro Vitor",
        "Employee ID": "20051241",
        "Job Profile": "MOTORISTA TRANSPORTE FLORESTAL (BRA)",
        "Training Title": "CONDUTORES DE VEICULOS DE TRANSPORTE DE CARGA INDIVISIVEL BSP",
        "Direct Manager": "Matheus Henrique Da Silva"
    },
    {
        "Status": "Pending",
        "Name": "Adalto Augusto Dos Santos",
        "Employee ID": "20008492",
        "Job Profile": "OP CARREGADEIRA PATIO (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Pending",
        "Name": "Edimilson Ramos Dos Santos",
        "Employee ID": "20008944",
        "Job Profile": "OP CARREGADEIRA PATIO (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Camila Leite Santos"
    },
    {
        "Status": "Pending",
        "Name": "Luis Antonio Avelino",
        "Employee ID": "20009533",
        "Job Profile": "OP CARREGADEIRA PATIO (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Pending",
        "Name": "Rodrigo Da Costa Vasconcellos",
        "Employee ID": "20075123",
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Pending",
        "Name": "Ortides Menezes Souza",
        "Employee ID": "20075137",
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Pending",
        "Name": "Denis Visael Guerra Valdiviezo",
        "Employee ID": "20076185",
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Pending",
        "Name": "Antonio Santos",
        "Employee ID": "20076850",
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Pending",
        "Name": "Cleiber Pinto Teixeira",
        "Employee ID": "20077381",
        "Job Profile": "OP MAQUINA FLORESTAL GRUA I (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Pending",
        "Name": "Maycon Cota Lopes",
        "Employee ID": "20031522",
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Jhon Felipe Senoski"
    },
    {
        "Status": "Pending",
        "Name": "Deybison Xavier Pereira",
        "Employee ID": "20035348",
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Pending",
        "Name": "Jose Jocimar Ruy Pinto",
        "Employee ID": "20035362",
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Expired",
        "Name": "Thiago da Silva dos Reis",
        "Employee ID": "20069654",
        "Job Profile": "OP MAQUINA FLORESTAL I GRUA (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Maria Proenca Almeida"
    },
    {
        "Status": "Pending",
        "Name": "Aguinaldo Urives Scussel",
        "Employee ID": "20017921",
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Pending",
        "Name": "Reinaldo Aparecido Piotto",
        "Employee ID": "20026021",
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Bianca Araujo Candido"
    },
    {
        "Status": "Pending",
        "Name": "Antonio Aparecido De Brito",
        "Employee ID": "20026047",
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Matthews Vergilio Gomes de Medeiros"
    },
    {
        "Status": "Pending",
        "Name": "Joao Henrique Giorgetti",
        "Employee ID": "20033697",
        "Job Profile": "OP MAQUINA FLORESTAL II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Thiago Augusto Batistela Pietro Sanches"
    },
    {
        "Status": "Pending",
        "Name": "Cleberson Roberto Peres Lopes",
        "Employee ID": "20071225",
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Cassio Thomas Da Silveira"
    },
    {
        "Status": "Pending",
        "Name": "Jose Hermano Do Carmo",
        "Employee ID": "20076937",
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS II (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Mario Fraiz Coelho Maia De Andrade"
    },
    {
        "Status": "Expired",
        "Name": "Reginaldo Aparecido Vaz",
        "Employee ID": "20058490",
        "Job Profile": "OP MAQUINAS EQUIPAMENTOS III (BRA)",
        "Training Title": "NR 31 OPERACAO DE MAQUINA AUTOPROPELIDA - FORMACAO BSP",
        "Direct Manager": "Marcio Aparecido Cavalheiro"
    },
    {
        "Status": "Pending",
        "Name": "Uedslei Luiz Da Cunha",
        "Employee ID": "20015657",
        "Job Profile": "SUP OPERACOES FLORESTAIS (BRA)",
        "Training Title": "PREVENCAO E COMBATE A INCENDIO FLORESTAL BSP",
        "Direct Manager": "Rogerio Assuncao Campos"
    },
    {
        "Status": "Pending",
        "Name": "Willian Kisiel De Matos",
        "Employee ID": "20032236",
        "Job Profile": "SUP OPERACOES FLORESTAIS (BRA)",
        "Training Title": "PREVENCAO E COMBATE A INCENDIO FLORESTAL BSP",
        "Direct Manager": "Hellerson Aparecido Soares"
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





// Alternar entre tabela e gráfico
document.getElementById('showChartBtn').addEventListener('click', function () {
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('chartContainer').style.display = 'block';
    gerarGraficoPorSupervisor(); // Exibir gráfico de ocorrências por supervisor
});

document.getElementById('backToTableBtn').addEventListener('click', function () {
    document.getElementById('chartContainer').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'block';
});

// Inicializa a tabela na primeira página
initTable();