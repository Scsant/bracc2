document.addEventListener('DOMContentLoaded', function() {
    const tollData = {
        "pedagios": [
            {
                "id": "153",
                "nome": "153 - SP225, KM199+400, LESTE, JAU",

            },
            {
                "id": "685",
                "nome": "685 - SP255, KM117+220,NORTE, BOA ESPERANÇA DO SUL",

            },
            {
                "id": "128",
                "nome": "128 - SP255, KM45+500, NORTE, GUATAPARÁ",

            },
            {
                "id": "136",
                "nome": "136 - SP 330, KM 350, NORTE, SALES DE OLIVEIRA",

            },
            {
                "id": "138",
                "nome": "138 - SP 330, KM 405, NORTE, ITUVERAVA",

            },
            {
                "id": "592",
                "nome": "592 - PERDIZES KM 732 LESTE",

            },
            {
                "id": "616",
                "nome": "616 - JOAO PINHEIRO KM 172 NORTE",

            },
            {
                "id": "575",
                "nome": "575 - DELTA KM 198+060 NORTE",

            }
        ]
    };

    const tollTableBody = document.getElementById('tollTableBody');

    tollData.pedagios.forEach(toll => {
        const row = document.createElement('tr');
        row.id = toll.id;
        row.classList.add('pracaPedagio');
        
        row.innerHTML = `
            
           
            <td class="nomePedagio">${toll.nome}</td>
    
        `;

        tollTableBody.appendChild(row);
    });
});
