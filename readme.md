# Composição nº III de Piet Mondrian - Parte B

Para desestabilizar a composição, fiz com que os três quadrados coloridos aumentassem de tamanho de forma aleatória, dando a impressão de que saltam, enquanto as linhas e o fundo ficam parados.

Primeiro, retirei o noLoop() e defini frameRate(30), para o draw() correr 30 vezes por segundo em vez de uma só. Como a imagem passou a ser redesenhada em cada frame, o degradê do fundo passou também a ser chamado no início do draw(), apagando o frame anterior para os quadrados não deixarem rasto. 

A instabilidade vem do random(). Em cada frame, o random() sorteia um número entre 0 e 1 e, quando é menor que 0.03 (cerca de 3% das vezes), o quadrado cresce com uma escala também sorteada, entre 1.05 e 1.15, ou seja, de 5% a 15% maior. No frame seguinte volta ao tamanho original, e é essa mudança rápida que parece um salto. 

Cada quadrado tem o seu próprio sorteio, por isso saltam em momentos diferentes e sem ritmo previsível, em média cerca de uma vez por segundo. A escala multiplica a largura e a altura do quadrado, e usei rectMode(CENTER) para ele crescer a partir do centro, sem se deslocar. 

Os quadrados estão desenhados depois das linhas, por isso, quando crescem, passam por cima delas. Optei por só aumentar o tamanho, e não deslocar os quadrados, e por um aumento pequeno, para a instabilidade ser subtil e a composição continuar reconhecível. 


Referência frameRate(): https://p5js.org/reference/p5/frameRate/

Referência tectMode(): https://p5js.org/reference/p5/rectMode/

Referência random(): https://p5js.org/reference/p5/random/