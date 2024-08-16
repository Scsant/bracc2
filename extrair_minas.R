install.packages("kernlab")
install.packages("pdftools")
install.packages("openxlsx")

library(pdftools)
library(openxlsx)
library(kernlab)

# Caminho do arquivo PDF
file_path <- "F:/Logistica_Florestal/EQUIPE/Sócrates Luis dos Santos/NOTAS FISCAIS/NF.pdf"

# Ler o conteúdo do PDF
pdf_text <- pdf_text(file_path)


# Função para extrair as informações desejadas de uma página
extract_info <- function(page_text) {
  # Expressões regulares para buscar os padrões
  pattern_nota <- "Nº\\s*(\\d+)"
  pattern_ordem_venda <- "Ordem de Venda:\\s*(\\d+)"
  pattern_fatura <- "Fatura:\\s*-?(\\d+)"
  pattern_remessa <- "Remessa:\\s*(\\d+)"
  pattern_chave_acesso <- "\\b\\d{2}\\.\\d{2}\\.\\d{8}\\.\\d{2}\\.\\d{8}\\.\\d{2}-\\d+\\b"
  pattern_chave_acesso_alt <- "\\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4} \\d{4}"
  pattern_transportadora <- "CNPJ / CPF\\s+([A-Z ]+)"
  pattern_transportadora2 <- "CNPJ / CPF\\s+([A-Z ]+)"
  
  # Extração das informações
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
  
  # Garantir que cada variável tenha um valor, mesmo que seja NA
  nota <- ifelse(length(nota) == 0, NA, gsub("\\D", "", nota))
  ordem_venda <- ifelse(length(ordem_venda) == 0, NA, gsub("\\D", "", ordem_venda))
  fatura <- ifelse(length(fatura) == 0, NA, gsub("\\D", "", fatura))
  remessa <- ifelse(length(remessa) == 0, NA, gsub("\\D", "", remessa))
  chave_acesso <- ifelse(length(chave_acesso) == 0, NA, chave_acesso)
  transportadora <- ifelse(length(transportadora) == 0, NA, transportadora)
  transportadora2 <- ifelse(length(transportadora2) == 0, NA, transportadora2)
  
  # Remover zeros à esquerda
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

# Aplicar a função de extração para cada página
info_list <- lapply(pdf_text, extract_info)

# Combinar todas as informações em um único data frame
info_df <- do.call(rbind, info_list)

# Remover "CNPJ / CPF" do nome da transportadora
info_df$Transportadora <- gsub("^CNPJ / CPF\\s+", "", info_df$Transportadora)

info_df$Transportadora2 <- gsub("^CNPJ / CPF\\s+", "", info_df$Transportadora2)

# Caminho do arquivo Excel existente
excel_path <- "F:/Logistica_Florestal/EQUIPE/Sócrates Luis dos Santos/NOTAS FISCAIS/NF.xlsx"

# Verificar se o arquivo Excel já existe
if (file.exists(excel_path)) {
  # Ler a planilha existente
  wb <- loadWorkbook(excel_path)
  sheet <- read.xlsx(excel_path, sheet = 1)
  
  # Adicionar os novos dados à planilha existente
  updated_sheet <- rbind(sheet, info_df)
  
  # Escrever de volta na planilha
  writeData(wb, sheet = 1, updated_sheet)
  
  # Salvar o arquivo Excel atualizado
  saveWorkbook(wb, excel_path, overwrite = TRUE)
} else {
  # Se o arquivo não existir, criar um novo
  write.xlsx(info_df, excel_path)
}

# Mensagem de confirmação
cat("Arquivo Excel atualizado salvo em:", excel_path)
