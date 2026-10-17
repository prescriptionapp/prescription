# Prescription — Apoio Clínico Odontológico

Aplicativo web (PWA) que reúne, em um só lugar:

| Aba | O que faz |
|---|---|
| **Início** | Botões de acesso a todas as abas |
| **Prontuário** | Cadastro de pacientes (dados, endereço, comorbidades, medicações, hábitos, procedimentos) |
| **Anestesia** | Escolha do sal anestésico em lista, peso do paciente e dose máxima por perfil **ASA I-II**, **ASA III-IV** ou **Paciente Pediátrico**. Aviso grave para prilocaína + felipressina (gestantes) |
| **Prescrição** | Referência de medicamentos e montagem de receita com **PDF** |
| **Parecer** | Marque comorbidades e medicações em uso → alertas, interações e resumo para anestesia local |
| **Urgências** | 14 protocolos de emergências médicas no consultório (anafilaxia, síncope, IAM, PCR, hipoglicemia, convulsão...) com passo a passo e botão para ligar ao SAMU (192) |
| **Lesões Orais** | Diagnóstico e protocolo de tratamento |

Funciona em computador, Android e iPhone/iPad, **sem loja de aplicativos** e **sem internet** depois do primeiro acesso.
Os dados dos pacientes ficam **somente no aparelho** (armazenamento local do navegador) — nada é enviado a servidor.

---

## Como instalar (como se fosse um aplicativo)

- **iPhone / iPad (Safari):** abra o endereço → botão **Compartilhar** → **Adicionar à Tela de Início**.
- **Android (Chrome):** abra o endereço → toque em **Instalar aplicativo** (aparece na tela inicial do app) ou menu ⋮ → **Instalar app**.
- **Computador (Chrome/Edge):** ícone de instalação na barra de endereço → **Instalar**.

## Receita em PDF

O PDF é desenhado diretamente pelo app (biblioteca `pdf-lib`, incluída em `vendor/`), no formato A5. Por isso **não aparece** endereço do site, número de página nem data/horário.
Layout: "Para o paciente …" e "Residente em …" centralizados · USO INTERNO / USO EXTERNO à esquerda · `*` antes de cada medicamento · linha pontilhada até a quantidade · cidade do atendimento à direita e a data logo abaixo · linha de assinatura.

## Atenção

- Ferramenta de **apoio à decisão clínica**; não substitui o julgamento do cirurgião-dentista. Confira doses e condutas nas referências indicadas.
- Os dados ficam no navegador de cada aparelho: limpar os dados do site apaga os prontuários, e eles **não sincronizam** entre aparelhos.
- Nome da cidade do atendimento fica salvo no aparelho para não precisar redigitar.


