
-- seeds - População inicial 
-- Total estimado: 310 ~ 360 registros


USE substituir   -- <<< trocar quando o projeto estiver pronto

-- 1. USUARIOS (100 registros)

INSERT INTO usuarios(id_usuarios, nome_usuarios, email_usuarios, cargo_usuarios) VALUES
('1', 'João Silva', 'joao.silva@email.com', 'Atendente'),
('2', 'Maria Oliveira', 'maria.oliveira@email.com', 'Vendedor'),
('3', 'Pedro Santos', 'pedro.santos@email.com', 'Gerente'),
('4', 'Ana Costa', 'ana.costa@email.com', 'Atendente'),
('5', 'Lucas Ferreira', 'lucas.ferreira@email.com', 'Vendedor'),
('6', 'Juliana Mendes', 'juliana.mendes@email.com', 'Gerente'),
('7', 'Roberto Almeida', 'roberto.almeida@email.com', 'Atendente'),
('8', 'Carla Souza', 'carla.souza@email.com', 'Vendedor'),
('9', 'Fernando Lima', 'fernando.lima@email.com', 'Gerente'),
('10', 'Patrícia Rocha', 'patricia.rocha@email.com', 'Atendente'),
('11', 'Marcos Ribeiro', 'marcos.ribeiro@email.com', 'Vendedor'),
('12', 'Camila Barbosa', 'camila.barbosa@email.com', 'Gerente'),
('13', 'Rafael Martins', 'rafael.martins@email.com', 'Atendente'),
('14', 'Larissa Carvalho', 'larissa.carvalho@email.com', 'Vendedor'),
('15', 'Thiago Pereira', 'thiago.pereira@email.com', 'Gerente'),
('16', 'Vanessa Gomes', 'vanessa.gomes@email.com', 'Atendente'),
('17', 'Bruno Cardoso', 'bruno.cardoso@email.com', 'Vendedor'),
('18', 'Amanda Torres', 'amanda.torres@email.com', 'Gerente'),
('19', 'Gustavo Nunes', 'gustavo.nunes@email.com', 'Atendente'),
('20', 'Beatriz Moreira', 'beatriz.moreira@email.com', 'Vendedor'),
('21', 'Eduardo Lopes', 'eduardo.lopes@email.com', 'Atendente'),
('22', 'Renata Teixeira', 'renata.teixeira@email.com', 'Vendedor'),
('23', 'Felipe Azevedo', 'felipe.azevedo@email.com', 'Gerente'),
('24', 'Sabrina Freitas', 'sabrina.freitas@email.com', 'Atendente'),
('25', 'Daniel Castro', 'daniel.castro@email.com', 'Vendedor'),
('26', 'Priscila Dias', 'priscila.dias@email.com', 'Gerente'),
('27', 'André Batista', 'andre.batista@email.com', 'Atendente'),
('28', 'Natália Campos', 'natalia.campos@email.com', 'Vendedor'),
('29', 'Leonardo Ramos', 'leonardo.ramos@email.com', 'Gerente'),
('30', 'Elaine Duarte', 'elaine.duarte@email.com', 'Atendente'),
('31', 'Vinícius Correia', 'vinicius.correia@email.com', 'Vendedor'),
('32', 'Tatiane Farias', 'tatiane.farias@email.com', 'Gerente'),
('33', 'Caio Moraes', 'caio.moraes@email.com', 'Atendente'),
('34', 'Débora Fernandes', 'debora.fernandes@email.com', 'Vendedor'),
('35', 'Alexandre Neves', 'alexandre.neves@email.com', 'Gerente'),
('36', 'Bianca Rezende', 'bianca.rezende@email.com', 'Atendente'),
('37', 'Diego Cunha', 'diego.cunha@email.com', 'Vendedor'),
('38', 'Helena Pires', 'helena.pires@email.com', 'Gerente'),
('39', 'Igor Machado', 'igor.machado@email.com', 'Atendente'),
('40', 'Letícia Monteiro', 'leticia.monteiro@email.com', 'Vendedor'),
('41', 'Wesley Vieira', 'wesley.vieira@email.com', 'Gerente'),
('42', 'Mônica Andrade', 'monica.andrade@email.com', 'Atendente'),
('43', 'Otávio Brito', 'otavio.brito@email.com', 'Vendedor'),
('44', 'Cristina Melo', 'cristina.melo@email.com', 'Gerente'),
('45', 'Henrique Paiva', 'henrique.paiva@email.com', 'Atendente'),
('46', 'Simone Xavier', 'simone.xavier@email.com', 'Vendedor'),
('47', 'Leandro Fontes', 'leandro.fontes@email.com', 'Gerente'),
('48', 'Aline Guimarães', 'aline.guimaraes@email.com', 'Atendente'),
('49', 'César Domingues', 'cesar.domingues@email.com', 'Vendedor'),
('50', 'Viviane Tavares', 'viviane.tavares@email.com', 'Gerente'),
('51', 'Samuel Rocha', 'samuel.rocha@email.com', 'Atendente'),
('52', 'Isabela Nogueira', 'isabela.nogueira@email.com', 'Vendedor'),
('53', 'Murilo Siqueira', 'murilo.siqueira@email.com', 'Gerente'),
('54', 'Rafaela Assis', 'rafaela.assis@email.com', 'Atendente'),
('55', 'Fábio Peixoto', 'fabio.peixoto@email.com', 'Vendedor'),
('56', 'Cláudia Macedo', 'claudia.macedo@email.com', 'Gerente'),
('57', 'Jorge Amaral', 'jorge.amaral@email.com', 'Atendente'),
('58', 'Paula Cerqueira', 'paula.cerqueira@email.com', 'Vendedor'),
('59', 'Márcio Bastos', 'marcio.bastos@email.com', 'Gerente'),
('60', 'Flávia Matos', 'flavia.matos@email.com', 'Atendente'),
('61', 'Renan Coelho', 'renan.coelho@email.com', 'Vendedor'),
('62', 'Kelly Barros', 'kelly.barros@email.com', 'Gerente'),
('63', 'Sérgio Figueiredo', 'sergio.figueiredo@email.com', 'Atendente'),
('64', 'Lívia Queiroz', 'livia.queiroz@email.com', 'Vendedor'),
('65', 'Rodrigo Valente', 'rodrigo.valente@email.com', 'Gerente'),
('66', 'Marina Sales', 'marina.sales@email.com', 'Atendente'),
('67', 'Antônio Prado', 'antonio.prado@email.com', 'Vendedor'),
('68', 'Evelyn Marques', 'evelyn.marques@email.com', 'Gerente'),
('69', 'Cauã Reis', 'caua.reis@email.com', 'Atendente'),
('70', 'Denise Arantes', 'denise.arantes@email.com', 'Vendedor'),
('71', 'Gilberto Maia', 'gilberto.maia@email.com', 'Gerente'),
('72', 'Yasmin Leal', 'yasmin.leal@email.com', 'Atendente'),
('73', 'Hugo Mendonça', 'hugo.mendonca@email.com', 'Vendedor'),
('74', 'Noemi Viana', 'noemi.viana@email.com', 'Gerente'),
('75', 'Elias Franco', 'elias.franco@email.com', 'Atendente'),
('76', 'Solange Nascimento', 'solange.nascimento@email.com', 'Vendedor'),
('77', 'Jonathan Aguiar', 'jonathan.aguiar@email.com', 'Gerente'),
('78', 'Clarice Borges', 'clarice.borges@email.com', 'Atendente'),
('79', 'Adriano Pacheco', 'adriano.pacheco@email.com', 'Vendedor'),
('80', 'Mirella Fonseca', 'mirella.fonseca@email.com', 'Gerente'),
('81', 'Ruan Carvalho', 'ruan.carvalho@email.com', 'Atendente'),
('82', 'Tainá Lacerda', 'taina.lacerda@email.com', 'Vendedor'),
('83', 'Nelson Miranda', 'nelson.miranda@email.com', 'Gerente'),
('84', 'Lorena Pinheiro', 'lorena.pinheiro@email.com', 'Atendente'),
('85', 'Davi Coutinho', 'davi.coutinho@email.com', 'Vendedor'),
('86', 'Maíra Furtado', 'maira.furtado@email.com', 'Gerente'),
('87', 'Ícaro Cabral', 'icaro.cabral@email.com', 'Atendente'),
('88', 'Raquel Valadares', 'raquel.valadares@email.com', 'Vendedor'),
('89', 'Osvaldo Carneiro', 'osvaldo.carneiro@email.com', 'Gerente'),
('90', 'Jéssica Amaral', 'jessica.amaral@email.com', 'Atendente'),
('91', 'Mateus Braga', 'mateus.braga@email.com', 'Vendedor'),
('92', 'Cecília Dantas', 'cecilia.dantas@email.com', 'Gerente'),
('93', 'Pablo Goulart', 'pablo.goulart@email.com', 'Atendente'),
('94', 'Verônica Vidal', 'veronica.vidal@email.com', 'Vendedor'),
('95', 'Luiz Henrique Moura', 'luiz.moura@email.com', 'Gerente'),
('96', 'Talita Vasconcelos', 'talita.vasconcelos@email.com', 'Atendente'),
('97', 'Jonas Falcão', 'jonas.falcao@email.com', 'Vendedor'),
('98', 'Nathalia Bastos', 'nathalia.bastos@email.com', 'Gerente'),
('99', 'Érica Sampaio', 'erica.sampaio@email.com', 'Atendente'),
('100', 'Célio Albuquerque', 'celio.albuquerque@email.com', 'Vendedor');

