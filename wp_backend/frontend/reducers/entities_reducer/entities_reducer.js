import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import promptsReducer from "./prompts_reducer";
import responsesReducer from "./responses_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    prompts: promptsReducer,
    response: responsesReducer
});

export default entitiesReducer;