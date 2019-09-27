export function setPage(page) {
  return {
    type: '@navigation/SET_PAGE',
    page,
  };
}

export function sagaExampleFunctionRequest(param) {
  return {
    type: '@example/SAGA_EXAMPLE_REQUEST',
    payload: param,
  };
}

export function sagaExampleFunctionSuccess(param) {
  return {
    type: '@example/SAGA_EXAMPLE_SUCCESS',
    payload: param,
  };
}

export function sagaExampleFunctionFailure() {
  return {
    type: '@example/SAGA_EXAMPLE_FAILURE',
  };
}
