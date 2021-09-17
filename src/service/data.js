import axios from 'axios';

/**
 * Gets user infos
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserInfos = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user activity 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserActivity = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user average session 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserAverageSessions = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user performance 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserPerformance = async (id) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
