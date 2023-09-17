# API Specification

## Authentication

All API must use this authentication

Request :
- Header :
	- X-Api-Key : "your secret api key"

## Get Article

Request :
- Method : GET
- Endpoint : `/api/articles/{id_article}`
- Header :
	- Accept: application/json

Response :

```json 
{
	"code" : "number",
	"status" : "string",
	"data" : {
		"id" : "string, unique",
		"image" : "string",
		"title" : "long",
		"subtitle" : "long",
		"desc" : "long",
		"createdAt" : "date",
		"updatedAt" : "date"
	}
}
```

## List Articles

Request :
- Method : GET
- Endpoint : `/api/Articles`
- Header :
	- Accept: application/json
- Query Param :
	- size : number,
	- page : number

Response :

```json 
{
	"code" : "number",
	"status" : "string",
	"data" : [
		{
			"id" : "string, unique",
			"image" : "string",
			"title" : "long",
			"slug" : "long",
			"subtitle" : "long",
			"desc" : "long",
			"createdAt" : "date",
			"updatedAt" : "date"
		},
		{
			"id" : "string, unique",
			"image" : "string",
			"title" : "long",
			"slug" : "long",
			"subtitle" : "long",
			"desc" : "long",
			"createdAt" : "date",
			"updatedAt" : "date"
		}
	]
}
```