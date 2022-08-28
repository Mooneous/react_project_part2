import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch함수정의
export const fetchYoutube = createAsyncThunk(
	//고유의 문자값 등록(내부적으로 actionType생성할때 활용되는 값)
	'youtube/requestYoutube',
	async () => {
		//axios요청할 URL생성

		const key = 'AIzaSyB5JZfJTpMHm2WfEEIid2Dt443MfKM9XAU';
		const playlist = 'PL0niq1d_d9TMT4BpBeG1nAV1coJbStrqh';

		const num = 11;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		const response = await axios.get(url);
		console.log(response.data.items);
		return response.data.items;
	}
);

//슬라이스 함수 생성
const youtubeSlice = createSlice({
	//내부적으로 전역으로 관리될 데이터로 property이름으로 등록될 값
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},

	//아래에있는 각각의 대괄호 안에 fetch함수이름 등록!
	extraReducers: {
		//pending보류중,미결정의 fulfilled충족 rejected거절
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutube.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

//해당 슬라이스 export
export default youtubeSlice.reducer;
