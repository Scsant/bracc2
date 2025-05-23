// aso.js

let currentChart = null;
const motoristasPorPagina = 400; // Limite de motoristas por página
let paginaAtual = 1; // Página inicial
let totalPaginas = 1; // Total de páginas (calculado dinamicamente)
      
       // Dados JSON
        const asoData = [
            {
                "ID SAP": "37015441",
                "ID WD": "20062631",
                "Employee": "ADEMIR GONÇALVES ASTORGA",
                "Total Expired": "",
                "Expired more than 60 days": "",
                "Expired until 60 days": "",
                "Expired until 30 days": "",
                "Total Upcoming Exams": "2",
                "Due in Less than 30 days": "2",
                "Due in 30 to 60 days": "",
                "Due in 60 days or more": "",
                "Immediate Leader": "Fabiana Barbosa Oliveira",
                "Coordinator": "Rogerio Assuncao Campos",
                "Manager": "Andre Luis Scarin Do Amaral"
            },
            {
                "ID SAP": "37014721",
                "ID WD": "20059781",
                "Employee": "ADEMIR RIBEIRO",
                "Total Expired": "2",
                "Expired more than 60 days": "",
                "Expired until 60 days": "2",
                "Expired until 30 days": "",
                "Total Upcoming Exams": "",
                "Due in Less than 30 days": "",
                "Due in 30 to 60 days": "",
                "Due in 60 days or more": "",
                "Immediate Leader": "Uedslei Luiz Da Cunha",
                "Coordinator": "Rogerio Assuncao Campos",
                "Manager": "Andre Luis Scarin Do Amaral"
            },
            {
                "ID SAP": "37015602",
                "ID WD": "20063000",
                "Employee": "ADENILSON TEIXEIRA XAVIER",
                "Total Expired": "",
                "Expired more than 60 days": "",
                "Expired until 60 days": "",
                "Expired until 30 days": "",
                "Total Upcoming Exams": "2",
                "Due in Less than 30 days": "",
                "Due in 30 to 60 days": "2",
                "Due in 60 days or more": "",
                "Immediate Leader": "Fabiana Barbosa Oliveira",
                "Coordinator": "Rogerio Assuncao Campos",
                "Manager": "Andre Luis Scarin Do Amaral"
            },

            {
            "ID SAP": "37006731",
            "ID WD": "20018783",
            "Employee": "ADILSON BATISTA DE LIMA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014921",
            "ID WD": "20060520",
            "Employee": "ADRIANO APARECIDO RAMIRO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015012",
            "ID WD": "20060814",
            "Employee": "ADRIANO FERNANDES DE OLIVEIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37007151",
            "ID WD": "20022958",
            "Employee": "ADRIANO JOSE DA SILVA",
            "Total Expired": "5",
            "Expired more than 60 days": "5",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014860",
            "ID WD": "20032240",
            "Employee": "ADRIANO JOSÉ DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015573",
            "ID WD": "20062961",
            "Employee": "ADRIANO SEVERINO DA SILVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015615",
            "ID WD": "20063013",
            "Employee": "ALDEMAR PEREIRA DE JESUS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Maximiliano Carvalho Silva (20053735)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013979",
            "ID WD": "20057461",
            "Employee": "ALESSANDRO APARECIDO PORTO",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37011950",
            "ID WD": "20046771",
            "Employee": "ALESSANDRO DA SILVA NASCIMENTO",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009199",
            "ID WD": "20031855",
            "Employee": "ALEX MISAEL MARTINEZ",
            "Total Expired": "4",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015015",
            "ID WD": "20060819",
            "Employee": "ALEX SANDRO DE ALMEIDA CESTARO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015521",
            "ID WD": "20062786",
            "Employee": "ALEX SANDRO JOSE ROSSI",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015435",
            "ID WD": "20062625",
            "Employee": "ALEXANDRE APARECIDO FERREIRA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015730",
            "ID WD": "20063419",
            "Employee": "ALEXANDRE DOS REIS SILVEIRA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016355",
            "ID WD": "20064101",
            "Employee": "ALEXSANDRO RODRIGUES DA SILVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006755",
            "ID WD": "20018985",
            "Employee": "AMARO DA SILVA SOUZA",
            "Total Expired": "1",
            "Expired more than 60 days": "1",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013479",
            "ID WD": "20055375",
            "Employee": "ANDERSON JOSE BERTONCIN",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014745",
            "ID WD": "20059912",
            "Employee": "ANDERSON JOSÉ BORGES",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013862",
            "ID WD": "20056995",
            "Employee": "ANDRÉ LUIZ ALVES DOS SANTOS",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009257",
            "ID WD": "20032609",
            "Employee": "ANDRE SOARES DE CAMPOS",
            "Total Expired": "4",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009351",
            "ID WD": "20033147",
            "Employee": "ANTONIO CARLOS RIBEIRO ALVES",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009237",
            "ID WD": "20032755",
            "Employee": "ANTONIO MARCOS MARTINS",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006560",
            "ID WD": "20018136",
            "Employee": "APARECIDO CICERO GOMES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "1",
            "Due in 60 days or more": "",
            "Immediate Leader": "Maximiliano Carvalho Silva (20053735)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37018082",
            "ID WD": "20071750",
            "Employee": "APARECIDO DONIZETI COSTA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Maximiliano Carvalho Silva (20053735)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009197",
            "ID WD": "20031849",
            "Employee": "ARCISIO CLAUDINEI SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006650",
            "ID WD": "20018212",
            "Employee": "BENEDITO DE OLIVEIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015279",
            "ID WD": "20061991",
            "Employee": "BRUNO CESAR RODRIGUES MISSIAS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009619",
            "ID WD": "20035711",
            "Employee": "BRUNO MARTINS",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015416",
            "ID WD": "20062579",
            "Employee": "CARLOS ALBERTO DA SILVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016114",
            "ID WD": "20063732",
            "Employee": "CARLOS ALEXANDRE DE ALBURQUEQUE",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013970",
            "ID WD": "20057452",
            "Employee": "CARLOS EDUARDO CUSTÓDIO",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016357",
            "ID WD": "20064103",
            "Employee": "CARLOS FABIANO RUIZ",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015574",
            "ID WD": "20062962",
            "Employee": "CARLOS JOSE CORREIA GOMES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015071",
            "ID WD": "20061095",
            "Employee": "CÉLIO APARECIDO ALVES",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015133",
            "ID WD": "20061359",
            "Employee": "CLAUDEMIR CARLOS",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015523",
            "ID WD": "20062788",
            "Employee": "CLAUDINEI APARECIDO DA SILVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015162",
            "ID WD": "20061472",
            "Employee": "CLAUDIO DONIZETI PEQUENO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015300",
            "ID WD": "20062069",
            "Employee": "CLÁUDIO DOS SANTOS RIBEIRO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015822",
            "ID WD": "20063536",
            "Employee": "CLAUDIR MARTINS LOPES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009704",
            "ID WD": "20036379",
            "Employee": "CLEISSON SOUZA ROCHA",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37005693",
            "ID WD": "20014394",
            "Employee": "CREUBER ALEXANDRO CORREA BAPTISTA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "3",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "1",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013463",
            "ID WD": "20055359",
            "Employee": "CRISTIANO JOSE DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009620",
            "ID WD": "20035712",
            "Employee": "CRISTIANO RODRIGO LADEIRA",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006791",
            "ID WD": "20019017",
            "Employee": "DANIEL LOPES MENDES DA CRUZ",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014727",
            "ID WD": "20059787",
            "Employee": "DANIEL MARCO ANDRE",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013855",
            "ID WD": "20056988",
            "Employee": "DANILO DE OLIVEIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015080",
            "ID WD": "20061119",
            "Employee": "DARIO JOSÉ ARMBRUSTER",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014739",
            "ID WD": "20059823",
            "Employee": "DAVID BIANCÃO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015077",
            "ID WD": "20061116",
            "Employee": "DENISON EDUARDO DE ALMEIDA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015827",
            "ID WD": "20063541",
            "Employee": "DENNI CARLOS DE JESUS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013693",
            "ID WD": "20056256",
            "Employee": "DEOCLECIO ANTONIO RIBEIRO",
            "Total Expired": "1",
            "Expired more than 60 days": "1",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Jhon Felipe Senoski (20011084)",
            "Coordinator": "Mario Fraiz Coelho Maia De Andrade (20036000)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013860",
            "ID WD": "20056993",
            "Employee": "DIEGO DE OLIVEIRA OLLER",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37007225",
            "ID WD": "20023024",
            "Employee": "DIEGO REIS CANDIDO",
            "Total Expired": "5",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "1",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006788",
            "ID WD": "20019014",
            "Employee": "DIOGENES ALVES DE ARRUDA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013899",
            "ID WD": "20057058",
            "Employee": "DIÓGENES DE CARVALHO",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37005694",
            "ID WD": "20014399",
            "Employee": "DIVALDO GILIOLI",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015796",
            "ID WD": "20063519",
            "Employee": "DOUGLAS FELIPE ULIAN",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015287",
            "ID WD": "20061999",
            "Employee": "EDENILSON FLORIANO DE ALMEIDA",
            "Total Expired": "4",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "1",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014752",
            "ID WD": "20059919",
            "Employee": "ÉDER ANTÔNIO FRANCO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013779",
            "ID WD": "20056430",
            "Employee": "EDER MARTIMIANO LOPES",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37007111",
            "ID WD": "20022919",
            "Employee": "EDER MAURICIO FERNANDES",
            "Total Expired": "4",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "1",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014516",
            "ID WD": "20059042",
            "Employee": "EDILSON FABRÍCIO DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016707",
            "ID WD": "20064901",
            "Employee": "EDMILSON PEREIRA DA SILVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Adilson Rodrigues Basto (20025666)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015825",
            "ID WD": "20063539",
            "Employee": "EDSON APARECIDO LOPES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015179",
            "ID WD": "20061495",
            "Employee": "EDSON CALDEIRA BARBOSA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014592",
            "ID WD": "20059180",
            "Employee": "EDSON VAZ CARDOSO MOREIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016109",
            "ID WD": "20063726",
            "Employee": "EDUARDO GONZAGA DOS SANTOS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016122",
            "ID WD": "20063741",
            "Employee": "EDUARDO MARCIANO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014737",
            "ID WD": "20059821",
            "Employee": "EDUARDO RODRIGUES MARTINUCHO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015592",
            "ID WD": "20062980",
            "Employee": "EDUARDO ROSANOVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009362",
            "ID WD": "20033144",
            "Employee": "EFRAIM JEFFERSON DE OLIVEIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014970",
            "ID WD": "20060691",
            "Employee": "EIDER CÉSAR COSTA SOARES",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008891",
            "ID WD": "20030040",
            "Employee": "ELI CRISTIANO MUSSI",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008089",
            "ID WD": "20026767",
            "Employee": "ELIO ANTONIO DE OLIVEIRA FILHO",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "1",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009194",
            "ID WD": "20031915",
            "Employee": "ELISEU APARECIDO DA SILVA",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Rogerio Assuncao Campos (20013615)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015270",
            "ID WD": "20061982",
            "Employee": "ELTON APARECIDO FADONI",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015439",
            "ID WD": "20062629",
            "Employee": "ELUAN RAFAEL ROCHA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015267",
            "ID WD": "20061979",
            "Employee": "EMERSON LORIANO MARTINS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014855",
            "ID WD": "20060405",
            "Employee": "ERISVAN BARROS DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013848",
            "ID WD": "20056981",
            "Employee": "EVANDRO DE OLIVEIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016788",
            "ID WD": "20065287",
            "Employee": "EVERTON FERNANDO PEREIRA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009382",
            "ID WD": "20033393",
            "Employee": "EVERTON LUIZ MENDES DA SILVA",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015411",
            "ID WD": "20062443",
            "Employee": "EVERTON LUIZ PEDROSO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013753",
            "ID WD": "20056388",
            "Employee": "FABIANO COSTA DE LIMA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014674",
            "ID WD": "20059433",
            "Employee": "FABIANO PARIZOTO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009160",
            "ID WD": "20031833",
            "Employee": "FABIANO RODRIGUES DE SOUZA",
            "Total Expired": "4",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013506",
            "ID WD": "20055402",
            "Employee": "FABIO DE SOUZA LIMA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015512",
            "ID WD": "20062768",
            "Employee": "FABIO RODRIGUES DOS SANTOS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014469",
            "ID WD": "20058883",
            "Employee": "FABRICIO CAMARGO DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013054",
            "ID WD": "20052406",
            "Employee": "FERNANDO  ALVES DE OLIVEIRA",
            "Total Expired": "1",
            "Expired more than 60 days": "1",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Jhon Felipe Senoski (20011084)",
            "Coordinator": "Mario Fraiz Coelho Maia De Andrade (20036000)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014998",
            "ID WD": "20060744",
            "Employee": "FERNANDO BREGADIOLI",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008931",
            "ID WD": "20030149",
            "Employee": "FERNANDO RICARDO SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "1",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015415",
            "ID WD": "20062578",
            "Employee": "FRANCISCO ANTONIO SILVESTRE",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014438",
            "ID WD": "20058837",
            "Employee": "FRANCISCO DAS CHAGAS CARVALHO RODRIGUES",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015895",
            "ID WD": "20063573",
            "Employee": "GELOGIANE PEREIRA DE SOUSA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015522",
            "ID WD": "20062787",
            "Employee": "GENIVAL LUIZ DE ASSIS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006944",
            "ID WD": "20021290",
            "Employee": "GERSON CORDEIRO VITOR",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014744",
            "ID WD": "20059911",
            "Employee": "GILMAR BARBOZA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009538",
            "ID WD": "20034889",
            "Employee": "GILMAR EVANGELISTA DE OLIVEIRA",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016457",
            "ID WD": "20064330",
            "Employee": "HELTON FERNANDO RODRIGUES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Maximiliano Carvalho Silva (20053735)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37010015",
            "ID WD": "20037099",
            "Employee": "ILSON APARECIDO VICTORINO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "4",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016350",
            "ID WD": "20064096",
            "Employee": "ISAIAS JOSÉ DA SILVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013900",
            "ID WD": "20057059",
            "Employee": "IVAN HENRIQUE BRITO DOS SANTOS",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006194",
            "ID WD": "20016952",
            "Employee": "JADER GABRIEL TEIXEIRA LIMA PEDRO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Andre Luis Scarin Do Amaral (20008622)",
            "Coordinator": "",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015584",
            "ID WD": "20062972",
            "Employee": "JEFERSON COELHO DA SILVA VIEIRA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008972",
            "ID WD": "20030121",
            "Employee": "JEFERSON VICENTE VIGNA",
            "Total Expired": "4",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "1",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016120",
            "ID WD": "20063739",
            "Employee": "JESSICA MARIA BARBOSA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015772",
            "ID WD": "20063484",
            "Employee": "JHONATAN WILSON DIAS OLIVEIRA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015105",
            "ID WD": "20061279",
            "Employee": "JOÃO BATISTA DOS SANTOS",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37000615",
            "ID WD": "20009326",
            "Employee": "JOAO CARLOS LEITE DE ALBUQUERQUE",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006497",
            "ID WD": "20017969",
            "Employee": "JONAS EVARISTO ESTEVES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006932",
            "ID WD": "20021281",
            "Employee": "JOSE ADRIANO DOS SANTOS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008813",
            "ID WD": "20034590",
            "Employee": "JOSE CARLOS CAMILO",
            "Total Expired": "4",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014888",
            "ID WD": "20060475",
            "Employee": "JOSÉ CARLOS DE OLIVEIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015587",
            "ID WD": "20062975",
            "Employee": "JOSE CARLOS MESACIO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015578",
            "ID WD": "20062966",
            "Employee": "JOSE DOS SANTOS ARAUJO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015098",
            "ID WD": "20061272",
            "Employee": "JOSÉ FERNANDO FREITAS",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009350",
            "ID WD": "20033148",
            "Employee": "JOSE FERREIRA DA SILVA",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014776",
            "ID WD": "20059981",
            "Employee": "JOSÉ LUÍS BARBOSA DE OLIVEIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016388",
            "ID WD": "20064137",
            "Employee": "JOSÉ MACEDO DE ARAÚJO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014854",
            "ID WD": "20060404",
            "Employee": "JOSÉ NILSON RODRIGUES BONFIM",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37005697",
            "ID WD": "20014395",
            "Employee": "JOSE NORBERTO SARTORELLI",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "3",
            "Due in Less than 30 days": "1",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014982",
            "ID WD": "20060703",
            "Employee": "JOSE PRUDENTE MELO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014618",
            "ID WD": "20059357",
            "Employee": "JOSÉ ROBERTO FERREIRA DA ROCHA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37007119",
            "ID WD": "20022928",
            "Employee": "JOSE VICENTE CARDOSO",
            "Total Expired": "5",
            "Expired more than 60 days": "5",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013484",
            "ID WD": "20055380",
            "Employee": "JUCILIO DA SILVA FERREIRA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013741",
            "ID WD": "20056336",
            "Employee": "JULIO CESAR RIBEIRO DE BARROS",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015161",
            "ID WD": "20061471",
            "Employee": "LEANDRO BALLAN ABILE",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008918",
            "ID WD": "20030139",
            "Employee": "LEANDRO GENERICK",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "1",
            "Immediate Leader": "Matheus Henrique Da Silva (20018137)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015171",
            "ID WD": "20061487",
            "Employee": "LEANDRO HENRIQUE DA SILVA BORTOLETI",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015175",
            "ID WD": "20061491",
            "Employee": "LENALDO MARCELINO DOS SANTOS",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006793",
            "ID WD": "20019019",
            "Employee": "LUCAS RUEDA DOS SANTOS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014461",
            "ID WD": "20034021",
            "Employee": "LUCIANO CESAR PEDROSO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015427",
            "ID WD": "20062617",
            "Employee": "LÚCIO GONÇALVES MALDONADO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014586",
            "ID WD": "20059174",
            "Employee": "LUIS ROGERIO DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015111",
            "ID WD": "20061335",
            "Employee": "LUIZ CARLOS DE SOUZA DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37007963",
            "ID WD": "20026028",
            "Employee": "LUIZ CARLOS KODRAI",
            "Total Expired": "4",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "1",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37002861",
            "ID WD": "20009557",
            "Employee": "LUIZ CARLOS MARTINS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "4",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014968",
            "ID WD": "20060689",
            "Employee": "LUIZ PAULO GIMENES",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015262",
            "ID WD": "20061973",
            "Employee": "MAICON DOUGLAS APARECIDO ANTÔNIO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015752",
            "ID WD": "20063437",
            "Employee": "MAICON ROGERIO FAYAN",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014868",
            "ID WD": "20060449",
            "Employee": "MAICON ROGÉRIO RAMOS",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37000605",
            "ID WD": "20009581",
            "Employee": "MANOEL BENEDITO DA SILVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009363",
            "ID WD": "20033143",
            "Employee": "MARCELO APARECIDO BENTO",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015011",
            "ID WD": "20060813",
            "Employee": "MARCELO GOBBI MARCIANO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015726",
            "ID WD": "20063415",
            "Employee": "MARCIO ROBERTO DE PAULA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37007463",
            "ID WD": "20025525",
            "Employee": "MARCO ANTONIO RIBEIRO RAMOS",
            "Total Expired": "5",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "1",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006654",
            "ID WD": "20018741",
            "Employee": "MARCOS ANTONIO CIAN",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013872",
            "ID WD": "20057005",
            "Employee": "MARCOS APARECIDO ALVES",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008928",
            "ID WD": "20030146",
            "Employee": "MARCOS CARVALHO FERREIRA",
            "Total Expired": "4",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "1",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013853",
            "ID WD": "20056986",
            "Employee": "MARCOS FOIZZER",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016354",
            "ID WD": "20064100",
            "Employee": "MARCOS LEITE",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37010468",
            "ID WD": "20039967",
            "Employee": "MARCOS ROBERTO DE OLIVEIRA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "4",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Maximiliano Carvalho Silva (20053735)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015072",
            "ID WD": "20061096",
            "Employee": "MARCUS VINÍCIUS BERALDO RONCATO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015118",
            "ID WD": "20061344",
            "Employee": "MARISTELA CRISTINA COSTA ZANELLA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37011101",
            "ID WD": "20042190",
            "Employee": "MESAC FERREIRA DIAS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015357",
            "ID WD": "20062366",
            "Employee": "MICHAEL EMANOEL DA ANUNCIAÇÃO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37012655",
            "ID WD": "20051235",
            "Employee": "MOACIR SINVAL CORREA BAPTISTA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Maximiliano Carvalho Silva (20053735)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009366",
            "ID WD": "20033398",
            "Employee": "MURILO GOMES DA COSTA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Matheus Henrique Da Silva (20018137)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015123",
            "ID WD": "20061349",
            "Employee": "NICERSO DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009195",
            "ID WD": "20031847",
            "Employee": "NILDO CERQUEIRA CAVALCANTE",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "1",
            "Due in 60 days or more": "",
            "Immediate Leader": "Matheus Henrique Da Silva (20018137)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015344",
            "ID WD": "20033383",
            "Employee": "NIVALDO GARCIA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009513",
            "ID WD": "20034870",
            "Employee": "ODAIR ROGERIO DE SOUZA",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "4",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009154",
            "ID WD": "20031841",
            "Employee": "OSMAR DE ARRUDA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009162",
            "ID WD": "20031911",
            "Employee": "OSVALDO GUERRA PAIXAO JUNIOR",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006821",
            "ID WD": "20019998",
            "Employee": "PAULO ANDRE DOMINGUES",
            "Total Expired": "5",
            "Expired more than 60 days": "5",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015260",
            "ID WD": "20061971",
            "Employee": "PAULO FERNANDO MURONI",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009415",
            "ID WD": "20033740",
            "Employee": "PAULO HENRIQUE MAROLA",
            "Total Expired": "4",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008841",
            "ID WD": "20034595",
            "Employee": "PEDRO PEREIRA DA SILVA",
            "Total Expired": "4",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013870",
            "ID WD": "20057003",
            "Employee": "REGIANO RODRIGUES",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016805",
            "ID WD": "20065304",
            "Employee": "REGINALDO NERES SOBRINHO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015591",
            "ID WD": "20062979",
            "Employee": "REGINALDO ROCHA DE JESUS SANTOS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006751",
            "ID WD": "20018981",
            "Employee": "REGIS DE ALMEIDA MACHADO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37000607",
            "ID WD": "20009823",
            "Employee": "REINALDO ROMANO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "4",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Matheus Henrique Da Silva (20018137)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015141",
            "ID WD": "20061451",
            "Employee": "RENATO ANDRÉ BORIN",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015585",
            "ID WD": "20062973",
            "Employee": "RENATO PEREIRA DOS SANTOS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015437",
            "ID WD": "20062627",
            "Employee": "RICARDO CÉSAR DOS SANTOS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014969",
            "ID WD": "20060690",
            "Employee": "RICARDO MARQUES DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009202",
            "ID WD": "20031914",
            "Employee": "ROBERTO CARLOS RIBEIRO",
            "Total Expired": "4",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Matheus Henrique Da Silva (20018137)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015580",
            "ID WD": "20062968",
            "Employee": "ROBSON LUCIO DE SOUZA SANTOS",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014643",
            "ID WD": "20059382",
            "Employee": "RODRIGO ANTÔNIO DE SOUSA",
            "Total Expired": "1",
            "Expired more than 60 days": "",
            "Expired until 60 days": "1",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Marcio Aparecido Cavalheiro (20013549)",
            "Coordinator": "Mario Fraiz Coelho Maia De Andrade (20036000)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013469",
            "ID WD": "20055365",
            "Employee": "ROGERIO ANTONIO DA SILVA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014514",
            "ID WD": "20059040",
            "Employee": "ROGERIO APARECIDO ORTOLOM",
            "Total Expired": "4",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "1",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006756",
            "ID WD": "20018986",
            "Employee": "ROGERIO MACHADO DE ABREU",
            "Total Expired": "1",
            "Expired more than 60 days": "1",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006513",
            "ID WD": "20018111",
            "Employee": "ROGERIO VIEIRA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Arthur Magnino Santana (20037148)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37009193",
            "ID WD": "20031913",
            "Employee": "RONALDO FRANCISCO DOS SANTOS",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015256",
            "ID WD": "20061967",
            "Employee": "RUDNEI ROBERTO GIMENES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015601",
            "ID WD": "20062999",
            "Employee": "SEBASTIAO ADICIO RAMOS DE MORAES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006246",
            "ID WD": "20016988",
            "Employee": "SERGIO CARVALHO DE SOUZA",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Matheus Henrique Da Silva (20018137)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015613",
            "ID WD": "20063011",
            "Employee": "SILVIO CEZAR MARCATO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015431",
            "ID WD": "20062621",
            "Employee": "TEDI ALISSON RODRIGUES",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015750",
            "ID WD": "20063435",
            "Employee": "THIAGO FERREIRA DE SOUZA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Danieli De Souza Tenorio (20008122)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37016118",
            "ID WD": "20063736",
            "Employee": "THIAGO HENRIQUE GONÇALVES MEDOLAGO",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015429",
            "ID WD": "20062619",
            "Employee": "TIAGO HENRIQUE XAVIER",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015248",
            "ID WD": "20061920",
            "Employee": "UARLY SANTOS DE ABREU",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "2",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37013485",
            "ID WD": "20055381",
            "Employee": "UELITON CRISTIANO PASQUALINOTTO",
            "Total Expired": "2",
            "Expired more than 60 days": "2",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37008815",
            "ID WD": "20034592",
            "Employee": "VALMIR APARECIDO FONSECA",
            "Total Expired": "4",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "1",
            "Immediate Leader": "Elder Paulo Dos Santos (20025430)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015586",
            "ID WD": "20062974",
            "Employee": "VANCLEI DIAS DE SOUZA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014587",
            "ID WD": "20059175",
            "Employee": "VANDERLEI APARECIDO REINHOLD",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37015779",
            "ID WD": "20063491",
            "Employee": "VANDERLEI SUPTIL DA SILVA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "2",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "",
            "Immediate Leader": "Fabiana Barbosa Oliveira | Fabiana Barbosa Oliveira (20064897)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014748",
            "ID WD": "20059915",
            "Employee": "VANDERLÉIA APARECIDA DA FONSECA",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37010744",
            "ID WD": "20040954",
            "Employee": "VICENTE DE PAULA MOREIRA",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "4",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "2",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Thiago Maria Proenca Almeida (20053284)",
            "Coordinator": "Mario Fraiz Coelho Maia De Andrade (20036000)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37007617",
            "ID WD": "20025691",
            "Employee": "VILSON ROBERTO PIRES",
            "Total Expired": "4",
            "Expired more than 60 days": "4",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "1",
            "Due in Less than 30 days": "1",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Matheus Henrique Da Silva (20018137)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014789",
            "ID WD": "20060006",
            "Employee": "VÍTOR HÉLIO DANTAS PURIDELI",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "2",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37006585",
            "ID WD": "20018158",
            "Employee": "WAGNER APARECIDO DA CRUZ",
            "Total Expired": "",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "",
            "Total Upcoming Exams": "3",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "1",
            "Due in 60 days or more": "2",
            "Immediate Leader": "Matheus Henrique Da Silva (20018137)",
            "Coordinator": "Everson Ribas Gomes (20021647)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "37014922",
            "ID WD": "20060521",
            "Employee": "WANDERSON RAFAEL AMÉRICO",
            "Total Expired": "2",
            "Expired more than 60 days": "",
            "Expired until 60 days": "",
            "Expired until 30 days": "2",
            "Total Upcoming Exams": "",
            "Due in Less than 30 days": "",
            "Due in 30 to 60 days": "",
            "Due in 60 days or more": "",
            "Immediate Leader": "Uedslei Luiz Da Cunha (20015657)",
            "Coordinator": "Rogerio Assuncao Campos (20013615)",
            "Manager": "Andre Luis Scarin Do Amaral (20008622)"
        },
        {
            "ID SAP": "Total",
            "ID WD": "",
            "Employee": "",
            "Total Expired": "304",
            "Expired more than 60 days": "135",
            "Expired until 60 days": "76",
            "Expired until 30 days": "93",
            "Total Upcoming Exams": "210",
            "Due in Less than 30 days": "57",
            "Due in 30 to 60 days": "94",
            "Due in 60 days or more": "59",
            "Immediate Leader": "",
            "Coordinator": "",
            "Manager": ""
        }

        ];



