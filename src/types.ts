export interface Location {
    id: string,
    distance: number,
    name: string,
    following?: false,
    description?: string,
    phone?: string,
    website?: string, 
    latitude?: string,
    longitude?: string
  }

export type ActionType = {
    type: string,
    payload?: any,
    error?: Error,
}

export interface State {
    actionState: 'INIT'|'LOADING'|'ERROR'|'SUCCESS',
    locationsList: Location[],
    error: Error
}

export type Error = {
  status: string | number,
  msg: string
}

export type Dispatch = (action: ActionType) => void
export type GetState = () => State