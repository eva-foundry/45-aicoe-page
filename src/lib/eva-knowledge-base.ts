import { Language } from '@/i18n/translations'

export interface KnowledgeItem {
  keywords: string[]
  en: string
  fr: string
  relatedTopics?: string[]
  category: 'program' | 'workflow' | 'services' | 'tools' | 'intake' | 'usecase' | 'roadmap' | 'general'
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    category: 'program',
    keywords: ['mission', 'purpose', 'what is', 'about', 'overview', 'program'],
    en: 'The AI Centre of Enablement helps ESDC employees move from AI exploration to effective implementation. We provide structured support, hands-on workflow development, and enterprise-grade guidance to ensure you can leverage AI tools like EVA Chat and Copilot 365 effectively. Our program bridges the gap between experimentation and practical value.',
    fr: 'Le Centre d\'habilitation en IA aide les employés d\'EDSC à passer de l\'exploration de l\'IA à une mise en œuvre efficace. Nous fournissons un soutien structuré, un développement pratique de flux de travail et des conseils de qualité d\'entreprise pour vous assurer de pouvoir tirer parti efficacement des outils d\'IA comme EVA Chat et Copilot 365. Notre programme comble le fossé entre l\'expérimentation et la valeur pratique.'
  },
  {
    category: 'program',
    keywords: ['problem', 'challenge', 'issue', 'why needed', 'underutilized'],
    en: 'Many ESDC employees are exploring AI but not maximizing its value. Enterprise tools like Copilot 365 and EVA Chat are underutilized, and employees lack structured guidance for effective experimentation. Without early support, teams struggle to understand which tools fit their needs, how to design effective prompts, and how to integrate AI into workflows. This creates missed opportunities for automation and efficiency gains.',
    fr: 'De nombreux employés d\'EDSC explorent l\'IA mais n\'en maximisent pas la valeur. Les outils d\'entreprise comme Copilot 365 et EVA Chat sont sous-utilisés, et les employés manquent de conseils structurés pour une expérimentation efficace. Sans soutien précoce, les équipes ont du mal à comprendre quels outils répondent à leurs besoins, comment concevoir des invites efficaces et comment intégrer l\'IA dans les flux de travail. Cela crée des occasions manquées d\'automatisation et de gains d\'efficacité.'
  },
  {
    category: 'program',
    keywords: ['benefits', 'value', 'advantages', 'outcomes', 'what you get', 'why use'],
    en: 'The program delivers: (1) Practical AI workflows using your real departmental documents, (2) Improved project readiness before formal intake, (3) Enhanced intake quality with clearer scope and complexity assessment, (4) Effective use of enterprise AI tools, (5) Guidance on solution tiers from simple prompts to complex systems, (6) Early advisory to accelerate adoption and maximize impact, (7) Hands-on "learning by doing" approach that builds organizational AI literacy.',
    fr: 'Le programme fournit : (1) Des flux de travail d\'IA pratiques utilisant vos véritables documents ministériels, (2) Une meilleure préparation de projet avant l\'admission formelle, (3) Une qualité d\'admission améliorée avec une évaluation plus claire de la portée et de la complexité, (4) Une utilisation efficace des outils d\'IA d\'entreprise, (5) Des conseils sur les niveaux de solution, des invites simples aux systèmes complexes, (6) Des conseils précoces pour accélérer l\'adoption et maximiser l\'impact, (7) Une approche pratique "apprendre en faisant" qui développe la littératie organisationnelle en IA.'
  },
  {
    category: 'program',
    keywords: ['goals', 'objectives', 'aims', 'targets', 'what we do'],
    en: 'Our goals are to: (1) Help you build practical AI workflows with actual departmental documents, (2) Improve project readiness before formal intake submission, (3) Enhance intake assessments with clearer scope, complexity, and tool selection, (4) Enable effective use of EVA Chat, Copilot 365, and other approved platforms, (5) Help you select the right solution tier for your needs, (6) Provide early advisory and guidance to accelerate AI adoption and maximize impact.',
    fr: 'Nos objectifs sont de : (1) Vous aider à créer des flux de travail d\'IA pratiques avec de véritables documents ministériels, (2) Améliorer la préparation des projets avant la soumission formelle d\'admission, (3) Améliorer les évaluations d\'admission avec une portée, une complexité et une sélection d\'outils plus claires, (4) Permettre une utilisation efficace d\'EVA Chat, Copilot 365 et d\'autres plateformes approuvées, (5) Vous aider à sélectionner le bon niveau de solution pour vos besoins, (6) Fournir des conseils et des orientations précoces pour accélérer l\'adoption de l\'IA et maximiser l\'impact.'
  },
  {
    category: 'workflow',
    keywords: ['workflow', 'process', 'steps', 'how it works', 'methodology', 'approach', 'model'],
    en: 'Our 7-step AI Workflow Model guides you from exploration to production: (1) Discover - Identify the problem and gather sample documents, (2) Define Use Case - Clarify objectives, scope, and success criteria, (3) Select Tools - Choose appropriate AI platforms based on complexity, (4) Design Prompts & Workflow - Develop effective prompts and test with real documents, (5) Test & Refine - Conduct iterative testing and validate results, (6) Document & Share - Create clear documentation and share knowledge, (7) Plan Next Steps - Determine scaling strategy and integration requirements.',
    fr: 'Notre modèle de flux de travail IA en 7 étapes vous guide de l\'exploration à la production : (1) Découvrir - Identifier le problème et rassembler des documents échantillons, (2) Définir le cas d\'utilisation - Clarifier les objectifs, la portée et les critères de succès, (3) Sélectionner les outils - Choisir les plateformes d\'IA appropriées en fonction de la complexité, (4) Concevoir les invites et le flux de travail - Développer des invites efficaces et tester avec de vrais documents, (5) Tester et affiner - Effectuer des tests itératifs et valider les résultats, (6) Documenter et partager - Créer une documentation claire et partager les connaissances, (7) Planifier les prochaines étapes - Déterminer la stratégie de mise à l\'échelle et les exigences d\'intégration.'
  },
  {
    category: 'workflow',
    keywords: ['discover', 'step 1', 'first step', 'identify problem', 'exploration'],
    en: 'Step 1: Discover - This is where you identify the problem or opportunity. You\'ll understand current processes, identify pain points, define desired outcomes, and gather sample documents and data that you\'ll use for testing. This foundational step ensures we\'re solving the right problem before moving forward.',
    fr: 'Étape 1 : Découvrir - C\'est ici que vous identifiez le problème ou l\'opportunité. Vous comprendrez les processus actuels, identifierez les points douloureux, définirez les résultats souhaités et rassemblerez des documents échantillons et des données que vous utiliserez pour les tests. Cette étape fondamentale garantit que nous résolvons le bon problème avant d\'aller de l\'avant.'
  },
  {
    category: 'workflow',
    keywords: ['define', 'step 2', 'use case', 'scope', 'objectives', 'clarify'],
    en: 'Step 2: Define Use Case - Here you clarify objectives, scope, and success criteria. You\'ll determine what inputs you have, what outputs you expect, who the key stakeholders are, and assess both feasibility and value. This step prevents scope creep and ensures everyone has clear expectations.',
    fr: 'Étape 2 : Définir le cas d\'utilisation - Ici, vous clarifiez les objectifs, la portée et les critères de succès. Vous déterminerez quelles entrées vous avez, quelles sorties vous attendez, qui sont les principaux intervenants, et évaluerez la faisabilité et la valeur. Cette étape empêche l\'expansion de la portée et garantit que tout le monde a des attentes claires.'
  },
  {
    category: 'workflow',
    keywords: ['select tools', 'step 3', 'choose', 'which tool', 'tool selection', 'platform'],
    en: 'Step 3: Select Tools - Choose the appropriate AI tools and platforms based on your use case complexity, integration needs, and organizational capabilities. Options include Copilot 365 (for M365-integrated tasks), EVA Chat (for conversational AI and document analysis), or custom solutions for more complex requirements. We help you match the tool to your needs.',
    fr: 'Étape 3 : Sélectionner les outils - Choisissez les outils et plateformes d\'IA appropriés en fonction de la complexité de votre cas d\'utilisation, des besoins d\'intégration et des capacités organisationnelles. Les options incluent Copilot 365 (pour les tâches intégrées à M365), EVA Chat (pour l\'IA conversationnelle et l\'analyse de documents) ou des solutions personnalisées pour des exigences plus complexes. Nous vous aidons à faire correspondre l\'outil à vos besoins.'
  },
  {
    category: 'workflow',
    keywords: ['design', 'step 4', 'prompts', 'prompt engineering', 'workflow design', 'create'],
    en: 'Step 4: Design Prompts & Workflow - Develop effective prompts and design the end-to-end workflow. You\'ll test with real documents from your use case, refine prompt engineering strategies for optimal results, and iterate based on what works. This hands-on testing phase is where theory meets practice.',
    fr: 'Étape 4 : Concevoir les invites et le flux de travail - Développez des invites efficaces et concevez le flux de travail de bout en bout. Vous testerez avec de vrais documents de votre cas d\'utilisation, affinerez les stratégies d\'ingénierie d\'invite pour des résultats optimaux, et itérerez en fonction de ce qui fonctionne. Cette phase de test pratique est où la théorie rencontre la pratique.'
  },
  {
    category: 'workflow',
    keywords: ['test', 'step 5', 'refine', 'validate', 'testing', 'quality'],
    en: 'Step 5: Test & Refine - Conduct iterative testing with diverse inputs to validate accuracy, consistency, and performance. You\'ll identify edge cases, understand limitations, and refine your approach based on real-world results. This ensures your solution is robust before deployment.',
    fr: 'Étape 5 : Tester et affiner - Effectuez des tests itératifs avec des entrées diverses pour valider l\'exactitude, la cohérence et la performance. Vous identifierez les cas limites, comprendrez les limitations et affinerez votre approche en fonction des résultats du monde réel. Cela garantit que votre solution est robuste avant le déploiement.'
  },
  {
    category: 'workflow',
    keywords: ['document', 'step 6', 'share', 'knowledge', 'documentation', 'record'],
    en: 'Step 6: Document & Share - Create clear documentation of your prompts, workflows, and lessons learned. Share this knowledge with your team and the broader organization so others can benefit from your experience. Good documentation enables replication and continuous improvement.',
    fr: 'Étape 6 : Documenter et partager - Créez une documentation claire de vos invites, flux de travail et leçons apprises. Partagez ces connaissances avec votre équipe et l\'organisation au sens large afin que d\'autres puissent bénéficier de votre expérience. Une bonne documentation permet la réplication et l\'amélioration continue.'
  },
  {
    category: 'workflow',
    keywords: ['plan', 'step 7', 'next steps', 'scale', 'scaling', 'future', 'what next'],
    en: 'Step 7: Plan Next Steps - Determine your scaling strategy, identify automation opportunities, and define integration requirements. If your use case requires custom development or enterprise integration, we\'ll help you prepare for formal intake. This step ensures your proof of concept can grow into a production solution.',
    fr: 'Étape 7 : Planifier les prochaines étapes - Déterminez votre stratégie de mise à l\'échelle, identifiez les opportunités d\'automatisation et définissez les exigences d\'intégration. Si votre cas d\'utilisation nécessite un développement personnalisé ou une intégration d\'entreprise, nous vous aiderons à préparer l\'admission formelle. Cette étape garantit que votre preuve de concept peut devenir une solution de production.'
  },
  {
    category: 'services',
    keywords: ['tiers', 'service levels', 'support levels', 'which tier', 'tier comparison', 'services'],
    en: 'We offer three service tiers matched to your complexity: Tier 1 (Prompt Advisory) for simple use cases solved with manual prompts and enterprise tools; Tier 2 (Low-Code Workflows) for multi-step processes requiring light automation with Power Automate; Tier 3 (Complex Solutions) for sophisticated use cases needing custom development, microservices, or advanced integrations. Visit the Services & Tiers page to compare details.',
    fr: 'Nous offrons trois niveaux de service adaptés à votre complexité : Niveau 1 (Conseil en invites) pour les cas d\'utilisation simples résolus avec des invites manuelles et des outils d\'entreprise ; Niveau 2 (Flux de travail low-code) pour les processus en plusieurs étapes nécessitant une automatisation légère avec Power Automate ; Niveau 3 (Solutions complexes) pour les cas d\'utilisation sophistiqués nécessitant un développement personnalisé, des microservices ou des intégrations avancées. Visitez la page Services et niveaux pour comparer les détails.'
  },
  {
    category: 'services',
    keywords: ['tier 1', 'prompt advisory', 'manual', 'simple', 'basic support', 'level 1'],
    en: 'Tier 1: Prompt Advisory is best for simple, exploratory use cases solved with existing enterprise tools and effective prompt engineering. You get: prompt engineering guidance and best practices, tool selection advice (EVA Chat vs Copilot 365), testing strategies with sample documents, and documentation templates for reusable prompts. Ideal for simple queries, document analysis, content generation, and research assistance.',
    fr: 'Niveau 1 : Conseil en invites est idéal pour les cas d\'utilisation simples et exploratoires résolus avec les outils d\'entreprise existants et une ingénierie d\'invite efficace. Vous obtenez : des conseils et des meilleures pratiques en ingénierie d\'invite, des conseils de sélection d\'outils (EVA Chat vs Copilot 365), des stratégies de test avec des documents échantillons, et des modèles de documentation pour des invites réutilisables. Idéal pour les requêtes simples, l\'analyse de documents, la génération de contenu et l\'assistance à la recherche.'
  },
  {
    category: 'services',
    keywords: ['tier 2', 'low-code', 'workflows', 'power automate', 'automation', 'level 2'],
    en: 'Tier 2: Low-Code Workflows is for use cases requiring light automation, orchestration, or integration between multiple tools. You get all Tier 1 services plus: workflow design, Power Automate flow development, pre-processing and post-processing scripts, and integration with existing systems. Best for multi-step processes, batch operations, data transformation, and simple automation.',
    fr: 'Niveau 2 : Flux de travail low-code est pour les cas d\'utilisation nécessitant une automatisation légère, une orchestration ou une intégration entre plusieurs outils. Vous obtenez tous les services du niveau 1 plus : conception de flux de travail, développement de flux Power Automate, scripts de pré-traitement et post-traitement, et intégration avec les systèmes existants. Idéal pour les processus en plusieurs étapes, les opérations par lots, la transformation de données et l\'automatisation simple.'
  },
  {
    category: 'services',
    keywords: ['tier 3', 'complex', 'custom', 'microservice', 'advanced', 'enterprise', 'level 3'],
    en: 'Tier 3: Complex Solutions is for sophisticated use cases requiring custom development, complex integrations, or advanced AI capabilities. You get all Tier 2 services plus: custom development, microservice architecture and design, API development and integration, advanced AI model integration, and formal intake preparation support. Best for enterprise-scale automation, complex data processing, custom AI models, and system integration.',
    fr: 'Niveau 3 : Solutions complexes est pour les cas d\'utilisation sophistiqués nécessitant un développement personnalisé, des intégrations complexes ou des capacités d\'IA avancées. Vous obtenez tous les services du niveau 2 plus : développement personnalisé, architecture et conception de microservices, développement et intégration d\'API, intégration de modèles d\'IA avancés, et support de préparation d\'admission formelle. Idéal pour l\'automatisation à l\'échelle de l\'entreprise, le traitement de données complexes, les modèles d\'IA personnalisés et l\'intégration de systèmes.'
  },
  {
    category: 'tools',
    keywords: ['eva chat', 'eva', 'what is eva', 'eva capabilities', 'conversational ai'],
    en: 'EVA Chat is an ESDC-approved conversational AI assistant used for document analysis, content generation, research tasks, and general AI-powered assistance. It excels at processing text, answering questions based on uploaded documents, generating content, and providing intelligent responses. However, it has context window limitations and upload constraints that we help you navigate through pre-processing strategies.',
    fr: 'EVA Chat est un assistant d\'IA conversationnelle approuvé par EDSC utilisé pour l\'analyse de documents, la génération de contenu, les tâches de recherche et l\'assistance générale alimentée par l\'IA. Il excelle dans le traitement de texte, la réponse à des questions basées sur des documents téléchargés, la génération de contenu et la fourniture de réponses intelligentes. Cependant, il a des limitations de fenêtre de contexte et des contraintes de téléchargement que nous vous aidons à contourner grâce à des stratégies de pré-traitement.'
  },
  {
    category: 'tools',
    keywords: ['copilot', 'microsoft copilot', 'copilot 365', 'm365', 'microsoft', 'office'],
    en: 'Microsoft Copilot 365 provides AI capabilities integrated directly into Microsoft 365 applications like Word, Excel, PowerPoint, Teams, and Outlook. It\'s best for tasks that stay within the M365 ecosystem, such as document drafting, data analysis in Excel, presentation creation, meeting summaries, and email assistance. Copilot has larger context windows than EVA and can access your organizational data with appropriate permissions.',
    fr: 'Microsoft Copilot 365 fournit des capacités d\'IA intégrées directement dans les applications Microsoft 365 comme Word, Excel, PowerPoint, Teams et Outlook. Il est idéal pour les tâches qui restent dans l\'écosystème M365, telles que la rédaction de documents, l\'analyse de données dans Excel, la création de présentations, les résumés de réunions et l\'assistance par courriel. Copilot a des fenêtres de contexte plus grandes qu\'EVA et peut accéder aux données de votre organisation avec les autorisations appropriées.'
  },
  {
    category: 'tools',
    keywords: ['which tool', 'tool comparison', 'eva vs copilot', 'choose tool', 'tool selection'],
    en: 'Choose EVA Chat for: conversational interactions, external document processing, content generation outside M365, and general research assistance. Choose Copilot 365 for: tasks within Microsoft apps, organizational data access, integrated M365 workflows, and when you need larger context windows. Choose custom solutions (Tier 3) for: complex multi-system integrations, advanced AI models, batch processing at scale, or specialized workflows beyond what enterprise tools offer.',
    fr: 'Choisissez EVA Chat pour : les interactions conversationnelles, le traitement de documents externes, la génération de contenu en dehors de M365, et l\'assistance générale à la recherche. Choisissez Copilot 365 pour : les tâches dans les applications Microsoft, l\'accès aux données organisationnelles, les flux de travail M365 intégrés, et lorsque vous avez besoin de fenêtres de contexte plus grandes. Choisissez des solutions personnalisées (Niveau 3) pour : les intégrations multi-systèmes complexes, les modèles d\'IA avancés, le traitement par lots à grande échelle, ou les flux de travail spécialisés au-delà de ce qu\'offrent les outils d\'entreprise.'
  },
  {
    category: 'tools',
    keywords: ['power automate', 'workflow automation', 'flow', 'orchestration', 'low-code platform'],
    en: 'Power Automate is Microsoft\'s low-code workflow automation platform. We use it extensively in Tier 2 solutions to orchestrate multi-step AI workflows, integrate between different systems, trigger automated processes, and handle pre/post-processing tasks. It connects EVA Chat, Copilot, SharePoint, Teams, and other enterprise systems without requiring extensive coding.',
    fr: 'Power Automate est la plateforme d\'automatisation de flux de travail low-code de Microsoft. Nous l\'utilisons largement dans les solutions de niveau 2 pour orchestrer des flux de travail d\'IA en plusieurs étapes, intégrer entre différents systèmes, déclencher des processus automatisés et gérer les tâches de pré/post-traitement. Il connecte EVA Chat, Copilot, SharePoint, Teams et d\'autres systèmes d\'entreprise sans nécessiter de codage extensif.'
  },
  {
    category: 'intake',
    keywords: ['intake', 'intake optimization', 'early advisory', 'before intake', 'submission'],
    en: 'Intake Optimization helps you improve the quality and clarity of AI project submissions before they reach formal intake. Through early advisory, we help you: clarify scope and objectives, select the right tools, assess technical complexity, quantify ROI and business value, and submit complete, well-formed proposals. This increases approval rates, reduces rework, and accelerates the path from idea to implementation.',
    fr: 'L\'optimisation de l\'admission vous aide à améliorer la qualité et la clarté des soumissions de projet d\'IA avant qu\'elles n\'atteignent l\'admission formelle. Grâce à des conseils précoces, nous vous aidons à : clarifier la portée et les objectifs, sélectionner les bons outils, évaluer la complexité technique, quantifier le retour sur investissement et la valeur commerciale, et soumettre des propositions complètes et bien formées. Cela augmente les taux d\'approbation, réduit le retravail et accélère le chemin de l\'idée à la mise en œuvre.'
  },
  {
    category: 'intake',
    keywords: ['when to engage', 'should i contact', 'who should use', 'eligibility', 'who can use'],
    en: 'Engage with us if you: (1) Are exploring AI but unsure which tools or approach to use, (2) Have a use case but need help scoping complexity and requirements, (3) Want to test feasibility with real documents before committing resources, (4) Need guidance on prompt engineering or workflow design, (5) Want to maximize the impact of enterprise tools before considering custom development. The program is available to all ESDC employees and program areas.',
    fr: 'Engagez-vous avec nous si vous : (1) Explorez l\'IA mais ne savez pas quels outils ou approche utiliser, (2) Avez un cas d\'utilisation mais avez besoin d\'aide pour définir la complexité et les exigences, (3) Souhaitez tester la faisabilité avec de vrais documents avant d\'engager des ressources, (4) Avez besoin de conseils sur l\'ingénierie d\'invite ou la conception de flux de travail, (5) Souhaitez maximiser l\'impact des outils d\'entreprise avant d\'envisager un développement personnalisé. Le programme est disponible pour tous les employés et domaines de programme d\'EDSC.'
  },
  {
    category: 'intake',
    keywords: ['benefits intake', 'why optimize intake', 'intake advantages', 'early advisory benefits'],
    en: 'Early advisory provides: (1) Clearer scope and objectives articulated with precision, (2) Better tool selection between enterprise tools and custom development, (3) Improved complexity assessment of technical requirements and dependencies, (4) Stronger ROI justification with quantified time savings and efficiency gains, (5) Reduced rework by submitting complete proposals that avoid clarification rounds. Teams that engage early have higher approval rates and faster implementation.',
    fr: 'Les conseils précoces fournissent : (1) Une portée et des objectifs plus clairs articulés avec précision, (2) Une meilleure sélection d\'outils entre les outils d\'entreprise et le développement personnalisé, (3) Une évaluation améliorée de la complexité des exigences techniques et des dépendances, (4) Une justification du retour sur investissement plus solide avec des économies de temps et des gains d\'efficacité quantifiés, (5) Une réduction du retravail en soumettant des propositions complètes qui évitent les tours de clarification. Les équipes qui s\'engagent tôt ont des taux d\'approbation plus élevés et une mise en œuvre plus rapide.'
  },
  {
    category: 'usecase',
    keywords: ['scorm', 'storyboard', 'use case', 'example', 'case study', 'real example'],
    en: 'The SCORM to Storyboard use case demonstrates how we solve real problems. The Learning & Development team needed to convert multi-file JSON SCORM courses into storyboard documents, but EVA Chat\'s context limits made this challenging. We evaluated four solution options: (1) Pre-processing script + Power Automate (quick win), (2) Manual summaries (workaround), (3) Microservice transformer (future-proof), (4) Copilot Agent + Power Automate (hybrid). Each option has different trade-offs in speed, cost, and scalability.',
    fr: 'Le cas d\'utilisation SCORM vers Storyboard démontre comment nous résolvons de vrais problèmes. L\'équipe Apprentissage et Développement devait convertir des cours SCORM JSON multi-fichiers en documents de storyboard, mais les limites de contexte d\'EVA Chat rendaient cela difficile. Nous avons évalué quatre options de solution : (1) Script de pré-traitement + Power Automate (victoire rapide), (2) Résumés manuels (solution de contournement), (3) Transformateur de microservices (pérenne), (4) Agent Copilot + Power Automate (hybride). Chaque option présente des compromis différents en termes de vitesse, de coût et d\'évolutivité.'
  },
  {
    category: 'usecase',
    keywords: ['option 1', 'pre-processing', 'quick win', 'python script', 'extractor'],
    en: 'Option 1 (Pre-Processing Extractor + Power Automate) is our recommended quick win approach. Develop a Python script to extract and merge JSON content into a single consolidated file that fits within EVA\'s context window, then use Power Automate to orchestrate the workflow. Pros: Fast implementation (2-4 weeks), leverages existing enterprise tools, low cost, preserves relationships. Cons: Limited scalability for very large courses, requires manual trigger, dependent on EVA context limits.',
    fr: 'L\'option 1 (Extracteur de pré-traitement + Power Automate) est notre approche de victoire rapide recommandée. Développez un script Python pour extraire et fusionner le contenu JSON dans un seul fichier consolidé qui s\'adapte à la fenêtre de contexte d\'EVA, puis utilisez Power Automate pour orchestrer le flux de travail. Avantages : Mise en œuvre rapide (2-4 semaines), exploite les outils d\'entreprise existants, faible coût, préserve les relations. Inconvénients : Évolutivité limitée pour les très grands cours, nécessite un déclencheur manuel, dépend des limites de contexte d\'EVA.'
  },
  {
    category: 'usecase',
    keywords: ['option 3', 'microservice', 'api', 'scalable', 'future proof', 'enterprise'],
    en: 'Option 3 (Microservice Transformer) is the long-term enterprise solution. Build a dedicated microservice that parses SCORM packages, resolves references, and transforms content optimized for AI processing. Expose via API for integration with multiple tools. Pros: Highly scalable and reusable, handles complex large courses, enables future tool integration, centralized maintainable logic. Cons: Longer development time (2-3 months), higher cost, requires formal intake, infrastructure overhead.',
    fr: 'L\'option 3 (Transformateur de microservices) est la solution d\'entreprise à long terme. Construisez un microservice dédié qui analyse les packages SCORM, résout les références et transforme le contenu optimisé pour le traitement de l\'IA. Exposez via API pour l\'intégration avec plusieurs outils. Avantages : Hautement évolutif et réutilisable, gère les cours complexes et volumineux, permet l\'intégration d\'outils futurs, logique centralisée maintenable. Inconvénients : Temps de développement plus long (2-3 mois), coût plus élevé, nécessite une admission formelle, surcharge d\'infrastructure.'
  },
  {
    category: 'roadmap',
    keywords: ['roadmap', 'timeline', 'phases', 'implementation', 'rollout', 'schedule', 'when'],
    en: 'Our implementation follows three phases: Phase 1 (Month 1) - Setup: Define service tiers, create templates, establish processes, identify pilots. Phase 2 (Months 2-3) - Pilot: Engage 3-5 pilot teams, deliver Tier 1-2 services, test the workflow model, collect feedback, refine approach. Phase 3 (Month 4+) - Rollout: Open intake to all ESDC, deliver all three tiers, build reusable workflow library, integrate with AI governance, continuous improvement.',
    fr: 'Notre mise en œuvre suit trois phases : Phase 1 (Mois 1) - Configuration : Définir les niveaux de service, créer des modèles, établir des processus, identifier les pilotes. Phase 2 (Mois 2-3) - Pilote : Engager 3-5 équipes pilotes, fournir des services de niveau 1-2, tester le modèle de flux de travail, recueillir des commentaires, affiner l\'approche. Phase 3 (Mois 4+) - Déploiement : Ouvrir l\'admission à tous d\'EDSC, fournir les trois niveaux, créer une bibliothèque de flux de travail réutilisables, intégrer avec la gouvernance de l\'IA, amélioration continue.'
  },
  {
    category: 'roadmap',
    keywords: ['outcomes', 'results', 'expected benefits', 'impact', 'success', 'metrics'],
    en: 'Expected outcomes include: (1) Improved AI literacy through hands-on experience, (2) Higher quality intakes with clearer scope, (3) Faster time-to-value by solving simple cases immediately, (4) Better tool utilization of Copilot and EVA, (5) Reduced rework through clear complexity assessment, (6) Scalable automation via reusable workflows, (7) Responsible AI adoption aligned with governance, (8) Measurable efficiency gains documented through pilots.',
    fr: 'Les résultats attendus incluent : (1) Amélioration de la littératie en IA grâce à l\'expérience pratique, (2) Admissions de meilleure qualité avec une portée plus claire, (3) Délai de rentabilisation plus rapide en résolvant immédiatement les cas simples, (4) Meilleure utilisation des outils Copilot et EVA, (5) Réduction du retravail grâce à une évaluation claire de la complexité, (6) Automatisation évolutive via des flux de travail réutilisables, (7) Adoption responsable de l\'IA alignée sur la gouvernance, (8) Gains d\'efficacité mesurables documentés à travers les pilotes.'
  },
  {
    category: 'general',
    keywords: ['start', 'begin', 'get started', 'how to start', 'first step', 'contact'],
    en: 'To get started: (1) Visit the Contact page to reach our team, (2) Prepare a brief description of your use case, (3) Gather sample documents you want to work with, (4) Note your desired outcomes and timeline. We recommend first reviewing the Program Overview to understand our offerings, then How It Works to see our process. After initial consultation, we\'ll assess your use case and recommend the appropriate service tier.',
    fr: 'Pour commencer : (1) Visitez la page Contact pour contacter notre équipe, (2) Préparez une brève description de votre cas d\'utilisation, (3) Rassemblez des documents échantillons avec lesquels vous souhaitez travailler, (4) Notez vos résultats souhaités et votre calendrier. Nous recommandons d\'abord de consulter l\'Aperçu du programme pour comprendre nos offres, puis Comment ça fonctionne pour voir notre processus. Après la consultation initiale, nous évaluerons votre cas d\'utilisation et recommanderons le niveau de service approprié.'
  },
  {
    category: 'general',
    keywords: ['prepare', 'what to bring', 'consultation', 'initial meeting', 'requirements'],
    en: 'For your initial consultation, prepare: (1) Brief description of your use case or problem statement, (2) Sample documents or data (if applicable), (3) Current process or workflow description, (4) Desired outcomes and success criteria, (5) Any previous AI experimentation or results, (6) Timeline and resource constraints. Having these ready helps us provide more targeted guidance and recommendations during our first meeting.',
    fr: 'Pour votre consultation initiale, préparez : (1) Brève description de votre cas d\'utilisation ou énoncé du problème, (2) Documents échantillons ou données (le cas échéant), (3) Description du processus ou flux de travail actuel, (4) Résultats souhaités et critères de succès, (5) Toute expérimentation ou résultats d\'IA antérieurs, (6) Contraintes de calendrier et de ressources. Avoir ces éléments prêts nous aide à fournir des conseils et des recommandations plus ciblés lors de notre première réunion.'
  },
  {
    category: 'general',
    keywords: ['prompt engineering', 'prompts', 'writing prompts', 'effective prompts', 'how to prompt'],
    en: 'Effective prompt engineering is crucial for AI success. Key principles: (1) Be specific about desired outputs and format, (2) Provide relevant context and examples, (3) Break complex tasks into steps, (4) Test and iterate with real data, (5) Document what works for reuse. We provide hands-on guidance in all service tiers, helping you develop prompts that consistently deliver quality results with your actual documents.',
    fr: 'Une ingénierie d\'invite efficace est cruciale pour le succès de l\'IA. Principes clés : (1) Soyez précis sur les sorties et le format souhaités, (2) Fournissez un contexte et des exemples pertinents, (3) Divisez les tâches complexes en étapes, (4) Testez et itérez avec des données réelles, (5) Documentez ce qui fonctionne pour la réutilisation. Nous fournissons des conseils pratiques dans tous les niveaux de service, vous aidant à développer des invites qui fournissent systématiquement des résultats de qualité avec vos documents réels.'
  },
  {
    category: 'general',
    keywords: ['context window', 'context limits', 'token limit', 'size limit', 'upload limit'],
    en: 'Context window limitations refer to the maximum amount of text an AI tool can process at once. EVA Chat has smaller context limits that can be challenging for large documents or multi-file processing. We help you work around these through: pre-processing to consolidate content, chunking strategies to break large documents into manageable pieces, or selecting tools like Copilot 365 with larger context windows. Tier 2 solutions often include automated pre-processing.',
    fr: 'Les limitations de fenêtre de contexte se réfèrent à la quantité maximale de texte qu\'un outil d\'IA peut traiter à la fois. EVA Chat a des limites de contexte plus petites qui peuvent être difficiles pour les grands documents ou le traitement multi-fichiers. Nous vous aidons à contourner ces problèmes grâce à : le pré-traitement pour consolider le contenu, les stratégies de découpage pour diviser les grands documents en morceaux gérables, ou la sélection d\'outils comme Copilot 365 avec des fenêtres de contexte plus grandes. Les solutions de niveau 2 incluent souvent un pré-traitement automatisé.'
  },
  {
    category: 'general',
    keywords: ['who is this for', 'target audience', 'employees', 'managers', 'teams'],
    en: 'This program serves: (1) ESDC employees exploring AI tools and use cases, (2) Program areas considering AI project submissions, (3) Teams currently using Copilot 365 or EVA Chat who want to maximize impact, (4) Managers and leaders seeking to understand AI opportunities and complexity, (5) Anyone who wants hands-on guidance with their actual documents and workflows. All ESDC employees are welcome regardless of technical expertise.',
    fr: 'Ce programme sert : (1) Les employés d\'EDSC explorant les outils et les cas d\'utilisation de l\'IA, (2) Les domaines de programme envisageant des soumissions de projet d\'IA, (3) Les équipes utilisant actuellement Copilot 365 ou EVA Chat qui souhaitent maximiser l\'impact, (4) Les gestionnaires et les dirigeants cherchant à comprendre les opportunités et la complexité de l\'IA, (5) Toute personne souhaitant des conseils pratiques avec ses documents et flux de travail réels. Tous les employés d\'EDSC sont les bienvenus, quelle que soit leur expertise technique.'
  },
  {
    category: 'general',
    keywords: ['cost', 'price', 'free', 'budget', 'resources', 'investment'],
    en: 'The AI Centre of Enablement program provides advisory and enablement services to ESDC employees. For Tier 1 and Tier 2 services, we focus on leveraging existing enterprise tools and low-code platforms that are already available. Tier 3 custom development projects require formal intake and resource allocation through standard channels. Contact us to discuss your specific use case and we\'ll clarify any resource implications.',
    fr: 'Le programme du Centre d\'habilitation en IA fournit des services de conseil et d\'habilitation aux employés d\'EDSC. Pour les services de niveau 1 et de niveau 2, nous nous concentrons sur l\'exploitation des outils d\'entreprise existants et des plateformes low-code qui sont déjà disponibles. Les projets de développement personnalisé de niveau 3 nécessitent une admission formelle et une allocation de ressources par les canaux standard. Contactez-nous pour discuter de votre cas d\'utilisation spécifique et nous clarifierons toute implication en matière de ressources.'
  },
  {
    category: 'general',
    keywords: ['documentation', 'templates', 'guides', 'resources', 'materials', 'library'],
    en: 'We provide comprehensive documentation and templates including: prompt engineering best practices, workflow design templates, testing strategy guides, documentation standards, and lessons learned from previous use cases. As the program grows, we\'re building a reusable workflow library and knowledge base that all ESDC employees can access. All materials are bilingual and follow Government of Canada accessibility standards.',
    fr: 'Nous fournissons une documentation et des modèles complets comprenant : les meilleures pratiques d\'ingénierie d\'invite, les modèles de conception de flux de travail, les guides de stratégie de test, les normes de documentation et les leçons apprises des cas d\'utilisation précédents. Au fur et à mesure que le programme se développe, nous construisons une bibliothèque de flux de travail réutilisables et une base de connaissances accessibles à tous les employés d\'EDSC. Tous les matériaux sont bilingues et suivent les normes d\'accessibilité du gouvernement du Canada.'
  },
  {
    category: 'general',
    keywords: ['success', 'effective', 'best practices', 'tips', 'recommendations', 'advice'],
    en: 'Keys to AI success: (1) Start with a clearly defined problem and success criteria, (2) Test with real documents early and often, (3) Iterate based on actual results, not assumptions, (4) Document what works for future reuse, (5) Choose the simplest solution that meets your needs, (6) Engage with our program early to avoid costly pivots. Teams that follow our 7-step workflow model and start with Tier 1 before escalating typically achieve faster time-to-value.',
    fr: 'Clés du succès de l\'IA : (1) Commencez par un problème clairement défini et des critères de succès, (2) Testez avec de vrais documents tôt et souvent, (3) Itérez en fonction des résultats réels, pas des hypothèses, (4) Documentez ce qui fonctionne pour une réutilisation future, (5) Choisissez la solution la plus simple qui répond à vos besoins, (6) Engagez-vous avec notre programme tôt pour éviter des pivots coûteux. Les équipes qui suivent notre modèle de flux de travail en 7 étapes et commencent par le niveau 1 avant d\'escalader obtiennent généralement un délai de rentabilisation plus rapide.'
  }
]

