import axios, { type AxiosResponse } from 'axios';
import { type MineralTypeResponse } from '../domain';

export const findAll = async (): Promise<AxiosResponse<MineralTypeResponse[]>> => {
	return await axios.get<MineralTypeResponse[]>('https://localhost:7032/api/mineraltype');
};
