document.getElementById("searchButton").addEventListener("click", function() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const resultsBody = document.getElementById("resultsBody");

const ex11 = document.getElementById("ex.1.1");
const t_a = document.getElementById("t_a");
const t_b = document.getElementById("t_b");

ex11.innerHTML = `Привіт! Мене звати Котів Богдан Адріан, студент групи ІПЗ-22.`;

function calculation() {
    let x= 12;
    let y= 5;
    let z = 9;
    let result= "F = " + 1 / (x + y + z);
    console.log(result);
}
function fun(text){
    console.log(text);
}
function dateOfBirth(){
    alert("Я народився 09.12.2005 року")
}

/** Обчислення з полів **/
let a, b;
function calculation2(){
    a = parseInt(t_a.value);
    b = parseInt(t_b.value);
    let E = 0;
    let result = 0;
    for (let i = 2; i < 8; ++i) {
        let factI = i;
        let factIPlusOne = i;

        E += Math.pow(-1, i);
        for(let j = 1; j < i + 1; ++j) {
            factI *= j;
            console.log("factI " + factI);
        }
        for(let j = 1; j < i + 2; ++j) {
            factIPlusOne *= j;
            console.log("factIPlusOne " + factIPlusOne);
        }
        result += E * ((factI - (a * b)) / factIPlusOne);
        console.log("result " + result);
    }
    alert("Result: " + result);
}

const products = [
    { name: "Арахіс", price: 10, quantity: 50 },
    { name: "Алича", price: 5, quantity: 100 },
    { name: "Апельсин", price: 8, quantity: 30 },
    { name: "Кавун", price: 12, quantity: 20 },
    { name: "Ківі", price: 15, quantity: 15 },
];

    // Очищаємо результати перед новим пошуком
    resultsBody.innerHTML = "";

    // Фільтруємо продукти за введеним значенням
    const filteredProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(searchValue);
    });

// Додаємо результати до таблиці
    for (let i = 0; i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price} грн</td>
        <td>${product.quantity}</td>
    `;
        resultsBody.appendChild(row);
    }

});

const selectElement = document.getElementById('productSelect');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name; // Set the option value to the product name
    option.textContent = `${product.name} - ${product.price} грн (В наявності: ${product.quantity})`; // Display product name, price, and quantity
    selectElement.appendChild(option); // Append the option to the select element
});