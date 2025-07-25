
// Startform 
// const form = document.createElement('form');
// form.setAttribute('action', '');
// form.setAttribute('method', 'post');
// form.classList.add('bg-light', 'p-4', 'rounded', 'shadow');

// Product Name Input
const ProductName = document.querySelector('#ProductName');
const productPrice = document.querySelector('#Product-price');
const productcategory = document.querySelector('#productcategory');
const productDescription = document.querySelector('#message');

const btnSubmit = document.querySelector('#btnSubmit');
const successMessage = document.querySelector('#successMessage');
const productTableBody = document.querySelector('#productTableBody');

const products = [];

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const Product = {
        name: ProductName.value.trim(),
        price: productPrice.value.trim(),
        description: productDescription.value.trim(),
        category: productcategory.value.trim()
    };

    // تأكد إن البيانات مش فاضية
    if (!Product.name || !Product.price || !Product.description || !Product.category) {
        if (successMessage) {
            successMessage.textContent = 'يرجى ملء جميع الحقول ❌';
            successMessage.style.color = 'red';
            setTimeout(() => {
                successMessage.textContent = '';
            }, 2000);
        }
        return;
    }

    products.push(Product);
    console.log(Product);

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${Product.name}</td>
        <td>${Product.price}</td>
        <td>${Product.description}</td>
        <td>${Product.category}</td>
    `;
    productTableBody.appendChild(row);


    ProductName.value = '';
    productPrice.value = '';
    productDescription.value = '';
    productcategory.value = '';


    if (successMessage) {
        successMessage.textContent = 'تمت إضافة المنتج بنجاح ✅';
        successMessage.style.color = 'green';
        setTimeout(() => {
            successMessage.textContent = '';
        }, 2000);
    }
});

    // e.preventDefault();
    // const productNameValue = ProductName.value;
    // const productPriceValue = productPrice.value;
    // const productDescriptionValue = productDescription.value;

    // if (productNameValue && productPriceValue && productDescriptionValue) {
    //   console.log('Product Name:', productNameValue);
    //   console.log('Product Price:', productPriceValue);
    //   console.log('Product Description:', productDescriptionValue);
    //   successMessage.textContent = 'Product added successfully!';
    //  successMessage.classList.remove('d-none');
      // Here you can add the logic to handle the form submission, like sending data to a server.
   // } else {
    //  alert('Please fill in all form.');
    //}