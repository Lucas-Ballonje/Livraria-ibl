## Requisitos
* PHP 8.2 ou superior
* MySql 8 ou superior
* Composer
* Xampp
* Node 20.11.1


## Como rodar o projeto

Entre na pasta livraria - ibl no arquivo .env, configure as informações do banco de dados:

```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=livraria
    DB_USERNAME=seu_usuario
    DB_PASSWORD=sua_senha
```

Gere a chave da aplicação com: 

```
php artisan key:generate
```

Em seguida crie um modelo chamado book para a aplicação

```
php artisan make:model Book -m
```


* Para prosseguir baixe o xampp e inicie nele APENAS o apache e o mysql

Prosseguindo utilize o código abaixo para iniciar o servidor

```
php artisan serve
```

Em seguida não esqueça de entrar pasta livraria - frontend e dar o seguinte comando
```
npm install
```

Para ter a visualização do front na mesma pasta inicie com: 

```
npm run dev
```



### Testar a API com insomnia

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