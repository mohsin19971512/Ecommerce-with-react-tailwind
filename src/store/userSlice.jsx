import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const userToken = localStorage.getItem('token') ? localStorage.getItem('token'): null

const initialState = {
    isLoading: false,
    error : null,
    status : null,
    isLogged : false,
    isSignUp : false,
    userToken,

}


// singup
export const signup = createAsyncThunk(
    "user/signup",
    async(accountData,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;


        try {
            const res = await fetch('http://127.0.0.1:8000/api/auth/signup', {
              method: 'POST',
              body: JSON.stringify(accountData),
              headers: {
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

// Login
export const login = createAsyncThunk(
    "user/login",
    async(accountData,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;

        try {
            const res = await fetch('http://127.0.0.1:8000/api/auth/signin', {
              method: 'POST',
              body: JSON.stringify(accountData),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
            const data = await res.json();
            console.log(data)
            let token = data.token.access;
            localStorage.setItem("token", token)

            return data;
          } catch (error) {
            return rejectWithValue(error.message);
          }

    }
)


const userSlice = createSlice({
    name : "user",
    initialState,
    reducers :{
        logout: (state) => {
            
            localStorage.removeItem('token') // delete token from storage
            localStorage.removeItem('cartItemsNum')
            state.isLogged = false
            state.status = null
            state.error = null
            state.userToken = null
            state.isSignUp = false
            state.isLoading = false
          },

    },
    extraReducers: { 

        // Login 
        [login.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [login.fulfilled] : (state,action) => {
            state.isLoading = false;;
            if(action.payload.detail){
                state.error = action.payload.detail

            }
            else {
                state.error = null
                state.isLogged = true
                state.userToken = action.payload.token.access 

            }
        },
        [login.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload

        },

        //-------------------------------------------------------------------------------------------
        // signup 
        [signup.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [signup.fulfilled] : (state,action) => {
            state.isLoading = false;;
            if(action.payload.detail){
                state.error = action.payload.detail

            }
            else {
                state.error = null
                state.isSignUp = true
                console.log(action.payload.token)

            }

        },
        [signup.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export const {logout} = userSlice.actions 


export default userSlice.reducer;


