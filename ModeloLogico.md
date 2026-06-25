# Justificativa do Modelo Lógico

O modelo lógico foi desenvolvido para atender às necessidades de um sistema de gerenciamento de pedidos e controle de itens, garantindo organização, integridade dos dados e eficiência no armazenamento das informações.

A entidade **USUARIOS** foi criada para armazenar os dados dos usuários do sistema, contendo informações como nome, e-mail e cargo. Cada usuário pode realizar diversos pedidos ao longo do tempo, justificando o relacionamento de cardinalidade **1:N** entre **USUARIOS** e **PEDIDO**. Dessa forma, um único usuário pode estar associado a vários pedidos, enquanto cada pedido pertence exclusivamente a um usuário.

A entidade **AUTH** foi separada da entidade **USUARIOS** para armazenar informações de autenticação, especificamente a senha criptografada (*senha_hash*). Essa separação segue boas práticas de modelagem e segurança, reduzindo o acoplamento entre dados cadastrais e dados de autenticação. O relacionamento entre **USUARIOS** e **AUTH** possui cardinalidade **1:1**, pois cada usuário possui exatamente um registro de autenticação e cada registro de autenticação pertence a apenas um usuário.

A entidade **PEDIDO** foi criada para registrar as informações de cada pedido realizado, armazenando a data do pedido, o usuário responsável e o valor total da compra. O atributo **preco_total** foi mantido na tabela para facilitar consultas e relatórios, evitando a necessidade de recalcular constantemente o valor total a partir dos itens associados.

A entidade **ITEM** representa os produtos disponíveis no sistema, armazenando informações como nome, descrição, quantidade em estoque e preço. Como um mesmo item pode aparecer em diversos pedidos e um pedido pode conter diversos itens, existe um relacionamento do tipo **N:N** entre **PEDIDO** e **ITEM**.

Para resolver esse relacionamento muitos-para-muitos, foi criada a entidade associativa **ITEM_PEDIDO**. Além de estabelecer a ligação entre pedidos e itens, essa entidade armazena atributos próprios do relacionamento, como a quantidade do produto adquirida e o valor unitário registrado no momento da venda. Essa abordagem garante a preservação do histórico das transações, mesmo que o preço do item seja alterado futuramente na tabela **ITEM**.

A chave primária composta da entidade **ITEM_PEDIDO**, formada pelos atributos **id_pedido** e **id_item**, assegura que um mesmo item não seja registrado mais de uma vez dentro do mesmo pedido, contribuindo para a integridade dos dados.

Por fim, o modelo lógico foi estruturado de forma normalizada, reduzindo redundâncias e garantindo consistência entre as informações armazenadas. As chaves primárias e estrangeiras foram definidas para assegurar a integridade referencial entre as entidades, permitindo que os relacionamentos representem fielmente as regras de negócio estabelecidas para o sistema.