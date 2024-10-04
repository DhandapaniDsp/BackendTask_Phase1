# Customer Management API

## Overview

The Customer Management API

## API Endpoints

| Method | Endpoint                     | Description                   |
|--------|------------------------------|-------------------------------|
| POST   | `/api/customers`             | Create a new customer         |
| GET    | `/api/customers`             | Get all customers             |
| GET    | `/api/customers/:id`         | Get a customer by UUID        |
| PUT    | `/api/customers/:id`         | Update a customer by UUID     |
| DELETE | `/api/customers/:id`         | Delete a customer by UUID     |


## Create Payload 

{
            "name": "xxxx",
            "email": "yyy@example.com",
            "phone": "123-456-7890"
}

## Update Payload

{
            "id": "12a34-453t5-344t6-345rt"
            "name": "xxxx",
            "email": "yyy@example.com",
            "phone": "123-456-7890"
}

## Error Handling

The API provides error handling for the following scenarios...

## Host 

The port is 5000 

## command 

code run command : npm start


