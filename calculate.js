function DisplayPrice(price){
    var val1 = 0;
    for( i = 0; i < document.form1.price.length; i++ ){
        if( document.form1.price[i].checked == true ){
            val1 = document.form1.price[i].value;
        }
    }

    var val2 = 0;
    for( i = 0; i < document.form2.price2.length; i++ ){
        if( document.form2.price2[i].checked == true ){
            val2 = document.form2.price2[i].value;
        }
    }

    var sum=parseInt(val1) + parseInt(val2);
    document.getElementById('totalSum').value=sum;
}
