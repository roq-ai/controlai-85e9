import { AiModelInterface } from 'interfaces/ai-model';
import { GetQueryInterface } from 'interfaces';

export interface ComplianceTestInterface {
  id?: string;
  name: string;
  description?: string;
  result?: boolean;
  ai_model_id: string;
  test_passed: boolean;
  created_at?: any;
  updated_at?: any;

  ai_model?: AiModelInterface;
  _count?: {};
}

export interface ComplianceTestGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  ai_model_id?: string;
}
