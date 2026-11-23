export const profile = {
  name: 'Sai Kumar Tallapaneni',
  title: 'Senior AI/ML Engineer',
  email: 'saikumart0123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sai-kumar-tallapaneni/',
  github: 'https://github.com/saikumart0123',
  degree: 'Bachelor’s in Electronics and Communication Engineering',
  resume: '/myportfolio/Sai-Kumar-Tallapaneni-Resume.docx',
  school: 'Sathyabama Institute of Science and Technology',
}

export const experience = [
  { company: 'UHG / Optum', technologies: 'Python · LangGraph · Azure OpenAI · AKS', location: 'Eden Prairie, MN', role: 'Senior AI Engineer, Agentic / Generative AI', dates: 'Jun 2024 – Present', description: 'Built LangGraph agents for clinical document review and utilization management. Designed human approval checkpoints, PHI masking, and release evaluations, and deployed FastAPI services to Azure Kubernetes Service.' },
  { company: 'State of Minnesota', technologies: 'FastAPI · Amazon Textract · AWS Glue · EKS', location: 'St. Paul, MN', role: 'Senior Software Engineer, AI/ML', dates: 'Aug 2021 – May 2024', description: 'Led backend engineering for human services platforms. Integrated ML into eligibility and triage workflows and built AWS data pipelines for reporting and model training.' },
  { company: 'U.S. Bank', technologies: 'XGBoost · TensorFlow · Flask · MLflow', location: 'Minneapolis, MN', role: 'Full Stack ML Engineer', dates: 'Mar 2019 – Jul 2021', description: 'Built fraud and credit risk models and deployed real-time scoring APIs. Established MLflow tracking and model deployment workflows with Jenkins and Kubernetes.' },
  { company: 'Walmart', technologies: 'Python · Prophet · SQL · Tableau', location: 'Bentonville, AR', role: 'Python Data Scientist', dates: 'Jul 2017 – Feb 2019', description: 'Developed demand forecasts and shopper segmentation. Used statistical modeling and A/B testing to evaluate pricing and promotions.' },
  { company: 'Medall Diagnostics', technologies: 'Python · Flask · PostgreSQL · HL7', location: 'Chennai, India', role: 'Python Application Developer', dates: 'Apr 2015 – Jun 2017', description: 'Built Flask APIs and ETL pipelines that connected lab, billing, and patient systems for registration, sample tracking, and reporting.' },
]

export const projects = [
  {
    id: 'clinical-review', sector: 'Healthcare', organization: 'UHG / Optum', icon: 'clinical',
    title: 'Clinical prior authorization',
    summary: 'Agent workflows that gather clinical evidence and recommend decisions for review.',
    challenge: 'Keep recommendations grounded in policy while coordinating multiple systems and protecting clinical data.',
    approach: 'Orchestrated specialist agents in LangGraph and used hybrid retrieval and re-ranking to ground recommendations in CMS policies. Integrated claims, eligibility, and FHIR tools through MCP.',
    outcome: 'Supported auditable utilization reviews with clinical expert evaluation, human approvals, and PHI masking. Used semantic caching and model routing to reduce inference costs.',
    flow: ['Clinical evidence', 'Agent orchestration', 'Policy retrieval & tool calls', 'Human review'],
    stack: ['LangGraph', 'Azure OpenAI', 'Azure AI Search', 'MCP', 'RAGAS'],
  },
  {
    id: 'benefits-triage', sector: 'Public sector', organization: 'State of Minnesota', icon: 'document',
    title: 'Benefits document triage',
    summary: 'Document processing and ML for public benefit applications and correspondence.',
    challenge: 'Turn scanned forms and unstructured correspondence into information caseworkers can use.',
    approach: 'Combined OCR and Amazon Textract with text classifiers and entity recognition. Integrated scoring into Python services and used event-driven AWS services to decouple case workflows.',
    outcome: 'Extracted fields from scanned forms and routed correspondence to caseworker queues. Supported triage and case prioritization for public benefit programs.',
    flow: ['Scanned forms', 'OCR and extraction', 'Classification & scoring', 'Caseworker queue'],
    stack: ['FastAPI', 'Amazon Textract', 'Hugging Face', 'XGBoost'],
  },
  {
    id: 'risk-scoring', sector: 'Banking', organization: 'U.S. Bank', icon: 'shield',
    title: 'Fraud and credit risk scoring',
    summary: 'Predictive models, real-time scoring APIs, and tools for risk analysts.',
    challenge: 'Surface fraud signals and make model scores explainable during risk reviews.',
    approach: 'Built XGBoost models and TensorFlow sequence models, exposed scores through Flask APIs, and used MLflow to track and version model releases.',
    outcome: 'Enabled analysts to see model scores, SHAP explanations, and alerts together. Model explanations supported governance and fair lending reviews.',
    flow: ['Transaction data', 'Feature pipelines', 'Model scoring APIs', 'Analyst review'],
    stack: ['XGBoost', 'TensorFlow', 'Flask', 'SHAP', 'MLflow'],
  },
  {
    id: 'demand-forecasting', sector: 'Retail', organization: 'Walmart', icon: 'chart',
    title: 'Retail demand forecasting',
    summary: 'Weekly SKU-level sales forecasts for replenishment and inventory planning.',
    challenge: 'Account for differences across products, seasons, and promotions when forecasting weekly sales.',
    approach: 'Built forecasts with seasonal, promotion, and transaction features, using time-series backtesting to evaluate model performance.',
    outcome: 'Supported allocation and replenishment decisions. Tableau dashboards communicated forecast accuracy, in-stock rates, and sell-through to merchandising teams.',
    flow: ['Sales and promotion data', 'Time-series features', 'Forecast & backtest', 'Planning dashboards'],
    stack: ['Python', 'Prophet', 'Statsmodels', 'SQL', 'Tableau'],
  },
]


export const skills = [
  { title: 'AI & agentic systems', items: ['Generative AI', 'Agentic AI', 'LangGraph', 'LangChain', 'Multi-agent orchestration', 'MCP', 'Advanced RAG', 'Prompt engineering', 'LLM evaluation'] },
  { title: 'Programming & backend', items: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'Microservices', 'OAuth2/JWT'] },
  { title: 'Cloud & infrastructure', items: ['Azure OpenAI', 'Azure AI Search', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'] },
  { title: 'Data & machine learning', items: ['PySpark', 'Databricks', 'SQL', 'Vector search', 'Embeddings', 'XGBoost', 'MLflow', 'MLOps'] },
]

export const navigation = [
  ['home', 'Home'], ['about', 'About'], ['expertise', 'Expertise'],
  ['projects', 'Projects'], ['experience', 'Experience'], ['contact', 'Contact'],
]

export const principles = [
  { title: 'Architecture before implementation', text: 'I define service boundaries and data flows early. For agent workflows, that includes which tools agents can call and where a person needs to approve a decision.' },
  { title: 'Reliability and scalability', text: 'I design for failure with retries and checkpoints, decouple workloads with queues, and monitor latency and model behavior in production.' },
  { title: 'Security and responsible AI', text: 'I use role-based access, PHI masking, and output validation to protect sensitive data, with human review where decisions carry clinical consequences.' },
  { title: 'Continuous evaluation and improvement', text: 'I measure performance before and after release. That has meant golden datasets and clinical review for LLMs, and backtesting or drift monitoring for predictive models.' },
]
