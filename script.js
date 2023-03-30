function increment(incDec,pric,item){
    var count = document.getElementById(incDec);
    var price = document.getElementById(pric);
    var item = document.getElementById(item);
    var pr_amount = document.getElementById('pr_amount');
    var charge = document.getElementById('charge');
    var total_amount = document.getElementById('total_amount');
    // console.log(count.value);
    if(count.value >= 5){
        count.value = 5;
        alert('You will purchase maximum five items');

    }else{
        count.value++;
        var result = parseInt(price.innerHTML) + parseInt(item.innerHTML);
        item.innerHTML = result;
        pr_amount.innerHTML = parseInt(price.innerHTML) + parseInt(pr_amount.innerHTML);
        total_amount.innerHTML = parseInt(pr_amount.innerHTML) + parseInt(charge.innerHTML);

        var kupon_code_input = document.getElementById('Coupon_main_div');

        if(total_amount.innerHTML >= 200){
            kupon_code_input.style.display = "block";
        }
    }

}

// For Minus Button 
function decrement(incDec,pric,item)
{
    var count = document.getElementById(incDec);
    // var count = document.getElementById(incDec);
    var price = document.getElementById(pric);
    var item = document.getElementById(item);
    var pr_amount = document.getElementById('pr_amount');
    var charge = document.getElementById('charge');
    var total_amount = document.getElementById('total_amount');

    if(count.value <= 0){
        count.value = 0;
        alert('You can purchase minimum 1 items');
    }else{
        count.value--;
        var result = parseInt(item.innerHTML) - parseInt(price.innerHTML);
        item.innerHTML = result;
        pr_amount.innerHTML =  parseInt(pr_amount.innerHTML)-parseInt(price.innerHTML);
        total_amount.innerHTML = parseInt(pr_amount.innerHTML) + parseInt(charge.innerHTML);
    }
}

var kupon_code_input = document.getElementById('Coupon_main_div');
kupon_code_input.style.display = "none";
var apply = document.getElementById('apply');
apply.addEventListener('click',function(){
    var coupon_input = document.getElementById('coupon_INput');
    if(coupon_input.value == 'Jasim_Uddim'){
        var total_amount = document.getElementById('total_amount');
        total_amount.innerHTML = parseInt(total_amount.innerHTML) - 50;
        alert('congratulations');
        kupon_code_input.style.display = "none";
    }else{
        alert('Coupon has not matched');
    }
})