// Função para renderizar os dados na tabela de acordo com a página
function renderTable(data, pagina) {
    const tbody = document.querySelector('#asoTable tbody');
    tbody.innerHTML = ''; // Limpar a tabela antes de renderizar os novos dados

    const inicio = (pagina - 1) * motoristasPorPagina;
    const fim = inicio + motoristasPorPagina;
    const motoristasPagina = data.slice(inicio, fim); // Dados da página atual

    motoristasPagina.forEach(motorista => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="ID Motorista">${motorista["ID SAP"]}</td>
            <td data-label="ID WD">${motorista["ID WD"]}</td>
            <td data-label="Nome">${motorista.Employee}</td>
            <td data-label="Total Expirado">${motorista["Total Expired"] || "Nenhum"}</td>
            <td data-label="Expirado a mais de 60 dias">${motorista["Expired more than 60 days"] || "Nenhum"}</td>
            <td data-label="Expirado até 60 dias">${motorista["Expired until 60 days"] || "Nenhum"}</td>
            <td data-label="Expirado até 30 dias">${motorista["Expired until 30 days"] || "Nenhum"}</td>
            <td data-label="Total de exames futuros">${motorista["Total Upcoming Exams"] || "Nenhum"}</td>
            <td data-label="Devido em menos de 30 dias">${motorista["Due in Less than 30 days"] || "Nenhum"}</td>
            <td data-label="Devido de 30 a 60 dias">${motorista["Due in 30 to 60 days"] || "Nenhum"}</td>
            <td data-label="Devido em mais de 60 dias">${motorista["Due in 60 days or more"] || "Nenhum"}</td>
            <td data-label="Líder Imediato">${motorista["Immediate Leader"]}</td>
            <td data-label="Coordenador">${motorista["Coordinator"]}</td>
            <td data-label="Gerente">${motorista["Manager"]}</td>
        `;
        tbody.appendChild(row);
    });
    // Atualiza a barra de navegação da página
    renderPagination(data.length, pagina);
}




// Função de filtragem por nome do líder imediato
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Filtra os dados pelo nome do Líder Imediato
    filteredData = asoData.filter(motorista => 
        motorista["Immediate Leader"].toLowerCase().includes(searchTerm)
    );

    // Reiniciar a paginação e renderizar a tabela filtrada
    paginaAtual = 1;
    renderTable(filteredData, paginaAtual);
}

// Função para baixar a tabela como Excel
function exportToExcel() {
    // Capturar a tabela HTML
    const table = document.getElementById('asoTable');
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Motoristas" });

    // Baixar o arquivo Excel
    XLSX.writeFile(workbook, 'motoristas.xlsx');
}

// Adiciona evento ao botão para baixar o Excel
document.getElementById('downloadExcelBtn').addEventListener('click', exportToExcel);




// Função para renderizar a barra de paginação
function renderPagination(totalMotoristas, paginaAtual) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = ''; // Limpar paginação antiga

    totalPaginas = Math.ceil(totalMotoristas / motoristasPorPagina); // Calcular o total de páginas

    // Botão "Anterior"
    const botaoAnterior = document.createElement('button');
    botaoAnterior.innerText = 'Anterior';
    botaoAnterior.disabled = paginaAtual === 1; // Desativar botão se estiver na primeira página
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
    botaoProxima.disabled = paginaAtual === totalPaginas; // Desativar botão se estiver na última página
    botaoProxima.addEventListener('click', () => mudarPagina(paginaAtual + 1));
    paginationDiv.appendChild(botaoProxima);
}

// Função para mudar de página
function mudarPagina(novaPagina) {
    paginaAtual = novaPagina;
    renderTable(asoData, paginaAtual); // Re-renderizar a tabela para a nova página
}

// Função de inicialização para mostrar a primeira página
function initTable() {
    renderTable(asoData, paginaAtual);
}







// Função para gerar o gráfico de motoristas por dias de atraso
function gerarGraficoAtraso() {
    const chartCanvas = document.getElementById('myChart');

    // Inicia o fade-out
    chartCanvas.classList.remove('show');

    // Espera a animação de fade-out antes de destruir o gráfico e gerar o novo
    setTimeout(() => {
        if (currentChart) {
            currentChart.destroy(); // Destruir o gráfico anterior
        }

        // Dados do gráfico
        const expiradoAte30 = asoData.filter(motorista => motorista["Expired until 30 days"]).length;
        const expiradoAte60 = asoData.filter(motorista => motorista["Expired until 60 days"]).length;
        const expiradoMais60 = asoData.filter(motorista => motorista["Expired more than 60 days"]).length;
        const examesFuturos = asoData.filter(motorista => motorista["Total Upcoming Exams"]).length;
        const devidoMenos30 = asoData.filter(motorista => motorista["Due in Less than 30 days"]).length;
        const devido30a60 = asoData.filter(motorista => motorista["Due in 30 to 60 days"]).length;
        const devidoMais60 = asoData.filter(motorista => motorista["Due in 60 days or more"]).length;

        const data = {
            labels: [
                'Expirado até 30 dias',
                'Expirado até 60 dias',
                'Expirado a mais de 60 dias',
                'Exames Futuros',
                'Devido em menos de 30 dias',
                'Devido de 30 a 60 dias',
                'Devido em mais de 60 dias'
            ],
            datasets: [{
                label: 'Quantidade de Motoristas',
                data: [expiradoAte30, expiradoAte60, expiradoMais60, examesFuturos, devidoMenos30, devido30a60, devidoMais60],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(46, 204, 113, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(46, 204, 113, 1)'
                ],
                borderWidth: 1
            }]
        };

        const ctx = chartCanvas.getContext('2d');
        currentChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Depois que o gráfico é atualizado, inicia o fade-in
        setTimeout(() => {
            chartCanvas.classList.add('show');
        }, 10);
    }, 500); // Tempo do fade-out
}

// Função para gerar o gráfico de motoristas por líder imediato
function gerarGraficoLider() {
    const chartCanvas = document.getElementById('myChart');

    // Inicia o fade-out
    chartCanvas.classList.remove('show');

    setTimeout(() => {
        if (currentChart) {
            currentChart.destroy(); // Destruir o gráfico anterior
        }

        const lideres = {};

        // Contar quantos motoristas cada líder tem
        asoData.forEach(motorista => {
            const lider = motorista["Immediate Leader"];
            if (lideres[lider]) {
                lideres[lider]++;
            } else {
                lideres[lider] = 1;
            }
        });

        const sortedEntries = Object.entries(lideres).sort((a, b) => b[1] - a[1]);
        const labels = sortedEntries.map(entry => entry[0]);
        const values = sortedEntries.map(entry => entry[1]);

        const data = {
            labels: labels,
            datasets: [{
                label: 'Quantidade de Motoristas por Líder Imediato',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };

        const ctx = chartCanvas.getContext('2d');
        currentChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Inicia o fade-in
        setTimeout(() => {
            chartCanvas.classList.add('show');
        }, 10);
    }, 500); // Tempo do fade-out
}


document.getElementById("homeBtn").addEventListener("click", function() {
    window.location.href = "indexLog.html"; // Redireciona para a página principal
});

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

// Função para gerar o gráfico de motoristas por dias de atraso
document.getElementById('showChartDelayBtn').addEventListener('click', function() {
    const tableContainer = document.getElementById('tableContainer');
    const chartContainer = document.getElementById('chartContainer');

    // Esconder a tabela
    tableContainer.style.display = 'none';

    // Esconder os filtros e o botão de Excel
    esconderFiltrosEBotoes();

    // Mostrar o container do gráfico com animação suave
    chartContainer.style.display = 'block'; // Primeiro exibe o container
    setTimeout(() => {
        chartContainer.classList.add('show'); // Adiciona a classe 'show' para fazer a transição suave
    }, 10);

    // Gerar o gráfico de atrasos
    gerarGraficoAtraso();
});

// Função para gerar o gráfico de motoristas por líder imediato
document.getElementById('showChartLeaderBtn').addEventListener('click', function() {
    const tableContainer = document.getElementById('tableContainer');
    const chartContainer = document.getElementById('chartContainer');

    // Esconder a tabela
    tableContainer.style.display = 'none';

    // Esconder os filtros e o botão de Excel
    esconderFiltrosEBotoes();

    // Mostrar o container do gráfico com animação suave
    chartContainer.style.display = 'block';
    setTimeout(() => {
        chartContainer.classList.add('show');
    }, 10);

    // Gerar o gráfico de líderes
    gerarGraficoLider();
});

// Voltar para a tabela com transição suave
document.getElementById('backToTableBtn').addEventListener('click', function() {
    const tableContainer = document.getElementById('tableContainer');
    const chartContainer = document.getElementById('chartContainer');

    // Remover a classe 'show' para iniciar a animação de ocultação
    chartContainer.classList.remove('show');

    // Esperar a transição terminar antes de esconder o container e mostrar a tabela
    setTimeout(() => {
        chartContainer.style.display = 'none';
        tableContainer.style.display = 'block';

        // Mostrar os filtros e o botão de Excel de volta
        mostrarFiltrosEBotoes();
    }, 1000); // Tempo de transição (1s)
});

// Atualizar a data de última atualização
document.addEventListener('DOMContentLoaded', function () {
    // Supondo que você obtenha a data de uma fonte de dados, ou use a data atual
    const lastUpdateDate = "16 de outubro de 2024"; // Data dinâmica, pode vir de uma API ou base de dados
    
    // Atualiza o texto no HTML
    document.getElementById('updateDate').textContent = lastUpdateDate;
});

// Renderiza a tabela inicialmente
initTable();
