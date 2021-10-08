import axios from 'axios';

/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 export const mockUserInfos = async (id) => {
	try {
		const res = await axios.get(`./../../${id}/info.json`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};


/**
 * Get user activity 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const mockUserActivity = async (id) => {
	try {
		const res = await axios.get(`./../../${id}/activity.json`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user average session 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const mockUserAverageSessions = async (id) => {
	try {
		const res = await axios.get(`./../../${id}/averagesessions.json`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user performance 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const mockUserPerformance = async (id) => {
	try {
		const res = await axios.get(`./../../${id}/performance.json`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
