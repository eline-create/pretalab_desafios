Exercícios

1 ) Conforme vimos na aula de hoje, relacione as principais violações (Ataques Maliciosos, Usuários mal intencionados, Bugs, Más práticas no código, Falha nos backups de Banco de Dados, Erros de autorização e permissionamento) com as formas de evitá-las correspondentes (Autorização, Autenticação, Consultas ao banco de dados, Inputs recebidos, Teste automatizados e Backup do Banco de dados).
	Ex. Testes automatizados ajudam a combater bugs

1. Ataque malicioso - Injeção de SQL, Multifator de segurança (MFA), chaves de acesso;
2. Usuários mal intencionados -  Auditoria  (Inputs recebidos);
3. Bugs -  Testes automatizados, ORM(Injeção de SQL);
4. Más práticas no código -  Testes automatizados, Clean code, Consulta específica ao Banco de Dados (sem Select All);
5. Falha nos Backups de BD - Backup no Banco de Dados (d - 1) - Definir estratégia de backup( com mais de uma cópia), e não realizar exclusão de backups  sem uma validação de sucesso do backuo atual.
6. Erros de autorização e permissão - Controle de usuário - Autorização e autenticação, testes


2 ) Cite 3 exemplos em que a integridade de um sistema pode ser violada.

1. Dados não seguros;
2. Programa  incompleto (Sistema com vulnerabilidade);
3. Sem organização na autorização.


3 ) Descreva para vocês qual a violação mais difícil de ser evitada.

Ataques maliciosos de usuários e Más práticas no código. São coisas que por mais que a máquina ajude tem relação com o ser humano, caráter.

