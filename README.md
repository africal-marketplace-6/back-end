# back-end
Web backend for African Marketplace
deployed: 
https://african-marketplace-6.herokuapp.com/
--------------------
register:
/api/auth/register


expects an object like:



-----------------------
login:
/api/auth/login

expects an object like:



-----------------------
USERS ENDPOINTS
/api/users

expects an object like:
[
    {
        "user_id": 1,
        "username": "test",
        "password": "password",
        "email": "1234@1234.com"
    },
    {
        "user_id": 2,
        "username": "test2",
        "password": "password",
        "email": "test@1234.com"
    },
    {
        "user_id": 3,
        "username": "test3",
        "password": "password",
        "email": "test@123t4.com"
    }
]

/api/users/:id protected

expects an object like:
{
    "user_id": 1,
    "username": "test",
    "email": "1234@1234.com"
}

/api/users/:id/items

expects an object like:

[
    {
        "item_id": 1,
        "location": "Miami",
        "item": "Mango",
        "description": "A version of the Haden Mango, which originated in Coral Gables, Florida. The Tommy Atkins mango has since become one of the most important varieties of mango, and one of the most frequently consumed types of mango throughout the world.",
        "price": 4
    },
    {
        "item_id": 2,
        "location": "Cherry Land",
        "item": "Cherries",
        "description": "cherry, any of various trees belonging to the genus Prunus and their edible fruits",
        "price": 7
    },
    {
        "item_id": 3,
        "location": "Potato Land",
        "item": "Potatoes",
        "description": "The potato is a tuber, round or oval, with small white roots called \" eyes\", that are growth buds. The size varies depending on the variety; the colour of the skin can be white, yellow or even purple. The potato culture had an enormous importance in Ireland, since it was part of the basic food.",
        "price": 3
    }
]

-----------------------

ITEMS ENDPOINTS

/api/items

expects an object like:

[
    {
        "item": "Mango",
        "price": 4
    },
    {
        "item": "Cherries",
        "price": 7
    },
    {
        "item": "Potatoes",
        "price": 3
    },
    {
        "item": "Berries",
        "price": 5
    },
    {
        "item": "Butter",
        "price": 10
    },
    {
        "item": "Butter from 2nd user",
        "price": 10
    }
]

/api/items/:id

expects an object like:

