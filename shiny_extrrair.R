library(shiny)
library(pdftools)
library(openxlsx)
library(shinythemes)
library(DT)

# Função para extrair informações desejadas de cada página do PDF
extract_info <- function(page_text) {
  # Expressões regulares refinadas para buscar os padrões corretamente
  pattern_nota <- "Nº\\s*(\\d+)"
  pattern_ordem_venda <- "Ordem de Venda:\\s*(\\d+)"
  pattern_fatura <- "Fatura:\\s*-?(\\d+)"
  pattern_remessa <- "Remessa:\\s*(\\d+)"
  pattern_chave_acesso <- "\\b\\d{2}\\.\\d{2}\\.\\d{8}\\.\\d{2}\\.\\d{8}\\.\\d{2}-\\d+\\b"
  pattern_chave_acesso_alt <- "\\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4}"
  pattern_transportadora <- "CNPJ / CPF\\s+([A-Z ]+)"
  pattern_transportadora2 <- "CNPJ / CPF\\s+([A-Z ]+)"
  
  # Extração das informações com expressões específicas
  nota <- gsub("\\D", "", regmatches(page_text, regexpr(pattern_nota, page_text)))
  ordem_venda <- gsub("\\D", "", regmatches(page_text, regexpr(pattern_ordem_venda, page_text)))
  fatura <- gsub("\\D", "", regmatches(page_text, regexpr(pattern_fatura, page_text)))
  remessa <- gsub("\\D", "", regmatches(page_text, regexpr(pattern_remessa, page_text)))
  chave_acesso <- regmatches(page_text, regexpr(pattern_chave_acesso, page_text))
  chave_acesso_alt <- regmatches(page_text, regexpr(pattern_chave_acesso_alt, page_text))
  transportadora <- gsub("^CNPJ / CPF\\s+", "", regmatches(page_text, regexpr(pattern_transportadora, page_text, perl = TRUE)))
  transportadora2 <- regmatches(page_text, regexpr(pattern_transportadora2, page_text, perl = TRUE))
  
  # Verifica chave de acesso alternativo se chave_acesso não foi encontrada
  if (length(chave_acesso) == 0 & length(chave_acesso_alt) > 0) {
    chave_acesso <- chave_acesso_alt
  }
  
  # Garantir que cada variável tenha um valor, mesmo que seja NA
  nota <- ifelse(length(nota) == 0, NA, sub("^0+", "", nota))
  ordem_venda <- ifelse(length(ordem_venda) == 0, NA, sub("^0+", "", ordem_venda))
  fatura <- ifelse(length(fatura) == 0, NA, sub("^0+", "", fatura))
  remessa <- ifelse(length(remessa) == 0, NA, sub("^0+", "", remessa))
  chave_acesso <- ifelse(length(chave_acesso) == 0, NA, chave_acesso)
  transportadora <- ifelse(length(transportadora) == 0, NA, transportadora)
  transportadora2 <- ifelse(length(transportadora2) == 0, NA, transportadora2)
  
  # Retornar os dados extraídos em um DataFrame
  return(data.frame(
    Data = format(Sys.Date(), "%d/%m/%Y"),
    Transportadora = transportadora,
    Transportadora2 = transportadora2,
    Nota = nota,
    Ordem_de_Venda = ordem_venda,
    Fatura = fatura,
    Remessa = remessa,
    `CHAVE DE ACESSO` = chave_acesso
  ))
}

# UI do aplicativo Shiny
ui <- fluidPage(
  theme = shinytheme("flatly"),
  tags$head(
    tags$style(HTML("
      body {
        font-family: 'Arial', sans-serif;
      }
      .btn {
        background-color: #2c3e50; 
        color: white;
        border: none;
      }
      .btn:hover {
        background-color: #1a252f;
      }
      .well {
        background-color: #ecf0f1;
        border: none;
      }
      table {
        margin-top: 20px;
      }
    "))
  ),
  

  sidebarLayout(
    sidebarPanel(
      fileInput("file", "Escolha o arquivo PDF", accept = ".pdf"),
      downloadButton("download", "Baixar Excel", class = "btn btn-primary")
    ),
    mainPanel(
      DTOutput("table")
    )
  )
)

# Server do aplicativo Shiny
server <- function(input, output) {
  data <- reactive({
    req(input$file)
    pdf_text <- pdf_text(input$file$datapath)
    
    # Aplicar a extração em cada página do PDF
    info_list <- lapply(pdf_text, extract_info)
    
    # Combinar todas as informações em um único data frame
    info_df <- do.call(rbind, info_list)
    info_df
  })
  
  # Renderizar a tabela interativa sem cabeçalhos
  output$table <- renderDT({
    datatable(
      data(),
      extensions = 'Buttons',
      colnames = NULL, # Remove os cabeçalhos da tabela
      options = list(
        dom = 'Bfrtip',
        buttons = list(
          list(
            extend = 'copyHtml5',
            text = 'Copiar Dados',
            exportOptions = list(
              rows = ':visible', # Copia todas as linhas visíveis
              columns = ':visible', # Copia todas as colunas visíveis
              header = FALSE # Remove o cabeçalho ao copiar
            )
          ),
          'excel'
        ),
        pageLength = -1 # Exibe todas as linhas
      ),
      rownames = FALSE
    )
  })
  
  # Download do arquivo Excel
  output$download <- downloadHandler(
    filename = function() {
      paste("notas_fiscais_", Sys.Date(), ".xlsx", sep = "")
    },
    content = function(file) {
      write.xlsx(data(), file)
    }
  )
}

# Executar o app Shiny
shinyApp(ui = ui, server = server)

library(rsconnect)
rsconnect::setAccountInfo(name='1ttqy8-scsant',
                          token='F66DC79DD1E42250623A188E7156C970',
                          secret='6WrEwpOMtd2ZtU+p+DceaOvSrNEyszNNhSsY3CEy')
rsconnect::deployApp("F:/Logistica_Florestal/EQUIPE/Sócrates Luis dos Santos/MachineLearning/ml_R/shiny_extrrair.R")