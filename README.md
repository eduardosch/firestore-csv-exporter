# Firestore CSV Exporter

> This project allow you to export one or more collections into csv files, check the step by step below

* 1 -
You have to create a serviceAccountKey on your firebase project and save it here with the name `serviceAccountKey.json`
* 2 - Create a file named `exportSettings.json` on this file you have to set all collections that you want to export and information about the collections
* 3 - Access this folder on a terminal and generate the files typing `node export.js`

### exportSettings example file
```json
[
    {
        "collection": "peopleCollection",
        "header": [
            {
                "id": "name",
                "title": "Name"
            },
            {
                "id": "surname",
                "title": "Surname"
            }
        ]
    }
    {
        "collection": "carsCollection",
        "header": [
            {
                "id": "model",
                "title": "Car Model"
            },
            {
                "id": "electric",
                "title": "Electric Car"
            }
        ]
    }
]
```

* On this example we are acessing 2 collections, peopleCollection and carsCollection.
* Every item on header represents a property of the collection


These settings will generate 2 csv files on the files folder with the name of the collection.
