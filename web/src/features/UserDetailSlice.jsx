import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = import.meta.env.VITE_URL;
export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token);
        console.log("this is userDetails", response.ok);

        return { token: result.token, ok: response.ok };
      } else {
        return rejectWithValue({ message: result.message });
      }
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const searchHostel = createAsyncThunk(
  "searchHostel",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}api/hostel/show`);
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const recommendedHostel = createAsyncThunk(
  "recommendedHostel",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}api/hostel/show?skip=0&limit=6`);
      const result = await response.json();
      return result.hostel;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const searchHostelOne = createAsyncThunk(
  "searchHostelOne",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}api/hostel/search?location=${data}`);
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const hostelRegister = createAsyncThunk(
  "hostelRegister",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}api/hostel/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("post", result);
      return response.ok;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const hostelDetail = createAsyncThunk(
  "hostelDetail",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}api/hostel/show/${data}`);
      const result = await response.json();
      return result.message;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const bookingHostel = createAsyncThunk(
  "bookingHostel",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}api/hostel/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.ok;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const tokenData = createAsyncThunk(
  "tokenData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/auth/usertoken`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${data}`,
        },
      });

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const clearUser = createAsyncThunk("clearUser", () => {
  localStorage.removeItem("token");
  return false;
});

const initialState = {
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  searchItem: [],
  contentpush: false,
  hostelInfo: [],
  response: false,
  userItem: [],
  ok: false,
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.ok = action.payload.ok;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(searchHostel.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchHostel.fulfilled, (state, action) => {
        state.loading = false;
        state.searchItem = action.payload;
      })
      .addCase(searchHostel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(searchHostelOne.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchHostelOne.fulfilled, (state, action) => {
        state.loading = false;
        state.searchItem = action.payload;
      })
      .addCase(searchHostelOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(hostelRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(hostelRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.contentpush = action.payload;
      })
      .addCase(hostelRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(hostelDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(hostelDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.hostelInfo = action.payload;
      })
      .addCase(hostelDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(recommendedHostel.pending, (state) => {
        state.loading = true;
      })
      .addCase(recommendedHostel.fulfilled, (state, action) => {
        state.loading = false;
        state.searchItem = action.payload;
      })
      .addCase(recommendedHostel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(bookingHostel.pending, (state) => {
        state.loading = true;
      })
      .addCase(bookingHostel.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(bookingHostel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(tokenData.pending, (state) => {
        state.loading = true;
      })
      .addCase(tokenData.fulfilled, (state, action) => {
        state.loading = false;
        state.userItem = action.payload;
      })
      .addCase(tokenData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(clearUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = null;
      })
      .addCase(clearUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const userDetailReducer = userDetailSlice.reducer;

export default userDetailSlice;
