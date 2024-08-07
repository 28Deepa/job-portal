interface Action {
  type: string;
  payload: any;
}

export function createReducer(initialState: any, fnMap: any) {
  return (state = initialState, { type, payload }: Action) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
}
