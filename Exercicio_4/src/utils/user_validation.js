const create = {
    fabricante: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    combustivel: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cambio: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    fabricante: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    combustivel: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cambio: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    fabricante: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    fabricante: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};