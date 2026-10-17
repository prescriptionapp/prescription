/* Dados clínicos do Prescription — gerado a partir do Prescription + DentoCheck. */
window.DATA = {
 "version": "1.1.0",
 "EMERG": [
  {
   "id": "anafilaxia",
   "category": "Reações Alérgicas",
   "title": "Choque Anafilático",
   "severity": "critica",
   "trigger": "Anestésico local, antibiótico, látex, AINEs",
   "signs": [
    "Urticária, angioedema, prurido generalizado",
    "Broncoespasmo — sibilos, dispneia intensa",
    "Hipotensão arterial grave",
    "Taquicardia, pulso fraco ou ausente",
    "Perda de consciência"
   ],
   "steps": [
    {
     "n": 1,
     "text": "INTERROMPER o agente causador imediatamente."
    },
    {
     "n": 2,
     "text": "CHAMAR SAMU (192) — emergência grave."
    },
    {
     "n": 3,
     "text": "Posicionar em DECÚBITO DORSAL com MEMBROS INFERIORES ELEVADOS (exceto se dispneia — semi-sentado)."
    },
    {
     "n": 4,
     "text": "EPINEFRINA 1:1.000 — 0,3–0,5 mg IM na face anterolateral da coxa (adulto). Criança: 0,01 mg/kg (máx 0,3 mg). Pode repetir a cada 5–15 min se necessário."
    },
    {
     "n": 5,
     "text": "Administrar OXIGÊNIO a 8–10 L/min por máscara facial."
    },
    {
     "n": 6,
     "text": "ANTI-HISTAMÍNICO (difenidramina 25–50 mg IV/IM) se disponível — adjuvante, não substitui a epinefrina."
    },
    {
     "n": 7,
     "text": "Monitorar FC, PA e nível de consciência continuamente."
    },
    {
     "n": 8,
     "text": "Preparar para RCP se parada cardiorrespiratória."
    }
   ],
   "drugs": [
    "Epinefrina 1:1.000 ampola 1 mg/mL (0,3–0,5 mg IM adulto)",
    "Difenidramina 25–50 mg IV/IM (adjuvante, após a epinefrina)"
   ],
   "notes": "A EPINEFRINA é o único tratamento farmacológico de 1ª linha. Não retardar sua aplicação. Anti-histamínicos e corticoides são ADJUVANTES, aplicados após a epinefrina."
  },
  {
   "id": "reacao_alergica_leve",
   "category": "Reações Alérgicas",
   "title": "Reação Alérgica Leve (urticária localizada)",
   "severity": "moderada",
   "trigger": "Anestésico, medicamento, látex",
   "signs": [
    "Urticária localizada ou generalizada sem comprometimento respiratório",
    "Prurido, eritema",
    "Ausência de hipotensão ou broncoespasmo"
   ],
   "steps": [
    {
     "n": 1,
     "text": "INTERROMPER o procedimento e o agente causador."
    },
    {
     "n": 2,
     "text": "Administrar ANTI-HISTAMÍNICO VO (difenidramina ou loratadina)."
    },
    {
     "n": 3,
     "text": "Observar por 30 minutos — estar pronto para administrar epinefrina se piorar."
    },
    {
     "n": 4,
     "text": "Encaminhar para avaliação médica e teste alérgico."
    }
   ],
   "drugs": [
    "Difenidramina 25–50 mg VO ou IM",
    "Loratadina 10 mg VO"
   ],
   "notes": "Monitorar evolução — reação leve pode progredir para anafilaxia."
  },
  {
   "id": "sincope_vasovagal",
   "category": "Cardiovascular",
   "title": "Síncope Vasovagal",
   "severity": "leve",
   "trigger": "Ansiedade, dor, jejum, posição ortostática",
   "signs": [
    "Tontura, visão turva, palidez",
    "Sudorese fria, náusea",
    "Bradicardia e hipotensão precedendo a perda de consciência",
    "Recuperação rápida (< 2 min) em decúbito"
   ],
   "steps": [
    {
     "n": 1,
     "text": "Posicionar em DECÚBITO DORSAL com MEMBROS INFERIORES ELEVADOS."
    },
    {
     "n": 2,
     "text": "Verificar via aérea, respiração e pulso."
    },
    {
     "n": 3,
     "text": "Administrar OXIGÊNIO 4–6 L/min por cateter nasal."
    },
    {
     "n": 4,
     "text": "Se não recuperar em 1–2 min, considerar outros diagnósticos."
    },
    {
     "n": 5,
     "text": "Após recuperação: oferecer suco de fruta ou água (se tolerado), manter em observação 15 min."
    }
   ],
   "drugs": [],
   "notes": "Causa mais comum de perda de consciência no consultório. Prevenção: atender pacientes ansiosos em posição semidecúbito, com boa anestesia e em sessões curtas."
  },
  {
   "id": "crise_hipertensiva",
   "category": "Cardiovascular",
   "title": "Crise Hipertensiva",
   "severity": "grave",
   "trigger": "HAS não controlada, dor, ansiedade, excesso de vasoconstritor",
   "signs": [
    "PA ≥ 180/110 mmHg",
    "Cefaleia intensa occipital",
    "Epistaxe, rubor facial",
    "Possível comprometimento de órgão-alvo: náusea, dor torácica, alteração visual"
   ],
   "steps": [
    {
     "n": 1,
     "text": "INTERROMPER o procedimento. Paciente em posição SEMI-SENTADA."
    },
    {
     "n": 2,
     "text": "CHAMAR SAMU (192) se PA > 180/120 mmHg com sintomas (emergência hipertensiva)."
    },
    {
     "n": 3,
     "text": "Ambiente calmo, controle da ansiedade (sedação mínima se necessário)."
    },
    {
     "n": 4,
     "text": "Se disponível e prescrito pelo médico: CAPTOPRIL 25 mg SL (urgência hipertensiva sem risco imediato de órgão-alvo)."
    },
    {
     "n": 5,
     "text": "Monitorar PA a cada 5 minutos."
    },
    {
     "n": 6,
     "text": "Oxigênio se SpO₂ < 94%."
    }
   ],
   "drugs": [
    "Captopril 25 mg SL (urgência, não emergência hipertensiva)"
   ],
   "notes": "NÃO realizar o procedimento com PA ≥ 180/110 mmHg. Reagendar após controle médico adequado."
  },
  {
   "id": "angina_pectoris",
   "category": "Cardiovascular",
   "title": "Angina do Peito",
   "severity": "grave",
   "trigger": "Esforço, ansiedade, vasoconstritor em cardiopata",
   "signs": [
    "Dor ou pressão retroesternal irradiada para braço esquerdo, mandíbula ou dorso",
    "Duração: 2–10 min (angina estável)",
    "Alívio com repouso ou nitroglicerina"
   ],
   "steps": [
    {
     "n": 1,
     "text": "INTERROMPER o procedimento imediatamente."
    },
    {
     "n": 2,
     "text": "Posicionar em SEMI-SENTADO (posição de conforto)."
    },
    {
     "n": 3,
     "text": "Administrar NITROGLICERINA 0,4 mg SL (spray ou comprimido). Pode repetir a cada 5 min (máx 3 doses)."
    },
    {
     "n": 4,
     "text": "OXIGÊNIO 4–6 L/min."
    },
    {
     "n": 5,
     "text": "Se não aliviar em 15 min: CHAMAR SAMU (192) — suspeita de IAM."
    },
    {
     "n": 6,
     "text": "Monitorar FC e PA."
    }
   ],
   "drugs": [
    "Nitroglicerina 0,4 mg SL (spray ou comprimido sublingual)"
   ],
   "notes": "Diferenciar de IAM: angina alivia com nitroglicerina e repouso; IAM não alivia. Sempre encaminhar para avaliação cardiológica após episódio."
  },
  {
   "id": "iam",
   "category": "Cardiovascular",
   "title": "Infarto Agudo do Miocárdio (IAM)",
   "severity": "critica",
   "trigger": "Placa aterosclerótica, vasoconstritor em cardiopata de alto risco",
   "signs": [
    "Dor torácica intensa (> 15–20 min), sem alívio com nitroglicerina",
    "Sudorese profusa, palidez, náusea/vômito",
    "Dispneia, sensação de morte iminente",
    "Possível arritmia ou parada cardíaca"
   ],
   "steps": [
    {
     "n": 1,
     "text": "CHAMAR SAMU (192) IMEDIATAMENTE."
    },
    {
     "n": 2,
     "text": "Posicionar em SEMI-SENTADO."
    },
    {
     "n": 3,
     "text": "OXIGÊNIO 4–8 L/min."
    },
    {
     "n": 4,
     "text": "ASPIRINA 160–325 mg VO mastigada (se paciente consciente e sem contraindicação)."
    },
    {
     "n": 5,
     "text": "Nitroglicerina 0,4 mg SL (se PA > 90 mmHg)."
    },
    {
     "n": 6,
     "text": "Monitorar consciência, respiração e pulso continuamente."
    },
    {
     "n": 7,
     "text": "Iniciar RCP se parada cardiorrespiratória."
    }
   ],
   "drugs": [
    "AAS 162–325 mg mastigado",
    "Nitroglicerina 0,4 mg SL (se PA > 90 mmHg)"
   ],
   "notes": "Tempo é músculo — não retardar o SAMU. Desfibrilador externo automático (DEA) deve estar acessível."
  },
  {
   "id": "parada_cardiorespiratoria",
   "category": "Cardiovascular",
   "title": "Parada Cardiorrespiratória (PCR)",
   "severity": "critica",
   "trigger": "IAM, anafilaxia, overdose, arritmia fatal",
   "signs": [
    "Ausência de responsividade",
    "Ausência de respiração (ou gasping)",
    "Ausência de pulso carotídeo"
   ],
   "steps": [
    {
     "n": 1,
     "text": "CHAMAR SAMU (192) e solicitar DEA."
    },
    {
     "n": 2,
     "text": "Iniciar COMPRESSÕES TORÁCICAS: 30 compressões (5–6 cm de profundidade, 100–120/min)."
    },
    {
     "n": 3,
     "text": "2 ventilações de resgate (boca a boca ou ambu se disponível)."
    },
    {
     "n": 4,
     "text": "Ciclo 30:2 — continuar até DEA chegar ou SAMU assumir."
    },
    {
     "n": 5,
     "text": "Assim que DEA disponível: LIGAR e seguir as instruções do aparelho."
    },
    {
     "n": 6,
     "text": "Não interromper compressões por > 10 segundos."
    }
   ],
   "drugs": [
    "Epinefrina 1 mg IV/IO (se disponível e treinado) a cada 3–5 min"
   ],
   "notes": "RCP de qualidade é o pilar do atendimento. Profundidade adequada e descompressão total entre compressões são essenciais. DEA aumenta sobrevida."
  },
  {
   "id": "hipoglicemia",
   "category": "Endócrino / Metabólico",
   "title": "Hipoglicemia",
   "severity": "moderada",
   "trigger": "Diabético em jejum, insulina ou sulfonilureia, procedimento longo",
   "signs": [
    "Tremor, sudorese fria, taquicardia",
    "Ansiedade, confusão mental, irritabilidade",
    "Palidez, fraqueza",
    "Casos graves: convulsão, perda de consciência"
   ],
   "steps": [
    {
     "n": 1,
     "text": "Verificar glicemia capilar se glucosímetro disponível."
    },
    {
     "n": 2,
     "text": "PACIENTE CONSCIENTE: administrar 15–20 g de glicose VO — suco de fruta, gel de glicose ou 3 balas de açúcar."
    },
    {
     "n": 3,
     "text": "Reavaliar glicemia após 15 minutos. Repetir se < 70 mg/dL."
    },
    {
     "n": 4,
     "text": "PACIENTE INCONSCIENTE: não oferecer nada VO. Chamar SAMU (192). Glucagon 1 mg IM se disponível."
    },
    {
     "n": 5,
     "text": "Manter em decúbito lateral de segurança se inconsciente."
    }
   ],
   "drugs": [
    "Glicose 15–20 g VO (gel, suco, açúcar)",
    "Glucagon 1 mg IM (inconsciente, se disponível)"
   ],
   "notes": "Sempre checar glicemia em diabéticos antes do procedimento. Não atender em jejum."
  },
  {
   "id": "crise_adrenal",
   "category": "Endócrino / Metabólico",
   "title": "Crise Adrenal Aguda",
   "severity": "critica",
   "trigger": "Corticoide crônico, cirurgia estressante, insuficiência adrenal não suplementada",
   "signs": [
    "Hipotensão arterial grave",
    "Fraqueza intensa, letargia",
    "Náusea, vômito, dor abdominal",
    "Confusão mental"
   ],
   "steps": [
    {
     "n": 1,
     "text": "CHAMAR SAMU (192)."
    },
    {
     "n": 2,
     "text": "Posicionar em decúbito dorsal com membros elevados."
    },
    {
     "n": 3,
     "text": "OXIGÊNIO 6–8 L/min."
    },
    {
     "n": 4,
     "text": "HIDROCORTISONA 100 mg IV/IM se disponível (ou dexametasona 4 mg IV/IM)."
    },
    {
     "n": 5,
     "text": "Hidratação venosa com SF 0,9% se disponível."
    }
   ],
   "drugs": [
    "Hidrocortisona 100 mg IV/IM",
    "Dexametasona 4 mg IV/IM (alternativa)"
   ],
   "notes": "Prevenção: dose de estresse nos pacientes em uso crônico de corticoide (geralmente dobrar dose habitual no dia)."
  },
  {
   "id": "convulsao",
   "category": "Neurológico",
   "title": "Convulsão / Crise Epiléptica",
   "severity": "grave",
   "trigger": "Epilepsia, toxicidade por anestésico local, hipoglicemia, hipoxia",
   "signs": [
    "Movimentos tônico-clônicos involuntários",
    "Perda de consciência",
    "Mordedura de língua, salivação",
    "Cianose labial",
    "Confusão pós-ictal"
   ],
   "steps": [
    {
     "n": 1,
     "text": "PROTEGER o paciente: afastar instrumentos, NUNCA colocar nada na boca."
    },
    {
     "n": 2,
     "text": "Posicionar em decúbito lateral de segurança se possível."
    },
    {
     "n": 3,
     "text": "Registrar duração da crise."
    },
    {
     "n": 4,
     "text": "OXIGÊNIO 6–8 L/min após a crise."
    },
    {
     "n": 5,
     "text": "Crise > 5 min (status epilepticus): CHAMAR SAMU (192)."
    },
    {
     "n": 6,
     "text": "Midazolam 5–10 mg IM ou nasal se disponível e treinado."
    },
    {
     "n": 7,
     "text": "Verificar glicemia após a crise."
    }
   ],
   "drugs": [
    "Midazolam 5–10 mg IM (status epilepticus, se treinado)"
   ],
   "notes": "A maioria das crises cessa espontaneamente em < 3 min. A principal conduta é proteger o paciente de lesões. Pós-crise: orientar neurológico."
  },
  {
   "id": "avc_acidente",
   "category": "Neurológico",
   "title": "AVC / Acidente Isquêmico Transitório",
   "severity": "critica",
   "trigger": "HAS, arritmia, embolia, hipercoagulabilidade",
   "signs": [
    "FAST: Face assimétrica, Arm (fraqueza de membro), Speech (disartria), Time (chamar SAMU)",
    "Cefaleia súbita intensa",
    "Confusão, desorientação",
    "Alteração visual súbita"
   ],
   "steps": [
    {
     "n": 1,
     "text": "CHAMAR SAMU (192) IMEDIATAMENTE — \"tempo é neurônio\"."
    },
    {
     "n": 2,
     "text": "Manter paciente em repouso, posição confortável."
    },
    {
     "n": 3,
     "text": "OXIGÊNIO 4–6 L/min se disponível."
    },
    {
     "n": 4,
     "text": "Não oferecer nada VO (risco de disfagia)."
    },
    {
     "n": 5,
     "text": "Monitorar nível de consciência e respiração."
    },
    {
     "n": 6,
     "text": "Não administrar anti-hipertensivo sem indicação médica (pode piorar isquemia)."
    }
   ],
   "drugs": [],
   "notes": "NÃO administrar AAS sem diagnóstico — AVC hemorrágico contraindica antiagregantes."
  },
  {
   "id": "broncoespasmo",
   "category": "Respiratório",
   "title": "Broncoespasmo / Crise Asmática",
   "severity": "grave",
   "trigger": "Asma, AINE, bissulfito (conservante), ansiedade, látex",
   "signs": [
    "Sibilos expiratórios",
    "Dispneia progressiva",
    "Uso de musculatura acessória",
    "Taquicardia, agitação"
   ],
   "steps": [
    {
     "n": 1,
     "text": "INTERROMPER o procedimento."
    },
    {
     "n": 2,
     "text": "Posicionar em SEMI-SENTADO (posição de conforto)."
    },
    {
     "n": 3,
     "text": "SALBUTAMOL (Aerolin) 2–4 jatos inalatórios (100 µg/jato). Repetir a cada 20 min se necessário (máx 3 ciclos)."
    },
    {
     "n": 4,
     "text": "OXIGÊNIO 4–8 L/min."
    },
    {
     "n": 5,
     "text": "Se não melhora ou piora: CHAMAR SAMU (192)."
    },
    {
     "n": 6,
     "text": "Epinefrina 0,3 mg IM pode ser usada em crise grave (anafilaxia + broncoespasmo)."
    }
   ],
   "drugs": [
    "Salbutamol spray (2–4 jatos)",
    "Epinefrina 0,3 mg IM (crise grave/anafilaxia)"
   ],
   "notes": "Ter spray de salbutamol no consultório. Pacientes asmáticos devem trazer seu próprio inalador."
  },
  {
   "id": "hiperventilacao",
   "category": "Respiratório",
   "title": "Hiperventilação / Crise de Pânico",
   "severity": "leve",
   "trigger": "Ansiedade intensa, fobia odontológica, dor",
   "signs": [
    "Respiração rápida e superficial",
    "Parestesia perioral e nas mãos",
    "Tetania, espasmo carpopedal (alcalose respiratória)",
    "Tontura, sensação de sufocamento"
   ],
   "steps": [
    {
     "n": 1,
     "text": "INTERROMPER o procedimento. Falar calmamente."
    },
    {
     "n": 2,
     "text": "Orientar respiração lenta e diafragmática (inspire 4s, expire 6s)."
    },
    {
     "n": 3,
     "text": "Rebreathing em saco de papel (método tradicional — uso controverso; preferir orientação respiratória)."
    },
    {
     "n": 4,
     "text": "Se não melhora: midazolam 7,5 mg VO (se disponível e paciente consciente)."
    },
    {
     "n": 5,
     "text": "Verificar SpO₂ para diferenciar de broncoespasmo."
    }
   ],
   "drugs": [
    "Midazolam 7,5 mg VO (se necessário)"
   ],
   "notes": "Causa frequente de mal-estar no consultório. Prevenção: boa comunicação, anestesia eficaz, sessões curtas."
  },
  {
   "id": "overdose_anestesico",
   "category": "Toxicidade Farmacológica",
   "title": "Toxicidade / Overdose por Anestésico Local",
   "severity": "grave",
   "trigger": "Dose excessiva, injeção intravascular acidental, metabolismo comprometido",
   "signs": [
    "FASE EXCITATÓRIA: sabor metálico, zumbido, visão turva, excitação, tremores, convulsão",
    "FASE DEPRESSORA: depressão de SNC e cardiovascular, hipotensão, bradicardia, parada cardíaca"
   ],
   "steps": [
    {
     "n": 1,
     "text": "INTERROMPER a injeção imediatamente."
    },
    {
     "n": 2,
     "text": "Posicionar em decúbito dorsal."
    },
    {
     "n": 3,
     "text": "OXIGÊNIO 8–10 L/min por máscara."
    },
    {
     "n": 4,
     "text": "Monitorar via aérea, consciência e FC/PA."
    },
    {
     "n": 5,
     "text": "CHAMAR SAMU (192)."
    },
    {
     "n": 6,
     "text": "Se convulsão: midazolam 5–10 mg IM."
    },
    {
     "n": 7,
     "text": "Se PCR: iniciar RCP."
    }
   ],
   "drugs": [
    "Midazolam 5–10 mg IM (convulsão)",
    "Suporte ventilatório"
   ],
   "notes": "PREVENÇÃO é fundamental: respeitar dose máxima, aspirar antes de injetar, injetar lentamente (60 s/tubete). Identificar grupos de risco (crianças, idosos, hepatopatas)."
  }
 ],
 "ANEST": [
  {
   "id": "lido100",
   "salt": "Lidocaína 2%",
   "vc": "c/ Epinefrina 1:100.000",
   "name": "Lidocaína 2% c/ Epinefrina 1:100.000",
   "brand": "Xylocaína® / Alphacaine®",
   "color": "#4f8fff",
   "type": "Amida",
   "metabolism": "Hepática (CYP1A2 e CYP3A4) — metabólitos excretados pelos rins",
   "onset": "2–4 minutos",
   "duration": "60 min (pulpar) / 3–5h (tecidos moles)",
   "mgPerCartridge": 36,
   "rate": {
    "asa12": 7,
    "asa34": 7,
    "ped": 4.4
   },
   "abs": {
    "asa12": 500,
    "asa34": 500,
    "ped": 300
   },
   "vaso": {
    "kind": "epi",
    "name": "Epinefrina 1:100.000",
    "unit": "µg",
    "perCartridge": 18,
    "maxHealthy": 200,
    "maxCardiac": 40
   },
   "notes": [
    "Anestésico padrão na odontologia (Malamed). Categoria B na gestação.",
    "Aspiração obrigatória. Intervalo ≥ 2h."
   ],
   "isPrilocaine": false,
   "ref": "Malamed SF. Handbook of Local Anesthesia. 7.ª ed. Elsevier 2020."
  },
  {
   "id": "lido200",
   "salt": "Lidocaína 2%",
   "vc": "c/ Epinefrina 1:200.000",
   "name": "Lidocaína 2% c/ Epinefrina 1:200.000",
   "brand": "Xylocaína® 1:200.000",
   "color": "#5ac8fa",
   "type": "Amida",
   "metabolism": "Hepática (CYP1A2 e CYP3A4) — metabólitos excretados pelos rins",
   "onset": "2–4 minutos",
   "duration": "60 min (pulpar) / 2–3h (tecidos moles)",
   "mgPerCartridge": 36,
   "rate": {
    "asa12": 7,
    "asa34": 7,
    "ped": 4.4
   },
   "abs": {
    "asa12": 500,
    "asa34": 500,
    "ped": 300
   },
   "vaso": {
    "kind": "epi",
    "name": "Epinefrina 1:200.000",
    "unit": "µg",
    "perCartridge": 9,
    "maxHealthy": 200,
    "maxCardiac": 40
   },
   "notes": [
    "Menor carga adrenérgica — recomendada para cardiopatas (ASA III) e hipertensos controlados."
   ],
   "isPrilocaine": false,
   "ref": "Malamed SF. 7.ª ed. Elsevier 2020."
  },
  {
   "id": "artic100",
   "salt": "Articaína 4%",
   "vc": "c/ Epinefrina 1:100.000",
   "name": "Articaína 4% c/ Epinefrina 1:100.000",
   "brand": "Septanest® / Articaine Inibsa®",
   "color": "#bf5af2",
   "type": "Amida (com grupamento éster)",
   "metabolism": "Hepática + plasmática (esterases plasmáticas) — meia-vida curta (~25 min)",
   "onset": "1–3 minutos",
   "duration": "60–75 min (pulpar) / 3–6h (tecidos moles)",
   "mgPerCartridge": 72,
   "rate": {
    "asa12": 7,
    "asa34": 7,
    "ped": 7
   },
   "abs": {
    "asa12": 500,
    "asa34": 500,
    "ped": 500
   },
   "vaso": {
    "kind": "epi",
    "name": "Epinefrina 1:100.000",
    "unit": "µg",
    "perCartridge": 18,
    "maxHealthy": 200,
    "maxCardiac": 40
   },
   "notes": [
    "Contraindicada / não recomendada em menores de 4 anos.",
    "Excelente difusão tecidual e óssea. Risco de parestesia troncular.",
    "Metabolismo parcialmente plasmático — vantagem em hepatopatas."
   ],
   "isPrilocaine": false,
   "ref": "Britto RR et al. JADA 2021; IF 9.2."
  },
  {
   "id": "artic200",
   "salt": "Articaína 4%",
   "vc": "c/ Epinefrina 1:200.000",
   "name": "Articaína 4% c/ Epinefrina 1:200.000",
   "brand": "Septanest® 1:200.000",
   "color": "#ff6b9d",
   "type": "Amida (com grupamento éster)",
   "metabolism": "Hepática + plasmática (esterases plasmáticas)",
   "onset": "1–3 minutos",
   "duration": "45–60 min (pulpar) / 2–4h (tecidos moles)",
   "mgPerCartridge": 72,
   "rate": {
    "asa12": 7,
    "asa34": 7,
    "ped": 7
   },
   "abs": {
    "asa12": 500,
    "asa34": 500,
    "ped": 500
   },
   "vaso": {
    "kind": "epi",
    "name": "Epinefrina 1:200.000",
    "unit": "µg",
    "perCartridge": 9,
    "maxHealthy": 200,
    "maxCardiac": 40
   },
   "notes": [
    "Contraindicada / não recomendada em menores de 4 anos.",
    "Menor carga adrenérgica — alternativa para cardiopatas."
   ],
   "isPrilocaine": false,
   "ref": "Britto RR et al. JADA 2021; IF 9.2."
  },
  {
   "id": "mepi2epi",
   "salt": "Mepivacaína 2%",
   "vc": "c/ Epinefrina 1:100.000",
   "name": "Mepivacaína 2% c/ Epinefrina 1:100.000",
   "brand": "Mepiadent® / Scandicaína®",
   "color": "#8e8cf2",
   "type": "Amida",
   "metabolism": "Hepática (CYP3A4) — metabólitos excretados pelos rins",
   "onset": "2–4 minutos",
   "duration": "60 min (pulpar) / 3–5h (tecidos moles)",
   "mgPerCartridge": 36,
   "rate": {
    "asa12": 6.6,
    "asa34": 6.6,
    "ped": 4.4
   },
   "abs": {
    "asa12": 400,
    "asa34": 400,
    "ped": 300
   },
   "vaso": {
    "kind": "epi",
    "name": "Epinefrina 1:100.000",
    "unit": "µg",
    "perCartridge": 18,
    "maxHealthy": 200,
    "maxCardiac": 40
   },
   "notes": [
    "Alternativa à lidocaína. Disponibilidade variável no Brasil."
   ],
   "isPrilocaine": false,
   "ref": "Malamed SF. Handbook of Local Anesthesia. 7.ª ed."
  },
  {
   "id": "mepi2levo",
   "salt": "Mepivacaína 2%",
   "vc": "c/ Levonordefrina 1:20.000",
   "name": "Mepivacaína 2% c/ Levonordefrina 1:20.000",
   "brand": "Scandicaína® 2% c/ VC",
   "color": "#5e5ce6",
   "type": "Amida",
   "metabolism": "Hepática (CYP3A4) — metabólitos excretados pelos rins",
   "onset": "2–4 minutos",
   "duration": "60 min (pulpar) / 3–5h (tecidos moles)",
   "mgPerCartridge": 36,
   "rate": {
    "asa12": 6.6,
    "asa34": 6.6,
    "ped": 4.4
   },
   "abs": {
    "asa12": 400,
    "asa34": 400,
    "ped": 300
   },
   "vaso": {
    "kind": "levo",
    "name": "Levonordefrina 1:20.000",
    "unit": "µg",
    "perCartridge": 90,
    "maxHealthy": 1000,
    "maxCardiac": 200
   },
   "notes": [
    "Levonordefrina — vasoconstritor adrenérgico: mesmas precauções cardiovasculares da epinefrina."
   ],
   "isPrilocaine": false,
   "ref": "Malamed SF. 7.ª ed. Elsevier 2020."
  },
  {
   "id": "mepi3",
   "salt": "Mepivacaína 3%",
   "vc": "sem vasoconstritor",
   "name": "Mepivacaína 3% sem vasoconstritor",
   "brand": "Scandicaína® / Mepiadent®",
   "color": "#32d74b",
   "type": "Amida",
   "metabolism": "Hepática (CYP3A4) — metabolismo lento; meia-vida ~1,9h",
   "onset": "1–3 minutos",
   "duration": "20–40 min (pulpar) / 2–3h (tecidos moles)",
   "mgPerCartridge": 54,
   "rate": {
    "asa12": 6.6,
    "asa34": 6.6,
    "ped": 4.4
   },
   "abs": {
    "asa12": 400,
    "asa34": 400,
    "ped": 300
   },
   "vaso": null,
   "notes": [
    "Indicada quando há contraindicação a vasoconstritores (hipertireoidismo descompensado, feocromocitoma, IMAO, cocaína recente).",
    "Preferencial em cardiopatas, tireoidopatias e usuários de tricíclicos — sem restrição cardiovascular adicional.",
    "Duração curta (20–40 min pulpar) — atenção ao tempo do procedimento."
   ],
   "isPrilocaine": false,
   "ref": "Malamed SF. 7.ª ed. Elsevier 2020."
  },
  {
   "id": "prilo",
   "salt": "Prilocaína 3%",
   "vc": "c/ Felipressina 0,03 UI/mL",
   "name": "Prilocaína 3% c/ Felipressina 0,03 UI/mL",
   "brand": "Citanest® c/ Felipressina",
   "color": "#ff9f0a",
   "type": "Amida",
   "metabolism": "Hepática + pulmonar + renal — origina o-toluidina (risco de metemoglobinemia em altas doses)",
   "onset": "2–4 minutos",
   "duration": "40–60 min (pulpar) / 2–4h (tecidos moles)",
   "mgPerCartridge": 54,
   "rate": {
    "asa12": 8,
    "asa34": 8,
    "ped": 6
   },
   "abs": {
    "asa12": 600,
    "asa34": 600,
    "ped": 400
   },
   "vaso": {
    "kind": "feli",
    "name": "Felipressina 0,03 UI/mL",
    "unit": "UI",
    "perCartridge": 0.054,
    "maxHealthy": null,
    "maxCardiac": 0.18
   },
   "notes": [
    "Vasoconstritor não adrenérgico — alternativa em cardiopatas, hipertireoidismo e usuários de tricíclicos, EXCETO gestantes.",
    "Mesmo assim, respeitar o teto de felipressina em ASA III-IV.",
    "Evitar em metemoglobinemia e anemia grave."
   ],
   "isPrilocaine": true,
   "ref": "Malamed SF. 7.ª ed. Elsevier 2020."
  },
  {
   "id": "bupiv",
   "salt": "Bupivacaína 0,5%",
   "vc": "c/ Epinefrina 1:200.000",
   "name": "Bupivacaína 0,5% c/ Epinefrina 1:200.000",
   "brand": "Marcaína® c/ Epi 1:200.000",
   "color": "#ffb347",
   "type": "Amida",
   "metabolism": "Hepática (CYP3A4) — meia-vida longa (~3,5h); alta cardiotoxicidade",
   "onset": "6–10 minutos",
   "duration": "90–180 min (pulpar) / 4–9h (tecidos moles)",
   "mgPerCartridge": 9,
   "rate": {
    "asa12": 1.3,
    "asa34": 1.3,
    "ped": 1.3
   },
   "abs": {
    "asa12": 90,
    "asa34": 90,
    "ped": 90
   },
   "vaso": {
    "kind": "epi",
    "name": "Epinefrina 1:200.000",
    "unit": "µg",
    "perCartridge": 9,
    "maxHealthy": 200,
    "maxCardiac": 40
   },
   "notes": [
    "Longa duração (6–12 h): cirurgias prolongadas e controle da dor pós-operatória.",
    "Alta cardiotoxicidade — respeitar rigorosamente a dose máxima (teto absoluto de 90 mg por sessão).",
    "Restrita a maiores de 12 anos; não indicada rotineiramente em crianças."
   ],
   "isPrilocaine": false,
   "ref": "Malamed SF. 7.ª ed. Elsevier 2020."
  }
 ],
 "COMORB": [
  {
   "id": "alergia_aine",
   "category": "Alergia",
   "label": "Alergia a AINEs / Aspirina",
   "alerts": [
    "Evitar toda a classe de AINEs.",
    "Alternativas: paracetamol, dipirona.",
    "Em asmáticos sensíveis: risco de broncoespasmo grave (tríade de Samter)."
   ],
   "ref": null
  },
  {
   "id": "alergia_anestesico",
   "category": "Alergia",
   "label": "Alergia a anestésico local (suspeita)",
   "alerts": [
    "Alergia real a amida é raríssima — investigar se a reação foi ao conservante (bissulfito), à epinefrina ou ao látex do tubete.",
    "Encaminhar para teste alérgico antes do procedimento.",
    "Considerar anestésico sem vasoconstritor e sem conservante como alternativa."
   ],
   "ref": null
  },
  {
   "id": "alergia_latex",
   "category": "Alergia",
   "label": "Alergia ao látex",
   "alerts": [
    "Usar luvas, diques de borracha e tubetes livres de látex.",
    "Atendimento como primeira consulta do dia (ambiente menos contaminado).",
    "Reações cruzadas com banana, kiwi, abacate e castanha — investigar."
   ],
   "ref": null
  },
  {
   "id": "alergia_penicilina",
   "category": "Alergia",
   "label": "Alergia à penicilina",
   "alerts": [
    "Alternativas: azitromicina, claritromicina, doxiciclina.",
    "AHA 2021 não recomenda mais clindamicina para profilaxia de endocardite (risco de C. difficile).",
    "Cefalosporinas: reação cruzada < 1% — cautela em reações anafiláticas prévias."
   ],
   "ref": null
  },
  {
   "id": "arritmia",
   "category": "Cardiovascular",
   "label": "Arritmia cardíaca",
   "alerts": [
    "Consultar cardiologista antes de procedimentos extensos.",
    "Preferir prilocaína 3% com felipressina ou limitar epinefrina a 40 µg.",
    "Evitar fio retrator com epinefrina.",
    "Risco aumentado em distúrbios eletrolíticos."
   ],
   "ref": null
  },
  {
   "id": "avc_previo",
   "category": "Cardiovascular",
   "label": "AVC prévio",
   "alerts": [
    "Aguardar 6 meses após o evento para procedimentos eletivos.",
    "Geralmente em uso de antiagregante ou anticoagulante — verificar.",
    "Limitar epinefrina a 40 µg."
   ],
   "ref": null
  },
  {
   "id": "cardiopatia_isq",
   "category": "Cardiovascular",
   "label": "Cardiopatia isquêmica (angina / IAM prévio)",
   "alerts": [
    "Aguardar mínimo 6 meses após IAM para procedimentos eletivos.",
    "Epinefrina máxima: 40 µg (Andrade — pacientes ASA III).",
    "Ter O₂ e nitroglicerina sublingual disponíveis no consultório.",
    "Procedimentos pela manhã, sessões curtas."
   ],
   "ref": null
  },
  {
   "id": "ei_cardiopatia_cong_cianotica",
   "category": "Cardiovascular",
   "label": "Endocardite — cardiopatia congênita cianótica não reparada",
   "alerts": [
    "ALTO RISCO para endocardite infecciosa (AHA 2021).",
    "Profilaxia indicada em procedimentos que envolvam manipulação gengival, periapical ou perfuração da mucosa.",
    "Esquema padrão: Amoxicilina 2 g VO 60 min antes (50 mg/kg em crianças).",
    "Inclui shunts paliativos e condutos."
   ],
   "ref": null
  },
  {
   "id": "ei_cardiopatia_reparada_6m",
   "category": "Cardiovascular",
   "label": "Endocardite — cardiopatia congênita reparada com prótese (< 6 meses)",
   "alerts": [
    "ALTO RISCO durante os primeiros 6 meses após reparo cirúrgico ou transcateter.",
    "Profilaxia indicada nesse período (endotelização da prótese).",
    "Após 6 meses sem defeito residual: sem necessidade de profilaxia."
   ],
   "ref": null
  },
  {
   "id": "ei_cardiopatia_residual",
   "category": "Cardiovascular",
   "label": "Endocardite — cardiopatia congênita reparada com defeito residual",
   "alerts": [
    "ALTO RISCO mantido enquanto houver defeito residual no local ou adjacente ao reparo protético.",
    "Profilaxia indicada para procedimentos de risco."
   ],
   "ref": null
  },
  {
   "id": "ei_endocardite_previa",
   "category": "Cardiovascular",
   "label": "Endocardite — endocardite infecciosa prévia",
   "alerts": [
    "ALTO RISCO para endocardite infecciosa (AHA 2021).",
    "Profilaxia indicada em todo procedimento de risco.",
    "Amoxicilina 2 g VO 60 min antes ou alternativa para alérgicos."
   ],
   "ref": null
  },
  {
   "id": "ei_material_protetico",
   "category": "Cardiovascular",
   "label": "Endocardite — reparo valvar com material protético",
   "alerts": [
    "ALTO RISCO para endocardite infecciosa (AHA 2021).",
    "Profilaxia indicada — mesmo protocolo da valva protética.",
    "Inclui transcateter (TAVI/TAVR) e cirurgia convencional com anel/clipe."
   ],
   "ref": null
  },
  {
   "id": "ei_transplante_cardiaco",
   "category": "Cardiovascular",
   "label": "Endocardite — transplante cardíaco com valvopatia",
   "alerts": [
    "ALTO RISCO para endocardite infecciosa (AHA 2021).",
    "Profilaxia indicada em transplantados que desenvolvem valvopatia.",
    "Considerar imunossupressão associada."
   ],
   "ref": null
  },
  {
   "id": "ei_valva_protetica",
   "category": "Cardiovascular",
   "label": "Endocardite — valva cardíaca protética (mecânica ou biológica)",
   "alerts": [
    "ALTO RISCO para endocardite infecciosa (AHA 2021).",
    "PROFILAXIA ANTIBIÓTICA indicada em todos os procedimentos que envolvam manipulação gengival, periapical ou perfuração da mucosa.",
    "Esquema padrão: Amoxicilina 2 g VO 1h antes do procedimento (50 mg/kg em crianças).",
    "Se alérgico à penicilina: Azitromicina ou Claritromicina 500 mg VO 1h antes.",
    "AHA 2021 NÃO recomenda mais a clindamicina como alternativa.",
    "Se já em uso de amoxicilina: trocar para azitromicina/claritromicina."
   ],
   "ref": null
  },
  {
   "id": "hipertensao",
   "category": "Cardiovascular",
   "label": "Hipertensão arterial sistêmica",
   "alerts": [
    "Aferir PA antes do procedimento. Adiar se ≥ 180/110 mmHg (Andrade).",
    "Limitar epinefrina a 40 µg (≈ 2 tubetes 1:100.000).",
    "Aspiração prévia obrigatória.",
    "Sessões curtas, ambiente tranquilo, controle da ansiedade.",
    "Evitar vasoconstritores em HAS não controlada ou em uso de propranolol.",
    "AINEs elevam a PA e reduzem o efeito de IECA/BRA — preferir paracetamol.",
    "Nifedipino causa hiperplasia gengival — encaminhar para troca por anlodipino.",
    "Anestesia local eficaz é fundamental — dor e estresse elevam a PA."
   ],
   "ref": "Whelton PK et al. Hypertension 2018; IF 9.9."
  },
  {
   "id": "insuf_cardiaca",
   "category": "Cardiovascular",
   "label": "Insuficiência cardíaca",
   "alerts": [
    "Posição semi-sentada durante o atendimento.",
    "Evitar uso excessivo de vasoconstritores.",
    "Cuidado com AINEs (retenção hidrossalina e piora da função renal)."
   ],
   "ref": null
  },
  {
   "id": "marcapasso",
   "category": "Cardiovascular",
   "label": "Marcapasso / cardiodesfibrilador implantável",
   "alerts": [
    "Equipamentos elétricos modernos geralmente seguros — verificar com cardiologista.",
    "Evitar uso prolongado de aparelhos ultrassônicos próximos ao gerador.",
    "Bisturi elétrico monopolar contraindicado; preferir bipolar.",
    "Profilaxia antibiótica NÃO é rotineiramente indicada para marcapasso."
   ],
   "ref": null
  },
  {
   "id": "prolapso_mitral",
   "category": "Cardiovascular",
   "label": "Prolapso de válvula mitral",
   "alerts": [
    "AHA 2021: NÃO requer profilaxia antibiótica de rotina, mesmo com regurgitação.",
    "Sem restrições significativas para procedimentos odontológicos."
   ],
   "ref": null
  },
  {
   "id": "diabetes_tipo1",
   "category": "Endócrino",
   "label": "Diabetes mellitus tipo 1",
   "alerts": [
    "Glicemia ideal pré-procedimento: 100–200 mg/dL.",
    "Atender pela manhã, após refeição e medicação.",
    "Epinefrina pode elevar glicemia — monitorar.",
    "Profilaxia antibiótica em cirurgias se HbA1c > 8%.",
    "Risco de hipoglicemia em sessões longas — ter glicose disponível.",
    "Glicemia capilar antes do procedimento: < 70 mg/dL — adiar e corrigir a hipoglicemia.",
    "Infecções odontogênicas podem descompensar o controle glicêmico — tratar precocemente.",
    "Hipoglicemia (sudorese, tremor): 15 g de glicose por via oral imediatamente."
   ],
   "ref": "ADA. Diabetes Care 2024; IF 16.2."
  },
  {
   "id": "diabetes_tipo2",
   "category": "Endócrino",
   "label": "Diabetes mellitus tipo 2",
   "alerts": [
    "Risco de hipoglicemia em procedimentos longos — orientar alimentação.",
    "Epinefrina antagoniza efeito hipoglicemiante.",
    "Cicatrização comprometida; risco de infecção aumentado.",
    "Considerar enxaguatório com clorexidina pré-operatório.",
    "Glicemia ideal pré-procedimento: 100–200 mg/dL; < 70 mg/dL: adiar e corrigir.",
    "Atender pela manhã, 1–2h após a refeição e a medicação.",
    "Infecções odontogênicas podem descompensar o controle glicêmico — tratar precocemente.",
    "Hipoglicemia (sudorese, tremor): 15 g de glicose por via oral imediatamente."
   ],
   "ref": "ADA. Diabetes Care 2024; IF 16.2."
  },
  {
   "id": "feocromocitoma",
   "category": "Endócrino",
   "label": "Feocromocitoma",
   "alerts": [
    "CONTRAINDICAÇÃO ABSOLUTA a vasoconstritores adrenérgicos.",
    "Risco de crise hipertensiva grave.",
    "Usar mepivacaína 3% sem vasoconstritor ou prilocaína com felipressina (em não gestantes)."
   ],
   "ref": null
  },
  {
   "id": "hipertireoidismo",
   "category": "Endócrino",
   "label": "Hipertireoidismo não controlado",
   "alerts": [
    "EVITAR epinefrina — risco de tempestade tireoidiana.",
    "Preferir mepivacaína 3% sem vasoconstritor ou prilocaína com felipressina.",
    "Verificar TSH e T4L antes de procedimentos eletivos.",
    "Se não controlado: contraindicar vasoconstritores adrenérgicos.",
    "Bócio volumoso: antecipar via aérea difícil em sedações.",
    "Encaminhar para controle endocrinológico antes de cirurgias de maior porte."
   ],
   "ref": "Ross DS et al. Thyroid 2016; IF 7.8."
  },
  {
   "id": "hipotireoidismo",
   "category": "Endócrino",
   "label": "Hipotireoidismo",
   "alerts": [
    "Geralmente sem restrições significativas.",
    "Atenção em hipotireoidismo grave/não controlado: risco de coma mixedematoso.",
    "Sedativos têm meia-vida prolongada — reduzir midazolam em ~30%.",
    "Verificar TSH antes de procedimentos com vasoconstritor."
   ],
   "ref": "Ross DS et al. Thyroid 2016; IF 7.8."
  },
  {
   "id": "insuf_adrenal",
   "category": "Endócrino",
   "label": "Insuficiência adrenal / corticoide crônico",
   "alerts": [
    "Supressão do eixo HHA: risco de crise adrenal em procedimentos estressantes.",
    "Considerar \"dose de estresse\" — geralmente o dobro da dose habitual no dia.",
    "Consultar médico assistente em cirurgias maiores."
   ],
   "ref": null
  },
  {
   "id": "gestacao",
   "category": "Gestação",
   "label": "Gestação",
   "alerts": [
    "Evitar procedimentos eletivos no 1º trimestre (organogênese) e final do 3º.",
    "Período mais seguro: 2º trimestre.",
    "CONTRAINDICADA: prilocaína com felipressina (ação ocitócica + metemoglobinemia fetal).",
    "Lidocaína 2% c/ epinefrina (categoria B) é segura em doses normais.",
    "Evitar AINEs no 3º trimestre (fechamento precoce do canal arterial).",
    "Paracetamol é o analgésico de escolha.",
    "Radiografia: avental de chumbo + protetor de tireoide; evitar 1º trimestre.",
    "Posição em decúbito lateral esquerdo no 3º trimestre (evitar compressão da veia cava).",
    "Anestesia local com epinefrina é segura em todas as fases gestacionais.",
    "Evitar tetraciclinas, metronidazol no 1º trimestre e AINEs em dose alta.",
    "Após 20 semanas: evitar decúbito dorsal prolongado."
   ],
   "ref": "ACOG. Obstet Gynecol 2017; IF 8.7."
  },
  {
   "id": "lactacao",
   "category": "Gestação",
   "label": "Lactação",
   "alerts": [
    "Lidocaína e articaína: excreção mínima no leite — seguras.",
    "Paracetamol e ibuprofeno: compatíveis com amamentação.",
    "Evitar codeína (variabilidade no metabolismo materno pode causar overdose no lactente).",
    "Amoxicilina, ibuprofeno e paracetamol são seguros durante a amamentação."
   ],
   "ref": "ACOG. Obstet Gynecol 2017; IF 8.7."
  },
  {
   "id": "anemia",
   "category": "Hematológico",
   "label": "Anemia",
   "alerts": [
    "Anemia grave: adiar cirurgias eletivas.",
    "Evitar prilocaína em anemia grave (risco de metemoglobinemia)."
   ],
   "ref": null
  },
  {
   "id": "anticoagulacao",
   "category": "Hematológico",
   "label": "Anticoagulação oral com varfarina",
   "alerts": [
    "Verificar INR ≤ 3,5 (procedimentos dentários simples são seguros — Andrade).",
    "NÃO suspender anticoagulante sem orientação médica.",
    "Hemostasia local rigorosa: sutura, esponja de colágeno, ácido tranexâmico 4,8%.",
    "Cuidado ao prescrever metronidazol, fluconazol, eritromicina, claritromicina — elevam INR."
   ],
   "ref": null
  },
  {
   "id": "antiagregacao",
   "category": "Hematológico",
   "label": "Antiagregação plaquetária (AAS, clopidogrel)",
   "alerts": [
    "Geralmente NÃO suspender (risco trombótico > risco hemorrágico).",
    "Hemostasia local cuidadosa.",
    "Evitar associação com AINEs sistêmicos."
   ],
   "ref": null
  },
  {
   "id": "hemofilia",
   "category": "Hematológico",
   "label": "Hemofilia / coagulopatia hereditária",
   "alerts": [
    "Consultar hematologista antes de qualquer procedimento invasivo.",
    "Pode necessitar reposição de fator antes da cirurgia.",
    "Evitar bloqueios profundos (risco de hematoma).",
    "Hemostasia local rigorosa.",
    "Evitar AINEs.",
    "Hemofilia A: fator VIII 30–50 UI/kg — coordenar com o hematologista.",
    "Hemofilia B: fator IX 50–100 UI/kg no pré-operatório.",
    "DDAVP 0,3 mcg/kg IV/IN: hemofilia leve e doença de von Willebrand tipo 1.",
    "Ácido tranexâmico 10 mg/kg IV ou bochecho a 4,8%.",
    "Anestesia intraligamentar como alternativa ao bloqueio troncular.",
    "Sutura primária em toda exodontia; gaze com trombina tópica."
   ],
   "ref": "van Diermen DE et al. Oral Surg Oral Med 2021; IF 4.5."
  },
  {
   "id": "noacs",
   "category": "Hematológico",
   "label": "Novos anticoagulantes orais (NOACs)",
   "alerts": [
    "Procedimentos simples: não suspender.",
    "Cirurgias maiores: considerar pausa de 24h (avaliar com cardiologista).",
    "Hemostasia local rigorosa."
   ],
   "ref": null
  },
  {
   "id": "trombocitopenia",
   "category": "Hematológico",
   "label": "Trombocitopenia",
   "alerts": [
    "Plaquetas < 50.000/mm³: contraindicação relativa para cirurgias.",
    "Plaquetas < 20.000/mm³: risco hemorrágico elevado — consultar hematologista."
   ],
   "ref": null
  },
  {
   "id": "hepatite_viral",
   "category": "Hepático",
   "label": "Hepatite viral (B / C)",
   "alerts": [
    "Biossegurança padrão é suficiente.",
    "Avaliar função hepática se hepatite ativa.",
    "Evitar paracetamol em altas doses se hepatite ativa.",
    "Verificar a imunização contra HBV de toda a equipe."
   ],
   "ref": "Garcia-Tsao G et al. Hepatology 2022; IF 17.4."
  },
  {
   "id": "insuf_hepatica",
   "category": "Hepático",
   "label": "Insuficiência hepática / hepatopatia",
   "alerts": [
    "Anestésicos amida (lidocaína, bupivacaína) metabolizados no fígado — reduzir doses.",
    "Articaína: parcialmente plasmática — vantagem nesses pacientes.",
    "Evitar paracetamol em altas doses (hepatotoxicidade).",
    "Avaliar coagulação (TAP/INR e plaquetas).",
    "Solicitar TP, albumina e plaquetas — coagulopatia frequente.",
    "Evitar paracetamol em hepatopatia alcoólica e em cirrose Child-Pugh B/C.",
    "Contraindicar metronidazol em hepatopatia grave."
   ],
   "ref": "Garcia-Tsao G et al. Hepatology 2022; IF 17.4."
  },
  {
   "id": "epilepsia",
   "category": "Neurológico",
   "label": "Epilepsia",
   "alerts": [
    "Anestésicos em dose tóxica podem precipitar convulsões — respeitar limites.",
    "Verificar controle das crises e adesão à medicação.",
    "Sessões curtas, ambiente calmo.",
    "Manter via aérea segura — atenção a próteses removíveis durante atendimento.",
    "Fenitoína: hiperplasia gengival em ~50% — profilaxia periodontal a cada 3 meses.",
    "Carbamazepina induz CYP3A4 — reduz a eficácia de azólicos e da dexametasona.",
    "Benzodiazepínicos potencializam anticonvulsivantes — reduzir midazolam em ~30%.",
    "Em crise: lateralizar, não conter, cronometrar. Duração > 5 min: acionar o SAMU.",
    "Ter disponível diazepam retal 0,5 mg/kg ou midazolam intranasal 0,3 mg/kg."
   ],
   "ref": "Perucca P et al. Lancet Neurol 2023; IF 48.0."
  },
  {
   "id": "bifosfonatos",
   "category": "Outros",
   "label": "Bisfosfonatos / denosumabe",
   "alerts": [
    "Risco de osteonecrose dos maxilares (MRONJ).",
    "Risco maior com via IV (ácido zoledrônico) e tempo de uso > 4 anos.",
    "Evitar exodontias quando possível; preferir tratamento endodôntico.",
    "Documentar consentimento informado.",
    "MRONJ: o risco persiste mesmo após a suspensão — não há janela segura.",
    "Bisfosfonato oral < 3 anos, sem corticoide: risco baixo — cautela + antibiótico.",
    "Bisfosfonato IV: contraindicar cirurgias eletivas.",
    "CTX sérico: < 150 pg/mL = alto risco; > 300 pg/mL = risco reduzido.",
    "Higiene rigorosa; preferir profilaxia periodontal não cirúrgica.",
    "Exodontia inadiável: antibiótico, sutura primária e acompanhamento por 8 semanas."
   ],
   "ref": "Khan AA et al. J Bone Miner Res 2017; IF 6.3."
  },
  {
   "id": "hiv",
   "category": "Outros",
   "label": "HIV / SIDA",
   "alerts": [
    "Verificar contagem de CD4 e carga viral.",
    "CD4 < 200: maior risco de infecções oportunistas.",
    "Antirretrovirais têm múltiplas interações — verificar antes de prescrever.",
    "Candidose oral, leucoplasia pilosa e sarcoma de Kaposi — rastrear ativamente.",
    "Antirretrovirais inibem CYP3A4 — reduzir midazolam em 50–70%.",
    "Xerostomia por antirretrovirais — saliva artificial e fluoreto diário.",
    "Vacinação contra HBV da equipe; precauções padrão rigorosas.",
    "Gengivite/periodontite necrosante (GUNA/GPUNA): debridamento + metronidazol + clorexidina 0,12%."
   ],
   "ref": "Patton LL. Periodontol 2000, 2023; IF 6.5."
  },
  {
   "id": "imunossupressao",
   "category": "Outros",
   "label": "Imunossupressão (quimio, transplante, biológicos)",
   "alerts": [
    "Risco de infecção elevado — considerar profilaxia antibiótica.",
    "Cicatrização comprometida.",
    "Neutrófilos < 1.000/mm³: adiar procedimentos eletivos."
   ],
   "ref": null
  },
  {
   "id": "mucosite_quimio",
   "category": "Outros",
   "label": "Paciente oncológico (quimio/radioterapia)",
   "alerts": [
    "Procedimentos invasivos devem ser concluídos ANTES do início da quimio/radio.",
    "Radioterapia em cabeça e pescoço: risco de osteorradionecrose por toda a vida.",
    "Manejo cuidadoso de mucosite e xerostomia pós-radiação.",
    "Profilaxia antibiótica em neutropênicos.",
    "Saneamento oral antes da quimio/radioterapia — janela de 2–3 semanas.",
    "Mucosite: laserterapia de baixa potência (660 nm, 4 J/cm²) reduz a gravidade e a duração.",
    "Xerostomia pós-radioterapia: saliva artificial e flúor tópico.",
    "Trismo pós-radioterapia: fisioterapia e exercícios de abertura bucal.",
    "Osteorradionecrose: contraindicar exodontias em área irradiada > 65 Gy."
   ],
   "ref": "Lalla RV et al. Cancer 2014; IF 6.2."
  },
  {
   "id": "insuf_renal",
   "category": "Renal",
   "label": "Insuficiência renal crônica",
   "alerts": [
    "Evitar AINEs (nefrotóxicos).",
    "Anestésicos locais: doses normais geralmente seguras (metabolismo hepático).",
    "Em hemodiálise: agendar no dia seguinte à diálise; verificar fístula AV.",
    "Profilaxia antibiótica em pacientes em diálise por cateter venoso central.",
    "Ajustar dose de antibióticos conforme clearance.",
    "AINEs contraindicados (nefrotóxicos) — usar paracetamol em dose reduzida.",
    "Anemia e distúrbios hemorrágicos são frequentes — solicitar coagulograma pré-operatório.",
    "Xerostomia frequente — fluoreto diário.",
    "Aminoglicosídeos e tetraciclinas são contraindicados em DRC avançada."
   ],
   "ref": "Gupta M et al. JADA 2020; IF 9.2."
  },
  {
   "id": "asma",
   "category": "Respiratório",
   "label": "Asma / broncoespasmo",
   "alerts": [
    "Evitar AINEs (podem desencadear broncoespasmo em asmáticos sensíveis).",
    "Preferir paracetamol ou dipirona para analgesia.",
    "Bissulfito (conservante) em anestésicos com vasoconstritor pode causar reação em asmáticos graves corticodependentes.",
    "Ter salbutamol spray disponível.",
    "Atendimento em posição semi-sentada se sintomas presentes.",
    "Verificar o grau de controle e a data da última crise. Adiar o atendimento se crise < 48 h.",
    "Se houver sensibilidade ao metabissulfito: preferir mepivacaína 3% sem vasoconstritor.",
    "Estresse é gatilho de crise — sedação mínima (ex.: midazolam oral) pode ser benéfica.",
    "Crise: interromper o procedimento, salbutamol 2–4 jatos, O₂, posição sentada e acionar o SAMU."
   ],
   "ref": "GINA Report. 2024 Update; IF > 20."
  },
  {
   "id": "dpoc",
   "category": "Respiratório",
   "label": "DPOC",
   "alerts": [
    "Atendimento em posição semi-sentada.",
    "Evitar sedação que deprima centro respiratório.",
    "O₂ suplementar se SpO₂ < 92%."
   ],
   "ref": null
  },
  {
   "id": "sahos",
   "category": "Respiratório",
   "label": "Síndrome da apneia obstrutiva do sono (SAOS)",
   "alerts": [
    "Cuidado com sedação — risco de obstrução de via aérea.",
    "Posição semi-sentada.",
    "Avaliar uso de CPAP."
   ],
   "ref": null
  },
  {
   "id": "depressao_ansiedade",
   "category": "Psiquiátrico",
   "label": "Depressão / ansiedade",
   "alerts": [
    "Verificar medicação em uso (tricíclicos, ISRSs, IMAOs).",
    "Tricíclicos: limitar epinefrina a 40 µg.",
    "IMAOs: evitar epinefrina.",
    "Considerar sedação mínima com benzodiazepínico se ansiedade marcada."
   ],
   "ref": null
  },
  {
   "id": "transtorno_panico",
   "category": "Psiquiátrico",
   "label": "Transtorno do pânico",
   "alerts": [
    "Risco aumentado de síncope/crises durante atendimento.",
    "Considerar sedação mínima pré-operatória.",
    "Sessões curtas; ambiente acolhedor; explicar cada passo."
   ],
   "ref": null
  },
  {
   "id": "cardiopatia_congenita",
   "category": "Cardiovascular",
   "label": "Cardiopatia congênita",
   "ref": "Lockhart PB et al. Circulation 2021; IF 37.8.",
   "alerts": [
    "Profilaxia de endocardite só nas condições de alto risco da AHA 2021 (ver os itens \"Endocardite\" acima).",
    "Quando indicada: amoxicilina 50 mg/kg VO (máx 2 g) 30–60 min antes do procedimento.",
    "Alérgico à penicilina: azitromicina ou claritromicina 15 mg/kg VO (máx 500 mg) 30–60 min antes. A AHA 2021 não recomenda mais a clindamicina.",
    "Vasoconstritores: máximo de 0,04 mg de epinefrina (≈ 2 tubetes 1:100.000).",
    "Monitorar SpO₂, FC e PA durante todo o procedimento.",
    "Relatório do cardiologista obrigatório em procedimentos de risco.",
    "Sedação consciente reduz a resposta adrenérgica ao estresse."
   ]
  },
  {
   "id": "transplantado",
   "category": "Outros",
   "label": "Paciente transplantado",
   "ref": "Little JW et al. Dental Management. 9.ª ed. 2017.",
   "alerts": [
    "Ciclosporina causa hiperplasia gengival em ~25% — controle a cada 3 meses.",
    "Dipirona reduz os níveis de ciclosporina — evitar em transplantados.",
    "Antibioticoprofilaxia obrigatória em procedimentos invasivos.",
    "Candidose oral frequente — rastrear e tratar precocemente.",
    "Consultar a equipe de transplante antes de qualquer cirurgia."
   ]
  },
  {
   "id": "autoimune",
   "category": "Autoimune / Reumatológico",
   "label": "Doença autoimune (lúpus, artrite reumatoide)",
   "ref": "ACR/EULAR Arthritis Rheumatol 2021; IF 17.5.",
   "alerts": [
    "Corticoide crônico: dobrar a dose no dia da cirurgia.",
    "Metotrexato (AR): PROIBIR AINEs — toxicidade hematológica grave.",
    "Artrite reumatoide: subluxação da ATM e da coluna cervical — cuidado ao posicionar o paciente.",
    "Lúpus: lesões orais em até 45% — diagnóstico diferencial com leucoplasia.",
    "Síndrome antifosfolípide: verificar INR.",
    "AINEs: cautela em DRC secundária ao lúpus."
   ]
  },
  {
   "id": "sjogren",
   "category": "Autoimune / Reumatológico",
   "label": "Síndrome de Sjögren",
   "ref": "Vivino FB et al. Rheum Dis Clin NA 2016; IF 4.9.",
   "alerts": [
    "Xerostomia severa — risco muito alto de cárie: fluoreto diário obrigatório.",
    "Saliva artificial e pilocarpina 5 mg 3–4×/dia.",
    "Candidose oral frequente — considerar nistatina preventiva.",
    "Ceratoconjuntivite seca: proteger os olhos durante os procedimentos.",
    "Lúpus e artrite reumatoide são comorbidades associadas — rastrear.",
    "Parotidite recorrente: amoxicilina se bacteriana."
   ]
  },
  {
   "id": "anemia_falciforme",
   "category": "Hematológico",
   "label": "Anemia falciforme",
   "ref": "DeBaun MR et al. Lancet 2021; IF 79.3.",
   "alerts": [
    "Evitar hipóxia, hipotermia e estresse — gatilhos de crise vaso-oclusiva.",
    "Anestesia local com epinefrina: usar com cautela.",
    "Manter SpO₂ > 95% rigorosamente durante sedações.",
    "Radiografia: trabéculas ósseas alargadas nos maxilares.",
    "Tratar infecções precocemente — osteomielite mandibular é mais frequente.",
    "Hb < 7 g/dL: adiar procedimentos eletivos."
   ]
  },
  {
   "id": "obesidade_morbida",
   "category": "Endócrino",
   "label": "Obesidade mórbida",
   "ref": "AHA/ACC Obesity Guidelines. Circulation 2021; IF 37.8.",
   "alerts": [
    "IMC > 40: risco de apneia obstrutiva do sono — evitar sedação profunda.",
    "Midazolam oral: calcular pelo peso ideal, não pelo peso real.",
    "HAS, DM2 e dislipidemia são comorbidades frequentes associadas.",
    "Elevar a cabeceira em 30° — conforto e menos refluxo.",
    "AINEs: risco aumentado em obesos com DM ou HAS.",
    "Acesso venoso mais difícil — planejar a conduta de emergência."
   ]
  },
  {
   "id": "parkinson",
   "category": "Neurológico",
   "label": "Doença de Parkinson",
   "ref": "Little JW et al. Dental Management. 9.ª ed. 2017.",
   "alerts": [
    "Tremor dificulta o acesso cirúrgico — posicionar com apoios.",
    "Disfagia: risco de aspiração — cuidado com a irrigação.",
    "Levodopa: hipotensão postural — levantar o paciente lentamente.",
    "Xerostomia por anticolinérgicos — fluoreto e higiene intensiva.",
    "Sedação: midazolam pode exacerbar a rigidez — usar a menor dose eficaz.",
    "Sessões curtas; comunicação adaptada ao comprometimento motor."
   ]
  },
  {
   "id": "alzheimer",
   "category": "Neurológico",
   "label": "Demência / Alzheimer",
   "ref": "Little JW et al. Dental Management. 9.ª ed. 2017.",
   "alerts": [
    "Comunicação adaptada ao grau cognitivo — linguagem simples.",
    "Cuidador/responsável legal presente em todas as sessões.",
    "Xerostomia por antidepressivos e anticolinérgicos.",
    "Comportamento não colaborativo: considerar midazolam oral em dose mínima.",
    "Higiene bucal delegada ao cuidador — instruir e supervisionar.",
    "Casos avançados: avaliar sedação mais profunda com equipe especializada."
   ]
  }
 ],
 "MEDS": [
  {
   "id": "aas_baixa_dose",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Ácido Acetilsalicílico (uso crônico, dose baixa)",
   "brands": [
    "AAS",
    "Aspirina Prevent",
    "Bufferin",
    "Somalgin"
   ],
   "mechanism": "Antiagregante plaquetário. Inibição irreversível da COX-1 plaquetária.",
   "alerts": [
    "NÃO suspender (risco trombótico > hemorrágico).",
    "Hemostasia local cuidadosa.",
    "Evitar associação com outros AINEs."
   ],
   "ref": null
  },
  {
   "id": "colchicina",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Colchicina",
   "brands": [
    "Colchis",
    "Colchicina Houdé"
   ],
   "mechanism": "Inibidor da polimerização da tubulina e migração de neutrófilos. Usada na gota.",
   "alerts": [
    "Janela terapêutica estreita — atenção à toxicidade gastrointestinal.",
    "Claritromicina, fluconazol e ciclosporina elevam níveis séricos (CYP3A4 e P-gp)."
   ],
   "ref": null
  },
  {
   "id": "paciente_em_atb",
   "category": "Antibiótico",
   "label": "Paciente em uso de antibiótico (atual)",
   "brands": [],
   "mechanism": "Diversos. Verificar classe específica.",
   "alerts": [
    "Se já em uso de amoxicilina e necessitar profilaxia para endocardite: trocar para azitromicina/claritromicina (AHA 2021).",
    "Verificar interações antes de prescrever novo antibiótico."
   ],
   "ref": null
  },
  {
   "id": "tenofovir_lamivudina",
   "category": "Antirretroviral",
   "label": "Tenofovir + Lamivudina + Dolutegravir (TARV)",
   "brands": [
    "Tenofovir/Lamivudina/Dolutegravir SUS",
    "Triumeq"
   ],
   "mechanism": "Combinação de inibidores nucleosídeos da transcriptase reversa + inibidor da integrase.",
   "alerts": [
    "Múltiplas interações — consultar antes de prescrever.",
    "Dolutegravir + claritromicina: aumento dos níveis do antirretroviral.",
    "Evitar AINEs em uso prolongado (potencial nefrotoxicidade do tenofovir)."
   ],
   "ref": null
  },
  {
   "id": "amiodarona",
   "category": "Cardiovascular",
   "label": "Amiodarona",
   "brands": [
    "Ancoron",
    "Atlansil"
   ],
   "mechanism": "Antiarrítmico classe III. Bloqueia canais de K+ e prolonga repolarização.",
   "alerts": [
    "Limitar epinefrina — risco de arritmias.",
    "Inibidor de CYP3A4 — pode aumentar níveis de lidocaína/bupivacaína.",
    "Meia-vida muito longa (~50 dias).",
    "Pode prolongar QT — atenção a outras drogas pró-arrítmicas."
   ],
   "ref": null
  },
  {
   "id": "anlodipino",
   "category": "Cardiovascular",
   "label": "Anlodipino",
   "brands": [
    "Norvasc",
    "Pressat",
    "Amlodin"
   ],
   "mechanism": "Bloqueador de canal de cálcio diidropiridínico. Vasodilatação periférica.",
   "alerts": [
    "Sem interação direta com anestésicos locais.",
    "Pode causar hiperplasia gengival como efeito adverso (avaliar).",
    "Menor risco de hiperplasia gengival que o nifedipino."
   ],
   "ref": "Whelton PK et al. Hypertension 2018; IF 9.9."
  },
  {
   "id": "apixabana",
   "category": "Cardiovascular",
   "label": "Apixabana",
   "brands": [
    "Eliquis"
   ],
   "mechanism": "Inibidor direto do fator Xa (NOAC).",
   "alerts": [
    "Procedimentos simples: não suspender.",
    "Cirurgias maiores: avaliar pausa com cardiologista.",
    "Hemostasia local rigorosa."
   ],
   "ref": null
  },
  {
   "id": "atenolol",
   "category": "Cardiovascular",
   "label": "Atenolol",
   "brands": [
    "Atenol",
    "Ablok"
   ],
   "mechanism": "β-bloqueador seletivo β₁ (cardioseletivo).",
   "alerts": [
    "Interação com epinefrina menor que propranolol — ainda assim, limitar a 40 µg por precaução."
   ],
   "ref": null
  },
  {
   "id": "atorvastatina",
   "category": "Cardiovascular",
   "label": "Atorvastatina",
   "brands": [
    "Lipitor",
    "Citalor"
   ],
   "mechanism": "Inibidor da HMG-CoA redutase. Reduz síntese hepática de colesterol.",
   "alerts": [
    "Metabolizada por CYP3A4 — atenção com claritromicina/fluconazol (risco de miopatia/rabdomiólise)."
   ],
   "ref": null
  },
  {
   "id": "bisoprolol",
   "category": "Cardiovascular",
   "label": "Bisoprolol",
   "brands": [
    "Concor",
    "Concardio"
   ],
   "mechanism": "β-bloqueador altamente seletivo β₁.",
   "alerts": [
    "Interação com epinefrina baixa, mas limitar a 40 µg por precaução."
   ],
   "ref": null
  },
  {
   "id": "captopril",
   "category": "Cardiovascular",
   "label": "Captopril",
   "brands": [
    "Capoten",
    "Capotrat"
   ],
   "mechanism": "Inibidor da Enzima Conversora de Angiotensina (IECA).",
   "alerts": [
    "Sem interação direta com anestésicos locais.",
    "AINEs reduzem efeito anti-hipertensivo.",
    "Efeito colateral comum: tosse seca e disgeusia."
   ],
   "ref": null
  },
  {
   "id": "carvedilol",
   "category": "Cardiovascular",
   "label": "Carvedilol",
   "brands": [
    "Coreg",
    "Carvedilat",
    "Dilatrend"
   ],
   "mechanism": "β-bloqueador não seletivo + α₁-bloqueador.",
   "alerts": [
    "Componente não seletivo: limitar epinefrina a 40 µg.",
    "Aspiração prévia obrigatória."
   ],
   "ref": null
  },
  {
   "id": "cilostazol",
   "category": "Cardiovascular",
   "label": "Cilostazol",
   "brands": [
    "Vasogard",
    "Cebralat"
   ],
   "mechanism": "Inibidor da fosfodiesterase III. Antiagregante plaquetário e vasodilatador.",
   "alerts": [
    "Aumenta risco de sangramento.",
    "CYP3A4 — atenção a interações com claritromicina e fluconazol."
   ],
   "ref": null
  },
  {
   "id": "clopidogrel",
   "category": "Cardiovascular",
   "label": "Clopidogrel",
   "brands": [
    "Plavix",
    "Iscover"
   ],
   "mechanism": "Antiagregante plaquetário. Inibidor irreversível do receptor P2Y₁₂ do ADP.",
   "alerts": [
    "NÃO suspender sem orientação cardiológica.",
    "Hemostasia local cuidadosa."
   ],
   "ref": null
  },
  {
   "id": "dabigatrana",
   "category": "Cardiovascular",
   "label": "Etexilato de Dabigatrana",
   "brands": [
    "Pradaxa"
   ],
   "mechanism": "Inibidor direto da trombina (NOAC).",
   "alerts": [
    "Procedimentos simples: não suspender.",
    "Cirurgias maiores: avaliar pausa com cardiologista.",
    "Hemostasia local rigorosa."
   ],
   "ref": null
  },
  {
   "id": "digoxina",
   "category": "Cardiovascular",
   "label": "Digoxina",
   "brands": [
    "Digoxina"
   ],
   "mechanism": "Inibidor da Na+/K+ ATPase. Aumenta contratilidade e reduz condução AV.",
   "alerts": [
    "Índice terapêutico estreito.",
    "Evitar alterações eletrolíticas (especialmente hipopotassemia).",
    "Eritromicina/claritromicina aumentam níveis séricos."
   ],
   "ref": null
  },
  {
   "id": "diltiazem",
   "category": "Cardiovascular",
   "label": "Diltiazem",
   "brands": [
    "Cardizem",
    "Balcor"
   ],
   "mechanism": "Bloqueador de canal de cálcio não diidropiridínico.",
   "alerts": [
    "Inibidor de CYP3A4 — pode aumentar níveis de bupivacaína.",
    "Hiperplasia gengival possível."
   ],
   "ref": null
  },
  {
   "id": "enalapril",
   "category": "Cardiovascular",
   "label": "Maleato de Enalapril",
   "brands": [
    "Renitec",
    "Vasopril",
    "Eupressin"
   ],
   "mechanism": "Inibidor da Enzima Conversora de Angiotensina (IECA).",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "AINEs reduzem efeito anti-hipertensivo.",
    "Tosse seca em 10–15% dos usuários."
   ],
   "ref": "Whelton PK et al. Hypertension 2018; IF 9.9."
  },
  {
   "id": "espironolactona",
   "category": "Cardiovascular",
   "label": "Espironolactona",
   "brands": [
    "Aldactone"
   ],
   "mechanism": "Diurético poupador de potássio. Antagonista da aldosterona.",
   "alerts": [
    "Risco de hiperpotassemia se associado a AINEs ou IECA/BRA."
   ],
   "ref": null
  },
  {
   "id": "furosemida",
   "category": "Cardiovascular",
   "label": "Furosemida",
   "brands": [
    "Lasix"
   ],
   "mechanism": "Diurético de alça. Inibe transportador Na+/K+/2Cl- na alça de Henle.",
   "alerts": [
    "AINEs reduzem efeito diurético e pioram função renal.",
    "Risco de hipopotassemia e desidratação."
   ],
   "ref": null
  },
  {
   "id": "hidralazina",
   "category": "Cardiovascular",
   "label": "Hidralazina",
   "brands": [
    "Apresolina",
    "Nepresol"
   ],
   "mechanism": "Vasodilatador direto da musculatura lisa arteriolar.",
   "alerts": [
    "Risco de taquicardia reflexa — limitar epinefrina."
   ],
   "ref": null
  },
  {
   "id": "hidroclorotiazida",
   "category": "Cardiovascular",
   "label": "Hidroclorotiazida",
   "brands": [
    "Clorana"
   ],
   "mechanism": "Diurético tiazídico. Inibe reabsorção de Na+/Cl- no túbulo distal.",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "AINEs reduzem efeito diurético.",
    "Hipopotassemia possível.",
    "Risco de hipotensão postural — levantar o paciente lentamente."
   ],
   "ref": "Whelton PK et al. Hypertension 2018; IF 9.9."
  },
  {
   "id": "irbesartana",
   "category": "Cardiovascular",
   "label": "Irbesartana",
   "brands": [
    "Aprovel",
    "Avapro"
   ],
   "mechanism": "Antagonista seletivo do receptor AT₁ da angiotensina II (BRA).",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "AINEs podem reduzir efeito anti-hipertensivo."
   ],
   "ref": null
  },
  {
   "id": "isossorbida",
   "category": "Cardiovascular",
   "label": "Dinitrato / Mononitrato de Isossorbida",
   "brands": [
    "Isordil",
    "Cincordil",
    "Monocordil"
   ],
   "mechanism": "Nitrato orgânico. Doador de óxido nítrico — vasodilatação venosa.",
   "alerts": [
    "Cefaleia comum.",
    "Hipotensão postural possível.",
    "Não associar a inibidores da PDE5 (sildenafil) — hipotensão grave."
   ],
   "ref": null
  },
  {
   "id": "lisinopril",
   "category": "Cardiovascular",
   "label": "Lisinopril",
   "brands": [
    "Zestril",
    "Prinivil"
   ],
   "mechanism": "Inibidor da Enzima Conversora de Angiotensina (IECA).",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "AINEs reduzem efeito anti-hipertensivo."
   ],
   "ref": null
  },
  {
   "id": "losartana",
   "category": "Cardiovascular",
   "label": "Losartana Potássica",
   "brands": [
    "Cozaar",
    "Aradois",
    "Losartec",
    "Corus",
    "Losapress"
   ],
   "mechanism": "Antagonista seletivo do receptor AT₁ da angiotensina II (BRA). Reduz vasoconstrição e secreção de aldosterona, diminuindo a pressão arterial.",
   "alerts": [
    "Sem interação significativa com anestésicos locais.",
    "AINEs reduzem o efeito anti-hipertensivo — preferir paracetamol/dipirona em uso prolongado.",
    "Risco aumentado de hiperpotassemia se associado a AINE em hepatopatas/renais.",
    "Evitar AINEs concomitantes — risco de insuficiência renal aguda."
   ],
   "ref": "Whelton PK et al. Hypertension 2018; IF 9.9."
  },
  {
   "id": "metoprolol",
   "category": "Cardiovascular",
   "label": "Metoprolol",
   "brands": [
    "Selozok",
    "Seloken",
    "Lopressor"
   ],
   "mechanism": "β-bloqueador seletivo β₁ (cardioseletivo).",
   "alerts": [
    "Interação com epinefrina menor que propranolol — limitar a 40 µg."
   ],
   "ref": null
  },
  {
   "id": "nifedipino",
   "category": "Cardiovascular",
   "label": "Nifedipino",
   "brands": [
    "Adalat",
    "Cardalin"
   ],
   "mechanism": "Bloqueador de canal de cálcio diidropiridínico.",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "Pode causar hiperplasia gengival.",
    "Hiperplasia gengival em uso crônico — encaminhar para troca por anlodipino."
   ],
   "ref": "Mínguez I et al. J Periodontal Res 2022; IF 4.9."
  },
  {
   "id": "olmesartana",
   "category": "Cardiovascular",
   "label": "Olmesartana Medoxomila",
   "brands": [
    "Benicar",
    "Olmetec"
   ],
   "mechanism": "Antagonista seletivo do receptor AT₁ da angiotensina II (BRA).",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "AINEs podem reduzir efeito anti-hipertensivo."
   ],
   "ref": null
  },
  {
   "id": "propranolol",
   "category": "Cardiovascular",
   "label": "Cloridrato de Propranolol",
   "brands": [
    "Inderal",
    "Propranolol",
    "Rebaten"
   ],
   "mechanism": "β-bloqueador não seletivo (β₁ e β₂). Reduz frequência cardíaca, contratilidade e renina.",
   "alerts": [
    "Interação importante com epinefrina: risco de hipertensão grave por estímulo α não antagonizado.",
    "Limitar epinefrina a 40 µg (≈ 2 tubetes 1:100.000).",
    "Aspiração prévia obrigatória.",
    "Posição mais restritiva (Becker): CONTRAINDICAR a epinefrina por hipertensão paradoxal — preferir mepivacaína 3% sem vasoconstritor."
   ],
   "ref": "Becker DE. Gen Dent 2019."
  },
  {
   "id": "ramipril",
   "category": "Cardiovascular",
   "label": "Ramipril",
   "brands": [
    "Triatec",
    "Naprix"
   ],
   "mechanism": "Inibidor da Enzima Conversora de Angiotensina (IECA).",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "AINEs reduzem efeito anti-hipertensivo."
   ],
   "ref": null
  },
  {
   "id": "rivaroxabana",
   "category": "Cardiovascular",
   "label": "Rivaroxabana",
   "brands": [
    "Xarelto"
   ],
   "mechanism": "Inibidor direto do fator Xa (NOAC).",
   "alerts": [
    "Procedimentos simples: não suspender.",
    "Cirurgias maiores: avaliar pausa de 24h com cardiologista.",
    "Hemostasia local rigorosa."
   ],
   "ref": null
  },
  {
   "id": "rosuvastatina",
   "category": "Cardiovascular",
   "label": "Rosuvastatina Cálcica",
   "brands": [
    "Crestor",
    "Vivacor"
   ],
   "mechanism": "Inibidor da HMG-CoA redutase.",
   "alerts": [
    "Pouca interação com antibióticos comuns em odontologia."
   ],
   "ref": null
  },
  {
   "id": "sinvastatina",
   "category": "Cardiovascular",
   "label": "Sinvastatina",
   "brands": [
    "Zocor",
    "Sinvascor"
   ],
   "mechanism": "Inibidor da HMG-CoA redutase. Reduz síntese hepática de colesterol.",
   "alerts": [
    "Metabolizada por CYP3A4 — eritromicina/claritromicina/fluconazol aumentam risco de miopatia.",
    "Preferir azitromicina em alérgicos à penicilina."
   ],
   "ref": null
  },
  {
   "id": "telmisartana",
   "category": "Cardiovascular",
   "label": "Telmisartana",
   "brands": [
    "Micardis",
    "Pritor"
   ],
   "mechanism": "Antagonista seletivo do receptor AT₁ da angiotensina II (BRA).",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "AINEs podem reduzir efeito anti-hipertensivo."
   ],
   "ref": null
  },
  {
   "id": "valsartana",
   "category": "Cardiovascular",
   "label": "Valsartana",
   "brands": [
    "Diovan",
    "Tareg",
    "Valpression"
   ],
   "mechanism": "Antagonista seletivo do receptor AT₁ da angiotensina II (BRA).",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "AINEs podem reduzir efeito anti-hipertensivo."
   ],
   "ref": null
  },
  {
   "id": "varfarina",
   "category": "Cardiovascular",
   "label": "Varfarina Sódica",
   "brands": [
    "Marevan",
    "Coumadin"
   ],
   "mechanism": "Antagonista da vitamina K. Inibe síntese hepática dos fatores II, VII, IX, X.",
   "alerts": [
    "NÃO suspender sem orientação médica.",
    "Verificar INR ≤ 3,5 para procedimentos odontológicos simples (Andrade).",
    "Metronidazol, fluconazol, eritromicina, claritromicina: AUMENTAM INR.",
    "AINEs potencializam sangramento — evitar.",
    "Hemostasia local: sutura, esponja de colágeno, ácido tranexâmico."
   ],
   "ref": null
  },
  {
   "id": "verapamil",
   "category": "Cardiovascular",
   "label": "Cloridrato de Verapamil",
   "brands": [
    "Dilacoron",
    "Cardizem CD"
   ],
   "mechanism": "Bloqueador de canal de cálcio não diidropiridínico (atua no nó AV).",
   "alerts": [
    "Inibidor de CYP3A4 — pode aumentar níveis de bupivacaína.",
    "Hiperplasia gengival possível."
   ],
   "ref": null
  },
  {
   "id": "dapagliflozina",
   "category": "Endócrino",
   "label": "Dapagliflozina",
   "brands": [
    "Forxiga"
   ],
   "mechanism": "Inibidor do co-transportador SGLT2 renal.",
   "alerts": [
    "Risco de desidratação e infecções urogenitais."
   ],
   "ref": null
  },
  {
   "id": "dexametasona_cronica",
   "category": "Endócrino",
   "label": "Dexametasona (uso recente ou crônico)",
   "brands": [
    "Decadron",
    "Decadronal"
   ],
   "mechanism": "Glicocorticoide de alta potência.",
   "alerts": [
    "Risco de crise adrenal em procedimentos estressantes.",
    "Imunossupressão.",
    "Anti-edematoso pós-exodontia; potência ≈ 25× a da hidrocortisona."
   ],
   "ref": "Haas DA. Atlas Oral Maxillofac Surg Clin 2019."
  },
  {
   "id": "empagliflozina",
   "category": "Endócrino",
   "label": "Empagliflozina",
   "brands": [
    "Jardiance"
   ],
   "mechanism": "Inibidor do co-transportador SGLT2 renal.",
   "alerts": [
    "Risco aumentado de infecções urogenitais e desidratação."
   ],
   "ref": null
  },
  {
   "id": "gliclazida",
   "category": "Endócrino",
   "label": "Gliclazida",
   "brands": [
    "Diamicron"
   ],
   "mechanism": "Sulfonilureia.",
   "alerts": [
    "Risco de hipoglicemia."
   ],
   "ref": null
  },
  {
   "id": "glibenclamida",
   "category": "Endócrino",
   "label": "Glibenclamida",
   "brands": [
    "Daonil",
    "Euglucon"
   ],
   "mechanism": "Sulfonilureia. Estimula secreção de insulina.",
   "alerts": [
    "Risco de hipoglicemia — não atrasar refeições.",
    "Fluconazol potencializa efeito hipoglicemiante."
   ],
   "ref": "ADA. Diabetes Care 2024; IF 16.2."
  },
  {
   "id": "insulina",
   "category": "Endócrino",
   "label": "Insulina",
   "brands": [
    "Humalog",
    "NovoRapid",
    "Lantus",
    "Tresiba",
    "Humulin",
    "Novolin",
    "Toujeo",
    "Humulin N",
    "R"
   ],
   "mechanism": "Hormônio que promove captação celular de glicose.",
   "alerts": [
    "Epinefrina antagoniza efeito hipoglicemiante — pode elevar glicemia.",
    "Monitorar glicemia. Não atrasar refeições.",
    "Aferir a glicemia antes do procedimento.",
    "Hipoglicemia: 15 g de glicose por via oral."
   ],
   "ref": "ADA. Diabetes Care 2024; IF 16.2."
  },
  {
   "id": "levotiroxina",
   "category": "Endócrino",
   "label": "Levotiroxina Sódica",
   "brands": [
    "Puran T4",
    "Synthroid",
    "Euthyrox"
   ],
   "mechanism": "Reposição de hormônio tireoidiano sintético.",
   "alerts": [
    "Geralmente sem restrições significativas.",
    "Se hipotireoidismo grave: evitar sedação."
   ],
   "ref": null
  },
  {
   "id": "liraglutida_semaglutida",
   "category": "Endócrino",
   "label": "Liraglutida / Semaglutida",
   "brands": [
    "Victoza",
    "Saxenda",
    "Ozempic",
    "Wegovy",
    "Rybelsus"
   ],
   "mechanism": "Análogos de GLP-1. Retardam esvaziamento gástrico e estimulam secreção de insulina dependente de glicose.",
   "alerts": [
    "Retardo do esvaziamento gástrico — risco aumentado de regurgitação em sedação.",
    "Risco baixo de hipoglicemia em monoterapia."
   ],
   "ref": null
  },
  {
   "id": "metformina",
   "category": "Endócrino",
   "label": "Cloridrato de Metformina",
   "brands": [
    "Glifage",
    "Glucoformin",
    "Glucophage"
   ],
   "mechanism": "Biguanida. Reduz produção hepática de glicose e aumenta sensibilidade à insulina.",
   "alerts": [
    "Sem interação direta com anestésicos.",
    "Suspender em procedimentos com contraste iodado (risco de acidose lática).",
    "Não causa hipoglicemia isolada."
   ],
   "ref": "ADA. Diabetes Care 2024; IF 16.2."
  },
  {
   "id": "prednisona",
   "category": "Endócrino",
   "label": "Prednisona / Prednisolona (uso crônico)",
   "brands": [
    "Meticorten",
    "Prednisona",
    "Predsim"
   ],
   "mechanism": "Glicocorticoide sintético. Ação anti-inflamatória e imunossupressora.",
   "alerts": [
    "Uso crônico > 20 mg/dia por > 2 sem: risco de crise adrenal.",
    "Considerar \"dose de estresse\" em cirurgias maiores.",
    "Imunossupressão — risco de infecção.",
    "Hipertensão e hiperglicemia possíveis."
   ],
   "ref": "Miller CS. Dent Clin North Am 2010."
  },
  {
   "id": "bromoprida",
   "category": "Gastrointestinal",
   "label": "Bromoprida",
   "brands": [
    "Digesan",
    "Plamet"
   ],
   "mechanism": "Antagonista dopaminérgico. Procinético gástrico e antiemético.",
   "alerts": [
    "Sedação possível.",
    "Risco baixo de sintomas extrapiramidais."
   ],
   "ref": null
  },
  {
   "id": "domperidona",
   "category": "Gastrointestinal",
   "label": "Domperidona",
   "brands": [
    "Motilium",
    "Peridal"
   ],
   "mechanism": "Antagonista dopaminérgico periférico. Procinético.",
   "alerts": [
    "Pode prolongar QT — atenção a outras drogas pró-arrítmicas."
   ],
   "ref": null
  },
  {
   "id": "esomeprazol",
   "category": "Gastrointestinal",
   "label": "Esomeprazol Magnésio",
   "brands": [
    "Nexium"
   ],
   "mechanism": "Inibidor da bomba de prótons (IBP) — enantiômero S do omeprazol.",
   "alerts": [
    "Mesmo perfil do omeprazol."
   ],
   "ref": null
  },
  {
   "id": "omeprazol",
   "category": "Gastrointestinal",
   "label": "Omeprazol",
   "brands": [
    "Losec",
    "Peprazol",
    "Omeprazol"
   ],
   "mechanism": "Inibidor da bomba de prótons (IBP).",
   "alerts": [
    "Reduz absorção de cetoconazol/itraconazol.",
    "Uso prolongado: pode reduzir absorção de B12 e cálcio."
   ],
   "ref": null
  },
  {
   "id": "pantoprazol",
   "category": "Gastrointestinal",
   "label": "Pantoprazol Sódico",
   "brands": [
    "Pantozol",
    "Eupantol"
   ],
   "mechanism": "Inibidor da bomba de prótons (IBP).",
   "alerts": [
    "Menor interação que omeprazol por CYP."
   ],
   "ref": null
  },
  {
   "id": "sulfassalazina",
   "category": "Gastrointestinal",
   "label": "Sulfassalazina",
   "brands": [
    "Azulfin"
   ],
   "mechanism": "Anti-inflamatório intestinal e modulador imunológico. Usada em DII e artrite reumatoide.",
   "alerts": [
    "Pode causar leucopenia — atenção em cirurgias.",
    "Reações cutâneas e fotossensibilidade."
   ],
   "ref": null
  },
  {
   "id": "anticoncepcional",
   "category": "Ginecológico / Hormonal",
   "label": "Anticoncepcional oral combinado",
   "brands": [
    "Yasmin",
    "Selene",
    "Diane 35",
    "Cerazette",
    "Microvlar",
    "Tâmisa",
    "Yaz"
   ],
   "mechanism": "Combinação estrogênio + progestágeno. Suprime ovulação.",
   "alerts": [
    "Antibióticos podem reduzir eficácia — orientar método de barreira durante o tratamento.",
    "Risco aumentado de tromboembolismo — atenção em cirurgias maiores."
   ],
   "ref": null
  },
  {
   "id": "tamoxifeno",
   "category": "Ginecológico / Hormonal",
   "label": "Tamoxifeno",
   "brands": [
    "Nolvadex",
    "Tamoxifeno"
   ],
   "mechanism": "Modulador seletivo do receptor de estrogênio (SERM). Usado em câncer de mama.",
   "alerts": [
    "Risco aumentado de tromboembolismo.",
    "Pode causar xerostomia."
   ],
   "ref": null
  },
  {
   "id": "terapia_reposicao_hormonal",
   "category": "Ginecológico / Hormonal",
   "label": "Terapia de reposição hormonal",
   "brands": [
    "Premarin",
    "Climene",
    "Femoston"
   ],
   "mechanism": "Reposição de estrogênio (+/- progestágeno) em menopausa.",
   "alerts": [
    "Risco aumentado de tromboembolismo."
   ],
   "ref": null
  },
  {
   "id": "acido_zoledronico",
   "category": "Osteoporose / Metabolismo ósseo",
   "label": "Ácido Zoledrônico (IV)",
   "brands": [
    "Zometa",
    "Aclasta"
   ],
   "mechanism": "Bisfosfonato IV de alta potência.",
   "alerts": [
    "ALTO risco de osteonecrose dos maxilares (MRONJ).",
    "Evitar exodontias quando possível.",
    "Protocolo especializado obrigatório.",
    "Contraindicar cirurgias eletivas."
   ],
   "ref": "Khan AA et al. J Bone Miner Res 2017; IF 6.3."
  },
  {
   "id": "adalimumabe",
   "category": "Imunossupressor / Oncológico",
   "label": "Adalimumabe",
   "brands": [
    "Humira"
   ],
   "mechanism": "Anticorpo monoclonal anti-TNFα.",
   "alerts": [
    "Imunossupressão importante — risco de infecções.",
    "Considerar profilaxia antibiótica em cirurgias.",
    "Atenção a tuberculose latente."
   ],
   "ref": null
  },
  {
   "id": "alendronato",
   "category": "Osteoporose / Metabolismo ósseo",
   "label": "Alendronato Sódico",
   "brands": [
    "Fosamax",
    "Endronax"
   ],
   "mechanism": "Bisfosfonato oral. Inibe reabsorção óssea por inibição dos osteoclastos.",
   "alerts": [
    "Risco de osteonecrose dos maxilares (MRONJ) após exodontias.",
    "Risco menor que IV, mas presente. Informar e documentar.",
    "Avaliar CTX sérico antes de cirurgias."
   ],
   "ref": "Khan AA et al. J Bone Miner Res 2017; IF 6.3."
  },
  {
   "id": "azatioprina",
   "category": "Imunossupressor / Oncológico",
   "label": "Azatioprina",
   "brands": [
    "Imuran",
    "Azamun"
   ],
   "mechanism": "Análogo de purina. Imunossupressor.",
   "alerts": [
    "Imunossupressão.",
    "Mielossupressão — avaliar hemograma."
   ],
   "ref": null
  },
  {
   "id": "ciclosporina",
   "category": "Imunossupressor / Oncológico",
   "label": "Ciclosporina",
   "brands": [
    "Sandimmun"
   ],
   "mechanism": "Inibidor da calcineurina. Imunossupressor.",
   "alerts": [
    "Hiperplasia gengival comum.",
    "Fluconazol + ciclosporina: nefrotoxicidade.",
    "Eritromicina/claritromicina aumentam níveis séricos."
   ],
   "ref": null
  },
  {
   "id": "denosumabe",
   "category": "Osteoporose / Metabolismo ósseo",
   "label": "Denosumabe",
   "brands": [
    "Prolia",
    "Xgeva"
   ],
   "mechanism": "Anticorpo monoclonal anti-RANKL. Inibe formação de osteoclastos.",
   "alerts": [
    "Risco de MRONJ similar aos bisfosfonatos.",
    "Efeito reversível — exodontias devem ser feitas próximas ao fim do ciclo."
   ],
   "ref": null
  },
  {
   "id": "etanercepte",
   "category": "Imunossupressor / Oncológico",
   "label": "Etanercepte",
   "brands": [
    "Enbrel"
   ],
   "mechanism": "Proteína de fusão receptor solúvel de TNFα.",
   "alerts": [
    "Imunossupressão.",
    "Avaliar profilaxia antibiótica em cirurgias."
   ],
   "ref": null
  },
  {
   "id": "hidroxicloroquina",
   "category": "Imunossupressor / Oncológico",
   "label": "Hidroxicloroquina",
   "brands": [
    "Plaquinol",
    "Reuquinol"
   ],
   "mechanism": "Antimalárico com ação imunomoduladora. Usada em lúpus e artrite reumatoide.",
   "alerts": [
    "Pode prolongar QT — atenção a azitromicina (potencial aditivo).",
    "Mielossupressão rara."
   ],
   "ref": null
  },
  {
   "id": "metotrexato",
   "category": "Imunossupressor / Oncológico",
   "label": "Metotrexato",
   "brands": [
    "Metotrexato",
    "Tecnomet",
    "Ledertrexate"
   ],
   "mechanism": "Antagonista do ácido fólico. Imunossupressor e antineoplásico.",
   "alerts": [
    "Imunossupressão — atenção a infecções.",
    "AINEs aumentam toxicidade do metotrexato — evitar.",
    "Mucosite oral possível.",
    "Redução da excreção renal do metotrexato pelos AINEs → toxicidade hematológica grave; usar paracetamol.",
    "Mucosite oral frequente."
   ],
   "ref": "Lalla RV et al. Cancer 2014; IF 6.2."
  },
  {
   "id": "micofenolato",
   "category": "Imunossupressor / Oncológico",
   "label": "Micofenolato de Mofetila",
   "brands": [
    "CellCept",
    "Myfortic"
   ],
   "mechanism": "Inibidor da síntese de DNA em linfócitos. Imunossupressor.",
   "alerts": [
    "Imunossupressão.",
    "Mielossupressão — avaliar antes de cirurgias."
   ],
   "ref": null
  },
  {
   "id": "rituximabe",
   "category": "Imunossupressor / Oncológico",
   "label": "Rituximabe",
   "brands": [
    "Mabthera",
    "Truxima"
   ],
   "mechanism": "Anticorpo monoclonal anti-CD20.",
   "alerts": [
    "Imunossupressão importante — risco de infecções por meses após cada ciclo.",
    "Avaliar profilaxia antibiótica."
   ],
   "ref": null
  },
  {
   "id": "risedronato",
   "category": "Osteoporose / Metabolismo ósseo",
   "label": "Risedronato Sódico",
   "brands": [
    "Actonel"
   ],
   "mechanism": "Bisfosfonato oral.",
   "alerts": [
    "Risco de MRONJ."
   ],
   "ref": null
  },
  {
   "id": "tacrolimo",
   "category": "Imunossupressor / Oncológico",
   "label": "Tacrolimo",
   "brands": [
    "Prograf",
    "Tacrobel"
   ],
   "mechanism": "Inibidor da calcineurina. Imunossupressor.",
   "alerts": [
    "Imunossupressão.",
    "Metabolizado por CYP3A4 — atenção com claritromicina, fluconazol."
   ],
   "ref": null
  },
  {
   "id": "carbamazepina",
   "category": "Neurológico",
   "label": "Carbamazepina",
   "brands": [
    "Tegretol",
    "Tegrex"
   ],
   "mechanism": "Anticonvulsivante. Bloqueio de canais de Na+ voltagem-dependentes.",
   "alerts": [
    "Potente indutor de CYP3A4 — reduz eficácia de muitos fármacos.",
    "Pode causar leucopenia — avaliar hemograma.",
    "Hiperplasia gengival possível.",
    "Reduz a eficácia de azólicos (fluconazol) e da dexametasona."
   ],
   "ref": "Perucca P et al. Lancet Neurol 2023; IF 48.0."
  },
  {
   "id": "fenitoina",
   "category": "Neurológico",
   "label": "Fenitoína",
   "brands": [
    "Hidantal",
    "Epelin"
   ],
   "mechanism": "Anticonvulsivante. Bloqueio de canais de Na+.",
   "alerts": [
    "Hiperplasia gengival comum.",
    "Múltiplas interações via CYP — fluconazol e metronidazol elevam níveis.",
    "Hiperplasia gengival em ~50% — profilaxia periodontal a cada 3 meses."
   ],
   "ref": "Perucca P et al. Lancet Neurol 2023; IF 48.0."
  },
  {
   "id": "gabapentina",
   "category": "Neurológico",
   "label": "Gabapentina",
   "brands": [
    "Neurontin",
    "Gamibetal"
   ],
   "mechanism": "Análogo de GABA. Modulação de canais de cálcio neuronais.",
   "alerts": [
    "Pode somar-se a sedação de opioides e benzodiazepínicos."
   ],
   "ref": null
  },
  {
   "id": "lamotrigina",
   "category": "Neurológico",
   "label": "Lamotrigina",
   "brands": [
    "Lamictal"
   ],
   "mechanism": "Anticonvulsivante. Bloqueio de canais de Na+.",
   "alerts": [
    "Risco raro de Síndrome de Stevens-Johnson."
   ],
   "ref": null
  },
  {
   "id": "levetiracetam",
   "category": "Neurológico",
   "label": "Levetiracetam",
   "brands": [
    "Keppra"
   ],
   "mechanism": "Anticonvulsivante. Modulação da proteína SV2A.",
   "alerts": [
    "Poucas interações medicamentosas."
   ],
   "ref": null
  },
  {
   "id": "pregabalina",
   "category": "Neurológico",
   "label": "Pregabalina",
   "brands": [
    "Lyrica",
    "Prebictal"
   ],
   "mechanism": "Análogo de GABA. Modulação de canais de cálcio neuronais.",
   "alerts": [
    "Sedação aditiva com opioides e benzodiazepínicos."
   ],
   "ref": null
  },
  {
   "id": "alprazolam",
   "category": "Psiquiátrico",
   "label": "Alprazolam",
   "brands": [
    "Frontal",
    "Apraz"
   ],
   "mechanism": "Benzodiazepínico de meia-vida curta.",
   "alerts": [
    "Metabolismo por CYP3A4 — fluconazol, eritromicina/claritromicina potencializam."
   ],
   "ref": null
  },
  {
   "id": "amitriptilina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Amitriptilina",
   "brands": [
    "Tryptanol",
    "Amytril"
   ],
   "mechanism": "Antidepressivo tricíclico. Inibe recaptação de serotonina e noradrenalina + ação anticolinérgica.",
   "alerts": [
    "Potencializa efeito cardiovascular da epinefrina.",
    "Limitar epinefrina a 40 µg.",
    "Evitar fio retrator com epinefrina.",
    "Xerostomia: orientar higiene e hidratação.",
    "Posição mais restritiva (Becker): CONTRAINDICAR a epinefrina — preferir mepivacaína 3% sem vasoconstritor."
   ],
   "ref": "Becker DE. Gen Dent 2019."
  },
  {
   "id": "bupropiona",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Bupropiona",
   "brands": [
    "Wellbutrin",
    "Zetron",
    "Zyban"
   ],
   "mechanism": "Inibidor da recaptação de dopamina e noradrenalina (IRDN).",
   "alerts": [
    "Reduz limiar convulsivo — atenção em pacientes com epilepsia.",
    "Xerostomia possível."
   ],
   "ref": null
  },
  {
   "id": "citalopram",
   "category": "Psiquiátrico",
   "label": "Citalopram",
   "brands": [
    "Cipramil"
   ],
   "mechanism": "Inibidor seletivo da recaptação de serotonina (ISRS).",
   "alerts": [
    "Sem restrição formal a vasoconstritor.",
    "Risco de prolongamento de QT em altas doses."
   ],
   "ref": null
  },
  {
   "id": "clomipramina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Clomipramina",
   "brands": [
    "Anafranil"
   ],
   "mechanism": "Antidepressivo tricíclico.",
   "alerts": [
    "Limitar epinefrina a 40 µg."
   ],
   "ref": null
  },
  {
   "id": "clonazepam",
   "category": "Psiquiátrico",
   "label": "Clonazepam",
   "brands": [
    "Rivotril",
    "Clonotril"
   ],
   "mechanism": "Benzodiazepínico. Modula receptor GABA-A.",
   "alerts": [
    "Sedação aditiva com outros depressores do SNC.",
    "Evitar prescrever benzodiazepínico adicional sem necessidade.",
    "Potencializa sedativos — reduzir a dose de midazolam em ~30%."
   ],
   "ref": "Perucca P et al. Lancet Neurol 2023; IF 48.0."
  },
  {
   "id": "diazepam_uso",
   "category": "Psiquiátrico",
   "label": "Diazepam (em uso)",
   "brands": [
    "Valium",
    "Diempax"
   ],
   "mechanism": "Benzodiazepínico de meia-vida longa.",
   "alerts": [
    "Sedação aditiva.",
    "Meia-vida longa (20–70 h). Evitar em hepatopatas."
   ],
   "ref": "Coté CJ et al. A Practice of Anesthesia. 6.ª ed. 2018."
  },
  {
   "id": "duloxetina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Duloxetina",
   "brands": [
    "Cymbalta",
    "Velija"
   ],
   "mechanism": "Inibidor da recaptação de serotonina e noradrenalina (IRSN).",
   "alerts": [
    "Sem restrição rotineira para anestésicos.",
    "Evitar tramadol (risco de síndrome serotonérgica)."
   ],
   "ref": null
  },
  {
   "id": "escitalopram",
   "category": "Psiquiátrico",
   "label": "Oxalato de Escitalopram",
   "brands": [
    "Lexapro",
    "Reconter"
   ],
   "mechanism": "Inibidor seletivo da recaptação de serotonina (ISRS).",
   "alerts": [
    "Sem restrição formal a vasoconstritor.",
    "Risco de sangramento com AAS."
   ],
   "ref": null
  },
  {
   "id": "fenelzina",
   "category": "Psiquiátrico",
   "label": "Sulfato de Fenelzina",
   "brands": [
    "Nardil"
   ],
   "mechanism": "Inibidor não seletivo da monoamino oxidase (IMAO).",
   "alerts": [
    "CONTRAINDICADO com epinefrina.",
    "Usar anestésico sem vasoconstritor adrenérgico."
   ],
   "ref": null
  },
  {
   "id": "fluoxetina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Fluoxetina",
   "brands": [
    "Prozac",
    "Daforin",
    "Fluxene"
   ],
   "mechanism": "Inibidor seletivo da recaptação de serotonina (ISRS).",
   "alerts": [
    "Sem restrição formal a vasoconstritor.",
    "Potencializa anticoagulação (AAS, varfarina) — atenção ao sangramento.",
    "Evitar tramadol (risco de síndrome serotonérgica).",
    "Bruxismo pode ser efeito adverso.",
    "Inibe CYP2D6/3A4.",
    "Risco de sangramento aumentado com AINEs."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "haloperidol",
   "category": "Psiquiátrico",
   "label": "Haloperidol",
   "brands": [
    "Haldol"
   ],
   "mechanism": "Antipsicótico típico. Antagonista D₂.",
   "alerts": [
    "Limitar epinefrina (potencial hipotensão paradoxal).",
    "Prolonga QT — atenção a outras drogas pró-arrítmicas."
   ],
   "ref": null
  },
  {
   "id": "imipramina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Imipramina",
   "brands": [
    "Tofranil"
   ],
   "mechanism": "Antidepressivo tricíclico.",
   "alerts": [
    "Limitar epinefrina a 40 µg."
   ],
   "ref": null
  },
  {
   "id": "litio",
   "category": "Psiquiátrico",
   "label": "Carbonato de Lítio",
   "brands": [
    "Carbolitium"
   ],
   "mechanism": "Estabilizador de humor. Mecanismo complexo (inibe inositol monofosfatase).",
   "alerts": [
    "AINEs ELEVAM níveis séricos de lítio — risco de toxicidade. Preferir paracetamol/dipirona.",
    "Metronidazol também eleva lítio.",
    "Xerostomia comum."
   ],
   "ref": null
  },
  {
   "id": "mirtazapina",
   "category": "Psiquiátrico",
   "label": "Mirtazapina",
   "brands": [
    "Remeron",
    "Razapina"
   ],
   "mechanism": "Antidepressivo tetracíclico (NaSSA). Antagonista α₂ e 5-HT₂/5-HT₃.",
   "alerts": [
    "Sedação significativa — aditiva com benzodiazepínicos.",
    "Xerostomia frequente."
   ],
   "ref": null
  },
  {
   "id": "nortriptilina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Nortriptilina",
   "brands": [
    "Pamelor"
   ],
   "mechanism": "Antidepressivo tricíclico.",
   "alerts": [
    "Limitar epinefrina a 40 µg.",
    "Xerostomia possível."
   ],
   "ref": null
  },
  {
   "id": "olanzapina",
   "category": "Psiquiátrico",
   "label": "Olanzapina",
   "brands": [
    "Zyprexa",
    "Zalasta"
   ],
   "mechanism": "Antipsicótico atípico.",
   "alerts": [
    "Xerostomia frequente.",
    "Hipotensão ortostática possível."
   ],
   "ref": null
  },
  {
   "id": "paroxetina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Paroxetina",
   "brands": [
    "Aropax",
    "Pondera"
   ],
   "mechanism": "Inibidor seletivo da recaptação de serotonina (ISRS).",
   "alerts": [
    "Sem restrição formal a vasoconstritor.",
    "Sangramento com AAS — atenção."
   ],
   "ref": null
  },
  {
   "id": "quetiapina",
   "category": "Psiquiátrico",
   "label": "Fumarato de Quetiapina",
   "brands": [
    "Seroquel",
    "Quetros"
   ],
   "mechanism": "Antipsicótico atípico.",
   "alerts": [
    "Sedação pode somar-se a benzodiazepínicos.",
    "Hipotensão ortostática."
   ],
   "ref": null
  },
  {
   "id": "risperidona",
   "category": "Psiquiátrico",
   "label": "Risperidona",
   "brands": [
    "Risperdal",
    "Zargus"
   ],
   "mechanism": "Antipsicótico atípico. Antagonista D₂ e 5-HT₂.",
   "alerts": [
    "Limitar epinefrina por precaução.",
    "Hipotensão ortostática possível."
   ],
   "ref": null
  },
  {
   "id": "sertralina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Sertralina",
   "brands": [
    "Zoloft",
    "Tolrest"
   ],
   "mechanism": "Inibidor seletivo da recaptação de serotonina (ISRS).",
   "alerts": [
    "Sem restrição formal a vasoconstritor.",
    "Potencializa sangramento com AAS/varfarina.",
    "Evitar tramadol.",
    "Menor interação via CYP que a fluoxetina.",
    "Risco de sangramento aumentado com AINEs."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "tranilcipromina",
   "category": "Psiquiátrico",
   "label": "Sulfato de Tranilcipromina",
   "brands": [
    "Parnate"
   ],
   "mechanism": "Inibidor não seletivo da monoamino oxidase (IMAO).",
   "alerts": [
    "CONTRAINDICADO com epinefrina — risco de crise hipertensiva grave.",
    "Usar mepivacaína 3% s/ vaso ou prilocaína c/ felipressina (se não gestante).",
    "Contraindicado com meperidina (interação fatal)."
   ],
   "ref": null
  },
  {
   "id": "valproato",
   "category": "Psiquiátrico",
   "label": "Ácido Valproico / Valproato de Sódio",
   "brands": [
    "Depakene",
    "Depakote",
    "Valpakine"
   ],
   "mechanism": "Anticonvulsivante / estabilizador de humor. Aumenta GABA.",
   "alerts": [
    "AAS aumenta níveis séricos — risco de toxicidade.",
    "Pode causar trombocitopenia — avaliar antes de cirurgias.",
    "Inibição plaquetária dose-dependente — solicitar coagulograma antes de cirurgias."
   ],
   "ref": "Perucca P et al. Lancet Neurol 2023; IF 48.0."
  },
  {
   "id": "venlafaxina",
   "category": "Psiquiátrico",
   "label": "Cloridrato de Venlafaxina",
   "brands": [
    "Efexor",
    "Venlift",
    "Efexor XR"
   ],
   "mechanism": "Inibidor da recaptação de serotonina e noradrenalina (IRSN).",
   "alerts": [
    "Pode potencializar epinefrina em altas doses — limitar a 40 µg em uso ≥ 150 mg/dia.",
    "Evitar tramadol (síndrome serotonérgica).",
    "Elevação discreta da PA em doses altas."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "budesonida_inalatoria",
   "category": "Respiratório",
   "label": "Budesonida inalatória",
   "brands": [
    "Pulmicort",
    "Busonid"
   ],
   "mechanism": "Corticoide inalatório.",
   "alerts": [
    "Risco de candidíase oral — orientar bochecho após uso.",
    "Em doses altas crônicas: avaliar supressão adrenal."
   ],
   "ref": null
  },
  {
   "id": "fluticasona_inalatoria",
   "category": "Respiratório",
   "label": "Propionato de Fluticasona inalatório",
   "brands": [
    "Flixotide",
    "Seretide"
   ],
   "mechanism": "Corticoide inalatório de alta potência.",
   "alerts": [
    "Risco de candidíase oral — orientar bochecho após uso.",
    "Atenção em uso com claritromicina/fluconazol (CYP3A4 — aumenta exposição sistêmica)."
   ],
   "ref": null
  },
  {
   "id": "montelucaste",
   "category": "Respiratório",
   "label": "Montelucaste Sódico",
   "brands": [
    "Singulair",
    "Piemonte"
   ],
   "mechanism": "Antagonista do receptor de leucotrienos (LTRA).",
   "alerts": [
    "Sem interação significativa com anestésicos."
   ],
   "ref": null
  },
  {
   "id": "salbutamol",
   "category": "Respiratório",
   "label": "Sulfato de Salbutamol",
   "brands": [
    "Aerolin",
    "Aerogold"
   ],
   "mechanism": "Agonista β₂-adrenérgico seletivo.",
   "alerts": [
    "Uso prévio à consulta pode causar tremor/taquicardia.",
    "Sem restrição importante para anestésicos."
   ],
   "ref": null
  },
  {
   "id": "ibuprofeno",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Ibuprofeno",
   "brands": [
    "Advil",
    "Alivium",
    "Motrin"
   ],
   "mechanism": "AINE não seletivo (inibe COX-1 e COX-2).",
   "alerts": [
    "Reduz o efeito anti-hipertensivo de IECA/BRA e de diuréticos e aumenta o risco de insuficiência renal aguda.",
    "Aumenta a toxicidade do metotrexato e eleva os níveis séricos de lítio — evitar a associação.",
    "Risco de sangramento aumentado com ISRSs, anticoagulantes e antiagregantes.",
    "Evitar em DRC, hemofilia, insuficiência cardíaca e asma sensível à aspirina.",
    "AINE de escolha em odontopediatria; contraindicado < 6 meses."
   ],
   "ref": "Moore PA. JADA 2021; IF 9.2."
  },
  {
   "id": "diclofenaco",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Diclofenaco",
   "brands": [
    "Cataflam",
    "Voltaren"
   ],
   "mechanism": "AINE não seletivo.",
   "alerts": [
    "Reduz o efeito anti-hipertensivo de IECA/BRA e de diuréticos e aumenta o risco de insuficiência renal aguda.",
    "Aumenta a toxicidade do metotrexato e eleva os níveis séricos de lítio — evitar a associação.",
    "Risco de sangramento aumentado com ISRSs, anticoagulantes e antiagregantes.",
    "Evitar em DRC, hemofilia, insuficiência cardíaca e asma sensível à aspirina.",
    "Início rápido de ação; maior risco gastrointestinal que o ibuprofeno."
   ],
   "ref": "Moore PA. JADA 2021; IF 9.2."
  },
  {
   "id": "nimesulida",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Nimesulida",
   "brands": [
    "Nisulid",
    "Scaflam"
   ],
   "mechanism": "AINE com preferência pela COX-2.",
   "alerts": [
    "Reduz o efeito anti-hipertensivo de IECA/BRA e de diuréticos e aumenta o risco de insuficiência renal aguda.",
    "Aumenta a toxicidade do metotrexato e eleva os níveis séricos de lítio — evitar a associação.",
    "Risco de sangramento aumentado com ISRSs, anticoagulantes e antiagregantes.",
    "Evitar em DRC, hemofilia, insuficiência cardíaca e asma sensível à aspirina.",
    "Hepatotoxicidade — evitar em hepatopatas.",
    "Proibida em crianças < 12 anos."
   ],
   "ref": "Moore PA. JADA 2021; IF 9.2."
  },
  {
   "id": "paracetamol",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Paracetamol",
   "brands": [
    "Tylenol",
    "Cefabrina"
   ],
   "mechanism": "Analgésico e antitérmico de ação central, sem efeito anti-inflamatório relevante.",
   "alerts": [
    "Escolha em gestantes, doentes renais crônicos e asmáticos.",
    "Hepatotoxicidade em superdose; o risco aumenta com álcool crônico e rifampicina (indutores de CYP2E1).",
    "Contraindicar em cirrose Child-Pugh C; evitar altas doses em hepatopatas."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "dipirona",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Dipirona sódica",
   "brands": [
    "Novalgina",
    "Anador"
   ],
   "mechanism": "Analgésico e antitérmico não opioide.",
   "alerts": [
    "Reduz os níveis plasmáticos de ciclosporina → risco de rejeição em transplantados.",
    "Contraindicada < 3 meses. Agranulocitose é rara."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "tramadol",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Tramadol",
   "brands": [
    "Tramal",
    "Tramadon"
   ],
   "mechanism": "Opioide fraco (agonista μ + inibição da recaptação de serotonina e noradrenalina).",
   "alerts": [
    "Síndrome serotoninérgica com ISRSs/IRSNs — evitar a associação.",
    "Reduz o limiar convulsivo — cautela em epilepsia.",
    "Indicado para dor moderada a intensa; contraindicado < 12 anos."
   ],
   "ref": "Moore PA. JADA 2021; IF 9.2."
  },
  {
   "id": "codeina_paracetamol",
   "category": "Analgésico / Anti-inflamatório",
   "label": "Codeína + Paracetamol",
   "brands": [
    "Tylex",
    "Codex"
   ],
   "mechanism": "Associação de opioide fraco (codeína) e paracetamol.",
   "alerts": [
    "CYP2D6: risco de sobredose em metabolizadores ultrarrápidos.",
    "Evitar na lactação e em crianças < 12 anos.",
    "Contém paracetamol — somar ao total diário."
   ],
   "ref": "Moore PA. JADA 2021; IF 9.2."
  },
  {
   "id": "amoxicilina",
   "category": "Antibiótico",
   "label": "Amoxicilina",
   "brands": [
    "Amoxil",
    "Hiconcil"
   ],
   "mechanism": "Penicilina de amplo espectro (beta-lactâmico).",
   "alerts": [
    "1ª escolha em infecções odontogênicas.",
    "Profilaxia de EI: 2 g (50 mg/kg em crianças) 30–60 min antes do procedimento.",
    "Se já em uso e for necessária profilaxia de EI: trocar para azitromicina/claritromicina (AHA 2021).",
    "Contraindicada em alergia à penicilina."
   ],
   "ref": "Lockhart PB et al. Circulation 2021; IF 37.8."
  },
  {
   "id": "amoxicilina_clavulanato",
   "category": "Antibiótico",
   "label": "Amoxicilina + Clavulanato",
   "brands": [
    "Clavulin"
   ],
   "mechanism": "Penicilina associada a inibidor de beta-lactamase.",
   "alerts": [
    "Para infecções resistentes à amoxicilina isolada.",
    "Calcular a dose pela amoxicilina.",
    "Contraindicada em alergia à penicilina."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "clindamicina",
   "category": "Antibiótico",
   "label": "Clindamicina",
   "brands": [
    "Dalacin C"
   ],
   "mechanism": "Lincosamida — inibe a síntese proteica bacteriana.",
   "alerts": [
    "Opção em alérgicos à penicilina nas infecções odontogênicas.",
    "Risco de colite por C. difficile.",
    "A AHA 2021 não recomenda para profilaxia de endocardite."
   ],
   "ref": "Lockhart PB et al. Circulation 2021; IF 37.8."
  },
  {
   "id": "metronidazol",
   "category": "Antibiótico",
   "label": "Metronidazol",
   "brands": [
    "Flagyl"
   ],
   "mechanism": "Nitroimidazol — ativo contra anaeróbios.",
   "alerts": [
    "Evitar álcool por 48 h após o uso (reação tipo dissulfiram).",
    "Aumenta o INR da varfarina (inibe CYP2C9) — monitorar.",
    "Eleva os níveis de lítio.",
    "Contraindicado em hepatopatia grave; evitar no 1º trimestre da gestação."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "azitromicina",
   "category": "Antibiótico",
   "label": "Azitromicina",
   "brands": [
    "Zitromax"
   ],
   "mechanism": "Macrolídeo.",
   "alerts": [
    "Boa penetração tecidual.",
    "Inibe CYP3A4 — cautela com midazolam.",
    "Pode prolongar o QT — atenção com hidroxicloroquina e outras drogas pró-arrítmicas."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "doxiciclina",
   "category": "Antibiótico",
   "label": "Doxiciclina",
   "brands": [
    "Vibramicina"
   ],
   "mechanism": "Tetraciclina.",
   "alerts": [
    "Fotossensibilidade.",
    "Contraindicada < 8 anos e na gestação."
   ],
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "id": "betametasona",
   "category": "Endócrino",
   "label": "Betametasona",
   "brands": [
    "Celestone"
   ],
   "mechanism": "Glicocorticoide de alta potência, sem ação mineralocorticoide significativa.",
   "alerts": [
    "Uso crônico: risco de crise adrenal e imunossupressão.",
    "Usada em reações alérgicas e como anti-edematoso pós-operatório."
   ],
   "ref": "Miller CS. Dent Clin North Am 2010."
  },
  {
   "id": "calcio_vitd",
   "category": "Osteoporose / Metabolismo ósseo",
   "label": "Cálcio + Vitamina D",
   "brands": [
    "Caltrate D"
   ],
   "mechanism": "Suplemento de cálcio e vitamina D.",
   "alerts": [
    "Menor risco de MRONJ. Essencial para o metabolismo ósseo."
   ],
   "ref": "Cosman F et al. NOF Guidelines 2022."
  },
  {
   "id": "midazolam",
   "category": "Psiquiátrico",
   "label": "Midazolam (oral / intranasal)",
   "brands": [
    "Dormonid"
   ],
   "mechanism": "Benzodiazepínico de ação curta (modula o receptor GABA-A).",
   "alerts": [
    "Sedação consciente — monitorar SpO₂. Antídoto: flumazenil.",
    "Inibidores de CYP3A4 (fluconazol, itraconazol, eritromicina, ritonavir) → acúmulo, sedação profunda e apneia: reduzir a dose em 50–70% ou contraindicar.",
    "Jejum: sólidos 6 h e líquidos claros 2 h."
   ],
   "ref": "Mason KP. Pediatric Sedation. Springer 2021."
  },
  {
   "id": "lorazepam",
   "category": "Psiquiátrico",
   "label": "Lorazepam",
   "brands": [
    "Lorax"
   ],
   "mechanism": "Benzodiazepínico de meia-vida intermediária.",
   "alerts": [
    "Preferível em idosos e hepatopatas.",
    "Sedação aditiva com outros depressores do SNC."
   ],
   "ref": "Mason KP. Pediatric Sedation. Springer 2021."
  },
  {
   "id": "hidrato_cloral",
   "category": "Psiquiátrico",
   "label": "Hidrato de Cloral",
   "brands": [
    "Manipulado"
   ],
   "mechanism": "Hipnótico sedativo (uso pediátrico).",
   "alerts": [
    "Evitar acima de 3 anos. Alta variabilidade de resposta.",
    "Monitoração contínua e acesso venoso obrigatórios."
   ],
   "ref": "AAP. Pediatric Sedation Guidelines. Pediatrics 2019; IF 8.7."
  },
  {
   "id": "nistatina",
   "category": "Antifúngico",
   "label": "Nistatina",
   "brands": [
    "Micostatin"
   ],
   "mechanism": "Antifúngico poliênico tópico, não absorvido.",
   "alerts": [
    "1ª escolha em candidose oral, inclusive pediátrica.",
    "Manter em contato com a mucosa por ~2 min antes de engolir."
   ],
   "ref": "Pappas PG et al. Clin Infect Dis 2016; IF 20.8."
  },
  {
   "id": "fluconazol",
   "category": "Antifúngico",
   "label": "Fluconazol",
   "brands": [
    "Zoltec",
    "Triazol"
   ],
   "mechanism": "Antifúngico azólico; inibe CYP3A4 e CYP2C9.",
   "alerts": [
    "Potencializa a varfarina (eleva o INR) e o midazolam.",
    "Aumenta os níveis de ciclosporina e tacrolimo.",
    "Potencializa o efeito hipoglicemiante das sulfonilureias."
   ],
   "ref": "Pappas PG et al. Clin Infect Dis 2016; IF 20.8."
  },
  {
   "id": "itraconazol",
   "category": "Antifúngico",
   "label": "Itraconazol",
   "brands": [
    "Sporanox"
   ],
   "mechanism": "Antifúngico azólico; inibe CYP3A4.",
   "alerts": [
    "Reservado para candidose refratária ao fluconazol.",
    "Múltiplas interações via CYP3A4 (inclui midazolam).",
    "Omeprazol reduz a absorção do itraconazol."
   ],
   "ref": "Pappas PG et al. Clin Infect Dis 2016; IF 20.8."
  },
  {
   "id": "clotrimazol",
   "category": "Antifúngico",
   "label": "Clotrimazol tópico",
   "brands": [
    "Canesten"
   ],
   "mechanism": "Antifúngico imidazólico de uso tópico.",
   "alerts": [
    "Usado na queilite angular.",
    "Seguro em todas as idades."
   ],
   "ref": "Pappas PG et al. Clin Infect Dis 2016; IF 20.8."
  },
  {
   "id": "aciclovir",
   "category": "Antiviral",
   "label": "Aciclovir",
   "brands": [
    "Zovirax"
   ],
   "mechanism": "Análogo nucleosídico — inibe a DNA polimerase viral.",
   "alerts": [
    "Herpes labial e oral — maior eficácia na fase prodrômica."
   ],
   "ref": "Arduino PG et al. J Oral Pathol Med 2022; IF 3.8."
  },
  {
   "id": "valaciclovir",
   "category": "Antiviral",
   "label": "Valaciclovir",
   "brands": [
    "Valtrex"
   ],
   "mechanism": "Pró-fármaco do aciclovir.",
   "alerts": [
    "Melhor biodisponibilidade oral que o aciclovir."
   ],
   "ref": "Arduino PG et al. J Oral Pathol Med 2022; IF 3.8."
  },
  {
   "id": "penciclovir",
   "category": "Antiviral",
   "label": "Penciclovir creme",
   "brands": [
    "Vectavir"
   ],
   "mechanism": "Análogo nucleosídico de uso tópico.",
   "alerts": [
    "Herpes labial recorrente — iniciar no pródromo.",
    "Não recomendado < 12 anos."
   ],
   "ref": "Arduino PG et al. J Oral Pathol Med 2022; IF 3.8."
  },
  {
   "id": "cisplatina",
   "category": "Imunossupressor / Oncológico",
   "label": "Cisplatina",
   "brands": [
    "Platinol"
   ],
   "mechanism": "Antineoplásico à base de platina.",
   "alerts": [
    "Xerostomia severa e mucosite.",
    "Adiar procedimentos eletivos durante os ciclos ativos."
   ],
   "ref": "Epstein JB et al. Support Care Cancer 2012; IF 4.5."
  },
  {
   "id": "ciclofosfamida",
   "category": "Imunossupressor / Oncológico",
   "label": "Ciclofosfamida",
   "brands": [
    "Genuxal"
   ],
   "mechanism": "Agente alquilante (imunossupressor e antineoplásico).",
   "alerts": [
    "Imunossupressão grave — infecções oportunistas orais frequentes."
   ],
   "ref": "Lalla RV et al. Cancer 2014; IF 6.2."
  }
 ],
 "RX": [
  {
   "id": "analgesicos",
   "title": "Analgésicos Não Opioides",
   "drugs": [
    {
     "name": "Ácido Acetilsalicílico",
     "brands": "Aspirina, AAS",
     "adultDose": "500–1000 mg VO a cada 4–6h",
     "pediatric": "Contraindicado em menores de 12 anos (Síndrome de Reye)",
     "duration": "2–3 dias",
     "notes": "Evitar em gestantes (3º trim), hemofílicos, ulcerosos.",
     "presentation": "Comprimidos 500 mg",
     "posology": {
      "forms": [
       {
        "id": "cp500",
        "label": "Comprimido 500 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "4h",
         "6h"
        ],
        "durations": [
         2,
         3
        ],
        "painSuffix": true
       }
      ]
     }
    },
    {
     "name": "Dipirona Sódica",
     "brands": "Novalgina, Anador",
     "adultDose": "500–1000 mg VO a cada 6h",
     "pediatric": "15–25 mg/kg/dose a cada 6h",
     "duration": "2–3 dias",
     "notes": "Analgésico de 1ª escolha (Andrade). Risco raro de agranulocitose.",
     "presentation": "Comprimidos 500 e 1000 mg / Gotas 500 mg/mL",
     "posology": {
      "forms": [
       {
        "id": "cp500",
        "label": "Comprimido 500 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3,
         5
        ],
        "painSuffix": true
       },
       {
        "id": "cp1000",
        "label": "Comprimido 1 g",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 1000,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3,
         5
        ],
        "painSuffix": true
       },
       {
        "id": "gotas",
        "label": "Gotas 500 mg/mL (frasco 10 mL)",
        "unit": "frasco",
        "unitPlural": "frascos",
        "mg": null,
        "route": "oral",
        "doseOptions": [
         "20 (vinte) gotas",
         "30 (trinta) gotas",
         "40 (quarenta) gotas"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3,
         5
        ],
        "painSuffix": true,
        "isContainer": true
       }
      ]
     }
    },
    {
     "name": "Paracetamol",
     "brands": "Tylenol, Cefabrina",
     "adultDose": "500–1000 mg VO a cada 6h",
     "pediatric": "10–15 mg/kg/dose a cada 6h",
     "duration": "2–3 dias",
     "notes": "Escolha em gestantes (categoria B). Hepatotoxicidade em superdose.",
     "presentation": "Comprimidos 500 e 750 mg / Gotas 200 mg/mL",
     "posology": {
      "forms": [
       {
        "id": "cp500",
        "label": "Comprimido 500 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3,
         5
        ],
        "painSuffix": true
       },
       {
        "id": "cp750",
        "label": "Comprimido 750 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 750,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3,
         5
        ],
        "painSuffix": true
       },
       {
        "id": "gotas",
        "label": "Gotas 200 mg/mL (frasco 15 mL)",
        "unit": "frasco",
        "unitPlural": "frascos",
        "mg": null,
        "route": "oral",
        "doseOptions": [
         "15 (quinze) gotas",
         "25 (vinte e cinco) gotas",
         "35 (trinta e cinco) gotas"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3,
         5
        ],
        "painSuffix": true,
        "isContainer": true
       }
      ]
     }
    }
   ]
  },
  {
   "id": "opioides",
   "title": "Analgésicos Opioides",
   "drugs": [
    {
     "name": "Codeína + Paracetamol",
     "brands": "Tylex, Codex",
     "adultDose": "30 mg codeína + 500 mg paracetamol VO a cada 6h",
     "pediatric": "Contraindicado em < 12 anos",
     "duration": "2–3 dias",
     "notes": "Dor moderada a intensa. Constipação, sedação.",
     "presentation": "Comprimidos 30/500 mg",
     "posology": {
      "forms": [
       {
        "id": "cp30500",
        "label": "Comprimido 30/500 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": null,
        "mgLabel": "30/500 mg",
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3
        ],
        "painSuffix": true
       }
      ]
     }
    },
    {
     "name": "Cloridrato de Tramadol",
     "brands": "Tramal, Tramadon",
     "adultDose": "50–100 mg VO a cada 6–8h",
     "pediatric": "1–2 mg/kg/dose em > 12 anos",
     "duration": "2–3 dias",
     "notes": "Evitar com ISRS/IRSN (síndrome serotonérgica). Reduz limiar convulsivo.",
     "presentation": "Cápsulas 50 mg / Gotas 100 mg/mL",
     "posology": {
      "forms": [
       {
        "id": "cap50",
        "label": "Cápsula 50 mg",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 50,
        "route": "oral",
        "doseOptions": [
         "1 (uma)",
         "2 (duas)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3
        ],
        "painSuffix": true
       },
       {
        "id": "gotas",
        "label": "Gotas 100 mg/mL (frasco 10 mL)",
        "unit": "frasco",
        "unitPlural": "frascos",
        "mg": null,
        "route": "oral",
        "doseOptions": [
         "20 (vinte) gotas",
         "30 (trinta) gotas"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3
        ],
        "painSuffix": true,
        "isContainer": true
       }
      ]
     }
    },
    {
     "name": "Cloridrato de Tramadol + Paracetamol",
     "brands": "Ultracet",
     "adultDose": "37,5/325 mg — 1 a 2 comprimidos a cada 6h",
     "pediatric": "Não recomendado",
     "duration": "2–3 dias",
     "notes": "Para dor moderada.",
     "presentation": "Comprimidos 37,5/325 mg",
     "posology": {
      "forms": [
       {
        "id": "cp",
        "label": "Comprimido 37,5/325 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": null,
        "mgLabel": "37,5/325 mg",
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         2,
         3
        ],
        "painSuffix": true
       }
      ]
     }
    }
   ]
  },
  {
   "id": "corticoides",
   "title": "Anti-inflamatórios Esteroides",
   "drugs": [
    {
     "name": "Acetonida de Triancinolona",
     "brands": "Omcilon-A Orabase",
     "adultDose": "Aplicar fina camada sobre a lesão 2–3x/dia",
     "pediatric": "Conforme indicação",
     "duration": "7–14 dias",
     "notes": "Aftas recorrentes, líquen plano oral. Não usar em infecção ativa.",
     "presentation": "Pomada / bisnaga 10 g",
     "posology": {
      "forms": [
       {
        "id": "bis10",
        "label": "Bisnaga 10 g (pomada)",
        "unit": "bisnaga",
        "unitPlural": "bisnagas",
        "mg": null,
        "route": "tópica",
        "doseOptions": [
         "fina camada sobre a lesão"
        ],
        "intervals": [
         "8h",
         "12h"
        ],
        "durations": [
         7,
         10,
         14
        ],
        "painSuffix": false,
        "isContainer": true,
        "verb": "Aplicar"
       }
      ]
     },
     "use": "externo"
    },
    {
     "name": "Betametasona",
     "brands": "Celestone",
     "adultDose": "4 mg IM dose única 30–60 min antes",
     "pediatric": "Conforme peso",
     "duration": "Dose única",
     "notes": "Alternativa à dexametasona pré-operatória.",
     "presentation": "Solução injetável 4 mg/mL",
     "posology": {
      "forms": [
       {
        "id": "amp4",
        "label": "Ampola 4 mg/mL",
        "unit": "ampola",
        "unitPlural": "ampolas",
        "mg": 4,
        "route": "intramuscular",
        "doseOptions": [
         "1 (uma)"
        ],
        "intervals": [
         "dose única 30–60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       }
      ]
     }
    },
    {
     "name": "Dexametasona",
     "brands": "Decadron",
     "adultDose": "4–8 mg VO ou IM 1h antes do procedimento",
     "pediatric": "0,1–0,2 mg/kg",
     "duration": "Dose única",
     "notes": "Reduz edema em cirurgias de 3º molar, implantes, enxertos.",
     "presentation": "Comprimidos 4 mg / Injetável 4 mg/mL",
     "posology": {
      "forms": [
       {
        "id": "cp4",
        "label": "Comprimido 4 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 4,
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "dose única 1h antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       },
       {
        "id": "amp4",
        "label": "Ampola 4 mg/mL",
        "unit": "ampola",
        "unitPlural": "ampolas",
        "mg": 4,
        "route": "intramuscular",
        "doseOptions": [
         "1 (uma)",
         "2 (duas)"
        ],
        "intervals": [
         "dose única 1h antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       }
      ]
     }
    }
   ]
  },
  {
   "id": "aines",
   "title": "Anti-inflamatórios Não Esteroides",
   "drugs": [
    {
     "name": "Celecoxibe",
     "brands": "Celebra",
     "adultDose": "200 mg VO 1x/dia ou 100 mg 2x/dia",
     "pediatric": "Não estabelecido em menores de 18 anos",
     "duration": "3–5 dias",
     "notes": "Inibidor seletivo COX-2. Cuidado cardiovascular. Alergia a sulfas: precaução.",
     "presentation": "Cápsulas 100 e 200 mg",
     "posology": {
      "forms": [
       {
        "id": "cap100",
        "label": "Cápsula 100 mg",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 100,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "12h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       },
       {
        "id": "cap200",
        "label": "Cápsula 200 mg",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 200,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Cetorolaco de Trometamina",
     "brands": "Toragesic, Acular SL",
     "adultDose": "10 mg VO ou sublingual a cada 6–8h por até 5 dias",
     "pediatric": "Não recomendado em menores de 16 anos",
     "duration": "Máximo 5 dias",
     "notes": "AINE potente. Risco GI e renal. Contraindicado em sangramento ativo, úlcera, IR.",
     "presentation": "Comprimidos sublinguais 10 mg",
     "posology": {
      "forms": [
       {
        "id": "sl10",
        "label": "Comprimido sublingual 10 mg",
        "unit": "comprimido sublingual",
        "unitPlural": "comprimidos sublinguais",
        "mg": 10,
        "route": "sublingual",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": true
       }
      ]
     }
    },
    {
     "name": "Diclofenaco Potássico",
     "brands": "Cataflam, Voltaren K",
     "adultDose": "50 mg VO a cada 8h",
     "pediatric": "1–2 mg/kg/dia em maiores de 14 anos",
     "duration": "3–5 dias",
     "notes": "Início rápido. Cuidado cardiovascular.",
     "presentation": "Comprimidos 50 mg",
     "posology": {
      "forms": [
       {
        "id": "cp50",
        "label": "Comprimido 50 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 50,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "8h",
         "12h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Diclofenaco Sódico",
     "brands": "Voltaren, Cataflan",
     "adultDose": "50 mg VO a cada 8h",
     "pediatric": "Dose adulto ≥ 14 anos",
     "duration": "3–5 dias",
     "notes": "Início mais lento que o potássico.",
     "presentation": "Comprimidos 50 mg",
     "posology": {
      "forms": [
       {
        "id": "cp50",
        "label": "Comprimido 50 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 50,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "8h",
         "12h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Etoricoxibe",
     "brands": "Arcoxia",
     "adultDose": "60–90 mg VO 1x/dia",
     "pediatric": "Não em < 16 anos",
     "duration": "3–5 dias",
     "notes": "COX-2 seletivo. Maior risco CV. Contraindicado em HAS não controlada.",
     "presentation": "Comprimidos 60, 90 e 120 mg",
     "posology": {
      "forms": [
       {
        "id": "cp60",
        "label": "Comprimido 60 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 60,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       },
       {
        "id": "cp90",
        "label": "Comprimido 90 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 90,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       },
       {
        "id": "cp120",
        "label": "Comprimido 120 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 120,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Ibuprofeno",
     "brands": "Alivium, Advil, Motrin",
     "adultDose": "400–600 mg VO a cada 6–8h",
     "pediatric": "5–10 mg/kg/dose a cada 6–8h",
     "duration": "3–5 dias",
     "notes": "Tomar após refeição.",
     "presentation": "Comprimidos 200, 400 e 600 mg",
     "posology": {
      "forms": [
       {
        "id": "cp200",
        "label": "Comprimido 200 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 200,
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       },
       {
        "id": "cp400",
        "label": "Comprimido 400 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 400,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       },
       {
        "id": "cp600",
        "label": "Comprimido 600 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 600,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "8h",
         "12h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Meloxicam",
     "brands": "Movatec, Inicox",
     "adultDose": "7,5–15 mg VO 1x/dia",
     "pediatric": "Não em < 15 anos",
     "duration": "3–5 dias",
     "notes": "COX-2 preferencial. 1x/dia.",
     "presentation": "Comprimidos 7,5 e 15 mg",
     "posology": {
      "forms": [
       {
        "id": "cp7",
        "label": "Comprimido 7,5 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 7.5,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       },
       {
        "id": "cp15",
        "label": "Comprimido 15 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 15,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Nimesulida",
     "brands": "Nisulid, Scaflam",
     "adultDose": "100 mg VO a cada 12h",
     "pediatric": "Não em < 12 anos",
     "duration": "Máximo 15 dias",
     "notes": "COX-2 parcial. Hepatotoxicidade. Evitar em hepatopatas.",
     "presentation": "Comprimidos 100 mg",
     "posology": {
      "forms": [
       {
        "id": "cp100",
        "label": "Comprimido 100 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 100,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "12h"
        ],
        "durations": [
         3,
         5,
         7
        ],
        "painSuffix": false
       }
      ]
     }
    }
   ]
  },
  {
   "id": "antibioticos",
   "title": "Antibióticos",
   "drugs": [
    {
     "name": "Amoxicilina",
     "brands": "Amoxil, Hiconcil",
     "adultDose": "Infecção: 500 mg 8/8h por 7 dias. Profilaxia EI: 2 g dose única 60 min antes.",
     "pediatric": "25–50 mg/kg/dia em 3 tomadas. Profilaxia: 50 mg/kg.",
     "duration": "7 dias",
     "notes": "1ª escolha em odontologia (Andrade). Esquema padrão AHA 2021 para profilaxia de endocardite.",
     "presentation": "Cápsulas 500 mg / Suspensão 250 mg/5 mL",
     "posology": {
      "forms": [
       {
        "id": "cap500_inf",
        "label": "Cápsula 500 mg — INFECÇÃO",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "1 (uma)"
        ],
        "intervals": [
         "8h"
        ],
        "durations": [
         7,
         10
        ],
        "painSuffix": false
       },
       {
        "id": "cap500_prof",
        "label": "Cápsula 500 mg — PROFILAXIA EI (4 caps = 2 g)",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "4 (quatro)"
        ],
        "intervals": [
         "dose única 60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       }
      ]
     }
    },
    {
     "name": "Amoxicilina + Clavulanato de Potássio",
     "brands": "Clavulin",
     "adultDose": "500/125 mg 8/8h ou 875/125 mg 12/12h por 7 dias",
     "pediatric": "25–45 mg/kg/dia",
     "duration": "7 dias",
     "notes": "Infecções refratárias à amoxicilina isolada.",
     "presentation": "Comprimidos 500/125 e 875/125 mg",
     "posology": {
      "forms": [
       {
        "id": "cp500",
        "label": "Comprimido 500/125 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": null,
        "mgLabel": "500/125 mg",
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "8h"
        ],
        "durations": [
         7,
         10
        ],
        "painSuffix": false
       },
       {
        "id": "cp875",
        "label": "Comprimido 875/125 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": null,
        "mgLabel": "875/125 mg",
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "12h"
        ],
        "durations": [
         7,
         10
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Azitromicina",
     "brands": "Zitromax",
     "adultDose": "Infecção: 500 mg 1x/dia por 3–5 dias. Profilaxia EI: 500 mg dose única 60 min antes.",
     "pediatric": "10 mg/kg/dia por 3 dias",
     "duration": "3–5 dias",
     "notes": "Alternativa em alérgicos à penicilina (AHA 2021).",
     "presentation": "Comprimidos 500 mg",
     "posology": {
      "forms": [
       {
        "id": "cp500_inf",
        "label": "Comprimido 500 mg — INFECÇÃO",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         3,
         5
        ],
        "painSuffix": false
       },
       {
        "id": "cp500_prof",
        "label": "Comprimido 500 mg — PROFILAXIA EI",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "dose única 60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       }
      ]
     }
    },
    {
     "name": "Cefalexina",
     "brands": "Keflex",
     "adultDose": "Profilaxia EI (alérgicos sem reação grave): 2 g dose única 60 min antes",
     "pediatric": "50 mg/kg",
     "duration": "Dose única",
     "notes": "Alternativa para profilaxia em alérgicos sem reação anafilática prévia.",
     "presentation": "Cápsulas 500 mg",
     "posology": {
      "forms": [
       {
        "id": "cap500_prof",
        "label": "Cápsula 500 mg — PROFILAXIA EI (4 = 2 g)",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "4 (quatro)"
        ],
        "intervals": [
         "dose única 60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       }
      ]
     }
    },
    {
     "name": "Claritromicina",
     "brands": "Klaricid",
     "adultDose": "Infecção: 500 mg 12/12h por 7 dias. Profilaxia EI: 500 mg dose única 60 min antes.",
     "pediatric": "15 mg/kg/dia em 2 tomadas",
     "duration": "7 dias",
     "notes": "Alternativa em alérgicos. Múltiplas interações (CYP3A4).",
     "presentation": "Comprimidos 500 mg",
     "posology": {
      "forms": [
       {
        "id": "cp500_inf",
        "label": "Comprimido 500 mg — INFECÇÃO",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "12h"
        ],
        "durations": [
         7,
         10
        ],
        "painSuffix": false
       },
       {
        "id": "cp500_prof",
        "label": "Comprimido 500 mg — PROFILAXIA EI",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 500,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "dose única 60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       }
      ]
     }
    },
    {
     "name": "Cloridrato de Clindamicina",
     "brands": "Dalacin C",
     "adultDose": "300 mg 6/6h ou 8/8h por 7 dias",
     "pediatric": "10–25 mg/kg/dia",
     "duration": "7 dias",
     "notes": "AHA 2021 não recomenda para profilaxia de EI. Útil em infecções odontogênicas em alérgicos.",
     "presentation": "Cápsulas 300 mg",
     "posology": {
      "forms": [
       {
        "id": "cap300",
        "label": "Cápsula 300 mg",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 300,
        "route": "oral",
        "doseOptions": [
         "1 (uma)"
        ],
        "intervals": [
         "6h",
         "8h"
        ],
        "durations": [
         7,
         10
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Cloridrato de Doxiciclina",
     "brands": "Vibramicina",
     "adultDose": "100 mg 12/12h no 1º dia, depois 100 mg/dia por 7 dias",
     "pediatric": "Contraindicada em < 8 anos",
     "duration": "7 dias",
     "notes": "Útil em periodontite. Fotossensibilidade.",
     "presentation": "Cápsulas 100 mg",
     "posology": {
      "forms": [
       {
        "id": "cap100",
        "label": "Cápsula 100 mg",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 100,
        "route": "oral",
        "doseOptions": [
         "1 (uma)"
        ],
        "intervals": [
         "12h",
         "24h"
        ],
        "durations": [
         7,
         10
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Metronidazol",
     "brands": "Flagyl",
     "adultDose": "400 mg 8/8h por 7 dias",
     "pediatric": "15–30 mg/kg/dia",
     "duration": "7 dias",
     "notes": "Anaeróbios. Reação tipo dissulfiram com álcool. Aumenta INR de varfarina.",
     "presentation": "Comprimidos 250 e 400 mg",
     "posology": {
      "forms": [
       {
        "id": "cp250",
        "label": "Comprimido 250 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 250,
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "8h"
        ],
        "durations": [
         7,
         10
        ],
        "painSuffix": false
       },
       {
        "id": "cp400",
        "label": "Comprimido 400 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 400,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "8h"
        ],
        "durations": [
         7,
         10
        ],
        "painSuffix": false
       }
      ]
     }
    }
   ]
  },
  {
   "id": "antifungicos",
   "title": "Antifúngicos",
   "drugs": [
    {
     "name": "Nistatina",
     "brands": "Micostatin",
     "adultDose": "4–6 mL em bochecho e deglutição, 4×/dia por 14 dias",
     "pediatric": "< 1 ano: 0,5 mL de cada lado da boca 4×/dia; maiores: 1–2 mL 4×/dia",
     "duration": "14 dias",
     "notes": "1ª escolha em candidose oral pediátrica. Manter em contato com a mucosa por ~2 min antes de engolir.",
     "presentation": "Suspensão oral 100.000 UI/mL (frasco 50 mL)",
     "posology": {
      "forms": [
       {
        "mg": null,
        "painSuffix": false,
        "id": "susp_ad",
        "label": "Suspensão 100.000 UI/mL (frasco 50 mL) — ADULTO",
        "unit": "frasco",
        "unitPlural": "frascos",
        "route": "oral",
        "verb": "Bochechar",
        "doseOptions": [
         "4 mL",
         "5 mL",
         "6 mL"
        ],
        "doseMl": {
         "4 mL": 4,
         "5 mL": 5,
         "6 mL": 6
        },
        "contentMl": 50,
        "intervals": [
         "4x"
        ],
        "durations": [
         14,
         7,
         10
        ],
        "isContainer": true,
        "extra": "Manter o líquido em contato com a mucosa por 2 minutos antes de engolir."
       },
       {
        "mg": null,
        "painSuffix": false,
        "id": "susp_ped",
        "label": "Suspensão 100.000 UI/mL (frasco 50 mL) — PEDIÁTRICO",
        "unit": "frasco",
        "unitPlural": "frascos",
        "route": "oral",
        "verb": "Administrar",
        "doseOptions": [
         "0,5 mL de cada lado da boca (1 mL no total)",
         "1 mL",
         "2 mL"
        ],
        "doseMl": {
         "0,5 mL de cada lado da boca (1 mL no total)": 1,
         "1 mL": 1,
         "2 mL": 2
        },
        "contentMl": 50,
        "intervals": [
         "4x"
        ],
        "durations": [
         14,
         7,
         10
        ],
        "isContainer": true,
        "extra": "Manter o líquido em contato com a mucosa por 2 minutos antes de engolir."
       }
      ]
     }
    },
    {
     "name": "Fluconazol",
     "brands": "Zoltec, Triazol",
     "adultDose": "150–200 mg VO 1×/dia por 7–14 dias",
     "pediatric": "3–6 mg/kg/dia (máx 400 mg/dia)",
     "duration": "7–14 dias",
     "notes": "Candidose refratária ou em imunossuprimidos. Inibe CYP3A4 e CYP2C9 — potencializa varfarina e midazolam.",
     "presentation": "Cápsulas 150 mg / Comprimidos 200 mg / Suspensão 50 mg/5 mL",
     "posology": {
      "forms": [
       {
        "mg": 150,
        "painSuffix": false,
        "id": "cap150",
        "label": "Cápsula 150 mg",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "route": "oral",
        "doseOptions": [
         "1 (uma)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         7,
         14
        ]
       },
       {
        "mg": 200,
        "painSuffix": false,
        "id": "cp200",
        "label": "Comprimido 200 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         7,
         14
        ]
       }
      ]
     }
    },
    {
     "name": "Itraconazol",
     "brands": "Sporanox",
     "adultDose": "200 mg VO 1–2×/dia por 7–14 dias",
     "pediatric": "5 mg/kg/dia (máx 200 mg/dia)",
     "duration": "7–14 dias",
     "notes": "Candidose refratária ao fluconazol. Múltiplas interações via CYP3A4.",
     "presentation": "Cápsulas 100 mg / Solução 10 mg/mL",
     "posology": {
      "forms": [
       {
        "mg": 100,
        "painSuffix": false,
        "id": "cap100",
        "label": "Cápsula 100 mg (200 mg = 2 cápsulas)",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "route": "oral",
        "doseOptions": [
         "2 (duas)"
        ],
        "intervals": [
         "24h",
         "12h"
        ],
        "durations": [
         7,
         14
        ]
       }
      ]
     }
    },
    {
     "use": "externo",
     "name": "Clotrimazol tópico",
     "brands": "Canesten",
     "adultDose": "Camada fina sobre a lesão 2–3×/dia por 14 dias",
     "pediatric": "Mesma posologia do adulto",
     "duration": "14 dias",
     "notes": "Queilite angular. Seguro em todas as idades.",
     "presentation": "Creme 1% / Solução 1%",
     "posology": {
      "forms": [
       {
        "mg": null,
        "painSuffix": false,
        "id": "creme",
        "label": "Creme 1% (bisnaga 20 g)",
        "unit": "bisnaga",
        "unitPlural": "bisnagas",
        "route": "tópica",
        "verb": "Aplicar",
        "doseOptions": [
         "fina camada sobre a lesão"
        ],
        "intervals": [
         "2x",
         "3x"
        ],
        "durations": [
         14,
         7,
         10
        ],
        "isContainer": true
       },
       {
        "mg": null,
        "painSuffix": false,
        "id": "sol",
        "label": "Solução 1% (frasco 30 mL)",
        "unit": "frasco",
        "unitPlural": "frascos",
        "route": "tópica",
        "verb": "Aplicar",
        "doseOptions": [
         "fina camada sobre a lesão"
        ],
        "intervals": [
         "2x",
         "3x"
        ],
        "durations": [
         14,
         7,
         10
        ],
        "isContainer": true
       }
      ]
     }
    }
   ]
  },
  {
   "id": "antissepticos",
   "title": "Antissépticos / Uso Local",
   "drugs": [
    {
     "name": "Digluconato de Clorexidina 0,12%",
     "brands": "Periogard, Noplak",
     "adultDose": "Bochecho de 15 mL por 30–60 s, 2x/dia",
     "pediatric": "Em crianças que sabem bochechar (> 6 anos)",
     "duration": "7–14 dias",
     "notes": "NÃO diluir e NÃO deglutir. Pigmentação dentária com uso prolongado.",
     "presentation": "Solução 0,12% (frasco 250 mL)",
     "posology": {
      "forms": [
       {
        "id": "fr250",
        "label": "Frasco 250 mL — Solução 0,12%",
        "unit": "frasco",
        "unitPlural": "frascos",
        "mg": null,
        "route": "bochecho",
        "doseOptions": [
         "15 mL (sem diluir, sem engolir) por 30–60 segundos"
        ],
        "intervals": [
         "12h"
        ],
        "durations": [
         7,
         10,
         14
        ],
        "painSuffix": false,
        "isContainer": true,
        "verb": "Bochechar",
        "contentMl": 250,
        "doseMl": {
         "15 mL (sem diluir, sem engolir) por 30–60 segundos": 15
        }
       }
      ]
     },
     "use": "externo"
    }
   ]
  },
  {
   "id": "antivirais",
   "title": "Antivirais",
   "drugs": [
    {
     "name": "Aciclovir",
     "brands": "Zovirax",
     "adultDose": "400 mg VO 5×/dia por 7 dias",
     "pediatric": "15 mg/kg/dose VO 5×/dia (máx 200 mg) por 5 dias",
     "duration": "5–7 dias",
     "notes": "Herpes labial e oral. Maior eficácia na fase prodrômica.",
     "presentation": "Comprimidos 200 e 400 mg",
     "posology": {
      "forms": [
       {
        "mg": 400,
        "painSuffix": false,
        "id": "cp400",
        "label": "Comprimido 400 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "5x"
        ],
        "durations": [
         7,
         5,
         10
        ]
       },
       {
        "mg": 200,
        "painSuffix": false,
        "id": "cp200",
        "label": "Comprimido 200 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "5x"
        ],
        "durations": [
         5,
         7,
         10
        ]
       }
      ]
     }
    },
    {
     "use": "externo",
     "name": "Aciclovir creme 5%",
     "brands": "Zovirax creme",
     "adultDose": "Creme 5×/dia por 5 dias",
     "pediatric": "Mesma posologia do adulto",
     "duration": "5 dias",
     "notes": "Herpes labial. Iniciar na fase prodrômica (ardência/prurido) para maior eficácia.",
     "presentation": "Creme 5% (bisnaga 10 g)",
     "posology": {
      "forms": [
       {
        "mg": null,
        "painSuffix": false,
        "id": "creme",
        "label": "Creme 5% (bisnaga 10 g)",
        "unit": "bisnaga",
        "unitPlural": "bisnagas",
        "route": "tópica",
        "verb": "Aplicar",
        "doseOptions": [
         "fina camada sobre a lesão"
        ],
        "intervals": [
         "5x"
        ],
        "durations": [
         5,
         7
        ],
        "isContainer": true
       }
      ]
     }
    },
    {
     "name": "Valaciclovir",
     "brands": "Valtrex",
     "adultDose": "2 g 2×/dia por 1 dia (herpes labial)",
     "pediatric": "20 mg/kg/dose 3×/dia por 5 dias (máx 1 g)",
     "duration": "1 dia",
     "notes": "Pró-fármaco do aciclovir — melhor biodisponibilidade oral. A 2ª dose é tomada 12 h após a 1ª.",
     "presentation": "Comprimidos 500 e 1000 mg",
     "posology": {
      "forms": [
       {
        "mg": 500,
        "painSuffix": false,
        "id": "cp500",
        "label": "Comprimido 500 mg (2 g = 4 comprimidos)",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "route": "oral",
        "doseOptions": [
         "4 (quatro)"
        ],
        "intervals": [
         "12h"
        ],
        "durations": [
         1
        ]
       },
       {
        "mg": 1000,
        "painSuffix": false,
        "id": "cp1000",
        "label": "Comprimido 1000 mg (2 g = 2 comprimidos)",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "route": "oral",
        "doseOptions": [
         "2 (dois)"
        ],
        "intervals": [
         "12h"
        ],
        "durations": [
         1
        ]
       }
      ]
     }
    },
    {
     "use": "externo",
     "name": "Penciclovir creme 1%",
     "brands": "Vectavir",
     "adultDose": "Aplicar a cada 2 h durante a vigília por 4 dias",
     "pediatric": "Não recomendado em menores de 12 anos",
     "duration": "4 dias",
     "notes": "Herpes labial recorrente. Iniciar no pródromo.",
     "presentation": "Creme 1% (bisnaga 1,5 g)",
     "posology": {
      "forms": [
       {
        "mg": null,
        "painSuffix": false,
        "id": "creme",
        "label": "Creme 1% (bisnaga)",
        "unit": "bisnaga",
        "unitPlural": "bisnagas",
        "route": "tópica",
        "verb": "Aplicar",
        "doseOptions": [
         "fina camada sobre a lesão"
        ],
        "intervals": [
         "2h"
        ],
        "durations": [
         4
        ],
        "isContainer": true,
        "extra": "Aplicar durante a vigília."
       }
      ]
     }
    }
   ]
  },
  {
   "id": "benzodiazepinicos",
   "title": "Benzodiazepínicos — Sedação Mínima",
   "drugs": [
    {
     "name": "Alprazolam",
     "brands": "Frontal, Apraz",
     "adultDose": "0,25–0,5 mg VO 60 min antes",
     "pediatric": "Não recomendado",
     "duration": "Dose única",
     "notes": "Ansiedade leve.",
     "presentation": "Comprimidos 0,25; 0,5 e 1 mg",
     "posology": {
      "forms": [
       {
        "id": "cp025",
        "label": "Comprimido 0,25 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 0.25,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "dose única 60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       },
       {
        "id": "cp05",
        "label": "Comprimido 0,5 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 0.5,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "dose única 60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       }
      ]
     }
    },
    {
     "name": "Diazepam",
     "brands": "Valium, Diempax",
     "adultDose": "5–10 mg VO 45–60 min antes",
     "pediatric": "0,1–0,3 mg/kg",
     "duration": "Dose única",
     "notes": "Acompanhante obrigatório. Não dirigir.",
     "presentation": "Comprimidos 5 e 10 mg",
     "posology": {
      "forms": [
       {
        "id": "cp5",
        "label": "Comprimido 5 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 5,
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "dose única 45–60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       },
       {
        "id": "cp10",
        "label": "Comprimido 10 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 10,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "dose única 45–60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       }
      ]
     }
    },
    {
     "name": "Lorazepam",
     "brands": "Lorax",
     "adultDose": "1–2 mg na noite anterior + 1 mg 60 min antes",
     "pediatric": "Não recomendado",
     "duration": "2 doses",
     "notes": "Boa opção para pacientes muito ansiosos.",
     "presentation": "Comprimidos 1 e 2 mg",
     "posology": {
      "forms": [
       {
        "id": "cp1",
        "label": "Comprimido 1 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 1,
        "route": "oral",
        "doseOptions": [
         "1 (um) comprimido na noite anterior e 1 (um) comprimido 60 min antes do procedimento"
        ],
        "intervals": [
         ""
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true,
        "doseHasUnit": true
       },
       {
        "id": "cp2",
        "label": "Comprimido 2 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 2,
        "route": "oral",
        "doseOptions": [
         "1 (um) comprimido de 2 mg na noite anterior ao procedimento"
        ],
        "intervals": [
         ""
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true,
        "doseHasUnit": true
       }
      ]
     }
    },
    {
     "name": "Midazolam",
     "brands": "Dormonid",
     "adultDose": "7,5–15 mg VO 30–45 min antes",
     "pediatric": "VO: 0,5–0,75 mg/kg (máx 20 mg). Intranasal: 0,3–0,5 mg/kg (máx 10 mg).",
     "duration": "Dose única",
     "notes": "Meia-vida curta — preferível para sedação ambulatorial. Monitorar SpO₂. Jejum: sólidos 6 h, líquidos claros 2 h. Intranasal: concentração ≥ 5 mg/mL para minimizar o volume; monitoração contínua obrigatória. Antídoto: flumazenil. Inibidores de CYP3A4 (fluconazol, itraconazol, eritromicina, ritonavir): reduzir 50–70% ou contraindicar.",
     "presentation": "Comprimidos 7,5 e 15 mg / Solução injetável 5 mg/mL (uso intranasal)",
     "posology": {
      "forms": [
       {
        "id": "cp75",
        "label": "Comprimido 7,5 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 7.5,
        "route": "oral",
        "doseOptions": [
         "1 (um)",
         "2 (dois)"
        ],
        "intervals": [
         "dose única 30–45 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       },
       {
        "id": "cp15",
        "label": "Comprimido 15 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 15,
        "route": "oral",
        "doseOptions": [
         "1 (um)"
        ],
        "intervals": [
         "dose única 30–45 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "painSuffix": false,
        "isSingleDose": true
       },
       {
        "mg": null,
        "painSuffix": false,
        "id": "amp_in",
        "label": "Solução injetável 5 mg/mL (ampola) — INTRANASAL com atomizador",
        "unit": "ampola",
        "unitPlural": "ampolas",
        "mgLabel": "5 mg/mL",
        "route": "intranasal",
        "verb": "Administrar",
        "doseOptions": [
         "0,3 mg/kg",
         "0,4 mg/kg",
         "0,5 mg/kg"
        ],
        "weightBased": true,
        "maxMg": 10,
        "intervals": [
         "dose única 5–10 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "isSingleDose": true,
        "isContainer": true,
        "extra": "Usar atomizador nasal (MAD). Dose máxima: 10 mg."
       }
      ]
     }
    }
   ]
  },
  {
   "id": "hipnoticos",
   "title": "Hipnóticos — Sedação Pediátrica",
   "drugs": [
    {
     "name": "Hidrato de Cloral",
     "brands": "Manipulado",
     "adultDose": "Não é de uso adulto — ver dose pediátrica",
     "pediatric": "50–75 mg/kg VO (máx 2.000 mg) 30–60 min antes; evitar acima de 3 anos",
     "duration": "Dose única",
     "notes": "Alta variabilidade de resposta. Monitoração contínua e acesso venoso obrigatórios. Duração de 60–120 min.",
     "presentation": "Solução oral manipulada",
     "posology": {
      "forms": [
       {
        "mg": null,
        "painSuffix": false,
        "id": "sol",
        "label": "Solução oral manipulada (dose por peso)",
        "unit": "frasco",
        "unitPlural": "frascos",
        "route": "oral",
        "verb": "Tomar",
        "doseOptions": [
         "50 mg/kg",
         "75 mg/kg"
        ],
        "weightBased": true,
        "maxMg": 2000,
        "intervals": [
         "dose única 30–60 min antes do procedimento"
        ],
        "durations": [
         1
        ],
        "isSingleDose": true,
        "isContainer": true
       }
      ]
     }
    }
   ]
  },
  {
   "id": "gastricos",
   "title": "Protetores de Mucosa Gástrica",
   "drugs": [
    {
     "name": "Esomeprazol Magnésio",
     "brands": "Nexium",
     "adultDose": "20–40 mg VO 1x/dia em jejum",
     "pediatric": "Conforme peso",
     "duration": "Conforme indicação",
     "notes": "IBP — enantiômero S do omeprazol.",
     "presentation": "Comprimidos 20 e 40 mg",
     "posology": {
      "forms": [
       {
        "id": "cp20",
        "label": "Comprimido 20 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 20,
        "route": "oral",
        "doseOptions": [
         "1 (um) em jejum"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         7,
         10,
         14,
         30
        ],
        "painSuffix": false
       },
       {
        "id": "cp40",
        "label": "Comprimido 40 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 40,
        "route": "oral",
        "doseOptions": [
         "1 (um) em jejum"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         7,
         10,
         14
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Omeprazol",
     "brands": "Losec, Peprazol",
     "adultDose": "20–40 mg VO 1x/dia em jejum",
     "pediatric": "1 mg/kg",
     "duration": "Geralmente período do AINE",
     "notes": "Profilaxia em uso prolongado de AINE em idosos, ulcerosos, anticoagulados.",
     "presentation": "Cápsulas 20 e 40 mg",
     "posology": {
      "forms": [
       {
        "id": "cap20",
        "label": "Cápsula 20 mg",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 20,
        "route": "oral",
        "doseOptions": [
         "1 (uma) em jejum, 30 min antes do café"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         5,
         7,
         10,
         14
        ],
        "painSuffix": false
       },
       {
        "id": "cap40",
        "label": "Cápsula 40 mg",
        "unit": "cápsula",
        "unitPlural": "cápsulas",
        "mg": 40,
        "route": "oral",
        "doseOptions": [
         "1 (uma) em jejum"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         5,
         7,
         10,
         14
        ],
        "painSuffix": false
       }
      ]
     }
    },
    {
     "name": "Pantoprazol Sódico",
     "brands": "Pantozol",
     "adultDose": "20–40 mg VO 1x/dia em jejum",
     "pediatric": "Conforme peso",
     "duration": "Conforme indicação",
     "notes": "Menor interação CYP que omeprazol.",
     "presentation": "Comprimidos 20 e 40 mg",
     "posology": {
      "forms": [
       {
        "id": "cp20",
        "label": "Comprimido 20 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 20,
        "route": "oral",
        "doseOptions": [
         "1 (um) em jejum"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         5,
         7,
         10,
         14
        ],
        "painSuffix": false
       },
       {
        "id": "cp40",
        "label": "Comprimido 40 mg",
        "unit": "comprimido",
        "unitPlural": "comprimidos",
        "mg": 40,
        "route": "oral",
        "doseOptions": [
         "1 (um) em jejum"
        ],
        "intervals": [
         "24h"
        ],
        "durations": [
         5,
         7,
         10,
         14
        ],
        "painSuffix": false
       }
      ]
     }
    }
   ]
  }
 ],
 "FLAGS": {
  "comorb": {
   "limitEpi": [
    "arritmia",
    "avc_previo",
    "cardiopatia_isq",
    "hipertensao",
    "depressao_ansiedade",
    "cardiopatia_congenita"
   ],
   "avoidEpi": [
    "feocromocitoma",
    "hipertireoidismo"
   ],
   "avoidPrilo": [
    "gestacao",
    "anemia",
    "anemia_falciforme"
   ]
  },
  "meds": {
   "limitEpi": [
    "amiodarona",
    "atenolol",
    "bisoprolol",
    "carvedilol",
    "metoprolol",
    "propranolol",
    "hidralazina",
    "amitriptilina",
    "clomipramina",
    "imipramina",
    "nortriptilina",
    "haloperidol",
    "risperidona",
    "venlafaxina"
   ],
   "avoidEpi": [
    "fenelzina",
    "tranilcipromina"
   ],
   "avoidPrilo": []
  }
 },
 "INTERACTIONS": [
  {
   "d1": "Epinefrina (Lidocaína / Articaína)",
   "d2": "Antidepressivos Tricíclicos — Amitriptilina (Tryptanol®)",
   "sev": "Alta",
   "effect": "Potencialização adrenérgica grave — hipertensão, taquicardia, arritmias. Substituir por mepivacaína 3% ou prilocaína c/ felipressina.",
   "ref": "Becker DE. Gen Dent 2019."
  },
  {
   "d1": "Epinefrina",
   "d2": "Propranolol (Inderal®) — beta-bloqueador não seletivo",
   "sev": "Alta",
   "effect": "Hipertensão paradoxal por vasoconstricção periférica não antagonizada. Usar mepivacaína 3% sem vasoconstritor.",
   "ref": "Becker DE. Gen Dent 2019."
  },
  {
   "d1": "Midazolam (Dormonid®)",
   "d2": "Fluconazol / Eritromicina / Ritonavir (inibidores CYP3A4)",
   "sev": "Alta",
   "effect": "Inibição CYP3A4 → acúmulo de midazolam → sedação profunda e apneia. Reduzir dose 50–70% ou contraindicar.",
   "ref": "Mason KP. Pediatric Sedation. Springer 2021."
  },
  {
   "d1": "Metotrexato (Ledertrexate®)",
   "d2": "AINEs — Ibuprofeno / Diclofenaco / Nimesulida",
   "sev": "Alta",
   "effect": "Redução da excreção renal de metotrexato → toxicidade hematológica grave. Contraindicar AINEs — usar paracetamol.",
   "ref": "Lalla RV et al. Cancer 2014; IF 6.2."
  },
  {
   "d1": "Alendronato (Fosamax®) / Ácido Zoledrônico (Zometa®)",
   "d2": "Cirurgia óssea / Exodontia",
   "sev": "Alta",
   "effect": "Risco de MRONJ. Avaliar CTX sérico e consultar especialista antes de intervenção óssea.",
   "ref": "Khan AA et al. J Bone Miner Res 2017; IF 6.3."
  },
  {
   "d1": "Metronidazol (Flagyl®)",
   "d2": "Varfarina / Anticoagulantes orais",
   "sev": "Alta",
   "effect": "Inibição do metabolismo da varfarina (CYP2C9) → risco hemorrágico. Monitorar INR.",
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "d1": "Ácido Valpróico (Depakene®)",
   "d2": "Procedimentos cirúrgicos invasivos",
   "sev": "Alta",
   "effect": "Inibição plaquetária e coagulopatia dose-dependente. Solicitar TTPA, plaquetas e TS pré-cirúrgico.",
   "ref": "Perucca P et al. Lancet Neurol 2023; IF 48.0."
  },
  {
   "d1": "AINEs (Ibuprofeno / Diclofenaco)",
   "d2": "IECA (Enalapril) / BRA (Losartana)",
   "sev": "Moderada",
   "effect": "Redução do efeito anti-hipertensivo e risco de IRA. Preferir paracetamol.",
   "ref": "Moore PA. JADA 2021; IF 9.2."
  },
  {
   "d1": "Paracetamol (Tylenol®)",
   "d2": "Álcool crônico / Rifampicina (indutores CYP2E1)",
   "sev": "Moderada",
   "effect": "Aumento do metabólito hepatotóxico NAPQI. Contraindicar em cirrose Child-Pugh C.",
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "d1": "Dipirona (Novalgina®)",
   "d2": "Ciclosporina (Neoral®)",
   "sev": "Moderada",
   "effect": "Redução dos níveis plasmáticos de ciclosporina → risco de rejeição em transplantados.",
   "ref": "Becker DE. Anesth Prog 2022."
  },
  {
   "d1": "Carbamazepina (Tegretol®)",
   "d2": "Fluconazol / Dexametasona",
   "sev": "Moderada",
   "effect": "Indução CYP3A4 → reduz eficácia de azólicos e corticoides.",
   "ref": "Perucca P et al. Lancet Neurol 2023; IF 48.0."
  },
  {
   "d1": "ISRSs — Fluoxetina (Prozac®) / Sertralina (Zoloft®)",
   "d2": "AINEs / Anticoagulantes",
   "sev": "Moderada",
   "effect": "Inibição plaquetária sinérgica → risco aumentado de sangramento. Preferir paracetamol.",
   "ref": "Becker DE. Anesth Prog 2022."
  }
 ],
 "LESIONS": [
  {
   "id": "herpes",
   "name": "Herpes Labial Recorrente",
   "cat": "Viral",
   "color": "#ff6b9d",
   "dx": "Vesículas agrupadas no vermelhão labial, precedidas de pródromo (ardência, prurido). Diagnóstico clínico. PCR ou cultura viral para atípicos ou imunossuprimidos.",
   "tx": [
    "Aciclovir creme 5%: 5×/dia por 5 dias — maior eficácia na fase prodômica",
    "Formas graves adulto: Aciclovir 400 mg VO 5×/dia por 7–10 dias",
    "Pediátrico: Aciclovir 15 mg/kg/dose VO 5×/dia (máx 200 mg) por 5 dias",
    "Valaciclovir 2 g 2×/dia por 1 dia — eficaz em episódios recorrentes adultos",
    "LLLT 630–670 nm, 4 J/cm² — reduz dor e acelera cicatrização",
    "Protetor labial FPS ≥ 30 para prevenção de recorrências fotoinduzidas"
   ],
   "ref": "Arduino PG et al. J Oral Pathol Med 2022; IF 3.8."
  },
  {
   "id": "candida",
   "name": "Candidose Oral",
   "cat": "Fúngica",
   "color": "#ffb347",
   "dx": "Pseudomembranosa: placas brancas removíveis à curetagem. Eritematosa: mucosa difusa. Investigar imunossupressão, xerostomia, corticoide inalatório, prótese mal adaptada.",
   "tx": [
    "Nistatina 100.000 UI/mL: 4–6 mL 4×/dia por 14 dias — bochecho e deglutição",
    "Pediátrico < 1 ano: 0,5 mL/lado 4×/dia. Maior: 1–2 mL 4×/dia",
    "Fluconazol 150–200 mg/dia por 7–14 dias — refratárias ou imunossuprimidos",
    "Clotrimazol creme 1% — queilite angular 2–3×/dia por 14 dias",
    "Itraconazol solução 200 mg/dia — quando fluconazol falha",
    "Orientar higiene de próteses e bocais de inaladores"
   ],
   "ref": "Pappas PG et al. Clin Infect Dis 2016; IF 20.8."
  },
  {
   "id": "afta",
   "name": "Úlcera Aftosa Recorrente",
   "cat": "Imunomediada",
   "color": "#a29bfe",
   "dx": "Úlcera arredondada com base amarelada e halo eritematoso. Dor desproporcional ao tamanho. Excluir Behçet, Crohn, deficiências de B12/folato/ferro.",
   "tx": [
    "Triamcinolona 0,1% em orabase: 3–4×/dia até cicatrização",
    "Dexametasona elixir 0,5 mg/5 mL em bochecho 3×/dia — formas múltiplas",
    "LLLT 830 nm, 4 J/cm² — reduz dor e acelera cicatrização",
    "Colchicina 0,5 mg/dia VO — recorrências frequentes (off-label)",
    "Suplementação B12 1000 mcg/dia se deficiência confirmada",
    "Identificar e evitar gatilhos (nozes, glutamato, cítricos, stress)"
   ],
   "ref": "Preeti L et al. J Oral Maxillofac Pathol 2011."
  },
  {
   "id": "mucocele",
   "name": "Mucocele",
   "cat": "Cisto de Retenção",
   "color": "#74b9ff",
   "dx": "Nódulo flutuante translúcido/azulado no lábio inferior. Conteúdo mucinoso. Trauma mecânico repetitivo como fator etiológico.",
   "tx": [
    "Excisão cirúrgica com remoção das glândulas salivares menores adjacentes",
    "Marsupialização — alternativa conservadora em lesões volumosas",
    "Crioterapia com nitrogênio líquido — lesões pequenas e recorrentes",
    "Remoção do hábito ou fator traumático identificado na anamnese",
    "Taxa de recorrência 2–15% — orientar o responsável"
   ],
   "ref": "Neville BW et al. Oral and Maxillofacial Pathology. 4.ª ed. 2022."
  },
  {
   "id": "lpo",
   "name": "Líquen Plano Oral",
   "cat": "Potencialmente Maligna",
   "color": "#fd79a8",
   "dx": "Estrias de Wickham reticulares bilaterais em mucosa jugal. Formas erosivas/atróficas: malignização 0,5–2,5%. Biópsia + IFD obrigatórias.",
   "tx": [
    "Formas reticulares assintomáticas — monitoramento semestral",
    "Clobetasol 0,05% orabase 2–3×/dia — formas erosivas por 4–6 semanas",
    "Triancinolona intralesional — lesões refratárias ao tópico",
    "Tacrolimus 0,1% tópico — alternativa aos corticoides (off-label)",
    "Fotoproteção labial FPS ≥ 30 obrigatória em lesões do vermelhão",
    "Biópsia de controle a cada 6–12 meses pelo potencial de malignização"
   ],
   "ref": "Warnakulasuriya S et al. Oral Dis 2021; IF 4.5."
  },
  {
   "id": "granuloma",
   "name": "Granuloma Piogênico",
   "cat": "Hiperplasia Vascular",
   "color": "#ff6b9d",
   "dx": "Nódulo vermelho-vivo, exofítico, friável, sangramento fácil. Gengiva como sítio mais comum. Associado a trauma, gestação, higiene deficiente.",
   "tx": [
    "Excisão cirúrgica completa até o periósteo incluindo tecido base",
    "Raspagem e alisamento radicular — remoção de irritantes locais",
    "Em gestantes: adiar para 2º trimestre ou pós-parto se possível",
    "Envio obrigatório para histopatologia. Recorrência ~15%"
   ],
   "ref": "Neville BW et al. Oral and Maxillofacial Pathology. 4.ª ed. 2022."
  }
 ],
 "HABITS": [
  [
   "tabaco",
   "Tabagismo"
  ],
  [
   "alcool",
   "Consumo de Álcool"
  ],
  [
   "drogas",
   "Uso de Drogas"
  ],
  [
   "onicofagia",
   "Onicofagia"
  ]
 ],
 "PARAFUNCOES": [
  "Bruxismo",
  "Apertamento",
  "Sucção digital",
  "Sucção de chupeta",
  "Morder objetos",
  "Onicofagia",
  "Nenhuma"
 ],
 "EPI_MAX_MG": 0.04,
 "FELI_MAX_UI": 0.18
};
