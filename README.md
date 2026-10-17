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

## Como publicar no GitHub (GitHub Pages)

### Opção A — pelo site do GitHub (sem instalar nada)
1. Crie uma conta em <https://github.com> e clique em **New repository**. Dê um nome (ex.: `prescription`), deixe **Public** e crie.
2. Na página do repositório, clique em **uploading an existing file**.
3. Extraia o ZIP no seu computador e **arraste todo o conteúdo da pasta** (incluindo as pastas `css`, `js`, `vendor`, `icons` e o arquivo `.nojekyll`) para a janela do GitHub. Clique em **Commit changes**.
   - Dica: se o arquivo `.nojekyll` (oculto) não aparecer no seu computador, não tem problema — o app funciona sem ele.
4. Vá em **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e clique **Save**.
5. Aguarde 1–2 minutos. O endereço será `https://SEU-USUARIO.github.io/prescription/`.

### Opção B — pelo terminal (git)
```bash
cd prescription
git init && git add . && git commit -m "Prescription v1.2.0"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/prescription.git
git push -u origin main
```
Depois ative **Settings → Pages → Deploy from a branch → main / root**.

---

## Como instalar (como se fosse um aplicativo)

- **iPhone / iPad (Safari):** abra o endereço → botão **Compartilhar** → **Adicionar à Tela de Início**.
- **Android (Chrome):** abra o endereço → toque em **Instalar aplicativo** (aparece na tela inicial do app) ou menu ⋮ → **Instalar app**.
- **Computador (Chrome/Edge):** ícone de instalação na barra de endereço → **Instalar**.

## Receita em PDF

O PDF é desenhado diretamente pelo app (biblioteca `pdf-lib`, incluída em `vendor/`), no formato A5. Por isso **não aparece** endereço do site, número de página nem data/horário.

Layout: "Para o paciente …" e "Residente em …" centralizados · USO INTERNO / USO EXTERNO à esquerda · `*` antes de cada medicamento · linha pontilhada até a quantidade · cidade do atendimento centralizada sobre a data, com o bloco alinhado à direita · linha de assinatura.

**Páginas:**
- Cada receita cabe em **uma página**; se houver muitos itens, a letra é reduzida automaticamente (cabem até 8 medicamentos).
- Com **mais de 3 classes** de medicamentos, o app gera uma página nova para cada grupo de até 3 classes. Cada página repete paciente, endereço, cidade, data e assinatura.
- **Antibióticos e antissépticos contam como uma única classe.** Ex.: dipirona + ibuprofeno + amoxicilina + clorexidina = 3 classes = 1 página.

## Atualizando o app depois de publicado

Depois de alterar qualquer arquivo, abra `sw.js` e mude a linha `const CACHE = "prescription-v1.2.0";` (ex.: `v1.0.1`). Isso faz os aparelhos baixarem a versão nova.

## Atenção

- Ferramenta de **apoio à decisão clínica**; não substitui o julgamento do cirurgião-dentista. Confira doses e condutas nas referências indicadas.
- Os dados ficam no navegador de cada aparelho: limpar os dados do site apaga os prontuários, e eles **não sincronizam** entre aparelhos.
- Nome da cidade do atendimento fica salvo no aparelho para não precisar redigitar.

## Estrutura

```
index.html        página principal
manifest.json     configuração do app instalável
sw.js             funcionamento offline
css/style.css     visual
js/data.js        dados clínicos (anestésicos, comorbidades, medicações, receitas, lesões)
js/rxlogic.js     texto da receita (numerais por extenso, quantidades, posologia)
js/pdf.js         gerador do PDF
js/core.js        navegação, início e lesões orais
js/patients.js    prontuário
js/anesthesia.js  anestesia
js/prescription.js prescrição
js/parecer.js     parecer
js/emergencies.js urgências
vendor/           pdf-lib (MIT)
icons/            ícones
```
