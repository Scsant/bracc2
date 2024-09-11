library(shiny)
library(pdftools)
library(openxlsx)
library(shinythemes)
library(DT) # Para a tabela interativa com botões de cópia

# Função para extrair informações da página
extract_info <- function(page_text) {
  # Seu código de extração permanece igual
  pattern_nota <- "Nº\\s*(\\d+)"
  pattern_ordem_venda <- "Ordem de Venda:\\s*(\\d+)"
  pattern_fatura <- "Fatura:\\s*-?(\\d+)"
  pattern_remessa <- "Remessa:\\s*(\\d+)"
  pattern_chave_acesso <- "\\b\\d{2}\\.\\d{2}\\.\\d{8}\\.\\d{2}\\.\\d{8}\\.\\d{2}-\\d+\\b"
  pattern_chave_acesso_alt <- "\\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4}"
  pattern_transportadora <- "CNPJ / CPF\\s+([A-Z ]+)"
  pattern_transportadora2 <- "CNPJ / CPF\\s+([A-Z ]+)"
  
  nota <- regmatches(page_text, regexpr(pattern_nota, page_text))
  ordem_venda <- regmatches(page_text, regexpr(pattern_ordem_venda, page_text))
  fatura <- regmatches(page_text, regexpr(pattern_fatura, page_text))
  remessa <- regmatches(page_text, regexpr(pattern_remessa, page_text))
  chave_acesso <- regmatches(page_text, regexpr(pattern_chave_acesso, page_text))
  chave_acesso_alt <- regmatches(page_text, regexpr(pattern_chave_acesso_alt, page_text))
  transportadora <- regmatches(page_text, regexpr(pattern_transportadora, page_text, perl = TRUE))
  transportadora2 <- regmatches(page_text, regexpr(pattern_transportadora2, page_text, perl = TRUE))
  
  if (length(chave_acesso) == 0 & length(chave_acesso_alt) > 0) {
    chave_acesso <- chave_acesso_alt
  }
  
  nota <- ifelse(length(nota) == 0, NA, gsub("\\D", "", nota))
  ordem_venda <- ifelse(length(ordem_venda) == 0, NA, gsub("\\D", "", ordem_venda))
  fatura <- ifelse(length(fatura) == 0, NA, gsub("\\D", "", fatura))
  remessa <- ifelse(length(remessa) == 0, NA, gsub("\\D", "", remessa))
  chave_acesso <- ifelse(length(chave_acesso) == 0, NA, chave_acesso)
  transportadora <- ifelse(length(transportadora) == 0, NA, transportadora)
  transportadora2 <- ifelse(length(transportadora2) == 0, NA, transportadora2)
  
  nota <- sub("^0+", "", nota)
  ordem_venda <- sub("^0+", "", ordem_venda)
  fatura <- sub("^0+", "", fatura)
  remessa <- sub("^0+", "", remessa)
  
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

# Definindo a UI com tema e CSS
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
  
  titlePanel("Extrator de Notas Fiscais PDF para Excel"),
  sidebarLayout(
    sidebarPanel(
      fileInput("file", "Escolha o arquivo PDF", accept = ".pdf"),
      downloadButton("download", "Baixar Excel", class = "btn btn-primary")
    ),
    mainPanel(
      DTOutput("table") # Exibindo a tabela com DT para permitir cópia
    )
  )
)

# Definindo o Server
server <- function(input, output) {
  data <- reactive({
    req(input$file)
    pdf_text <- pdf_text(input$file$datapath)
    info_list <- lapply(pdf_text, extract_info)
    info_df <- do.call(rbind, info_list)
    info_df$Transportadora <- gsub("^CNPJ / CPF\\s+", "", info_df$Transportadora)
    info_df$Transportadora2 <- gsub("^CNPJ / CPF\\s+", "", info_df$Transportadora2)
    info_df
  })
  
  # Renderizar a tabela interativa com botões de cópia
  output$table <- renderDT({
    datatable(data(),
              extensions = 'Buttons',
              options = list(
                dom = 'Bfrtip',
                buttons = c('copy', 'excel') # Botões de copiar e baixar Excel
              ),
              rownames = FALSE)
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

install.packages("rsconnect")

library(rsconnect)

rsconnect::setAccountInfo(name='1ttqy8-scsant',
                          token='C4B0223822A4F58041B4A50428B67909',
                          secret='7OqIGl9p4yVRcNFeSZNdovIKIGMcFX8RUeU2UBbc')

rsconnect::deployApp()

