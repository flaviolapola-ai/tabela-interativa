let productID = 1001;

document .getElementById('productForm').addEventListener('submit',function (e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const priceValue= parseFloat(document.getElementById('price').value);
    const qty= parceInt(document.getElementById('qty').value);

    const priceFormatted = priceValue.toLacaleString('pt-BR', {minumumFractionDigits: 2});



    let statusLabel, statusClass;

    if(qty===0){
        statusLabel = "Esgotado";
        statusClass = "esgotado";
    }else if (qty <= 5){
        statusLabel = "Baixo Estoque";
        statusClass = "baixo estoque";
    }else{
        statusLbel = "Em Estoque";
        statusClass = "em estoque";
    }

    const tableBody = document.querySelection('#aproductsTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td data-label="ID">#${productid++}</td>
    <td data-label="Produto"> <strong>${name}} </strong> </td>
    <td data-label="Categoria">${category}}</td>
    <td data-label="Preço" class="price"<R$${priceFormatted}</td>
    <td data-label="Qtd.">${qty}</td>
    <td data-label="Status"><span class="status ${statusClass}"> ${statusLabel} </span> </td>

    `;

    tableBody.appendChild(newRow);

    this.reset();
    
});
    
    