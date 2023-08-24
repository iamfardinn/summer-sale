let total = 0;
document.getElementById("btn-coupon").disabled = true;
document.getElementById("btn-purchase").disabled = true;

function handleClickBtn(target){
    const selectedItemContainer = document.getElementById('selected-items')
  const itemName=  target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement('li');
  li.innerText= itemName;
  selectedItemContainer.appendChild(li);

  const price=target.childNodes[3].childNodes[3].childNodes[1].innerText;
  total= parseFloat(total) + parseFloat(price);
  total=total.toFixed(2);
 document.getElementById("total").innerText=total;

 if (total > 0) {
    document.getElementById("btn-purchase").disabled = false;
  }
  
  if (total > 200) {
    document.getElementById("btn-coupon").disabled = false;
  }
}




document.getElementById("btn-coupon").addEventListener('click', function(){
    const apply = document.getElementById("coupon");
    const value = apply.value;
    if (total > 200 && value === 'SELL200') {
        const discount = total * 0.20;
        document.getElementById("discount").innerText = discount.toFixed(2);
        const totalPrice = total - discount;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    } else {
        alert('Inserted wrong coupon code');
    }
})
document.getElementById('btn-go-home').addEventListener('click',function(){
    window.location.href = 'index.html' 
})

