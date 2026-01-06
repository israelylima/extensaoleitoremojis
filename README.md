
# Ouvir+

Ouvir+ é uma extensão para o navegador Mozilla Firefox que realiza a leitura assistida de conteúdos textuais, adicionando sons semânticos para emojis durante a reprodução do texto.

Ao invés de apenas verbalizar descrições literais como “coração vermelho” ou “rosto rindo”, a ferramenta mantém a leitura do texto e reproduz sons representativos do significado emocional dos emojis, promovendo uma experiência auditiva mais natural, expressiva e acessível.

A ferramenta não substitui leitores de tela tradicionais, mas atua como uma camada complementar de leitura sonora, sendo especialmente útil em contextos de acessibilidade, educação e pesquisa em Interação Humano-Computador (IHC).


## Como instalar a extensão no Mozilla Firefox

Atualmente, a instalação é feita em modo de desenvolvedor (extensão temporária), ideal para testes, protótipos e pesquisas.

1️⃣ Preparar os arquivos 

Certifique-se de que a pasta da extensão contenha, no mínimo, os seguintes arquivos: 

```bash
pasta/
├── manifest.json
├── content-script.js
├── background.js
├── emoji-mapper.js
├── popup.html
├── popup.js
└── sounds/
    └── laugh.mp3

```

2️⃣ Abrir o modo de depuração do Firefox

Abra o Mozilla Firefox e digite na barra de endereços:

```bash
about:debugging#/runtime/this-firefox
```

Pressione Enter

4️⃣ Usar a ferramenta

- Acesse qualquer página da web (ou um HTML de teste)
- Clique no ícone da extensão na barra do Firefox
- No popup, clique em 🔊 Ler página com emojis



