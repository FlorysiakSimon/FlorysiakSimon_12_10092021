import axios from 'axios';


export const getUserInfos = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
