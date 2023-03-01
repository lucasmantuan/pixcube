import { Api } from 'services';

const getAll = async (url) => {
    try {
        const { data } = await Api.get(url);
        if (data) {
            return {
                data
            };
        }
        return new Error('Erro ao listar os registros...');
    } catch (error) {
        return new Error(error.message || 'Erro ao listar os registros...');
    }
};

const getById = async (id) => {
    try {
        const { data } = await Api.get(`/antenas/${id}`);
        if (data) {
            return data;
        }
        return new Error('Erro ao listar o registro...');
    } catch (error) {
        return new Error(error.message || 'Erro ao listar o registro...');
    }
};

const create = async (inputs) => {
    try {
        const { data } = await Api.post('/playlists', inputs);
        if (data) {
            return data.id;
        }
        return new Error('Erro ao criar o registro...');
    } catch (error) {
        return new Error(error.message || 'Erro ao criar o registro...');
    }
};

const updateById = async (url, id, inputs) => {
    try {
        await Api.put(`/${url}/${id}`, inputs);
    } catch (error) {
        return new Error(error.message || 'Erro ao Atualizar o Registro...');
    }
};

const deleteById = async (id) => {
    try {
        await Api.delete(`/antenas/${id}`);
    } catch (error) {
        return new Error(error.message || 'Erro ao apagar os registros...');
    }
};

export const playlistService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};
