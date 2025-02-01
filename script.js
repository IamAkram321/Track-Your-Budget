document.addEventListener("DOMContentLoaded",() =>{
    const form = document.querySelector("form");
    const table = document.querySelector("#budget-summary table");
    form.addEventListener("submit",(event) =>{
        event.preventDefault();
        const income = document.querySelector("#income").value;
        const expense = document.querySelector("#expense").value;
        const category = document.querySelector("#category").value;
        const date = document.querySelector("#date").value;
        if (!income && !expense) {
            alert("Please enter either an income or expense value.");
            return;
        }
        if (income && expense) {
            alert("Please enter only one at a time: income or expense.");
            return;
        }
        let amount = income?`${income}`:`${expense}`;
        let type = income?"income":"expense";
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${category}</td>
            <td>${amount}</td>
            <td>${date}</td>
            <td>${type}</td> `
            table.appendChild(newRow);
            form.reset();
    });
});