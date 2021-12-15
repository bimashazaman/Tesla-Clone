import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  car: [
    'model-s',
    'model 3',
    'model-x',
    'model-4',
    'model-y',
    'solar-roof',
    'new-interior',
    'solar-panel',
    'game',
  ],
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
})

export default carSlice.reducer
