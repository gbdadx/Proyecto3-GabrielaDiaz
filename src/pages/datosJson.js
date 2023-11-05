 const objetos=[
    {
        "categoria": "propiedad",
        "tipo": "Casa",
        "factor": 1.09
    },
    {
        "categoria": "propiedad",
        "tipo": "P.H.",
        "factor": 1.05
    },
    {
        "categoria": "propiedad",
        "tipo": "Depto. Edificio",
        "factor": 1.02
    },
    {
        "categoria": "propiedad",
        "tipo": "Barrio Privado",
        "factor": 1.19
    },
    {
        "categoria": "propiedad",
        "tipo": "Oficina",
        "factor": 2.39
    },
    {
        "categoria": "propiedad",
        "tipo": "Local Comercial",
        "factor": 1.41
    },
    {
        "categoria": "propiedad",
        "tipo": "Depósito Logística",
        "factor": 1.92
    },
    {
        "categoria": "ubicacion",
        "tipo": "CABA",
        "factor": 1.13
    },
    {
        "categoria": "ubicacion",
        "tipo": "Tandil",
        "factor": 1.04
    },
    {
        "categoria": "ubicacion",
        "tipo": "Costa Atlántica",
        "factor": 1.29
    },
    {
        "categoria": "ubicacion",
        "tipo": "Patagonia",
        "factor": 1.00
    }
];

const datosPropiedad = [{tipo: 'Casa', factor: 1.09},
                        {tipo: 'P.H.', factor: 1.05},
                        {tipo: 'Depto. Edificio', factor: 1.02},
                        {tipo: 'Barrio Privado', factor: 1.19},
                        {tipo: 'Oficina', factor: 2.39},
                        {tipo: 'Local Comercial', factor: 1.41},
                        {tipo: 'Depósito Logística', factor: 1.92}];

const datosUbicacion = [{tipo: 'CABA', factor: 1.13},
                        {tipo: 'Tandil', factor: 1.04},
                        {tipo: 'Costa Atlántica', factor: 1.29},
                        {tipo: 'Patagonia', factor: 1.00},];

export {  datosPropiedad, datosUbicacion};


export default objetos; // Exporta la constante
