Desafio
Considerando o seguinte cenário, cite ao menos 3 violações contra a integridade do sistema descrito abaixo.


Um cliente entra em contato conosco para pedir ajuda quanto ao sistema que utiliza na sua petshop, ele fala que possui um sistema para agendamento de banho e tosa de cães e gatos. 
Já de cara ele nos informa que tem tido muitos problemas desde passou a utilizar esse sistema, ao ser questionado sobre quais os problemas que vem enfrentando ele informa que alguns agendamentos são marcados no mesmo horário, outros agendamentos não possui dados importante como: o nome da pessoa responsável pelo pet, se é cão ou gato ou o serviço que foi agendado e além desses problemas o cliente relata que em alguns dias já teve todos os seus agendamentos perdidos e que isso normalmente acontece quando no cadastro de um agendamento é inserido algum caracter especial.
Depois de entendermos os problema por parte do cliente, nós partimos para a investigação de regras de negócio implementadas no sistema e para o seu código. Com isso podemos perceber alguns comportamentos como por exemplo o fato de só existir um usuário para todo o sistema, pois quando foi projetado o sistema de agendamento, o nosso cliente não possuía funcionários em sua petshop, com isso todos os funcionários utilizam o mesmo usuário e senha para realizar os agendamentos. Ao fazer um teste de agendamento podemos perceber que conseguimos cadastrar um agendamento sem preencher todos os dados que deveriam ser obrigatórios e que evitariam muitos problemas na hora de atender o cliente. 




RESPOSTAS:



