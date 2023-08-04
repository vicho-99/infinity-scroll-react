import { useDigimons } from "@/app/hooks/useDigimons";

export const newDataFromPage = {

    "digimon": async ({ page }) => {

        const { digimons } = await useDigimons({ params: { page } })

        return { newDataPage: digimons };
    }


}