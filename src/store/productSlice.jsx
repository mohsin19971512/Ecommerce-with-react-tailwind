import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const savedCartItems = localStorage.getItem('cartItemsNum') || 0;
// const [activeNav, setactiveNav] = useState(false);

const initialState = {
    items : [],
    products_category_types : [],
    productDetails : [],
    categoryTypes : [],
    productsInCart : [],
    categories : [],
    totalPrice : 0,
    total_items:  0,
    cartItemsNum : savedCartItems,
    activeNav : false,
    newactiveNav : false,
    isLoading: false,
    error : null,
    status : null,
    isOrderCreated : false,
    completed : [],
}


export const productFetch = createAsyncThunk(
    "products/productFetch",
    async(_,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;
        try {
        const response = await fetch("http://127.0.0.1:8000/api/products");
        const data = await response.clone().json();
        return data;
        }catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

export const productsInCarts = createAsyncThunk(
    "products/productsInCarts",    
    async(userToken,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        console.log("cart step 2")
        try {
        console.log("cart step 3")
        const response = await fetch(`http://127.0.0.1:8000/api/orders/cart`, {
            headers: {
              "Authorization": `Bearer ${userToken}`,
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        const data = await response.clone().json();
        if(data.detail){
            localStorage.setItem('cartItemsNum',"0")

        }else{
            localStorage.setItem('cartItemsNum',data.length)

        }
        console.log("data",data)


        return data;
        }catch(error) {
            return rejectWithValue(error.detail);
        }        
    }    
)

export const totalPrice = createAsyncThunk(
    "products/totalPrice",    
    async(userToken,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
        const response = await fetch(`http://127.0.0.1:8000/api/orders/total-price`, {

            headers: {
              "Authorization": `Bearer ${userToken}`,
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        const data = await response.clone().json();
        return data;
        }catch(error) {
            return rejectWithValue(error.message);
        }        
    }    
)

export const categoryFetch = createAsyncThunk(
    "products/categoryFetch",    
    async(id,thunkAPI)=>{
        console.log("Dispatch ru");
        const {rejectWithValue} = thunkAPI;
        try {
        const response = await fetch(`http://127.0.0.1:8000/api/category/categories/${id}`)


        const data = await response.clone().json();

        return data;
        }catch(error) {
            return rejectWithValue(error.message);
        }        
    }    
)


export const getProductByType = createAsyncThunk(
    "products/getProductByType",
    async(categ,thunkAPI)=>{

    const {rejectWithValue} = thunkAPI;

        try {
        const response = await fetch(`http://127.0.0.1:8000/api/category/category/${categ[0]}/${categ[1]}`);
        const data = await response.clone().json();
        console.log("getProductByType",data)
        return data;
        }catch(error) {
            return rejectWithValue(error.message);
        } 

    }
)

export const productDetailFetch = createAsyncThunk(
    "products/productDetailFetch",
    async(id,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;

        try {
        const response = await fetch(`http://127.0.0.1:8000/api/products/products/${id}`);
        const data = await response.clone().json();
        return data;
        }catch(error) {
            return rejectWithValue(error.message);
        }

    }
)




export const reduceQuantity = createAsyncThunk(
    "products/reduceQuantity",
    async(data1,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
        console.log("fetch")
        const response = await fetch(`http://127.0.0.1:8000/api/orders/item/${data1.id}/reduce-quantity`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${data1.token}`,
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        const data = await response.clone().json();

        return data;
        }catch(error) {
            return rejectWithValue(error.detail);
        }        
    }  
)



export const increaseItemQuantity = createAsyncThunk(
    "products/increaseItemQuantity",
    async(data1,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
        console.log("fetch increase")
        const response = await fetch(`http://127.0.0.1:8000/api/orders/item/${data1.id}/increase-quantity`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${data1.token}`,
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        const data = await response.clone().json();

        return data;
        }catch(error) {
            return rejectWithValue(error.detail);
        }        
    }  
)





export const getCategories = createAsyncThunk(
    "products/getCategories",    
    async(_,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        console.log("cart step 2")
        try {
        console.log("cart step 3")
        const response = await fetch(`http://127.0.0.1:8000/api/category/categories`);
        const data = await response.clone().json();
        return data;
        }catch(error) {
            return rejectWithValue(error.message);
        }        
    }    
)

export const completedOrder = createAsyncThunk(
    "products/completedOrder",
    async(token,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;
        try {
        console.log("fetch increase")
        const response = await fetch(`http://127.0.0.1:8000/api/orders/completed-order`, {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        const data = await response.clone().json();

        return data;
        }catch(error) {
            return rejectWithValue(error.detail);
        }        
    }  
)





export const checkout = createAsyncThunk(
    "user/signup",
    async(data1,thunkAPI)=>{
        const {rejectWithValue} = thunkAPI;

        try {
            const res = await fetch('http://127.0.0.1:8000/api/orders/create-order', {
              method: 'POST',
              body: JSON.stringify(data1),
              headers: {
                "Authorization": `Bearer ${data1.token}`,
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
            const data = await res.json();

            return data;
          } catch (error) {
            return rejectWithValue(error.message);
          }
    }
)
const productSlice = createSlice({
    name : "products",
    initialState,
    
    reducers :{
        navAction: (state) => {
          
        console.log("dispatched")
            state.activeNav = !state.activeNav
            state.newactiveNav = true

          },
          testing: (state) => {
            state.activeNav = true
        },
    },
    extraReducers: { 
        [productFetch.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [productFetch.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            state.items = action.payload;

        },
        [productFetch.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload

        },


        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [productDetailFetch.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [productDetailFetch.fulfilled] : (state,action) => {
            state.isLoading = false;;
            state.error = null
            state.productDetails = action.payload;
            console.log(action.payload)

        },
        [productDetailFetch.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload

        },

        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [categoryFetch.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [categoryFetch.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            state.categoryTypes = action.payload;
            console.log(action.payload)

        },
        [categoryFetch.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload

        },
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [getProductByType.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [getProductByType.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            state.products_category_types = action.payload
            console.log("action.payload",action.payload)

        },
        [getProductByType.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload

        },
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [productsInCarts.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
            console.log("Loadding productsInCarts")
        },

        [productsInCarts.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            state.productsInCart = action.payload
            state.cartItemsNum = action.payload.length
            console.log("productsInCarts step 4",state.cartItemsNum)

        },
        [productsInCarts.rejected] : (state,action) => {
            state.isLoading = false;
            localStorage.setItem("cartItemsNum",0)
            state.error = action.payload;
            console.log(state.error)
            
            

        },


        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [totalPrice.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
            console.log("Loadding")
        },

        [totalPrice.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            const nprice = new Intl.NumberFormat().format(action.payload.total_price.total_price);
            state.total_price = nprice
            state.total_items = action.payload.total_price.total_items
            state.productsInCart = action.payload.items
        },
        [totalPrice.rejected] : (state,action) => {
            state.isLoading = false;
            
            state.error = action.payload;
            console.log(state.error)
            
            

        },


        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [reduceQuantity.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
            console.log("Loadding")
        },

        [reduceQuantity.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            if(state.total_items >=1) {
                state.total_items -=1;
            }

        },
        [reduceQuantity.rejected] : (state,action) => {
            state.isLoading = false;
            
            state.error = action.payload;


        },


        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [increaseItemQuantity.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
            console.log("Loadding")
        },

        [increaseItemQuantity.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            state.total_items +=1;


        },
        [increaseItemQuantity.rejected] : (state,action) => {
            state.isLoading = false;
            
            state.error = action.payload;


        },

        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [getCategories.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
            console.log("Loadding")
        },

        [getCategories.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            state.categories = action.payload
            console.log(action.payload)
            state.isOrderCreated = false

        },
        [getCategories.rejected] : (state,action) => {
            state.isLoading = false;
            
            state.error = action.payload;


        },


        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [checkout.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
            console.log("Loadding")
        },

        [checkout.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            state.isOrderCreated = true
            localStorage.removeItem('cartItemsNum')
        },
        [checkout.rejected] : (state,action) => {
            state.isLoading = false;
            
            state.error = action.payload;


        },


        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------


        [completedOrder.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
            console.log("Loadding")
        },

        [completedOrder.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = null
            state.completed = action.payload
            console.log("state.completed",state.completed)
        },
        [completedOrder.rejected] : (state,action) => {
            state.isLoading = false;
            
            state.error = action.payload;


        },






       
    }
})
export const { navAction, testing} = productSlice.actions

export default productSlice.reducer;
