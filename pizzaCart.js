document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCart', function() {
      return {
        SmallTotal: 0.00, 
        SmallQuantity:0, 
        MediumTotal: 0.00, 
        MediumQuantity:0, 
        LargeTotal: 0.00, 
        LargeQuantity:0, 
            payNow: false,
            paymentAmount: 0,
            paymentMessage: '',

            buySmall(){
                this.SmallTotal += 50.00 ;
                this.SmallQuantity +=1
            },
            cancelSmall(){
                if(this.SmallQuantity>0){
                    this.SmallTotal -= 50.00 ;
                    this.SmallQuantity -=1
                }
            },
            buyMedium(){
                this.MediumTotal += 70.00 ;
                this.MediumQuantity +=1
            },
            cancelMedium(){
                if(this.MediumQuantity>0){
                    this.MediumTotal -= 70.00 ;
                    this.MediumQuantity -=1
                }
            },
            buyLarge(){
                this.LargeTotal += 100.00 ;
                this.LargeQuantity +=1
            },
            cancelLarge(){
                if(this.LargeQuantity>0){
                    this.LargeTotal -= 100.00 ;
                    this.LargeQuantity -=1
                }
            },
           
          
            cartTotal(){
                return this.SmallTotal + this.MediumTotal + this.LargeTotal
            },
            totalQuantity(){
                return this.SmallQuantity + this.MediumQuantity + this.LargeQuantity
            },
            makePayment(){
                if(!this.paymentAmount){
                    this.paymentMessage = 'No amount entered😕!'
                    setTimeout(() => {
                        this.paymentMessage = '';
                    }, 5000);
                }
                else if(this.paymentAmount >= this.cartTotal()){
                    this.paymentMessage = 'Payment successful! Enjoy your pizza😜!'
                    setTimeout(() => {
                        this.payNow=false;
                        this.showCart=false;
                        this.clearCart();
                    }, 8000);
                }else{
                    this.paymentMessage = 'Sorry-Enter sufficient amount.😕'
                    setTimeout(() => {
                        this.paymentMessage = '';
                        this.paymentAmount = 0;
                    }, 5000);
                }
            },
            clearCart(){
                this.SmallTotal= 0.00;
                this.SmallQuantity=0; 
                this.MediumTotal= 0.00; 
                this.MediumQuantity=0; 
                this.LargeTotal= 0.00; 
                this.LargeQuantity=0; 
                this.paymentMessage='';
                this.paymentAmount=0.00;
            }
      }
    })
})
