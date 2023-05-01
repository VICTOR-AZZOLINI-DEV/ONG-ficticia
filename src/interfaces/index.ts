export interface Props {
  data: []
}
  
export interface Programs {
  id: number,
  name: string,
  description: string,
  image: string,
  objectives: string,
  goals: string,
  impact: string
}

export interface Paths {
  params: Params,
}

export interface Params {
  id: string
}