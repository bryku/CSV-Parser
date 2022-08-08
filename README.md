# CSV-Parser
Javascript Client Side CSV Parser

```
let file = `id,name,ingredients,instructions
1,spaghetti,"pasta, ground beef, spaghetti sauce","insert instructions here"
2,grilled cheese,"bread, cheese, butter","insert instructions here"`;
let database = CVS.parse(file);
```

Expected Output:

```
   [
       {
           id: "1",
           name: "spaghetti",
           ingredients: "pasta, ground beef, spaghetti sauce",
           instructions: "insert instructions here"
       },
       {
            id: "2",
            name: "grilled cheese",
            ingredients: "bread, cheese, butter",
            instructions: "insert instructions here"
        }
    ]
```

# Declaring Types

```
let file = `id,name,ingredients,instructions
1,spaghetti,"pasta, ground beef, spaghetti sauce","insert instructions here"
2,grilled cheese,"bread, cheese, butter","insert instructions here"`;
let database = CSV.parse(file,{id: 'number',ingredients: 'array'});
```

Excepted Output:

```
   [
       {
           id: 1,
           name: 'spaghetti',
           ingredients: ['pasta', 'ground beef', 'spaghetti sauce' ],
           instructions: 'insert instructions here'
       },
       {
            id: 2,
            name: 'grilled cheese',
            ingredients: [ 'bread', 'cheese', 'butter' ],
            instructions: 'insert instructions here'
        }
    ]
```
