const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Proj-estoque API',
      version: '1.0.0',
      description: 'Documentacao das rotas da API de controle de estoque.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Mensagem de erro.',
            },
          },
        },
        AuthUser: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            name: {
              type: 'string',
              example: 'Maria Silva',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'maria@email.com',
            },
          },
        },
        AuthResponse: {
          type: 'object',
          properties: {
            user: {
              $ref: '#/components/schemas/AuthUser',
            },
            token: {
              type: 'string',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
          },
        },
        RegisterRequest: {
          type: 'object',
          required: ['nome', 'email', 'password'],
          properties: {
            nome: {
              type: 'string',
              example: 'Maria Silva',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'maria@email.com',
            },
            password: {
              type: 'string',
              minLength: 6,
              example: 'senha123',
            },
            cargo: {
              type: 'string',
              nullable: true,
              example: 'Gerente',
            },
          },
        },
        LoginRequest: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              example: 'maria@email.com',
            },
            password: {
              type: 'string',
              example: 'senha123',
            },
          },
        },
        Usuario: {
          type: 'object',
          properties: {
            id_usuarios: {
              type: 'integer',
              example: 1,
            },
            nome_usuarios: {
              type: 'string',
              example: 'Maria Silva',
            },
            email_usuarios: {
              type: 'string',
              format: 'email',
              example: 'maria@email.com',
            },
            cargo_usuarios: {
              type: 'string',
              nullable: true,
              example: 'Gerente',
            },
          },
        },
        UsuarioRequest: {
          type: 'object',
          required: ['nome_usuarios', 'email_usuarios'],
          properties: {
            nome_usuarios: {
              type: 'string',
              example: 'Maria Silva',
            },
            email_usuarios: {
              type: 'string',
              format: 'email',
              example: 'maria@email.com',
            },
            cargo_usuarios: {
              type: 'string',
              nullable: true,
              example: 'Gerente',
            },
          },
        },
        Item: {
          type: 'object',
          properties: {
            id_item: {
              type: 'integer',
              example: 1,
            },
            nome_item: {
              type: 'string',
              example: 'Mouse',
            },
            descricao_item: {
              type: 'string',
              nullable: true,
              example: 'Mouse sem fio',
            },
            quantidade_item: {
              type: 'integer',
              example: 20,
            },
            preco_item: {
              type: 'number',
              format: 'float',
              example: 89.9,
            },
          },
        },
        ItemRequest: {
          type: 'object',
          required: ['nome_item'],
          properties: {
            nome_item: {
              type: 'string',
              example: 'Mouse',
            },
            descricao_item: {
              type: 'string',
              nullable: true,
              example: 'Mouse sem fio',
            },
            quantidade_item: {
              type: 'integer',
              example: 20,
            },
            preco_item: {
              type: 'number',
              format: 'float',
              example: 89.9,
            },
          },
        },
        PedidoItemRequest: {
          type: 'object',
          required: ['id_item', 'quantidade_produto', 'valor_unitario'],
          properties: {
            id_item: {
              type: 'integer',
              example: 1,
            },
            quantidade_produto: {
              type: 'integer',
              example: 2,
            },
            valor_unitario: {
              type: 'number',
              format: 'float',
              example: 89.9,
            },
          },
        },
        PedidoRequest: {
          type: 'object',
          required: ['data_pedido', 'id_usuarios'],
          properties: {
            data_pedido: {
              type: 'string',
              format: 'date',
              example: '2026-06-21',
            },
            id_usuarios: {
              type: 'integer',
              example: 1,
            },
            itens: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/PedidoItemRequest',
              },
            },
          },
        },
        Pedido: {
          type: 'object',
          properties: {
            id_pedido: {
              type: 'integer',
              example: 1,
            },
            data_pedido: {
              type: 'string',
              format: 'date',
              example: '2026-06-21',
            },
            id_usuarios: {
              type: 'integer',
              example: 1,
            },
            preco_total: {
              type: 'number',
              format: 'float',
              example: 179.8,
            },
          },
        },
        ItemPedido: {
          type: 'object',
          properties: {
            id_pedido: {
              type: 'integer',
              example: 1,
            },
            id_item: {
              type: 'integer',
              example: 1,
            },
            quantidade_produto: {
              type: 'integer',
              example: 2,
            },
            valor_unitario: {
              type: 'number',
              format: 'float',
              example: 89.9,
            },
          },
        },
        ItemPedidoRequest: {
          type: 'object',
          required: ['id_pedido', 'id_item', 'quantidade_produto', 'valor_unitario'],
          properties: {
            id_pedido: {
              type: 'integer',
              example: 1,
            },
            id_item: {
              type: 'integer',
              example: 1,
            },
            quantidade_produto: {
              type: 'integer',
              example: 2,
            },
            valor_unitario: {
              type: 'number',
              format: 'float',
              example: 89.9,
            },
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, '../routes/*.js')],
};

module.exports = swaggerJSDoc(options);
