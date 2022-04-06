export interface IProjectSpec {
    title : string
    description : string
    image : string,
    url : string
    responsibilites : string
    valueAdd : string
    skills : string[]
    type : 'commercial' | 'dev',
    github? : string | null,
    
}

export const projects : IProjectSpec[] = [
    {
        title : "Analytics Website",
        description : "Primary website used by clients at AlgoDynamix to view and research financial market forecasts.",
        image : '/analytics.png',
        url : "analytics.algodynamix.com (restricted to clients)",
        responsibilites : "Build website from scratch React/Typescript",
        valueAdd : "Improved UI to deliver key / critical information for investors to make informed judgments",
        skills : ['React', 'Typescript'],
        type : 'commercial',
        github : null
    },
    {
        title : "AlgoFactory Website",
        description : "Internal website used by team to inspect evaluate AI models",
        image : '/factory.png',
        url : 'Interal',
        responsibilites : 'Build website React / Typescript / GraphQl. Build graphql api in Scala',
        valueAdd : "Website improved search and in depth evaluattion of algorithms performance",
        skills : ['React', 'Typescript'],
        type : 'commercial',
        github : null
    },
    {
        title : "Algorithmss R&D",
        description : "Researched and implemented a dynamic algorithm for portfolio out performance.",
        image : "/factory.png",
        url : 'Internal',
        responsibilites : 'Researched range of options using Python, Pandas, Jupyter Notebooks and various AI/ML libraries',
        valueAdd : 'improve basline performance by 3-7x',
        skills : ['Python', 'Pandas', 'Tensorflow', 'Numpy', 'Jupyter'],
        type : 'commercial',
        github : null
    },
    {
        title : "MicroService R&D Deployment",
        description : "A containerised architecture to enable fast delivery of AI models",
        image : "/factory.png",
        url : 'Internal',
        responsibilites : 'Designed, developed and deployed the containerised micro service arcchitexture',
        valueAdd : 'Enabled quick delivery of models from research to client ready API\'s',
        skills : ['Python', 'FastApi', 'Docker', 'Numpy', 'Jupyter'],
        type : 'commercial',
        github : null
    },
    {
        title : "Financial Services, a serverless approach",
        description : "Utilise a serverless approach for API driven data sources for financial applications.",
        image : '/factory.png',
        url : '',
        responsibilites : 'Designed, developed and deployed.',
        valueAdd : 'Enable financial applications to be fast and agile to changing datasources and user requirements.',
        skills : ['AWS CDK', 'Python', 'Docker'],
        type : 'dev',
        github : 'https://github.com/hughesjl1/Finance_Serverless'
    },
    {
        title : "Web3 Marketplace CryptoCorgis",
        description : "If it's good enough for the Queen it's good enough for you, a place to buy your favourite digital corgis.",
        image : '/cryptocorgi.png',
        url : '',
        responsibilites : 'Designed, developed and deployed.',
        valueAdd : 'Marketplace for favourite digital corgis.',
        skills : ['React', 'Solidity'],
        type : 'dev',
        github : 'https://github.com/hughesjl1/CorgiNft'
    },
    {
        title : "Web3 Domain Service for .corgi Buildspace",
        description : "Buildspace project. A decentralized marketplace for .corgi domains.",
        image : '/corgi_portfolio.png',
        url : '',
        responsibilites : 'Designed, developed and deployed.',
        valueAdd : 'Marketplace for .corgi domains.',
        skills : ['React', 'Solidity'],
        type : 'dev',
        github : 'github.com:hughesjl1/ens_domains_buildspace.git'
    },



]

export default projects