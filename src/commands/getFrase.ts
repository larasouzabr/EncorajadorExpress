import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import fs from 'fs/promises';



export async function getFrase() {
    try {
        const filePath = 'src/commands/frases.json';
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        const aleatorio = jsonData[Math.floor(Math.random() * 200)];

        return aleatorio.quote;
    } catch (error) {
        console.error("Error reading JSON file:", error);
        return "An error occurred while fetching a phrase.";
    }
}

export const data = new SlashCommandBuilder()
    .setName("frase")
    .setDescription("Escolhe a frase do dia");

export async function execute(interaction: CommandInteraction) {
    return interaction.reply(await getFrase());
}


