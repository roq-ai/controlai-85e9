import { ComplianceTestInterface } from 'interfaces/compliance-test';
import { DocumentationInterface } from 'interfaces/documentation';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface AiModelInterface {
  id?: string;
  name: string;
  description?: string;
  company_id: string;
  type: string;
  compliance_score: number;
  created_at?: any;
  updated_at?: any;
  compliance_test?: ComplianceTestInterface[];
  documentation?: DocumentationInterface[];
  company?: CompanyInterface;
  _count?: {
    compliance_test?: number;
    documentation?: number;
  };
}

export interface AiModelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
  type?: string;
}
