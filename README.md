## Requisitos
* PHP 8.2 ou superior
* MySql 8 ou superior
* Composer


## Como rodar o projeto

No arquivo .env, configure as informações do banco de dados:

```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=livraria
    DB_USERNAME=seu_usuario
    DB_PASSWORD=sua_senha
```

### Testar a API

GET /api/books Retorna todos os livros.

GET /api/books/{id} Retorna um livro específico.

POST /api/books: Cria um novo livro. Exemplo de corpo da requisição:
```
	{	"id": 2,
		"title": "Senhor dos Aneis A sociedade do Anel",
		"author": "J.R.R. Tolkien",
		"isbn": "9788595084759",
		"pages": 577,
		"edition": "1st",
		"publisher": "HarperCollins",
		"created_at": "2024-09-19T03:27:19.000000Z",
		"updated_at": "2024-09-19T03:36:57.000000Z"
	},

```

PUT /api/books/{id} Atualiza as informações de um livro existente.

DELETE /api/books/{id} Deleta um livro.