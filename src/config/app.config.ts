interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organization Owner'],
  customerRoles: ['Auditor'],
  tenantRoles: ['Organization Owner', 'Compliance Manager', 'Documentation Specialist'],
  tenantName: 'Company',
  applicationName: 'ControlAI',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company details',
    'View AI model data',
    'Access documentation and compliance test results',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage AI models',
    'Manage documentations',
    'Manage compliance tests',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5a7cc692-8e54-453b-92f2-b8eefb15cecf',
};
