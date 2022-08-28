import api from '../api/api';
const { createSlice} = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        increament(state,action){
            let updatecart= state.data.map((cur)=>{
               if(cur.id===action.payload){
                console.log(cur.quantity + 1)
                return {...cur, quantity: cur.quantity + 1}
               }
               return cur
            });
            // console.log(updatecart)
            return {...state, data : updatecart}
        },
        decreament(state,action){
            let updatecart= state.data.map((cur)=>{
               if(cur.id===action.payload){
                console.log(cur.quantity + 1)
                return {...cur, quantity: (cur.quantity===1?cur.quantity:cur.quantity - 1)}
               }
               return cur
            });
            // console.log(updatecart)
            return {...state, data : updatecart}
        },

    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProducts.pending, (state, action) => {
    //             state.status = STATUSES.LOADING;
    //         })
    //         .addCase(fetchProducts.fulfilled, (state, action) => {
    //             state.data = action.payload;
    //             state.status = STATUSES.IDLE;
    //         })
    //         .addCase(fetchProducts.rejected, (state, action) => {
    //             state.status = STATUSES.ERROR;
    //         });
    // },
});

export const { setProducts, setStatus, increament, decreament } = productSlice.actions;
export default productSlice.reducer;

// Thunks
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     return data;
// });

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            // const res = await fetch(api);
            // const data = await res.json();
            dispatch(setProducts(api));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}