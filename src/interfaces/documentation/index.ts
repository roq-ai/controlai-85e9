import { AiModelInterface } from 'interfaces/ai-model';
import { GetQueryInterface } from 'interfaces';

export interface DocumentationInterface {
  id?: string;
  name: string;
  content?: string;
  ai_model_id: string;
  created_at?: any;
  updated_at?: any;

  ai_model?: AiModelInterface;
  _count?: {};
}

export interface DocumentationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  ai_model_id?: string;
}
