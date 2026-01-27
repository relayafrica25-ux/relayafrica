
// Update imports and initialization to follow the latest @google/genai guidelines.
import { GoogleGenAI, Type } from "@google/genai";
import { Engineer } from '../types';

export const generateEngineerMatch = async (query: string): Promise<Engineer | null> => {
  // Always use a new instance with the direct process.env.API_KEY to avoid stale keys or initialization errors.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a realistic profile for a high-quality African professional based on: "${query}". 
      Available categories: Engineering, Design, Product, Marketing, Sales, Creative.
      Ensure the skills match the category. 
      Names should sound authentic (Nigerian, Kenyan, etc.).
      Rate: €2000 - €6000/mo.
      Availability: Available, Interviewing.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            role: { type: Type.STRING },
            roleCategory: { 
              type: Type.STRING, 
              enum: ['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'Creative'] 
            },
            skills: { type: Type.ARRAY, items: { type: Type.STRING } },
            experience: { type: Type.STRING },
            experienceLevel: { 
              type: Type.STRING, 
              enum: ['Mid-Level', 'Senior', 'Lead'] 
            },
            location: { type: Type.STRING },
            bio: { type: Type.STRING },
            rate: { type: Type.STRING },
            salaryRange: { type: Type.STRING },
            availability: { 
              type: Type.STRING, 
              enum: ['Available', 'Interviewing', 'Placed'] 
            },
          },
          required: ["name", "role", "skills", "experience", "bio", "rate", "roleCategory", "location", "availability"],
        },
      },
    });

    const text = response.text;
    if (!text) return null;

    const data = JSON.parse(text);
    
    return {
      id: `gen-${Date.now()}`,
      imageUrl: `https://i.pravatar.cc/150?u=${Math.random()}`,
      ...data
    };

  } catch (error) {
    console.error("Gemini Match Error:", error);
    return null;
  }
};
