
CREATE INDEX idx_pedido_data ON pedido (data_pedido);


CREATE INDEX idx_pedido_usuario ON pedido (id_usuarios);


CREATE INDEX idx_item_pedido_item ON item_pedido (id_item);


CREATE INDEX idx_item_pedido_pedido ON item_pedido (id_pedido);


CREATE INDEX idx_item_nome ON item (nome_item);


CREATE INDEX idx_usuario_cargo ON usuarios (cargo_usuarios);

SELECT
    p.data_pedido,
    COUNT(DISTINCT p.id_pedido) AS total_pedidos,
    SUM(ip.quantidade_produto * ip.valor_unitario) AS faturamento_bruto,
    ROUND(
        SUM(ip.quantidade_produto * ip.valor_unitario) / COUNT(DISTINCT p.id_pedido),
        2
    ) AS ticket_medio
FROM pedido p
INNER JOIN item_pedido ip ON p.id_pedido = ip.id_pedido
WHERE p.data_pedido BETWEEN '2025-01-01' AND '2025-12-31'
GROUP BY p.data_pedido
ORDER BY p.data_pedido;




SELECT
    i.id_item,
    i.nome_item,
    i.preco_item AS preco_atual,
    SUM(ip.quantidade_produto) AS quantidade_total_vendida,
    SUM(ip.quantidade_produto * ip.valor_unitario) AS valor_total_vendido,
    ROUND(AVG(ip.valor_unitario), 2) AS preco_medio_praticado,
    COUNT(DISTINCT ip.id_pedido) AS pedidos_que_contem_item
FROM item i
INNER JOIN item_pedido ip ON i.id_item = ip.id_item
GROUP BY i.id_item, i.nome_item, i.preco_item
ORDER BY quantidade_total_vendida DESC, valor_total_vendido DESC
LIMIT 20;





SELECT
    u.id_usuarios,
    u.nome_usuarios,
    u.cargo_usuarios,
    u.email_usuarios,
    COUNT(DISTINCT p.id_pedido) AS quantidade_pedidos,
    SUM(ip.quantidade_produto * ip.valor_unitario) AS total_gasto,
    ROUND(
        SUM(ip.quantidade_produto * ip.valor_unitario) / NULLIF(COUNT(DISTINCT p.id_pedido), 0),
        2
    ) AS ticket_medio_por_pedido
FROM usuarios u
INNER JOIN pedido p ON u.id_usuarios = p.id_usuarios
INNER JOIN item_pedido ip ON p.id_pedido = ip.id_pedido
WHERE u.cargo_usuarios IN ('Administrador', 'Gerente', 'Vendedor')
GROUP BY u.id_usuarios, u.nome_usuarios, u.cargo_usuarios, u.email_usuarios
HAVING COUNT(DISTINCT p.id_pedido) >= 1
ORDER BY total_gasto DESC;





SELECT
    p.id_pedido,
    p.data_pedido,
    u.nome_usuarios AS cliente,
    u.email_usuarios AS email_cliente,
    i.nome_item AS item,
    i.descricao_item AS descricao,
    ip.quantidade_produto AS qtd,
    ip.valor_unitario AS valor_unit,
    (ip.quantidade_produto * ip.valor_unitario) AS subtotal
FROM pedido p
INNER JOIN usuarios u ON p.id_usuarios = u.id_usuarios
INNER JOIN item_pedido ip ON p.id_pedido = ip.id_pedido
INNER JOIN item i ON ip.id_item = i.id_item
WHERE p.id_pedido = 1
ORDER BY i.nome_item;





SELECT
    i.id_item,
    i.nome_item,
    i.quantidade_item AS estoque_atual,
    COALESCE(SUM(ip.quantidade_produto), 0) AS quantidade_vendida,
    CASE
        WHEN i.quantidade_item = 0 THEN 'ESTOQUE ZERADO'
        WHEN SUM(ip.quantidade_produto) IS NULL THEN 'SEM VENDAS'
        WHEN i.quantidade_item < COALESCE(SUM(ip.quantidade_produto) * 0.3, 0)
            THEN 'ESTOQUE CRÍTICO'
        ELSE 'OK'
    END AS status_estoque,
    i.preco_item AS preco_cadastrado,
    ROUND(COALESCE(AVG(ip.valor_unitario), 0), 2) AS preco_medio_praticado,
    ROUND(i.preco_item - COALESCE(AVG(ip.valor_unitario), 0), 2) AS diferenca_preco,
    CASE
        WHEN i.preco_item > 0 THEN
            ROUND(
                ((i.preco_item - COALESCE(AVG(ip.valor_unitario), 0)) / i.preco_item) * 100,
                2
            )
        ELSE 0
    END AS percentual_diferenca
FROM item i
LEFT JOIN item_pedido ip ON i.id_item = ip.id_item
LEFT JOIN pedido p ON ip.id_pedido = p.id_pedido
    AND p.data_pedido BETWEEN '2025-01-01' AND '2025-12-31'
GROUP BY i.id_item, i.nome_item, i.quantidade_item, i.preco_item
ORDER BY percentual_diferenca DESC, quantidade_vendida DESC;