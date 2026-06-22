import { useEffect, useState }
    from "react";

import { categoriasService }
    from "../services/categoriasService";

export const useCategorias = () => {

    const [loading, setLoading] =
        useState(true);

    const [categorias, setCategorias] =
        useState([]);

    const loadCategorias = async () => {

        setLoading(true);

        const data =
            await categoriasService.getAll();

        setCategorias(
            data.map(item => ({
                ...item,
                id: item.id_categoria,
            }))
        );

        setLoading(false);
    };

    useEffect(() => {
        loadCategorias();
    }, []);

    const createCategoria = async (
        categoria
    ) => {

        const nova =
            await categoriasService.create(
                categoria
            );

        setCategorias(old => [
            ...old,
            {
                ...nova,
                id: nova.id_categoria,
            },
        ]);
    };

    const updateCategoria = async (
        id,
        categoria
    ) => {

        const atualizada =
            await categoriasService.update(
                id,
                categoria
            );

        setCategorias(old =>
            old.map(item =>
                item.id_categoria === id
                    ? {
                        ...atualizada,
                        id: atualizada.id_categoria,
                    }
                    : item
            )
        );
    };

    const deleteCategoria = async (
        id
    ) => {

        await categoriasService.delete(id);

        setCategorias(old =>
            old.filter(item =>
                item.id_categoria !== id
            )
        );
    };

    return {

        categorias,
        loading,

        createCategoria,
        updateCategoria,
        deleteCategoria,
    };
};