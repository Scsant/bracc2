let currentChart = null;
const horasPorPagina = 20; // Limite de horas por página
let paginaAtual = 1; // Página inicial
let totalPaginas = 1;

const horasExtrasData = [
    {
        "ID": "37001821",
        "Nome": "CLODOALDO JORGE DO PRADO",
        "Data": "16/09/24",
        "Total Hora": "13:56"
    },
    {
        "ID": "37006252",
        "Nome": "EDSON SALLES",
        "Data": "14/09/24",
        "Total Hora": "2:27"
    },
    {
        "ID": "37006252",
        "Nome": "EDSON SALLES",
        "Data": "01/10/24",
        "Total Hora": "2:02"
    },


    
    {
        "ID": "37006252",
        "Nome": "EDSON SALLES",
        "Data": "05/10/24",
        "Total Hora": "2:41"
    },
    {
        "ID": "37006273",
        "Nome": "JOSE LUIZ PAGADIGORRIA",
        "Data": "11/09/24",
        "Total Hora": "2:06"
    },
    {
        "ID": "37006273",
        "Nome": "JOSE LUIZ PAGADIGORRIA",
        "Data": "12/09/24",
        "Total Hora": "2:02"
    },
    {
        "ID": "37006821",
        "Nome": "PAULO ANDRE DOMINGUES",
        "Data": "16/09/24",
        "Total Hora": "14:53"
    },
    {
        "ID": "37006903",
        "Nome": "MARCOS ROBERTO GARCIA",
        "Data": "29/09/24",
        "Total Hora": "2:20"
    },
    {
        "ID": "37006944",
        "Nome": "GERSON CORDEIRO VITOR",
        "Data": "12/09/24",
        "Total Hora": "2:52"
    },
    {
        "ID": "37006944",
        "Nome": "GERSON CORDEIRO VITOR",
        "Data": "19/09/24",
        "Total Hora": "3:11"
    },
    {
        "ID": "37006944",
        "Nome": "GERSON CORDEIRO VITOR",
        "Data": "25/09/24",
        "Total Hora": "2:02"
    },
    {
        "ID": "37006944",
        "Nome": "GERSON CORDEIRO VITOR",
        "Data": "06/10/24",
        "Total Hora": "2:27"
    },
    {
        "ID": "37007151",
        "Nome": "ADRIANO JOSE DA SILVA",
        "Data": "21/09/24",
        "Total Hora": "2:04"
    },
    {
        "ID": "37007151",
        "Nome": "ADRIANO JOSE DA SILVA",
        "Data": "06/10/24",
        "Total Hora": "2:32"
    },
    {
        "ID": "37007335",
        "Nome": "ALMIR DE QUEIROZ FERREIRA",
        "Data": "12/09/24",
        "Total Hora": "3:29"
    },
    {
        "ID": "37007335",
        "Nome": "ALMIR DE QUEIROZ FERREIRA",
        "Data": "19/09/24",
        "Total Hora": "2:02"
    },
    {
        "ID": "37007335",
        "Nome": "ALMIR DE QUEIROZ FERREIRA",
        "Data": "25/09/24",
        "Total Hora": "2:01"
    },
    {
        "ID": "37007335",
        "Nome": "ALMIR DE QUEIROZ FERREIRA",
        "Data": "29/09/24",
        "Total Hora": "2:20"
    },
    {
        "ID": "37007335",
        "Nome": "ALMIR DE QUEIROZ FERREIRA",
        "Data": "05/10/24",
        "Total Hora": "2:29"
    },
    {
        "ID": "37007337",
        "Nome": "ELENO BALBINO DA SILVA",
        "Data": "18/09/24",
        "Total Hora": "2:06"
    },
    {
        "ID": "37007337",
        "Nome": "ELENO BALBINO DA SILVA",
        "Data": "28/09/24",
        "Total Hora": "2:13"
    },
    {
        "ID": "37017662",
        "Nome": "ADEALDO DA CRUZ",
        "Data": "11/09/24",
        "Total Hora": "2:04"
    },
    {
        "ID": "37018097",
        "Nome": "SERGIO CARES LACERDA",
        "Data": "28/09/24",
        "Total Hora": "2:04"
    },
    {
        "ID": "37018503",
        "Nome": "ELDER DE OLIVEIRA SILVA",
        "Data": "28/09/24",
        "Total Hora": "2:52"
    },
    {
        "ID": "37018503",
        "Nome": "ELDER DE OLIVEIRA SILVA",
        "Data": "07/10/24",
        "Total Hora": "2:04"
    },
    {
        "ID": "37019082",
        "Nome": "SANDRO JOSE DE SOUZA",
        "Data": "25/09/24",
        "Total Hora": "4:36"
    },
    {
        "ID": "37019082",
        "Nome": "SANDRO JOSE DE SOUZA",
        "Data": "27/09/24",
        "Total Hora": "4:58"
    },
    {
        "ID": "37019082",
        "Nome": "SANDRO JOSE DE SOUZA",
        "Data": "28/09/24",
        "Total Hora": "6:49"
    },
    {
        "ID": "37019082",
        "Nome": "SANDRO JOSE DE SOUZA",
        "Data": "01/10/24",
        "Total Hora": "2:39"
    },
    {
        "ID": "37019082",
        "Nome": "SANDRO JOSE DE SOUZA",
        "Data": "02/10/24",
        "Total Hora": "3:54"
    },
    {
        "ID": "37019082",
        "Nome": "SANDRO JOSE DE SOUZA",
        "Data": "03/10/24",
        "Total Hora": "6:46"
    }
    
    // Adicione mais dados conforme necessário
];

