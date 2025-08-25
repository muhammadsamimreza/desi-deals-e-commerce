const allBtns = document.getElementsByClassName("add-btn");
for (const button of allBtns) {
  button.addEventListener("click", () => {
    const productImage =
      button.parentNode.parentNode.children[0].children[0].src;
     

    const productTitle = button.parentNode.parentNode.children[1].children[1].innerText;
    
    const productPrice =
    button.parentNode.parentNode.children[1].children[2].children[0].innerText;
    // console.log(productPrice)

    const showSection = document.getElementById("Purchase-list");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-gray-100 shadow-md border-1 border-gray-300 m-3 rounded-xl flex justify-between items-center gap-14">
                <figure class="rounded-2xl">
                  <img
                    src="${productImage}"
                    alt=""
                    class="rounded-xl mx-auto w-14 pl-2"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title text-base font-semibold">${productTitle}</h2>
                  <p class="text-base text-gray-500 font-semibold">
                    <span>${productPrice}</span> Tk
                  </p>
                </div>
              </div>
    `;
    showSection.appendChild(div);

    const totalPrice = parseInt(document.getElementById('totalPrice').innerText);

    const currentBalance = Number(productPrice) + totalPrice;

    document.getElementById('totalPrice').innerText = currentBalance;

    const quantity = parseInt(document.getElementById('quantity').innerText);

    const totalQuantity = quantity + 1;
    document.getElementById('quantity').innerText = totalQuantity;

  });
  // document.getElementById('Purchase-list').innerText ='';
}
