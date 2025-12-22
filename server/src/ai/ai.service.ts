import { Injectable } from '@nestjs/common';
import { CreateAiDto } from './dto/create-ai.dto';
import { UpdateAiDto } from './dto/update-ai.dto';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class AiService {
  create(createAiDto: CreateAiDto) {
    return 'This action adds a new ai';
  }

  findAll() {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    async function main() {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Why is the sky blue?',
      });
      console.log(response.text);
    }
    return main();
  }

  findOne(id: number) {
    return `This action returns a #${id} ai`;
  }

  update(id: number, updateAiDto: UpdateAiDto) {
    return `This action updates a #${id} ai`;
  }

  remove(id: number) {
    return `This action removes a #${id} ai`;
  }
}
