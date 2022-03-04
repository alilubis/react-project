import { fetchWrapper } from '../helpers/wrapper';

const baseUrl = `/users`;

export const userService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// pakai underscored karena delete adalah reserved word di javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
