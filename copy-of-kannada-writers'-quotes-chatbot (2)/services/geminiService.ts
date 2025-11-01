
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// A simple in-memory store for the chat instance to maintain conversation history.
let chatInstance: Chat | null = null;

const getChatInstance = (): Chat => {
    if (!chatInstance) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable is not set.");
        }
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatInstance = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            },
        });
    }
    return chatInstance;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    try {
        const chat = getChatInstance();
        const response = await chat.sendMessage({ message });
        // Ensure we always return a string, even if the API response is empty.
        return response.text ?? "I'm not sure how to respond to that. Could you please try again?";
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        return "I'm sorry, I'm having trouble connecting right now. Please try again later. 🙏";
    }
};