-- 2. AUTH (100 registros)
-- Senha padrao para testes: password
INSERT INTO auth(id_auth, id_usuarios, email_auth, senha_auth)
SELECT
    id_usuarios,
    id_usuarios,
    email_usuarios,
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.'
FROM usuarios;

-- 3. ITENS - FERRAMENTAS E MATERIAIS DE CONSTRUCAO (100 registros)
INSERT INTO item (id_item, nome_item, descricao_item, quantidade_item, preco_item) VALUES
('1', 'Jogo de Chaves de Fenda 6 peças', 'Stanley cromado', FLOOR(RAND()*80)+30, 89.90),
('2', 'Martelo de Unha 500g', 'Tramontina', FLOOR(RAND()*100)+40, 49.90),
('3', 'Furadeira de Impacto 550W', 'Bosch GSB 550', FLOOR(RAND()*25)+8, 289.90),
('4', 'Chave de Grifo 12"', 'Stanley', FLOOR(RAND()*60)+20, 79.90),
('5', 'Serrote para Madeira 20"', 'Tramontina', FLOOR(RAND()*50)+15, 59.90),
('6', 'Alicate Universal 8"', 'Stanley', FLOOR(RAND()*90)+35, 69.90),
('7', 'Nivel a Laser 20m', 'Bosch', FLOOR(RAND()*30)+10, 229.90),
('8', 'Jogo de Chaves Allen 1.5-10mm', '12 peças', FLOOR(RAND()*70)+25, 45.90),
('9', 'Parafusadeira/Furadeira 12V', 'Stanley', FLOOR(RAND()*35)+12, 349.90),
('10', 'Esquadro de Alumínio 30cm', 'Tramontina', FLOOR(RAND()*80)+30, 39.90),
('11', 'Lixa para Madeira Kit 10 un', 'Grão variado', FLOOR(RAND()*120)+50, 29.90),
('12', 'Chave Inglesa Ajustável 10"', 'Stanley', FLOOR(RAND()*65)+20, 65.90),
('13', 'Martelo de Borracha Branco', 'Vonder', FLOOR(RAND()*55)+15, 55.90),
('14', 'Serra Tico-Tico 450W', 'Bosch', FLOOR(RAND()*20)+5, 289.90),
('15', 'Jogo de Soquetes 1/2" 46 peças', 'Stanley', FLOOR(RAND()*40)+10, 189.90),
('16', 'Trena 5 metros', 'Stanley FatMax', FLOOR(RAND()*90)+40, 49.90),
('17', 'Alicate de Corte Diagonal', 'Tramontina', FLOOR(RAND()*85)+30, 42.90),
('18', 'Chave de Torção 1/2"', 'Stanley', FLOOR(RAND()*45)+15, 119.90),
('19', 'Grampeador Manual Profissional', 'Vonder', FLOOR(RAND()*60)+20, 79.90),
('20', 'Kit Ferramentas Básico 129 peças', 'Completo com maleta', FLOOR(RAND()*25)+8, 429.90),
('21', 'Cimento CP II 50kg', 'Saco de cimento para obras gerais', FLOOR(RAND()*150)+50, 39.90),
('22', 'Argamassa AC I 20kg', 'Argamassa para assentamento interno', FLOOR(RAND()*180)+60, 18.90),
('23', 'Argamassa AC III 20kg', 'Argamassa para porcelanato e áreas externas', FLOOR(RAND()*120)+40, 34.90),
('24', 'Rejunte Flexível Branco 1kg', 'Rejunte acrílico para pisos e paredes', FLOOR(RAND()*140)+40, 12.90),
('25', 'Cal Hidratada 20kg', 'Cal para preparo de massas', FLOOR(RAND()*100)+35, 16.90),
('26', 'Areia Média Ensacada 20kg', 'Areia lavada para construção', FLOOR(RAND()*160)+50, 9.90),
('27', 'Brita 1 Ensacada 20kg', 'Pedra britada para concreto', FLOOR(RAND()*140)+40, 11.90),
('28', 'Massa Corrida PVA 18L', 'Massa para nivelamento de paredes internas', FLOOR(RAND()*60)+20, 79.90),
('29', 'Selador Acrílico 18L', 'Selador para paredes internas e externas', FLOOR(RAND()*55)+15, 119.90),
('30', 'Tinta Acrílica Branca 18L', 'Tinta fosca para parede', FLOOR(RAND()*70)+20, 189.90),
('31', 'Tinta Esmalte Sintético 3.6L', 'Esmalte branco brilhante', FLOOR(RAND()*45)+15, 98.90),
('32', 'Verniz Marítimo 3.6L', 'Proteção para madeira externa', FLOOR(RAND()*35)+10, 129.90),
('33', 'Rolo de Pintura 23cm', 'Rolo de lã para parede', FLOOR(RAND()*100)+30, 24.90),
('34', 'Pincel 2"', 'Pincel trincha para pintura', FLOOR(RAND()*120)+40, 8.90),
('35', 'Bandeja para Pintura Grande', 'Bandeja plástica reforçada', FLOOR(RAND()*90)+25, 19.90),
('36', 'Fita Crepe 48mm x 50m', 'Fita para mascaramento de pintura', FLOOR(RAND()*150)+50, 14.90),
('37', 'Lona Plástica 4x4m', 'Proteção para piso e móveis', FLOOR(RAND()*80)+20, 22.90),
('38', 'Espátula de Aço 10cm', 'Espátula para massa e raspagem', FLOOR(RAND()*90)+25, 17.90),
('39', 'Desempenadeira de Aço Lisa', 'Ferramenta para aplicação de massa', FLOOR(RAND()*70)+20, 32.90),
('40', 'Desempenadeira Dentada 8mm', 'Ferramenta para argamassa e revestimento', FLOOR(RAND()*70)+20, 29.90),
('41', 'Colher de Pedreiro 8"', 'Colher de aço com cabo de madeira', FLOOR(RAND()*85)+25, 21.90),
('42', 'Prumo de Centro 400g', 'Prumo metálico para alinhamento', FLOOR(RAND()*45)+15, 24.90),
('43', 'Linha de Pedreiro 100m', 'Linha trançada para marcação', FLOOR(RAND()*100)+30, 12.90),
('44', 'Mangueira de Nível 10m', 'Mangueira cristal para nivelamento', FLOOR(RAND()*60)+20, 18.90),
('45', 'Carrinho de Mão 50L', 'Caçamba metálica reforçada', FLOOR(RAND()*25)+8, 249.90),
('46', 'Pá de Bico com Cabo', 'Pá para areia, terra e entulho', FLOOR(RAND()*60)+20, 59.90),
('47', 'Enxada Larga com Cabo', 'Enxada forjada para obra e jardim', FLOOR(RAND()*45)+15, 64.90),
('48', 'Picareta com Cabo', 'Picareta para escavação', FLOOR(RAND()*30)+10, 89.90),
('49', 'Cavadeira Articulada', 'Cavadeira para postes e fundações', FLOOR(RAND()*25)+8, 119.90),
('50', 'Balde Plástico 12L', 'Balde reforçado para obra', FLOOR(RAND()*120)+40, 13.90),
('51', 'Caixa de Massa 20L', 'Caixa plástica para preparo de argamassa', FLOOR(RAND()*90)+30, 24.90),
('52', 'Escada Alumínio 5 Degraus', 'Escada doméstica dobrável', FLOOR(RAND()*30)+8, 219.90),
('53', 'Escada Extensível 2x8 Degraus', 'Escada de alumínio profissional', FLOOR(RAND()*18)+5, 599.90),
('54', 'Disco de Corte 4.1/2"', 'Disco para metal', FLOOR(RAND()*160)+50, 7.90),
('55', 'Disco Diamantado 110mm', 'Disco para cerâmica e porcelanato', FLOOR(RAND()*100)+30, 24.90),
('56', 'Broca para Concreto 6mm', 'Broca vídea para alvenaria', FLOOR(RAND()*130)+40, 8.90),
('57', 'Broca para Concreto 8mm', 'Broca vídea para alvenaria', FLOOR(RAND()*130)+40, 10.90),
('58', 'Broca para Metal 5mm', 'Broca aço rápido', FLOOR(RAND()*120)+35, 9.90),
('59', 'Jogo de Brocas 15 peças', 'Brocas para metal, madeira e concreto', FLOOR(RAND()*60)+15, 69.90),
('60', 'Serra Copo 32mm', 'Serra copo para madeira e gesso', FLOOR(RAND()*45)+12, 39.90),
('61', 'Lâmina Serra Tico-Tico Madeira', 'Kit com 5 lâminas', FLOOR(RAND()*80)+25, 24.90),
('62', 'Lâmina Serra Tico-Tico Metal', 'Kit com 5 lâminas', FLOOR(RAND()*70)+20, 29.90),
('63', 'Parafuso Philips 4x40mm', 'Pacote com 100 unidades', FLOOR(RAND()*120)+40, 18.90),
('64', 'Parafuso Sextavado 1/4"', 'Pacote com 50 unidades', FLOOR(RAND()*100)+30, 24.90),
('65', 'Bucha Nylon 6mm', 'Pacote com 100 unidades', FLOOR(RAND()*140)+50, 12.90),
('66', 'Bucha Nylon 8mm', 'Pacote com 100 unidades', FLOOR(RAND()*130)+45, 16.90),
('67', 'Prego 17x27 1kg', 'Prego com cabeça para madeira', FLOOR(RAND()*100)+35, 19.90),
('68', 'Prego 18x30 1kg', 'Prego com cabeça para madeira', FLOOR(RAND()*100)+35, 21.90),
('69', 'Arame Recozido 1kg', 'Arame para amarração de ferragens', FLOOR(RAND()*85)+25, 18.90),
('70', 'Vergalhão CA-50 8mm 12m', 'Barra de aço para concreto armado', FLOOR(RAND()*70)+20, 42.90),
('71', 'Vergalhão CA-50 10mm 12m', 'Barra de aço para concreto armado', FLOOR(RAND()*60)+15, 59.90),
('72', 'Tela Soldada Q92 2x3m', 'Tela para reforço de concreto', FLOOR(RAND()*45)+10, 89.90),
('73', 'Tubo PVC Água 25mm 6m', 'Tubo soldável para água fria', FLOOR(RAND()*90)+25, 24.90),
('74', 'Tubo PVC Água 32mm 6m', 'Tubo soldável para água fria', FLOOR(RAND()*75)+20, 39.90),
('75', 'Tubo PVC Esgoto 50mm 6m', 'Tubo branco para esgoto', FLOOR(RAND()*80)+20, 49.90),
('76', 'Tubo PVC Esgoto 100mm 6m', 'Tubo branco para esgoto', FLOOR(RAND()*65)+15, 89.90),
('77', 'Joelho PVC 90 Graus 25mm', 'Conexão soldável para água fria', FLOOR(RAND()*160)+50, 2.90),
('78', 'Joelho PVC Esgoto 100mm', 'Conexão para rede de esgoto', FLOOR(RAND()*100)+30, 11.90),
('79', 'Registro Esfera PVC 25mm', 'Registro para água fria', FLOOR(RAND()*80)+20, 18.90),
('80', 'Torneira Boia 1/2"', 'Torneira para caixa d água', FLOOR(RAND()*60)+15, 29.90),
('81', 'Fita Veda Rosca 18mm x 25m', 'Fita para conexões hidráulicas', FLOOR(RAND()*180)+60, 5.90),
('82', 'Adesivo PVC 75g', 'Cola para tubos e conexões PVC', FLOOR(RAND()*100)+30, 12.90),
('83', 'Silicone Acético Transparente', 'Selante para vedação 280g', FLOOR(RAND()*90)+25, 19.90),
('84', 'Espuma Expansiva 500ml', 'Espuma PU para vedação e fixação', FLOOR(RAND()*70)+20, 34.90),
('85', 'Interruptor Simples 10A', 'Módulo branco para parede', FLOOR(RAND()*120)+40, 9.90),
('86', 'Tomada 2P+T 10A', 'Tomada padrão brasileiro', FLOOR(RAND()*130)+40, 11.90),
('87', 'Disjuntor Monopolar 20A', 'Disjuntor DIN para quadro elétrico', FLOOR(RAND()*70)+20, 18.90),
('88', 'Cabo Flexível 2.5mm 100m', 'Rolo de cabo elétrico azul', FLOOR(RAND()*30)+8, 229.90),
('89', 'Cabo Flexível 4mm 100m', 'Rolo de cabo elétrico preto', FLOOR(RAND()*25)+6, 349.90),
('90', 'Eletroduto Corrugado 3/4"', 'Rolo com 50 metros', FLOOR(RAND()*45)+12, 79.90),
('91', 'Caixa de Luz 4x2"', 'Caixa plástica para embutir', FLOOR(RAND()*180)+60, 3.90),
('92', 'Lâmpada LED 9W', 'Lâmpada branca bivolt', FLOOR(RAND()*150)+50, 8.90),
('93', 'Refletor LED 50W', 'Refletor bivolt para área externa', FLOOR(RAND()*60)+15, 69.90),
('94', 'Fechadura Externa Cromada', 'Fechadura para porta de madeira', FLOOR(RAND()*45)+12, 89.90),
('95', 'Dobradiça 3" Cromada', 'Cartela com 3 unidades', FLOOR(RAND()*100)+30, 19.90),
('96', 'Cadeado 40mm', 'Cadeado em latão com duas chaves', FLOOR(RAND()*80)+20, 34.90),
('97', 'Telha Fibrocimento 2.44m', 'Telha ondulada de fibrocimento', FLOOR(RAND()*80)+20, 59.90),
('98', 'Cumeeira Fibrocimento', 'Peça para acabamento de telhado', FLOOR(RAND()*45)+12, 44.90),
('99', 'Forro PVC Branco 200mm', 'Régua de forro PVC por metro', FLOOR(RAND()*120)+40, 18.90),
('100', 'Rodapé Cerâmico Branco', 'Peça de acabamento para piso', FLOOR(RAND()*100)+30, 9.90);


-- 4. PEDIDOS (30 registros aleatórios)
--
INSERT INTO pedido (data_pedido, id_usuarios, preco_total)
SELECT 
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND()*60) DAY),
    FLOOR(RAND()*100)+1,
    ROUND(RAND()*1200 + 80, 2)
FROM information_schema.tables 
LIMIT 30;


-- 5. ITENS DOS PEDIDOS (~120 registros)

INSERT INTO item_pedido (id_pedido, id_item, quantidade_produto, valor_unitario)
SELECT 
    p.id_pedido,
    FLOOR(RAND()*100)+1,
    FLOOR(RAND()*6)+1,
    i.preco_item * (0.95 + RAND()*0.2)
FROM pedido p
CROSS JOIN item i 
LIMIT 120;


-- Verificação final

SELECT 'Usuarios' AS Tabela, COUNT(*) AS Total FROM usuarios
UNION ALL
SELECT 'Itens (Ferramentas)', COUNT(*) FROM item
UNION ALL
SELECT 'Pedidos', COUNT(*) FROM pedido
UNION ALL
SELECT 'Itens_Pedido', COUNT(*) FROM item_pedido;


-- prescisamos testar essas scripts
