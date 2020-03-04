import axios from "axios";
import { GET_EVENTS } from "./types";

export function addEvent(eventData) {
  return dispatch => {
    return axios.post("/api/events", eventData);
  };
}

// export function getEvents() {
//   // return dispatch => {
//   //   return axios.get("/api/events");
//   // };
//   const request = axios.get("/api/events").then(response => response.data);
//   return {
//     type: GET_EVENTS,
//     payload: request
//   };
// }
// export const getEvents = () => async dispatch => {
//   const request = await axios.get("/api/events");
//   dispatch({ type: GET_EVENTS, payload: request.data });
// };
