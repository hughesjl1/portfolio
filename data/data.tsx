export interface IProjectSpec {
    title : string
    description : string
    image : string,
    url : string
    responsibilites : string
    valueAdd : string
    skills : string[]
    type : 'commercial' | 'dev'
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
        type : 'commercial'

    },
    {
        title : "AlgoFactory Website",
        description : "Internal website used by team to inspect evaluate AI models",
        image : '/factory.png',
        url : 'Interal',
        responsibilites : 'Build website React / Typescript / GraphQl. Build graphql api in Scala',
        valueAdd : "Website improved search and in depth evaluattion of algorithms performance",
        skills : ['React', 'Typescript'],
        type : 'commercial'
    }

]

export default projects