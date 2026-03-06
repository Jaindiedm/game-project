import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import type { Game } from "./useGame";

export interface GameDetailed extends Game {
    description_raw: string;
    website: string;
}

const useGameDetails = (id: string | undefined) => {
    const [data, setData] = useState<GameDetailed | null>(null);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) return;

        const controller = new AbortController();
        setLoading(true);

        apiClient
            .get<GameDetailed>("/proxy", {
                signal: controller.signal,
                params: {
                    endpoint: `games/${id}`,
                },
            })
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, [id]);

    return { data, error, isLoading };
};

export default useGameDetails;
