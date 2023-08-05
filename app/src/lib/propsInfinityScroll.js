import useDigimons from "@/app/src/hooks/useDigimons";
import DigimonsCardList from "@/app/src/components/DigimonsCardList";

export const newDataFromPage = {
    digimon: async ({ page }) => {
        const { digimons } = await useDigimons({ params: { page } })
        return { newDataPage: digimons };
    }
}

export const componentList = {
    digimon: ({ data }) => <DigimonsCardList digimons={data} />
}