// Função para renderizar a tabela com os dados de horas extras
function renderTable(data, pagina) {
    const tbody = document.querySelector('#horasTable tbody');
    tbody.innerHTML = ''; // Limpar tabela

    const inicio = (pagina - 1) * horasPorPagina;
    const fim = inicio + horasPorPagina;
    const horasPagina = data.slice(inicio, fim); // Dados da página

    horasPagina.forEach(horas => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="ID Funcionário">${horas["ID"]}</td>
            <td data-label="Nome">${horas["Nome"]}</td>
            <td data-label="Data">${horas["Data"]}</td>
            <td data-label="Total de Horas">${horas["Total Hora"]}</td>
        `;
        tbody.appendChild(row);
    });

    renderPagination(data.length, pagina); // Atualizar a barra de paginação
}

// Função para renderizar a barra de paginação
function renderPagination(totalHoras, paginaAtual) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = ''; // Limpar a paginação antiga

    totalPaginas = Math.ceil(totalHoras / horasPorPagina); // Calcular o total de páginas

    // Botão "Anterior"
    const botaoAnterior = document.createElement('button');
    botaoAnterior.innerText = 'Anterior';
    botaoAnterior.disabled = paginaAtual === 1; // Desativar o botão se estiver na primeira página
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
    botaoProxima.disabled = paginaAtual === totalPaginas; // Desativar o botão se estiver na última página
    botaoProxima.addEventListener('click', () => mudarPagina(paginaAtual + 1));
    paginationDiv.appendChild(botaoProxima);
}

// Função para mudar de página
function mudarPagina(novaPagina) {
    paginaAtual = novaPagina;
    renderTable(horasExtrasData, paginaAtual); // Re-renderizar a tabela para a nova página
}

// Função de inicialização para mostrar a primeira página
function initTable() {
    renderTable(horasExtrasData, paginaAtual);
}



// Função para gerar o gráfico de horas extras por funcionário
function gerarGraficoPorFuncionario() {
    // Destruir o gráfico anterior, se houver
    if (currentChart) {
        currentChart.destroy();
    }

    const horasPorFuncionario = {};

    // Contar quantas horas cada funcionário tem
    horasExtrasData.forEach(horas => {
        const funcionario = horas["Nome"];
        const totalHoras = horas["Total Hora"];

        // Converter as horas para minutos para somar corretamente
        const [horasParte, minutosParte] = totalHoras.split(':').map(Number);
        const totalMinutos = horasParte * 60 + minutosParte;

        if (horasPorFuncionario[funcionario]) {
            horasPorFuncionario[funcionario] += totalMinutos;
        } else {
            horasPorFuncionario[funcionario] = totalMinutos;
        }
    });

    // Transformar o objeto em array e ordenar do maior para o menor
    const sortedEntries = Object.entries(horasPorFuncionario).sort((a, b) => b[1] - a[1]);

    // Separar os dados ordenados
    const labels = sortedEntries.map(entry => entry[0]);
    const valoresEmMinutos = sortedEntries.map(entry => entry[1]);

    const data = {
        labels: labels,
        datasets: [{
            label: 'Total de Horas Extras por Funcionário',
            data: valoresEmMinutos,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    currentChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        // Exibe os valores no formato de horas e minutos no eixo y
                        callback: function(value) {
                            const horas = Math.floor(value / 60);
                            const minutos = value % 60;
                            return `${horas}h ${minutos < 10 ? '0' : ''}${minutos}m`;
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            const totalMinutos = tooltipItem.raw;
                            const horas = Math.floor(totalMinutos / 60);
                            const minutos = totalMinutos % 60;
                            return `Total de Horas Extras: ${horas}h ${minutos < 10 ? '0' : ''}${minutos}m`;
                        }
                    }
                }
            }
        }
    });
}



// Alternar entre tabela e gráfico
document.getElementById('showChartBtn').addEventListener('click', function () {
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('chartContainer').style.display = 'block';
    gerarGraficoPorFuncionario(); // Exibir gráfico de horas extras por funcionário
});

document.getElementById('backToTableBtn').addEventListener('click', function () {
    document.getElementById('chartContainer').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'block';
});

// Inicializa a tabela na primeira página
initTable();