export function findBestMatch(query: string, language: Language, currentPath: string): string | null {
  const lowerQuery = query.toLowerCase()
  const words = lowerQuery.split(/\s+/)
  
  let bestMatch: KnowledgeItem | null = null
  let bestScore = 0
  
  for (const item of knowledgeBase) {
    let score = 0
    
    for (const keyword of item.keywords) {
      const keywordLower = keyword.toLowerCase()
      
      if (lowerQuery.includes(keywordLower)) {
        score += keywordLower.length
      }
      
      for (const word of words) {
        if (keywordLower.includes(word) && word.length > 2) {
          score += word.length * 0.5
        }
      }
    }
    
    const pathCategory = getPathCategory(currentPath)
    if (pathCategory && item.category === pathCategory) {
      score *= 1.3
    }
    
    if (score > bestScore) {
      bestScore = score
      bestMatch = item
    }
  }
  
  if (bestMatch && bestScore > 2) {
    return language === 'en' ? bestMatch.en : bestMatch.fr
  }
  
  return null
}

function getPathCategory(path: string): KnowledgeItem['category'] | null {
  if (path === '/' || path.includes('home')) return 'general'
  if (path.includes('program')) return 'program'
  if (path.includes('how-it-works')) return 'workflow'
  if (path.includes('services')) return 'services'
  if (path.includes('intake')) return 'intake'
  if (path.includes('use-case')) return 'usecase'
  if (path.includes('roadmap')) return 'roadmap'
  return 'general'
}

export function getCategoryKnowledge(category: KnowledgeItem['category'], language: Language): string[] {
  return knowledgeBase
    .filter(item => item.category === category)
    .map(item => language === 'en' ? item.en : item.fr)
    .slice(0, 3)
}
