import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch함수정의
export const fetchFlickr = createAsyncThunk(
	//고유의 문자값 등록(내부적으로 actionType생성할때 활용되는 값)
	'flickr/requestFlickr',
	async (opt) => {
		//axios요청할 URL생성
		const key = '4612601b324a2fe5a1f5f7402bf8d87a';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';

		let url = '';
		//객체로 전달되는 type에 따라 호출한 URL을 새로 만들고 axios에 전달
		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		}
		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
		}
		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tag}`;
		}
		const response = await axios.get(url);
		return response.data.photos.photo;
	}
);

//슬라이스 함수 생성
const flickrSlice = createSlice({
	//내부적으로 전역으로 관리될 데이터로 property이름으로 등록될 값
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},

	//아래에있는 각각의 대괄호 안에 fetch함수이름 등록!
	extraReducers: {
		//pending보류중,미결정의 fulfilled충족 rejected거절
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchFlickr.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

//해당 슬라이스 export
export default flickrSlice.reducer;
