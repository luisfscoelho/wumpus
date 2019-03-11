# O Mundo de wumpus

“A caverna estava escura, mal conseguia perceber os contornos irregulares das
estalactites que desciam do teto, tais quais os dentes de uma boca enorme, engolindo até
a luz. Ainda assim, a lenda do ouro perdido nessa caverna, a promessa de fama e fortuna
era suficiente para motivar a busca. A caverna nem era tão grande, o risco de se perder,
mínimo. Já havia explorado cavernas maiores. Claro, as histórias do velho bêbado, sobre
uma tal criatura vivendo nessa caverna, e que devorava aqueles tolos imprudentes que se
jogavam em busca de uma promessa de riqueza, era suficiente para amedrontar as
crianças ao redor do fogo ou afastar os mais covardes. No máximo, um urso velho e
reumático ou um javali perdido, nada com o que não pudesse lidar. Com esse
pensamento confiante, o guerreiro avança. Na escuridão quase completa, a tocha que
carregava mal iluminava 4 passos à frente. Uma brisa leve, balança a chama. Sorte ter
trazido uma tocha, se fosse uma lanterna, a proteção evitaria ter percebido a brisa, de tão
leve que era. Uma corrente de ar em uma caverna, pode levar a uma galeria, ou pior, a
um abismo. O pensamento de uma queda longa, sozinho em uma caverna escura,
seguida de alguns ossos quebrados passou pela cabeça. Melhor evitar esse caminho.
Seguindo a passos firmes pela direção oposta, o ar começa a mudar. Um fedor de ossos
velhos e carne podre aparece. Achamos a toca de nosso urso, pensou. A direção do
cheiro era difusa, mas um sutil movimento na escuridão faz com que, reflexo de anos detreinamento duro, uma flecha, sua última, pulasse em suas mãos simultaneamente ao
arco. A tocha deixada cair sobre o chão de rocha iluminava o caminho, agora era apenas
aguardar a besta se aproximar e mirar um tiro certeiro entre os olhos iluminados pelo
fogo. Porém um rosnado e um som seco de passos pesados sobre a pedra,
surpreendeu-lhe pelas costas. Mal teve tempo de virar-se, muito menos de apontar o
arco. Um braço longo e peludo, terminado em garras tão longas quanto facas e tão
afiadas quanto, foi a última coisa que viu, descendo certeira em direção à sua garganta.
Tentou correr, mas o ar faltou, enquanto sentia algo quente escorrer-lhe pelo peito... A
vista falha, assim como as pernas e com um baque seco seu corpo atinge o chão
desfalecido. Enquanto sua visão se apagava, ainda pôde perceber, num último suspiro,
uma bocarra recheada de dentes amarelos e compridos, aproximar-se faminta de sua
barriga. O jantar estava servido.”


O Mundo de Wumpus é um jogo antigo de computador considerado um domínio
(ambiente) artificial que fornece grande motivação para o raciocínio lógico. Apesar de
parecer um jogo muito simples quando comparado aos jogos modernos de computador, o
Mundo de Wumpus é um excelente ambiente de teste para agentes inteligentes.
Baseado em um agente que explora uma caverna, o ambiente consiste de
compartimentos conectados por passagens sendo que em um desses compartimentos
está o Wumpus: um monstro que devora qualquer um que entrar em seu compartimento.
Para piorar a situação, alguns dos compartimentos possuem abismos que engolem
qualquer um que entrar neles, menos o Wumpus que é muito grande para cair. A única
motivação para o agente permanecer nesse ambiente é a caçada pelo ouro. O Wumpus
pode ser morto pelo agente por uma flecha mas este possui somente uma chance de
atirar. O agente sempre começa localizado na entrada da caverna. A tarefa do agente é a
de encontrar o ouro e retornar para a entrada, onde ele pode escalar a saída da caverna.


O interessante desse domínio é a possibilidade de simulação da percepção do agente
inteligente e dos efeitos de suas múltiplas ações:

1. No compartimento que contém o Wumpus e nos compartimentos adjacentes (não
na diagonal) o agente perceberá um ​ cheiro ruim​ ;
2. Nos compartimentos adjacentes a um abismo o agente perceberá uma ​ brisa​ ;
3. No compartimento onde o ouro está o agente perceberá um ​ brilho​ ;
4. Quando o agente tromba com uma parede ele percebe um ​ choque​ ;
5. Quando o Wumpus é morto ele dá um ​ grito que pode ser percebido pelo agente de
qualquer lugar da caverna;
6. O Wumpus pode se movimentar para qualquer um dos compartimentos adjacentes;
7. O agente só se ​ locomove para frente . ​ Desta maneira ele deve ser capaz de ​ virar
para a direita ou ​ para a esquerda para se posicionar na direção em que ele
pretende se mover ou em que ele pretende atirar para matar o Wumpus;
8. Lembre-se que o agente possui apenas uma flecha!
9. Ações que o agente pode executar: ​ virarADireita ​ , ​ virarAEsquerda,
moverSeAFrente ​ , ​ coletarTesouro ​ , ​ atirarFlecha ​ e ​ escalarCaverna ​ .10. O agente morre se ele entra em um compartimento que contenha um abismo ou
um Wumpus vivo;
11. O objetivo do agente é o de carregar o ouro para a entrada da caverna o mais
rápido possível, sem ser morto. Ele ganha 100 pontos por escalar a caverna para
fora carregando o ouro com 1 ponto a menos para cada ação que ele executou e
10000 pontos negativos por ser morto.
Implemente o Mundo de Wumpus, usando a linguagem que desejar. O agente deverá
implementar as percepções e as ações listadas anteriormente. A caverna deverá ser
implementada em um grid de 4 x 4 (16 células), com um Wumpus, um baú do tesouro e 3
abismos, todos colocados aleatoriamente ao iniciar uma sessão. A entrada da caverna
também deverá ser posicionada aleatoriamente, mas obrigatoriamente em uma das
células da borda. Use o diagrama PEAS para elencar as propriedades do agente e
escolha o modelo que considerar mais adequado para a tarefa. Implemente uma interface
gráfica para visualizar o agente em funcionamento.
