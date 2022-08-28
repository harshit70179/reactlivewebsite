const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    item:[],
    totalamount:0,
    discount:15,
    totaldiscount:0,
    grandtotal:0,
    discountcoupon:"hello",
    },
   
    reducers: {
        add(state, action) {
            
            state.item.push(action.payload);
            console.log(state.item.length===1)
        
        },
        remove(state, action) {
            
            return {...state, item : state.item.filter((item) => item.id !== action.payload)};
        },
       
        increament(state,action){
            let updatecart= state.item.map((cur)=>{
               if(cur.id===action.payload){
                console.log(cur.quantity + 1)
                return {...cur, quantity: cur.quantity + 1}
               }
               return cur
            });
               
            var sum =0;
            updatecart.map((item)=>{
                if(item.save===0){
                    sum= sum+item.price*item.quantity;
                }
                else{
                    sum= sum+((item.price)-((item.price*item.save)/100))*item.quantity;
                }
    
                               
               
                   return sum
            
                 })
            
            // console.log(updatecart)
            return {...state, item : updatecart, totalamount: sum, grandtotal: sum}
        },
        decrement(state,action){
            let updatecart= state.item.map((cur)=>{
               if(cur.id===action.payload){
                console.log(cur.quantity - 1)
                return {...cur, quantity:cur.quantity- 1}
               }
               return cur
            }).filter((cur)=> cur.quantity!==0);
            var sum =0;
            updatecart.map((item)=>{
                if(item.save===0){
                    sum= sum+item.price*item.quantity;
                }
                else{
                    sum= sum+((item.price)-((item.price*item.save)/100))*item.quantity;
                }
    
                               
               
                   return sum
            
                 })
            // console.log(updatecart)
            return {...state, item : updatecart, totalamount: sum, grandtotal: sum}
        },
        total(state, action){
            var sum =0;
           state.item.map((item)=>{
            if(item.save===0){
                sum= sum+item.price*item.quantity;
            }
            else{
                sum= sum+((item.price)-((item.price*item.save)/100))*item.quantity;
            }

                           
           
               return sum
        
             })
             console.log(sum)
             return {...state, totalamount: sum, grandtotal: sum}
        },
        grandtotals(state, action){
             var t=state.totalamount;
             var td1=t-((t*state.discount)/100);
             return{...state, grandtotal: td1}

        },
         finddiscount(state, action){
            var fd=state.totalamount;
            var fd1=((fd*state.discount)/100);
            
            return{...state, totaldiscount: fd1}
        }
    },
});

export const { add, remove, increament, decrement, total, grandtotals,finddiscount } = cartSlice.actions;
export default cartSlice.reducer;

