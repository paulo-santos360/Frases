function gerarFraseMotivacional(){

    const frases = [
      "Os problemas são oportunidades para se mostrar o que sabe.",
      "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
      "Tente de novo. Fracasse de novo. Mas fracasse melhor.",
      "Experiência é o nome que cada um dá a seus erros.",
      "Um objetivo nada mais é do que um sonho com limite de tempo.",
      "Sorte é o que acontece quando a preparação encontra a oportunidade.",
      "O único lugar que o sucesso vem antes do trabalho é no dicionário.",
      "É tentando o impossível que se chega à realização do possível.",
      "Muda tuas ideias e mudarás teu mundo.",
      "Em busca do ótimo não se faz o bom.",
      "Eu sou vencedor"
    ]

    const numeroAleatorio = Math.floor(Math.random() * 11)
    const frase = frases[numeroAleatorio]

    document.getElementById('frase').innerHTML = frase

  }