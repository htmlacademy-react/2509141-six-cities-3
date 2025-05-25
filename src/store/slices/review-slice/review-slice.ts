import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addReviewAction, fetchReviewsAction } from 'store/api-actions';
import { Reviews } from 'types/review';
import { ReviewSlice } from 'types/state';
import { NameSpace } from 'const';
import { sortReviews } from 'utils/sort';


const initialState: ReviewSlice = {
  reviews: [],
  isSending: false,
  hasError: true
};

export const reviewSlice = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addReviewAction.pending, (state) => {
        state.isSending = true;
        state.hasError = true;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isSending = false;
        state.hasError = false;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isSending = false;
        state.hasError = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action: PayloadAction<Reviews>) => {
        state.reviews = action.payload.toSorted(sortReviews);
      });
  }
});
