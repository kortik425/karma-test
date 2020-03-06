import config from '../../config';
import {Location, ActionType, Dispatch, GetState, State, Error} from '../../types'
import { getDistance } from 'geolib';

//Initial State
export const initialState = <State> {
    actionState: 'INIT',
    locationsList: [],
    error: null
}

//Types
const FETCH_LOCATION_SUCCESS = "location/FETCH_LOCATION_SUCC";
const FETCH_LOCATION_LOADING = "location/FETCH_LOCATION_LOAD";
const FETCH_LOCATION_FAILED = "location/FETCH_LOCATION_FAIL";

const UPDATE_FOLLOWED_LOCATION = "location/UPDATE_FOLLOWED_LOCATION";

//Actions
const fetchLocationsSuccess = (locations: Array<Location>): ActionType => ({
    type: FETCH_LOCATION_SUCCESS,
    payload: locations
});

const fetchlocationLoading = (): ActionType => ({
    type: FETCH_LOCATION_LOADING
})

const fetchLocationsError = (error: Error) => ({
    type: FETCH_LOCATION_FAILED,
    error
})

export const updateFollowedLocation = (locationIndex: number | string) => (dispatch: Dispatch, getState: GetState ) => {
    const location = getState().locationsList[locationIndex];
    dispatch({
        type: UPDATE_FOLLOWED_LOCATION,
        payload: {
            ...location,
            following: !location.following
        },
    })
}

export const fetchLocations = () => (dispatch: Dispatch) => {
    dispatch(fetchlocationLoading());
    fetch(`${config.ENDPOINT_API_ROOT}/engineering-4b0b7d62/locations_filtered.json`)
    .then(res => {
        if(res.ok){
            return res.json()
        } else{
            throw({
                status: res.status, 
                msg: res.text(),
            });
        }
    })
    .then(res => {
        const locations = res.map((loc: Location) => ({
            ...loc,
            distance: getDistance(
            { latitude: 59.330596, longitude: 18.0560967 },
            { latitude: loc.latitude, longitude: loc.longitude }
        ),
        }))
        dispatch(fetchLocationsSuccess(locations));
    })
    .catch(error => {
        dispatch(fetchLocationsError(error));
    })
}

//Reducers
export default (state = initialState, action:ActionType): State => {
    switch(action.type) {
        case FETCH_LOCATION_LOADING: 
            return {
                ...state,
                actionState: 'LOADING',
            }
        case FETCH_LOCATION_SUCCESS:
            return {
                ...state,
                actionState: 'SUCCESS',
                locationsList: action.payload
            }
        case FETCH_LOCATION_FAILED:
            return {
                ...state,
                actionState: 'ERROR',
                error: action.error
            }
        case UPDATE_FOLLOWED_LOCATION: 
            const locationsList = state.locationsList.map((loc) => {
                if(loc.id === action.payload.id){
                    return action.payload
                } 
                return loc;
            })
            return {
                ...state,
                locationsList
            }
        default: 
            return state;
    }
}


//Selectors
export const getLocations = ({ locationsList }: State) => locationsList;
export const getActionState = ({ actionState }: State) => actionState;
export const getError = ({ error }: State) => error;
