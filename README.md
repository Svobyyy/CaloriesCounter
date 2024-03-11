# TrackIt

Full Stack Mobile Application for tracking Calories and Nutrition Facts with Barcode reader, Backend -> [Mobile Calories Application](https://github.com/Svobyyy/mobileBackEnd).

https://youtu.be/_ITC-0A5-lE?si=QQJqjckrvrD-pvgf

https://github.com/Svobyyy/TrackIt/assets/56925305/2b02eb63-ce20-47f1-9ff0-a3f83dc54c5a

  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/df29ae61-24d7-4e55-a034-8a52ad8ac82b" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/1dc29b19-373b-42bd-8428-e6a20727efd8" width="150">




## How to use 

![Static Badge](https://img.shields.io/badge/npm-red)

```bash 
# Install dependencies

npm install
```

```bash
# Run the application

npm start
```


## Technologies

- **React-Native** 
- **TypeScript** 
- **Redux-Toolkit** 
- **React-Navigation** 



## Key Features

### Summary

* Tracks Calories and Nutrition Facts.
* Changes color depending on a percentage of a Goal.

  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/9d0854d4-eb1f-451a-b8dc-4405da9f87b7" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/5925e3da-3507-449a-a0bd-0b847012cd08" width="150">

### Calendar

* Displays a Day with a current Date.
* Capable of changing a Day, Month and Year.


  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/7a16ab7f-e5b4-4bb7-820b-b0352e3ee81b" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/665fd276-cd0e-4b42-a44d-aecc686f9609" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/07db8ad8-230a-4113-959a-00c413512081" width="150">



### Diet

* Deletes a Product from Diet's collection.
* Displays Calories based on a Quantity.
* Obtains information about a Product based on a Quantity.
* Updates Product's Date, Quantity and Time. [ Breakfast, Lunch, Dinner, Snacks ]

  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/3a31cab2-5a6b-4807-a06c-de90b9d342ec" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/552a6fab-9334-4f24-964b-097200562e36" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/6b678c9b-e458-4226-9c10-f0b400d0d17c" width="150">

### Find

* Finds Products which includes an Input Value `"pr"`.
* Find's Fetch Optimilazition
  ```javascript
    useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  ```
* Clears a Text of an Input Value `"pr"`.
* If Product's Barcode exists, It displays the Product otherwise send the barcode information to Add a Product `"8594205592214"`.
* Adds a Product.

  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/81f18f33-aa88-416a-bbaa-7144179e43db" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/bfdd3419-ea65-4cfe-92dd-0399dbeb3263" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/df29ae61-24d7-4e55-a034-8a52ad8ac82b" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/3bc21ded-f8b4-4b9b-8110-872e0b861dee" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/1dc29b19-373b-42bd-8428-e6a20727efd8" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/6d9c4338-02ee-493f-9ee3-3f231565c986" width="150">


### Product

* Updates a Product's information.
* If it is Adding a Product, it has option's icon with a Delete and Update, not like Updating from Diet .
* Deletes a Product from Product's collection.

  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/cc30c682-0379-4147-90ed-854c0d8b732c" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/e74ee2cc-a0ab-45fb-8f66-ed24e4479a4d" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/71ab9d60-aa58-4d93-81bd-701c1fa24729" width="150">
  <img src="https://github.com/Svobyyy/CaloriesCounter/assets/56925305/4ce9b292-a186-43ab-baca-0e81fe8f845c" width="150">


